import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "border",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: ["Info", "Mobile", "Plugin"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-dark-h: 232;
  --accent-dark-l: 60%;
  --accent-dark-s: 40%;
  --accent-h: var(--accent-dark-h, 232);
  --accent-l: var(--accent-dark-l, 60%);
  --accent-s: var(--accent-dark-s, 40%);
  --anim-duration-fast: calc(150ms/var(--anim-speed));
  --anim-duration-moderate: calc(300ms/var(--anim-speed));
  --anim-duration-slow: calc(600ms/var(--anim-speed));
  --anim-duration-superfast: calc(75ms/var(--anim-speed));
  --anim-in: var(--anim-duration-fast) var(--anim-duration-superfast) var(--anim-motion-swing, 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1));
  --anim-out: var(--anim-duration-moderate) var(--anim-duration-slow) var(--anim-motion-swing, 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1));
  --anim-speed: 1;
  --background-activated-file-dark: var(--nav-item-background-active, hsla(232, 12%, 40%, 0.25));
  --background-activated-tab-header-dark: var(--background-modifier-active-hover, hsla(232,
        40%,
        60%, 0.15));
  --background-activated-tab-header-light: var(--background-primary, hsl(232, 8%, 16.66667%));
  --background-alt-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --background-alt-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --background-mod-left-CSS-backdrop-filter-dark: blur(32px);
  --background-mod-left-CSS-backdrop-filter-light: blur(32px);
  --background-mod-left-CSS-blend-mode-dark: normal;
  --background-mod-left-CSS-blend-mode-light: normal;
  --background-mod-left-CSS-dark: rgba(0, 0, 0, 0.5);
  --background-mod-left-CSS-light: rgba(255, 255, 255, 0.5);
  --background-mod-left-split: var(--background-primary, hsl(232, 8%, 16.66667%));
  --background-mod-left-split-dark: var(--background-primary, hsl(232, 8%, 16.66667%));
  --background-mod-left-split-light: var(--background-primary, hsl(232, 8%, 16.66667%));
  --background-mod-right-CSS-backdrop-filter-dark: blur(32px);
  --background-mod-right-CSS-backdrop-filter-light: blur(32px);
  --background-mod-right-CSS-blend-mode-dark: normal;
  --background-mod-right-CSS-blend-mode-light: normal;
  --background-mod-right-CSS-dark: rgba(0, 0, 0, 0.5);
  --background-mod-right-CSS-light: rgba(255, 255, 255, 0.5);
  --background-mod-right-split: var(--background-primary, hsl(232, 8%, 16.66667%));
  --background-mod-right-split-dark: var(--background-primary, hsl(232, 8%, 16.66667%));
  --background-mod-right-split-light: var(--background-primary, hsl(232, 8%, 16.66667%));
  --background-mod-root-CSS-backdrop-filter-dark: blur(32px);
  --background-mod-root-CSS-backdrop-filter-light: blur(32px);
  --background-mod-root-CSS-blend-mode-dark: normal;
  --background-mod-root-CSS-blend-mode-light: normal;
  --background-mod-root-CSS-dark: rgba(0, 0, 0, 0.5);
  --background-mod-root-CSS-light: rgba(255, 255, 255, 0.5);
  --background-mod-root-split: var(--background-primary, hsl(232, 8%, 16.66667%));
  --background-mod-root-split-dark: var(--background-primary, hsl(232, 8%, 16.66667%));
  --background-mod-root-split-light: var(--background-primary, hsl(232, 8%, 16.66667%));
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)*0.9), 0.2);
  --background-modifier-border-focus: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)*0.9), 0.3);
  --background-modifier-border-hover: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)*0.9), 0.25);
  --background-modifier-border-muted: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)*0.9), 0.1);
  --background-modifier-error: var(--color-red, rgb(255, 120, 129));
  --background-modifier-error-hover: var(--color-red, rgb(255, 120, 129));
  --background-modifier-error-rgb: var(--color-red-rgb, 255, 120, 129);
  --background-modifier-form-field: var(--color-base-25, transparent);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, transparent);
  --background-modifier-hover: hsla(var(--accent-h), 12%, 40%, 0.25);
  --background-modifier-success: var(--color-green, rgb(124, 211, 124));
  --background-modifier-success-rgb: var(--color-green-rgb, 124, 211, 124);
  --background-primary: hsl(var(--accent-h), calc(var(--accent-s)/5), calc(var(--accent-l)*1.25/4.5));
  --background-primary-alt: hsl(var(--accent-h), calc(var(--accent-s)/5), calc(var(--accent-l)*1.25/3.9));
  --background-secondary: hsl(var(--accent-h), calc(var(--accent-s)/5), calc(var(--accent-l)*1.25/4.9));
  --background-secondary-alt: hsl(var(--accent-h),
            calc(var(--accent-s)/5.4),
            calc(var(--accent-l)*1.25/3));
  --background-tertiary: hsl(var(--accent-h),
            calc(var(--accent-s)/5.4),
            calc(var(--accent-l)*1.25/3.6));
  --background-underlying: var(--background-tertiary, hsl(232,
            7.40741%,
            20.83333%));
  --background-underlying-CSS-blend-mode-dark: soft-light, luminosity, hue, luminosity, hard-light;
  --background-underlying-CSS-blend-mode-light: overlay, color-burn;
  --background-underlying-CSS-dark: linear-gradient(317deg, rgb(112, 55, 205) 0%, rgb(29, 12, 32) 19%, rgb(101, 31, 113) 19%, rgb(101, 31, 113) 33%), radial-gradient(100% 100% at 90% 9%, rgb(29, 12, 32) 0%, rgb(29, 12, 32) 100%), linear-gradient(109deg, rgb(104, 178, 248) 0%, rgb(80, 110, 229) 15%, rgb(112, 55, 205) 34%, rgb(104, 178, 248) 54%, rgb(104, 178, 248) 65%), radial-gradient(100% 100% at 20% 45%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), radial-gradient(100% 100% at 90% 27%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), linear-gradient(339deg, rgb(101, 31, 113) 0%, rgb(104, 178, 248) 12%, rgb(101, 31, 113) 14%, rgb(80, 110, 229) 19%, rgb(101, 31, 113) 20%, rgb(29, 12, 32) 30%);
  --background-underlying-CSS-light: radial-gradient(100% 100% at 13% 50%, rgb(90, 109, 237) 0%, rgb(224, 218, 247) 100%), linear-gradient(6deg, rgb(235, 242, 252) 0%, rgb(90, 109, 237) 5%, rgb(166, 126, 241) 7%, rgb(224, 218, 247) 11%, rgb(90, 109, 237) 16%), radial-gradient(100% 100% at 60% 71%, rgb(224, 218, 247) 0%, rgb(219, 244, 255) 100%), linear-gradient(97deg, rgb(90, 109, 237) 0%, rgb(90, 109, 237) 23%, rgb(90, 109, 237) 53%), linear-gradient(351deg, rgb(235, 242, 252) 0%, rgb(219, 244, 255) 1%, rgb(235, 242, 252) 6%, rgb(224, 218, 247) 10%, rgb(166, 126, 241) 13%, rgb(235, 242, 252) 29%), radial-gradient(100% 100% at 10% 32%, rgb(90, 109, 237) 0%, rgb(219, 244, 255) 100%), radial-gradient(100% 100% at 35% 63%, rgb(224, 218, 247) 0%, rgb(224, 218, 247) 100%);
  --background-underlying-dark: var(--background-tertiary, hsl(232,
            7.40741%,
            20.83333%));
  --background-underlying-light: var(--background-tertiary, hsl(232,
            7.40741%,
            20.83333%));
  --bases-cards-background: var(--background-primary, hsl(232, 8%, 16.66667%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(232, 8%, 19.23077%));
  --bases-embed-border-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --bases-group-heading-property-color: var(--text-muted, hsl(232, 12%, 75%));
  --bases-table-border-color: var(--table-border-color, hsla(232, 16%, 54%, 0.2));
  --bases-table-cell-background-active: var(--background-primary, hsl(232, 8%, 16.66667%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(232, 8%, 19.23077%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(232,
        40%,
        60%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(232, 8%, 19.23077%));
  --bases-table-header-background: var(--background-primary, hsl(232, 8%, 16.66667%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla(232, 12%, 40%, 0.25));
  --bases-table-header-color: var(--text-muted, hsl(232, 12%, 75%));
  --bases-table-summary-background: var(--background-primary, hsl(232, 8%, 16.66667%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla(232, 12%, 40%, 0.25));
  --blockquote-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --blockquote-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --blockquote-border-color: var(--interactive-accent, hsl(232, 40%, 60%));
  --blockquote-border-thickness: 3px;
  --blockquote-padding: 8px;
  --bold-color: var(--color-red, rgb(255, 120, 129));
  --bold-weight: var(--font-semibold, 600);
  --border-radius-activated-file-dark: var(--radius-s, 4px);
  --border-radius-activated-tab-header-dark: 6px;
  --border-radius-activated-tab-header-light: 6px;
  --button-radius: var(--input-radius, 6px);
  --callout-bug: var(--color-red-rgb, 255, 120, 129);
  --callout-content-radius: 0px;
  --callout-default: var(--color-blue-rgb, 137, 189, 244);
  --callout-error: var(--color-red-rgb, 255, 120, 129);
  --callout-example: var(--color-purple-rgb, 203, 158, 255);
  --callout-fail: var(--color-red-rgb, 255, 120, 129);
  --callout-important: var(--color-cyan-rgb, 134, 223, 226);
  --callout-info: var(--color-blue-rgb, 137, 189, 244);
  --callout-question: var(--color-orange-rgb, 251, 187, 131);
  --callout-success: var(--color-green-rgb, 124, 211, 124);
  --callout-summary: var(--color-cyan-rgb, 134, 223, 226);
  --callout-tip: var(--color-cyan-rgb, 134, 223, 226);
  --callout-todo: var(--color-blue-rgb, 137, 189, 244);
  --callout-warning: var(--color-orange-rgb, 251, 187, 131);
  --canvas-background: var(--background-primary, transparent);
  --canvas-card-border-style: solid;
  --canvas-card-border-width: 2px;
  --canvas-card-label-color: var(--text-faint, hsl(232, 9%, 50%));
  --canvas-color-1: var(--color-red-rgb, 255, 120, 129);
  --canvas-color-2: var(--color-orange-rgb, 251, 187, 131);
  --canvas-color-3: var(--color-yellow-rgb, 255, 232, 139);
  --canvas-color-4: var(--color-green-rgb, 124, 211, 124);
  --canvas-color-5: var(--color-cyan-rgb, 134, 223, 226);
  --canvas-color-6: var(--color-purple-rgb, 203, 158, 255);
  --card-border-radius-dark: 8px;
  --card-border-radius-light: 8px;
  --card-shadow-border-radius-dark: calc(var(--card-border-radius-dark) - 1px);
  --card-shadow-border-radius-light: calc(var(--card-border-radius-light) - 1px);
  --card-shadow-dark: 0 -1px 0 0 var(--background-modifier-border), 0 0 0 1px var(--background-modifier-border);
  --card-shadow-light: 0 0 0 1px var(--background-modifier-border-muted), 0 0 6px var(--background-modifier-border-muted);
  --caret-color: var(--text-normal, hsl(232, 15%, 85%));
  --checkbox-border-color: var(--text-faint, hsl(232, 9%, 50%));
  --checkbox-border-color-hover: var(--text-faint, hsl(232, 9%, 50%));
  --checkbox-color: var(--color-green, rgb(124, 211, 124));
  --checkbox-color-hover: var(--color-green, rgb(124, 211, 124));
  --checkbox-marker-color: var(--background-primary, hsl(232, 8%, 16.66667%));
  --checkbox-radius: var(--radius-s, 6px);
  --checklist-done-color: var(--text-faint, hsl(232, 9%, 50%));
  --clickable-icon-radius: var(--radius-s, 6px);
  --code-background: var(--code-background-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --code-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --code-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --code-border: var(--code-border-dark, 1px dashed hsla(232, 16%, 54%, 0.2));
  --code-border-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --code-border-dark: 1px dashed var(--background-modifier-border);
  --code-border-light: 1px dashed var(--background-modifier-border);
  --code-bracket-background: var(--background-modifier-hover, hsla(232, 12%, 40%, 0.25));
  --code-comment: var(--text-faint, hsl(232, 9%, 50%));
  --code-function: var(--color-yellow, rgb(255, 232, 139));
  --code-important: var(--color-orange, rgb(251, 187, 131));
  --code-keyword: var(--color-pink, rgb(242, 182, 222));
  --code-normal: var(--text-muted, hsl(232, 12%, 75%));
  --code-operator: var(--color-red, rgb(255, 120, 129));
  --code-property: var(--color-cyan, rgb(134, 223, 226));
  --code-punctuation: var(--text-muted, hsl(232, 12%, 75%));
  --code-string: var(--color-green, rgb(124, 211, 124));
  --code-tag: var(--color-red, rgb(255, 120, 129));
  --code-value: var(--color-purple, rgb(203, 158, 255));
  --collapse-icon-color: var(--text-faint, hsl(232, 9%, 50%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(229, 40.8%, 69%));
  --color-accent: var(--color-accent-dark, hsl(232, 40%, 60%));
  --color-accent-1: var(--color-accent-1-dark, hsl(229, 40.8%, 69%));
  --color-accent-1-dark: hsl(calc(var(--accent-h) - 3), calc(var(--accent-s)*1.02), calc(var(--accent-l)*1.15));
  --color-accent-2: var(--color-accent-2-dark, hsl(227, 42%, 77.4%));
  --color-accent-2-dark: hsl(calc(var(--accent-h) - 5), calc(var(--accent-s)*1.05), calc(var(--accent-l)*1.29));
  --color-accent-3: var(--color-accent-3-dark, hsla(232, 16%, 54%));
  --color-accent-3-dark: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)*0.9));
  --color-accent-dark: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --color-accent-hsl: var(--color-accent-hsl-dark, 232,
        40%,
        60%);
  --color-accent-hsl-dark: var(--accent-h),
        var(--accent-s),
        var(--accent-l);
  --color-activated-file-dark: var(--nav-item-color-active, hsl(232, 15%, 85%));
  --color-activated-tab-header-dark: var(--text-normal, hsl(232, 15%, 85%));
  --color-activated-tab-header-light: var(--text-normal, hsl(232, 15%, 85%));
  --color-base-15: #252525;
  --color-base-35: #3F3F3F;
  --color-base-40: #555;
  --color-base-50: #666;
  --color-base-60: #999;
  --color-base-70: #bababa;
  --color-blue: rgb(var(--color-blue-rgb));
  --color-blue-rgb: 137, 189, 244;
  --color-cyan: rgb(var(--color-cyan-rgb));
  --color-cyan-rgb: 134, 223, 226;
  --color-green: rgb(var(--color-green-rgb));
  --color-green-rgb: 124, 211, 124;
  --color-orange: rgb(var(--color-orange-rgb));
  --color-orange-rgb: 251, 187, 131;
  --color-pink: rgb(var(--color-pink-rgb));
  --color-pink-rgb: 242, 182, 222;
  --color-purple: rgb(var(--color-purple-rgb));
  --color-purple-rgb: 203, 158, 255;
  --color-red: rgb(var(--color-red-rgb));
  --color-red-rgb: 255, 120, 129;
  --color-yellow: rgb(var(--color-yellow-rgb));
  --color-yellow-rgb: 255, 232, 139;
  --cursor: pointer;
  --dark: var(--text-normal, hsl(var(--accent-h), 15%, 85%));
  --darkgray: var(--text-normal, hsl(var(--accent-h), 15%, 85%));
  --divider-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --divider-color-hover: var(--interactive-accent, hsl(232, 40%, 60%));
  --dropdown-background: var(--interactive-normal, hsl(232,
            5.71429%,
            25%));
  --dropdown-background-hover: var(--interactive-hover, hsl(232,
            5.71429%,
            27.77778%));
  --embed-border-radius: 0px;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' fill-opacity='.15' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e");
  --file-header-background: var(--background-primary, hsl(232, 8%, 16.66667%));
  --file-header-background-focused: var(--background-primary, hsl(232, 8%, 16.66667%));
  --flair-background: var(--interactive-normal, hsl(232,
            5.71429%,
            25%));
  --flair-color: var(--text-normal, hsl(232, 15%, 85%));
  --footnote-divider-color: var(--metadata-divider-color, hsla(232, 16%, 54%, 0.2));
  --footnote-id-color: var(--text-muted, hsl(232, 12%, 75%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(232, 9%, 50%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsla(232, 12%, 40%, 0.25));
  --frame-right-space: 110px;
  --graph-node: var(--text-muted, hsl(232, 12%, 75%));
  --graph-node-attachment: var(--color-yellow, rgb(255, 232, 139));
  --graph-node-focused: var(--text-accent, hsl(229, 40.8%, 69%));
  --graph-node-tag: var(--color-green, rgb(124, 211, 124));
  --graph-node-unresolved: var(--text-faint, hsl(232, 9%, 50%));
  --graph-text: var(--text-normal, hsl(232, 15%, 85%));
  --gray: var(--text-muted, hsl(var(--accent-h), 12%, 75%));
  --grid-background-pattern-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --grid-background-pattern-size: 36px;
  --h1-accent-color: var(--color-red, rgb(255, 120, 129));
  --h1-size: 1.5em;
  --h2-accent-color: var(--color-orange, rgb(251, 187, 131));
  --h2-size: 1.425em;
  --h2-weight: 675;
  --h3-accent-color: var(--color-yellow, rgb(255, 232, 139));
  --h3-size: 1.35em;
  --h3-weight: 650;
  --h4-accent-color: var(--color-green, rgb(124, 211, 124));
  --h4-size: 1.275em;
  --h4-weight: 625;
  --h5-accent-color: var(--color-blue, rgb(137, 189, 244));
  --h5-size: 1.2em;
  --h5-weight: 600;
  --h6-accent-color: var(--color-purple, rgb(203, 158, 255));
  --h6-size: 1.125em;
  --h6-weight: 575;
  --heading-formatting: var(--text-faint, hsl(232, 9%, 50%));
  --highlight: var(--background-modifier-hover, hsla(var(--accent-h), 12%, 40%, 0.25));
  --hr-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --icon-color: var(--text-muted, hsl(232, 12%, 75%));
  --icon-color-active: var(--text-accent, hsl(229, 40.8%, 69%));
  --icon-color-focused: var(--text-normal, hsl(232, 15%, 85%));
  --icon-color-hover: var(--text-muted, hsl(232, 12%, 75%));
  --inline-code-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --inline-code-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --inline-code-normal: var(--color-pink, rgb(242, 182, 222));
  --inline-title-size: var(--h1-size, 1.5em);
  --input-date-separator: var(--text-faint, hsl(232, 9%, 50%));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, hsl(232, 9%, 50%));
  --input-radius: var(--input-radius-dark, 6px);
  --input-radius-dark: 6px;
  --input-shadow: var(--input-shadow-dark, 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.24), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16));
  --input-shadow-dark: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.24), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16);
  --input-shadow-hover: var(--input-shadow-hover-dark, 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.24), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16));
  --input-shadow-hover-dark: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.24), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16);
  --interactive-accent: var(--color-accent, hsl(232, 40%, 60%));
  --interactive-accent-hover: var(--color-accent-1, hsl(229, 40.8%, 69%));
  --interactive-accent-hsl: var(--color-accent-hsl, 232,
        40%,
        60%);
  --interactive-hover: hsl(var(--accent-h),
            calc(var(--accent-s)/7),
            calc(var(--accent-l)*1.25/2.7));
  --interactive-normal: hsl(var(--accent-h),
            calc(var(--accent-s)/7),
            calc(var(--accent-l)*1.25/3));
  --italic-color: var(--color-orange, rgb(251, 187, 131));
  --light: var(--background-primary, hsl(var(--accent-h), calc(var(--accent-s)/5), calc(var(--accent-l)*1.25/4.5)));
  --lightgray: var(--background-secondary, hsl(var(--accent-h), calc(var(--accent-s)/5), calc(var(--accent-l)*1.25/4.9)));
  --line-height-customize: var(--line-height-normal, 1.5);
  --line-normal-opacity: 0.5;
  --link-color: var(--text-accent, hsl(229, 40.8%, 69%));
  --link-color-hover: var(--text-accent-hover, hsl(227, 42%, 77.4%));
  --link-external-color: var(--color-blue, rgb(137, 189, 244));
  --link-external-color-hover: var(--color-blue, rgb(137, 189, 244));
  --link-unresolved-color: var(--text-accent, hsl(229, 40.8%, 69%));
  --list-bullet-size-alt: calc(var(--list-bullet-size)/2);
  --list-marker-color: var(--text-faint, hsl(232, 9%, 50%));
  --list-marker-color-collapsed: var(--text-accent, hsl(229, 40.8%, 69%));
  --list-marker-color-hover: var(--text-muted, hsl(232, 12%, 75%));
  --menu-background: var(--background-secondary, hsl(232, 8%, 15.30612%));
  --menu-border-color: var(--background-modifier-border-hover, hsla(232, 16%, 54%, 0.25));
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3));
  --metadata-border-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --metadata-divider-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --metadata-input-background-active: var(--background-modifier-hover, hsla(232, 12%, 40%, 0.25));
  --metadata-input-text-color: var(--text-normal, hsl(232, 15%, 85%));
  --metadata-label-background-active: var(--background-modifier-hover, hsla(232, 12%, 40%, 0.25));
  --metadata-label-text-color: var(--text-muted, hsl(232, 12%, 75%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(232, 12%, 75%));
  --metadata-property-background-active: var(--background-modifier-hover, hsla(232, 12%, 40%, 0.25));
  --mix-blend-mode-on-border-dark: screen;
  --mix-blend-mode-on-border-light: normal;
  --modal-background: var(--background-primary, hsl(232, 8%, 16.66667%));
  --modal-border-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(232, 9%, 50%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(232, 9%, 50%));
  --nav-heading-color: var(--text-normal, hsl(232, 15%, 85%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(232, 9%, 50%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(232, 12%, 75%));
  --nav-heading-color-hover: var(--text-normal, hsl(232, 15%, 85%));
  --nav-item-background-active: var(--background-modifier-hover, hsla(232, 12%, 40%, 0.25));
  --nav-item-background-hover: var(--background-modifier-hover, hsla(232, 12%, 40%, 0.25));
  --nav-item-color: var(--text-muted, hsl(232, 12%, 75%));
  --nav-item-color-active: var(--text-normal, hsl(232, 15%, 85%));
  --nav-item-color-highlighted: var(--text-accent, hsl(229, 40.8%, 69%));
  --nav-item-color-hover: var(--text-normal, hsl(232, 15%, 85%));
  --nav-item-color-selected: var(--text-normal, hsl(232, 15%, 85%));
  --nav-tag-color: var(--text-faint, hsl(232, 9%, 50%));
  --nav-tag-color-active: var(--text-muted, hsl(232, 12%, 75%));
  --nav-tag-color-hover: var(--text-muted, hsl(232, 12%, 75%));
  --new-tab-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22none%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23000%22%20fill-opacity%3D%22.26%22%20d%3D%22M51.894%2060.617c-.291%202.162-2.41%203.85-4.515%203.267-3-.825-6.474-2.112-9.6-2.352l-4.79-.362a3.163%203.163%200%200%201-2.042-.95l-8.254-8.483a3.15%203.15%200%200%201-.616-3.49S27.18%2037.053%2027.37%2036.47c.19-.582.886-5.66%201.298-8.388a3.153%203.153%200%200%201%201.011-1.875l9.765-8.767a3.165%203.165%200%200%201%204.597.394l8.202%2010.4c.464.59.702%201.32.706%202.07.009%201.97.172%206.016%201.263%208.621%201.062%202.535%203.01%205.272%204.03%206.619.39.517.45%201.216.12%201.773a138.06%20138.06%200%200%201-4.15%206.54c-1.386%202.063-2.028%204.613-2.318%206.761Z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%230E0E0E%22%20d%3D%22M51.602%2060.187c-.292%202.171-2.417%203.867-4.528%203.282-3.008-.829-6.491-2.122-9.626-2.362l-4.803-.365a3.168%203.168%200%200%201-2.048-.953l-8.277-8.523a3.168%203.168%200%200%201-.618-3.504S26.82%2036.515%2027.01%2035.93c.19-.585.888-5.686%201.301-8.427a3.17%203.17%200%200%201%201.015-1.883l9.79-8.807a3.17%203.17%200%200%201%204.61.396l8.226%2010.448c.465.59.704%201.326.707%202.078.01%201.98.173%206.043%201.268%208.66%201.064%202.547%203.018%205.296%204.04%206.65a1.6%201.6%200%200%201%20.12%201.78%20137.46%20137.46%200%200%201-4.16%206.57c-1.39%202.072-2.034%204.634-2.325%206.792Z%22%2F%3E%3Cpath%20fill%3D%22url(%23b)%22%20d%3D%22M31.489%2060.433c3.844-7.804%203.736-13.395%202.1-17.384-1.505-3.672-4.304-5.988-6.51-7.425-.047.208-.115.41-.202.605l-5.175%2011.532a3.168%203.168%200%200%200%20.618%203.505l8.277%208.523c.26.267.562.484.892.644Z%22%2F%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M47.075%2063.469c2.11.585%204.235-1.11%204.527-3.282.252-1.869.769-4.041%201.806-5.936-2.38-5.121-5.256-7.777-8.41-8.954-3.339-1.246-6.987-.835-10.684.063.826%203.76.331%208.673-2.82%2015.073.358.174.75.28%201.154.309%200%200%202.275.191%204.98.383%202.705.191%206.73%201.59%209.447%202.344Z%22%2F%3E%3Cpath%20fill%3D%22url(%23d)%22%20d%3D%22M41.95%2044.595c1.038.108%202.056.332%203.047.702%203.154%201.177%206.032%203.833%208.411%208.954.16-.292.333-.578.519-.855a138.877%20138.877%200%200%200%204.16-6.57%201.603%201.603%200%200%200-.12-1.78c-1.022-1.354-2.976-4.103-4.04-6.65-1.095-2.617-1.258-6.68-1.267-8.66a3.377%203.377%200%200%200-.708-2.079L43.727%2017.21a3.198%203.198%200%200%200-.136-.162c.603%201.978.562%203.569.19%205.015-.345%201.341-.975%202.558-1.641%203.843-.223.43-.45.87-.672%201.323-.884%201.806-1.68%203.85-1.798%206.592-.118%202.74.444%206.179%202.28%2010.774Z%22%2F%3E%3Cpath%20fill%3D%22url(%23e)%22%20d%3D%22M41.948%2044.594c-1.835-4.595-2.398-8.033-2.28-10.774.118-2.742.915-4.786%201.798-6.592.222-.454.45-.893.673-1.324.665-1.285%201.295-2.501%201.64-3.842.373-1.447.414-3.038-.19-5.017a3.17%203.17%200%200%200-4.472-.232l-9.792%208.807a3.17%203.17%200%200%200-1.014%201.883l-1.192%207.902a3.182%203.182%200%200%201-.04.218c2.206%201.438%205.006%203.754%206.511%207.426.294.717.54%201.486.72%202.31%202.6-.632%205.177-1.022%207.638-.765Z%22%2F%3E%3Cg%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%3E%3Cpath%20fill%3D%22url(%23f)%22%20d%3D%22M39.687%2033.638c-.118%202.72.221%205.839%202.053%2010.424l-.575-.052c-1.643-4.785-2.001-7.238-1.881-9.995.12-2.758%201.01-4.879%201.899-6.688.225-.458.75-1.319.974-1.75.665-1.28%201.108-1.955%201.488-3.124.53-1.633.416-2.406.355-3.176.422%202.783-1.178%205.202-2.388%207.667-.882%201.795-1.807%203.976-1.925%206.694Z%22%2F%3E%3Cpath%20fill%3D%22url(%23g)%22%20d%3D%22M34.131%2043.25c.217.502.422.907.552%201.529l-.48.108c-.2-.726-.354-1.242-.63-1.865-1.654-3.902-4.309-5.91-6.478-7.381%202.62%201.41%205.31%203.616%207.036%207.608Z%22%2F%3E%3Cpath%20fill%3D%22url(%23h)%22%20d%3D%22M34.71%2045.27c.917%204.264-.105%209.683-3.118%2014.95%202.518-5.22%203.74-10.234%202.723-14.866l.396-.085Z%22%2F%3E%3Cpath%20fill%3D%22url(%23i)%22%20d%3D%22M45.11%2044.888c4.94%201.848%206.842%205.908%208.264%209.294-1.756-3.546-4.197-7.462-8.441-8.915-3.23-1.106-5.957-.975-10.619.083l-.104-.462c4.948-1.128%207.535-1.26%2010.9%200Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22b%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-5.44827%20-20.95522%2013.96424%20-3.63065%2031.076%2059.662)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23333%22%20stop-opacity%3D%22.52%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22c%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-9.24927%20-16.1868%2016.18663%20-9.24917%2047.535%2064.623)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23565656%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23151515%22%20stop-opacity%3D%22.71%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22d%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(4.6468%20-35.22462%2026.02364%203.433%2049.53%2050.76)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%237E7E7E%22%20stop-opacity%3D%22.91%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231E1E1E%22%20stop-opacity%3D%22.6%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22e%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(13.14708%20-30.29344%2020.65904%208.96583%2034.531%2046.293)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23D7D7D7%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23414141%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22f%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-3.34584%2015.42817%20-10.40357%20-2.25617%2044.882%2027.895)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.17%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22g%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(8.17858%208.27172%20-17.61805%2017.41967%2026.387%2036.445)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22h%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(80.202%20-7.323%2041.856)%20scale(13.634%2028.9518)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.12%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.35%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22i%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(-152.296%2033.168%2019.977)%20scale(20.7745%2065.377)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.21%22%2F%3E%3Cstop%20offset%3D%22.467%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.19%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.29%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%2239.273%22%20height%3D%2249.867%22%20x%3D%2220.551%22%20y%3D%2215.381%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20mode%3D%22normal%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20result%3D%22effect1_foregroundBlur_3584_482%22%20stdDeviation%3D%22.624%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E");
  --on-border-dark: var(--color-accent-3, hsla(232, 16%, 54%));
  --on-border-light: var(--color-accent-3, hsla(232, 16%, 54%));
  --pdf-background: var(--background-primary, hsl(232, 8%, 16.66667%));
  --pdf-page-background: var(--background-primary, hsl(232, 8%, 16.66667%));
  --pdf-sidebar-background: var(--background-primary, hsl(232, 8%, 16.66667%));
  --pill-border-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsla(232, 16%, 54%, 0.25));
  --pill-color: var(--text-muted, hsl(232, 12%, 75%));
  --pill-color-hover: var(--text-normal, hsl(232, 15%, 85%));
  --pill-color-remove: var(--text-faint, hsl(232, 9%, 50%));
  --pill-color-remove-hover: var(--text-accent, hsl(229, 40.8%, 69%));
  --prompt-background: var(--background-primary, hsl(232, 8%, 16.66667%));
  --prompt-border-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(232, 8%, 15.30612%));
  --ribbon-background-collapsed: var(--background-primary, hsl(232, 8%, 16.66667%));
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.15);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0);
  --search-clear-button-color: var(--text-muted, hsl(232, 12%, 75%));
  --search-icon-color: var(--text-muted, hsl(232, 12%, 75%));
  --search-result-background: var(--background-primary, transparent);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(229, 40.8%, 69%)));
  --setting-group-heading-color: var(--text-normal, hsl(232, 15%, 85%));
  --setting-items-background: var(--background-primary-alt, hsl(232, 8%, 19.23077%));
  --setting-items-border-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --shadow-activated-file-dark: none;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px var(--background-modifier-border), inset 0 2px 4px 0 var(--background-modifier-border-muted), inset 0 1px 1px 1px var(--background-modifier-border);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px var(--background-modifier-border), 0 0 4px var(--background-modifier-border), 0px 2px 6px -4px var(--background-modifier-border-muted), inset 0 -1px 3px 0 var(--background-tertiary);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2),
        0 -1px 0 0 var(--background-modifier-border-focus);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 var(--background-modifier-border-focus);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(232, 12%, 75%));
  --shiki-code-background: var(--code-background, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --shiki-code-comment: var(--text-faint, hsl(232, 9%, 50%));
  --shiki-code-function: var(--color-green, rgb(124, 211, 124));
  --shiki-code-important: var(--color-orange, rgb(251, 187, 131));
  --shiki-code-keyword: var(--color-pink, rgb(242, 182, 222));
  --shiki-code-normal: var(--text-muted, hsl(232, 12%, 75%));
  --shiki-code-property: var(--color-cyan, rgb(134, 223, 226));
  --shiki-code-punctuation: var(--text-muted, hsl(232, 12%, 75%));
  --shiki-code-string: var(--color-yellow, rgb(255, 232, 139));
  --shiki-code-value: var(--color-purple, rgb(203, 158, 255));
  --shiki-gutter-border-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --shiki-gutter-text-color: var(--text-faint, hsl(232, 9%, 50%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(232, 12%, 75%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(232, 12%, 75%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(232, 9%, 50%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsla(232, 16%, 54%, 0.25));
  --slider-thumb-border-width: var(--border-width, 0);
  --slider-track-background: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --status-bar-background: var(--background-secondary, transparent);
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0);
  --status-bar-text-color: var(--text-muted, hsl(232, 12%, 75%));
  --suggestion-background: var(--background-primary, hsl(232, 8%, 16.66667%));
  --sync-avatar-color-1: var(--color-red, rgb(255, 120, 129));
  --sync-avatar-color-2: var(--color-orange, rgb(251, 187, 131));
  --sync-avatar-color-3: var(--color-yellow, rgb(255, 232, 139));
  --sync-avatar-color-4: var(--color-green, rgb(124, 211, 124));
  --sync-avatar-color-5: var(--color-cyan, rgb(134, 223, 226));
  --sync-avatar-color-6: var(--color-blue, rgb(137, 189, 244));
  --sync-avatar-color-7: var(--color-purple, rgb(203, 158, 255));
  --sync-avatar-color-8: var(--color-pink, rgb(242, 182, 222));
  --tab-background-active: var(--background-primary, transparent);
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, hsla(232, 16%, 54%, 0.25));
  --tab-outline-color: var(--divider-color, hsla(232, 16%, 54%, 0.2));
  --tab-switcher-background: var(--background-secondary, hsl(232, 8%, 15.30612%));
  --tab-text-color: var(--text-faint, hsl(232, 9%, 50%));
  --tab-text-color-active: var(--text-muted, hsl(232, 12%, 75%));
  --tab-text-color-focused: var(--text-muted, hsl(232, 12%, 75%));
  --tab-text-color-focused-active: var(--text-muted, hsl(232, 12%, 75%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(232, 15%, 85%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(229, 40.8%, 69%));
  --table-add-button-border-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --table-border-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(232, 40%, 60%));
  --table-drag-handle-color: var(--text-faint, hsl(232, 9%, 50%));
  --table-header-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --table-header-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --table-header-border-color: var(--table-border-color, hsla(232, 16%, 54%, 0.2));
  --table-header-color: var(--text-normal, hsl(232, 15%, 85%));
  --table-selection-border-color: var(--interactive-accent, hsl(232, 40%, 60%));
  --table-width: 88cqw;
  --tag-border-width: 1px;
  --tag-color: var(--text-accent, hsl(229, 40.8%, 69%));
  --tag-color-hover: var(--text-accent, hsl(229, 40.8%, 69%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(227, 42%, 77.4%)));
  --text-accent: var(--color-accent-1, hsl(229, 40.8%, 69%));
  --text-accent-hover: var(--color-accent-2, hsl(227, 42%, 77.4%));
  --text-error: var(--color-red, rgb(255, 120, 129));
  --text-faint: hsl(var(--accent-h), 9%, 50%);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: hsl(var(--accent-h), 12%, 75%);
  --text-normal: hsl(var(--accent-h), 15%, 85%);
  --text-selection: hsla(var(--interactive-accent-hsl), 0.4);
  --text-success: var(--color-green, rgb(124, 211, 124));
  --text-warning: var(--color-orange, rgb(251, 187, 131));
  --textHighlight: var(--background-modifier-hover, hsla(var(--accent-h), 12%, 40%, 0.25));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, hsla(232, 16%, 54%, 0.2));
  --titlebar-text-color: var(--text-muted, hsl(232, 12%, 75%));
  --titlebar-text-color-focused: var(--text-normal, hsl(232, 15%, 85%));
  --toggle-thumb-color: var(--toggle-thumb-color-dark, white);
  --toggle-thumb-color-dark: white;
  --toggle-thumb-enabled-color: var(--toggle-thumb-enabled-color-dark, white);
  --toggle-thumb-enabled-color-dark: white;
  --toggle-thumb-enabled-shadow: var(--toggle-thumb-enabled-shadow-dark, 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(255, 255, 255, 0.3), inset 0px -4px 6px hsla(232,
        40%,
        60%, 0.4), inset 0px 4px 4px rgba(255, 255, 255, 0.4));
  --toggle-thumb-enabled-shadow-dark: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(255, 255, 255, 0.3), inset 0px -4px 6px hsla(var(--interactive-accent-hsl), 0.4), inset 0px 4px 4px rgba(255, 255, 255, 0.4);
  --toggle-thumb-shadow: var(--toggle-thumb-shadow-dark, 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.3), inset 0px -4px 6px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(255, 255, 255, 0.4));
  --toggle-thumb-shadow-dark: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.3), inset 0px -4px 6px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(255, 255, 255, 0.4);
  --toggle-track-color: var(--toggle-track-color-dark, hsla(232, 16%, 54%, 0.25));
  --toggle-track-color-dark: var(--background-modifier-border-hover, hsla(232, 16%, 54%, 0.25));
  --toggle-track-enabled-color: var(--toggle-track-enabled-color-dark, hsl(232, 40%, 60%));
  --toggle-track-enabled-color-dark: var(--interactive-accent, hsl(232, 40%, 60%));
  --toggle-track-hovered-shadow: var(--toggle-track-hovered-shadow-dark, inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(232, 16%, 54%, 0.2));
  --toggle-track-hovered-shadow-dark: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px var(--background-modifier-border);
  --toggle-track-shadow: var(--toggle-track-shadow-dark, inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(232, 16%, 54%, 0.2));
  --toggle-track-shadow-dark: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px var(--background-modifier-border);
  --vault-profile-color: var(--text-normal, hsl(232, 15%, 85%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(232, 15%, 85%));
  --workspace-background-translucent: hsla(var(--accent-h),
            calc(var(--accent-s)/5.4),
            calc(var(--accent-l)*1.25/3.6), 0.6);
  --workspace-divider-color: var(--divider-color, hsla(232, 16%, 54%, 0.2));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(232, 8%, 15.30612%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(119, 124, 156, 0.2);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(232, 8%, 15.30612%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(119, 124, 156, 0.2);
  color: rgb(211, 213, 222);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered > h1 {
  --accent-h: 232;
  --accent-l: 60%;
  --accent-s: 40%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-file-dark: hsla(232, 12%, 40%, 0.25);
  --background-activated-tab-header-dark: hsla(232,
        40%,
        60%, 0.15);
  --background-activated-tab-header-light: hsl(232, 8%, 16.66667%);
  --background-mod-left-split: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-right-split: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-root-split: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-light: hsl(232, 8%, 16.66667%);
  --background-modifier-active-hover: hsla(232,
        40%,
        60%, 0.15);
  --background-modifier-border: hsla(232, 16%, 54%, 0.2);
  --background-modifier-border-focus: hsla(232, 16%, 54%, 0.3);
  --background-modifier-border-hover: hsla(232, 16%, 54%, 0.25);
  --background-modifier-border-muted: hsla(232, 16%, 54%, 0.1);
  --background-modifier-error: rgb(255, 120, 129);
  --background-modifier-error-hover: rgb(255, 120, 129);
  --background-modifier-error-rgb: 255, 120, 129;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 12%, 40%, 0.25);
  --background-modifier-success: rgb(124, 211, 124);
  --background-modifier-success-rgb: 124, 211, 124;
  --background-primary: hsl(232, 8%, 16.66667%);
  --background-primary-alt: hsl(232, 8%, 19.23077%);
  --background-secondary: hsl(232, 8%, 15.30612%);
  --background-secondary-alt: hsl(232,
            7.40741%,
            25%);
  --background-tertiary: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-dark: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-light: hsl(232,
            7.40741%,
            20.83333%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(232, 40%, 60%);
  --blur-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(255, 120, 129);
  --bold-weight: 600;
  --border-radius-activated-file-dark: 4px;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 120, 129;
  --callout-default: 137, 189, 244;
  --callout-error: 255, 120, 129;
  --callout-example: 203, 158, 255;
  --callout-fail: 255, 120, 129;
  --callout-important: 134, 223, 226;
  --callout-info: 137, 189, 244;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 251, 187, 131;
  --callout-radius: 4px;
  --callout-success: 124, 211, 124;
  --callout-summary: 134, 223, 226;
  --callout-tip: 134, 223, 226;
  --callout-title-weight: 600;
  --callout-todo: 137, 189, 244;
  --callout-warning: 251, 187, 131;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 16%, 54%, 0.2), 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 16%, 54%, 0.1), 0 0 6px hsla(232, 16%, 54%, 0.1);
  --caret-color: hsl(232, 15%, 85%);
  --checkbox-border-color: hsl(232, 9%, 50%);
  --checkbox-border-color-hover: hsl(232, 9%, 50%);
  --checkbox-color: rgb(124, 211, 124);
  --checkbox-color-hover: rgb(124, 211, 124);
  --checkbox-marker-color: hsl(232, 8%, 16.66667%);
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 9%, 50%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-color: hsla(232, 16%, 54%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-light: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-bracket-background: hsla(232, 12%, 40%, 0.25);
  --code-comment: hsl(232, 9%, 50%);
  --code-function: rgb(255, 232, 139);
  --code-important: rgb(251, 187, 131);
  --code-keyword: rgb(242, 182, 222);
  --code-normal: hsl(232, 12%, 75%);
  --code-operator: rgb(255, 120, 129);
  --code-property: rgb(134, 223, 226);
  --code-punctuation: hsl(232, 12%, 75%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(124, 211, 124);
  --code-tag: rgb(255, 120, 129);
  --code-value: rgb(203, 158, 255);
  --collapse-icon-color: hsl(232, 9%, 50%);
  --collapse-icon-color-collapsed: hsl(229, 40.8%, 69%);
  --color-accent: hsl(232, 40%, 60%);
  --color-accent-1: hsl(229, 40.8%, 69%);
  --color-accent-1-dark: hsl(229, 40.8%, 69%);
  --color-accent-2: hsl(227, 42%, 77.4%);
  --color-accent-2-dark: hsl(227, 42%, 77.4%);
  --color-accent-3: hsla(232, 16%, 54%);
  --color-accent-3-dark: hsla(232, 16%, 54%);
  --color-accent-dark: hsl(232, 40%, 60%);
  --color-accent-hsl: 232,
        40%,
        60%;
  --color-accent-hsl-dark: 232,
        40%,
        60%;
  --color-activated-file-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-light: hsl(232, 15%, 85%);
  --color-blue: rgb(137, 189, 244);
  --color-cyan: rgb(134, 223, 226);
  --color-green: rgb(124, 211, 124);
  --color-orange: rgb(251, 187, 131);
  --color-pink: rgb(242, 182, 222);
  --color-purple: rgb(203, 158, 255);
  --color-red: rgb(255, 120, 129);
  --color-yellow: rgb(255, 232, 139);
  --divider-color: hsla(232, 16%, 54%, 0.2);
  --divider-color-hover: hsl(232, 40%, 60%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(232,
            5.71429%,
            25%);
  --dropdown-background-hover: hsl(232,
            5.71429%,
            27.77778%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(232,
            5.71429%,
            25%);
  --flair-color: hsl(232, 15%, 85%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 700);
  --graph-line: #3F3F3F;
  --graph-node: hsl(232, 12%, 75%);
  --graph-node-attachment: rgb(255, 232, 139);
  --graph-node-focused: hsl(229, 40.8%, 69%);
  --graph-node-tag: rgb(124, 211, 124);
  --graph-node-unresolved: hsl(232, 9%, 50%);
  --graph-text: hsl(232, 15%, 85%);
  --grid-background-pattern-color: hsla(232, 16%, 54%, 0.2);
  --h1-accent-color: rgb(255, 120, 129);
  --h2-accent-color: rgb(251, 187, 131);
  --h3-accent-color: rgb(255, 232, 139);
  --h4-accent-color: rgb(124, 211, 124);
  --h5-accent-color: rgb(137, 189, 244);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(203, 158, 255);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 9%, 50%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 16%, 54%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(242, 182, 222);
  --interactive-accent: hsl(232, 40%, 60%);
  --interactive-accent-hover: hsl(229, 40.8%, 69%);
  --interactive-accent-hsl: 232,
        40%,
        60%;
  --interactive-hover: hsl(232,
            5.71429%,
            27.77778%);
  --interactive-normal: hsl(232,
            5.71429%,
            25%);
  --italic-color: rgb(251, 187, 131);
  --line-height-customize: 1.5;
  --link-color: hsl(229, 40.8%, 69%);
  --link-color-hover: hsl(227, 42%, 77.4%);
  --link-external-color: rgb(137, 189, 244);
  --link-external-color-hover: rgb(137, 189, 244);
  --link-unresolved-color: hsl(229, 40.8%, 69%);
  --link-unresolved-decoration-color: hsla(232,
        40%,
        60%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232, 8%, 15.30612%);
  --menu-border-color: hsla(232, 16%, 54%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --on-border-dark: hsla(232, 16%, 54%);
  --on-border-light: hsla(232, 16%, 54%);
  --pdf-background: hsl(232, 8%, 16.66667%);
  --pdf-page-background: hsl(232, 8%, 16.66667%);
  --pdf-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --pdf-sidebar-background: hsl(232, 8%, 16.66667%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.15);
  --scrollbar-bg: rgba(255, 255, 255, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(232, 12%, 75%);
  --search-icon-color: hsl(232, 12%, 75%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 15%, 85%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(232, 8%, 19.23077%);
  --setting-items-border-color: hsla(232, 16%, 54%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 16%, 54%, 0.2), inset 0 2px 4px 0 hsla(232, 16%, 54%, 0.1), inset 0 1px 1px 1px hsla(232, 16%, 54%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 16%, 54%, 0.2), 0 0 4px hsla(232, 16%, 54%, 0.2), 0px 2px 6px -4px hsla(232, 16%, 54%, 0.1), inset 0 -1px 3px 0 hsl(232,
            7.40741%,
            20.83333%);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shiki-active-tab-border-color: hsl(232, 12%, 75%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 9%, 50%);
  --shiki-code-function: rgb(124, 211, 124);
  --shiki-code-important: rgb(251, 187, 131);
  --shiki-code-keyword: rgb(242, 182, 222);
  --shiki-code-normal: hsl(232, 12%, 75%);
  --shiki-code-property: rgb(134, 223, 226);
  --shiki-code-punctuation: hsl(232, 12%, 75%);
  --shiki-code-string: rgb(255, 232, 139);
  --shiki-code-value: rgb(203, 158, 255);
  --shiki-gutter-border-color: hsla(232, 16%, 54%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 9%, 50%);
  --shiki-gutter-text-color-highlight: hsl(232, 12%, 75%);
  --shiki-highlight-green: rgba(124, 211, 124, 0.5);
  --shiki-highlight-green-background: rgba(124, 211, 124, 0.1);
  --shiki-highlight-neutral: hsl(232, 12%, 75%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 120, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 120, 129, 0.1);
  --shiki-terminal-dots-color: hsl(232, 9%, 50%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(232, 8%, 16.66667%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 120, 129);
  --sync-avatar-color-2: rgb(251, 187, 131);
  --sync-avatar-color-3: rgb(255, 232, 139);
  --sync-avatar-color-4: rgb(124, 211, 124);
  --sync-avatar-color-5: rgb(134, 223, 226);
  --sync-avatar-color-6: rgb(137, 189, 244);
  --sync-avatar-color-7: rgb(203, 158, 255);
  --sync-avatar-color-8: rgb(242, 182, 222);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 16%, 54%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 16%, 54%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232, 8%, 15.30612%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232, 8%, 15.30612%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 40%, 60%);
  --tab-text-color: hsl(232, 9%, 50%);
  --tab-text-color-active: hsl(232, 12%, 75%);
  --tab-text-color-focused: hsl(232, 12%, 75%);
  --tab-text-color-focused-active: hsl(232, 12%, 75%);
  --tab-text-color-focused-active-current: hsl(232, 15%, 85%);
  --tab-text-color-focused-highlighted: hsl(229, 40.8%, 69%);
  --table-add-button-border-color: hsla(232, 16%, 54%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 16%, 54%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(232, 40%, 60%);
  --table-drag-handle-color: hsl(232, 9%, 50%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 16%, 54%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 15%, 85%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        40%,
        60%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(232, 40%, 60%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        40%,
        60%, 0.1);
  --tag-background-hover: hsla(232,
        40%,
        60%, 0.2);
  --tag-border-color: hsla(232,
        40%,
        60%, 0.15);
  --tag-border-color-hover: hsla(232,
        40%,
        60%, 0.15);
  --tag-color: hsl(229, 40.8%, 69%);
  --tag-color-hover: hsl(229, 40.8%, 69%);
  --tag-size: 0.875em;
  --text-accent: hsl(229, 40.8%, 69%);
  --text-accent-hover: hsl(227, 42%, 77.4%);
  --text-error: rgb(255, 120, 129);
  --text-faint: hsl(232, 9%, 50%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 12%, 75%);
  --text-normal: hsl(232, 15%, 85%);
  --text-selection: hsla(232,
        40%,
        60%, 0.4);
  --text-success: rgb(124, 211, 124);
  --text-warning: rgb(251, 187, 131);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(255, 120, 129);
  border-bottom-color: rgb(211, 213, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 222);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 222);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(211, 213, 222));
  content: " ";
  font-family: var(--h1-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 24px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.36px);
  line-height: var(--h1-line-height, 28.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(255, 120, 129));
  outline: rgb(255, 120, 129) none 0px;
  text-decoration-color: rgb(255, 120, 129);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(251, 187, 131));
  outline: rgb(251, 187, 131) none 0px;
  text-decoration-color: rgb(251, 187, 131);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(251, 187, 131));
  outline: rgb(251, 187, 131) none 0px;
  text-decoration-color: rgb(251, 187, 131);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(255, 120, 129));
  outline: rgb(255, 120, 129) none 0px;
  text-decoration-color: rgb(255, 120, 129);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-normal, rgb(211, 213, 222));
  outline: rgb(211, 213, 222) none 0px;
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(211, 213, 222);
  outline: rgb(211, 213, 222) none 0px;
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body footer {
  --icon-color: var(--text-muted, hsla(232, 16%, 54%));
  --icon-color-hover: var(--text-muted, hsla(232, 16%, 54%));
  --status-bar-text-color: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color: var(--text-faint, hsla(232, 16%, 54%));
  --tab-text-color-active: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color-focused: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color-focused-active: var(--text-muted, hsla(232, 16%, 54%));
  --text-faint: var(--on-border-dark, hsla(232, 16%, 54%));
  --text-muted: var(--on-border-dark, hsla(232, 16%, 54%));
  --titlebar-text-color: var(--text-muted, hsla(232, 16%, 54%));
  --titlebar-text-color-focused: var(--text-muted, hsla(232, 16%, 54%));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(211, 213, 222));
}

html[saved-theme="dark"] body h2 {
  --accent-h: 232;
  --accent-l: 60%;
  --accent-s: 40%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-file-dark: hsla(232, 12%, 40%, 0.25);
  --background-activated-tab-header-dark: hsla(232,
        40%,
        60%, 0.15);
  --background-activated-tab-header-light: hsl(232, 8%, 16.66667%);
  --background-mod-left-split: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-right-split: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-root-split: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-light: hsl(232, 8%, 16.66667%);
  --background-modifier-active-hover: hsla(232,
        40%,
        60%, 0.15);
  --background-modifier-border: hsla(232, 16%, 54%, 0.2);
  --background-modifier-border-focus: hsla(232, 16%, 54%, 0.3);
  --background-modifier-border-hover: hsla(232, 16%, 54%, 0.25);
  --background-modifier-border-muted: hsla(232, 16%, 54%, 0.1);
  --background-modifier-error: rgb(255, 120, 129);
  --background-modifier-error-hover: rgb(255, 120, 129);
  --background-modifier-error-rgb: 255, 120, 129;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 12%, 40%, 0.25);
  --background-modifier-success: rgb(124, 211, 124);
  --background-modifier-success-rgb: 124, 211, 124;
  --background-primary: hsl(232, 8%, 16.66667%);
  --background-primary-alt: hsl(232, 8%, 19.23077%);
  --background-secondary: hsl(232, 8%, 15.30612%);
  --background-secondary-alt: hsl(232,
            7.40741%,
            25%);
  --background-tertiary: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-dark: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-light: hsl(232,
            7.40741%,
            20.83333%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(232, 40%, 60%);
  --blur-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(255, 120, 129);
  --bold-weight: 600;
  --border-radius-activated-file-dark: 4px;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 120, 129;
  --callout-default: 137, 189, 244;
  --callout-error: 255, 120, 129;
  --callout-example: 203, 158, 255;
  --callout-fail: 255, 120, 129;
  --callout-important: 134, 223, 226;
  --callout-info: 137, 189, 244;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 251, 187, 131;
  --callout-radius: 4px;
  --callout-success: 124, 211, 124;
  --callout-summary: 134, 223, 226;
  --callout-tip: 134, 223, 226;
  --callout-title-weight: 600;
  --callout-todo: 137, 189, 244;
  --callout-warning: 251, 187, 131;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 16%, 54%, 0.2), 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 16%, 54%, 0.1), 0 0 6px hsla(232, 16%, 54%, 0.1);
  --caret-color: hsl(232, 15%, 85%);
  --checkbox-border-color: hsl(232, 9%, 50%);
  --checkbox-border-color-hover: hsl(232, 9%, 50%);
  --checkbox-color: rgb(124, 211, 124);
  --checkbox-color-hover: rgb(124, 211, 124);
  --checkbox-marker-color: hsl(232, 8%, 16.66667%);
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 9%, 50%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-color: hsla(232, 16%, 54%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-light: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-bracket-background: hsla(232, 12%, 40%, 0.25);
  --code-comment: hsl(232, 9%, 50%);
  --code-function: rgb(255, 232, 139);
  --code-important: rgb(251, 187, 131);
  --code-keyword: rgb(242, 182, 222);
  --code-normal: hsl(232, 12%, 75%);
  --code-operator: rgb(255, 120, 129);
  --code-property: rgb(134, 223, 226);
  --code-punctuation: hsl(232, 12%, 75%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(124, 211, 124);
  --code-tag: rgb(255, 120, 129);
  --code-value: rgb(203, 158, 255);
  --collapse-icon-color: hsl(232, 9%, 50%);
  --collapse-icon-color-collapsed: hsl(229, 40.8%, 69%);
  --color-accent: hsl(232, 40%, 60%);
  --color-accent-1: hsl(229, 40.8%, 69%);
  --color-accent-1-dark: hsl(229, 40.8%, 69%);
  --color-accent-2: hsl(227, 42%, 77.4%);
  --color-accent-2-dark: hsl(227, 42%, 77.4%);
  --color-accent-3: hsla(232, 16%, 54%);
  --color-accent-3-dark: hsla(232, 16%, 54%);
  --color-accent-dark: hsl(232, 40%, 60%);
  --color-accent-hsl: 232,
        40%,
        60%;
  --color-accent-hsl-dark: 232,
        40%,
        60%;
  --color-activated-file-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-light: hsl(232, 15%, 85%);
  --color-blue: rgb(137, 189, 244);
  --color-cyan: rgb(134, 223, 226);
  --color-green: rgb(124, 211, 124);
  --color-orange: rgb(251, 187, 131);
  --color-pink: rgb(242, 182, 222);
  --color-purple: rgb(203, 158, 255);
  --color-red: rgb(255, 120, 129);
  --color-yellow: rgb(255, 232, 139);
  --divider-color: hsla(232, 16%, 54%, 0.2);
  --divider-color-hover: hsl(232, 40%, 60%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(232,
            5.71429%,
            25%);
  --dropdown-background-hover: hsl(232,
            5.71429%,
            27.77778%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(232,
            5.71429%,
            25%);
  --flair-color: hsl(232, 15%, 85%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h2-weight, 675);
  --graph-line: #3F3F3F;
  --graph-node: hsl(232, 12%, 75%);
  --graph-node-attachment: rgb(255, 232, 139);
  --graph-node-focused: hsl(229, 40.8%, 69%);
  --graph-node-tag: rgb(124, 211, 124);
  --graph-node-unresolved: hsl(232, 9%, 50%);
  --graph-text: hsl(232, 15%, 85%);
  --grid-background-pattern-color: hsla(232, 16%, 54%, 0.2);
  --h1-accent-color: rgb(255, 120, 129);
  --h2-accent-color: rgb(251, 187, 131);
  --h3-accent-color: rgb(255, 232, 139);
  --h4-accent-color: rgb(124, 211, 124);
  --h5-accent-color: rgb(137, 189, 244);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(203, 158, 255);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 9%, 50%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 16%, 54%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(242, 182, 222);
  --interactive-accent: hsl(232, 40%, 60%);
  --interactive-accent-hover: hsl(229, 40.8%, 69%);
  --interactive-accent-hsl: 232,
        40%,
        60%;
  --interactive-hover: hsl(232,
            5.71429%,
            27.77778%);
  --interactive-normal: hsl(232,
            5.71429%,
            25%);
  --italic-color: rgb(251, 187, 131);
  --line-height-customize: 1.5;
  --link-color: hsl(229, 40.8%, 69%);
  --link-color-hover: hsl(227, 42%, 77.4%);
  --link-external-color: rgb(137, 189, 244);
  --link-external-color-hover: rgb(137, 189, 244);
  --link-unresolved-color: hsl(229, 40.8%, 69%);
  --link-unresolved-decoration-color: hsla(232,
        40%,
        60%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232, 8%, 15.30612%);
  --menu-border-color: hsla(232, 16%, 54%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --on-border-dark: hsla(232, 16%, 54%);
  --on-border-light: hsla(232, 16%, 54%);
  --pdf-background: hsl(232, 8%, 16.66667%);
  --pdf-page-background: hsl(232, 8%, 16.66667%);
  --pdf-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --pdf-sidebar-background: hsl(232, 8%, 16.66667%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.15);
  --scrollbar-bg: rgba(255, 255, 255, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(232, 12%, 75%);
  --search-icon-color: hsl(232, 12%, 75%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 15%, 85%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(232, 8%, 19.23077%);
  --setting-items-border-color: hsla(232, 16%, 54%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 16%, 54%, 0.2), inset 0 2px 4px 0 hsla(232, 16%, 54%, 0.1), inset 0 1px 1px 1px hsla(232, 16%, 54%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 16%, 54%, 0.2), 0 0 4px hsla(232, 16%, 54%, 0.2), 0px 2px 6px -4px hsla(232, 16%, 54%, 0.1), inset 0 -1px 3px 0 hsl(232,
            7.40741%,
            20.83333%);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shiki-active-tab-border-color: hsl(232, 12%, 75%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 9%, 50%);
  --shiki-code-function: rgb(124, 211, 124);
  --shiki-code-important: rgb(251, 187, 131);
  --shiki-code-keyword: rgb(242, 182, 222);
  --shiki-code-normal: hsl(232, 12%, 75%);
  --shiki-code-property: rgb(134, 223, 226);
  --shiki-code-punctuation: hsl(232, 12%, 75%);
  --shiki-code-string: rgb(255, 232, 139);
  --shiki-code-value: rgb(203, 158, 255);
  --shiki-gutter-border-color: hsla(232, 16%, 54%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 9%, 50%);
  --shiki-gutter-text-color-highlight: hsl(232, 12%, 75%);
  --shiki-highlight-green: rgba(124, 211, 124, 0.5);
  --shiki-highlight-green-background: rgba(124, 211, 124, 0.1);
  --shiki-highlight-neutral: hsl(232, 12%, 75%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 120, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 120, 129, 0.1);
  --shiki-terminal-dots-color: hsl(232, 9%, 50%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(232, 8%, 16.66667%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 120, 129);
  --sync-avatar-color-2: rgb(251, 187, 131);
  --sync-avatar-color-3: rgb(255, 232, 139);
  --sync-avatar-color-4: rgb(124, 211, 124);
  --sync-avatar-color-5: rgb(134, 223, 226);
  --sync-avatar-color-6: rgb(137, 189, 244);
  --sync-avatar-color-7: rgb(203, 158, 255);
  --sync-avatar-color-8: rgb(242, 182, 222);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 16%, 54%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 16%, 54%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232, 8%, 15.30612%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232, 8%, 15.30612%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 40%, 60%);
  --tab-text-color: hsl(232, 9%, 50%);
  --tab-text-color-active: hsl(232, 12%, 75%);
  --tab-text-color-focused: hsl(232, 12%, 75%);
  --tab-text-color-focused-active: hsl(232, 12%, 75%);
  --tab-text-color-focused-active-current: hsl(232, 15%, 85%);
  --tab-text-color-focused-highlighted: hsl(229, 40.8%, 69%);
  --table-add-button-border-color: hsla(232, 16%, 54%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 16%, 54%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(232, 40%, 60%);
  --table-drag-handle-color: hsl(232, 9%, 50%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 16%, 54%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 15%, 85%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        40%,
        60%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(232, 40%, 60%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        40%,
        60%, 0.1);
  --tag-background-hover: hsla(232,
        40%,
        60%, 0.2);
  --tag-border-color: hsla(232,
        40%,
        60%, 0.15);
  --tag-border-color-hover: hsla(232,
        40%,
        60%, 0.15);
  --tag-color: hsl(229, 40.8%, 69%);
  --tag-color-hover: hsl(229, 40.8%, 69%);
  --tag-size: 0.875em;
  --text-accent: hsl(229, 40.8%, 69%);
  --text-accent-hover: hsl(227, 42%, 77.4%);
  --text-error: rgb(255, 120, 129);
  --text-faint: hsl(232, 9%, 50%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 12%, 75%);
  --text-normal: hsl(232, 15%, 85%);
  --text-selection: hsla(232,
        40%,
        60%, 0.4);
  --text-success: rgb(124, 211, 124);
  --text-warning: rgb(251, 187, 131);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(251, 187, 131);
  border-bottom-color: rgb(211, 213, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 222);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 222);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(211, 213, 222));
  content: " ";
  font-family: var(--h2-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 22.8px);
  font-weight: var(--font-weight, 675);
  letter-spacing: var(--h2-letter-spacing, -0.2508px);
  line-height: var(--h2-line-height, 27.36px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h3 {
  --accent-h: 232;
  --accent-l: 60%;
  --accent-s: 40%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-file-dark: hsla(232, 12%, 40%, 0.25);
  --background-activated-tab-header-dark: hsla(232,
        40%,
        60%, 0.15);
  --background-activated-tab-header-light: hsl(232, 8%, 16.66667%);
  --background-mod-left-split: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-right-split: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-root-split: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-light: hsl(232, 8%, 16.66667%);
  --background-modifier-active-hover: hsla(232,
        40%,
        60%, 0.15);
  --background-modifier-border: hsla(232, 16%, 54%, 0.2);
  --background-modifier-border-focus: hsla(232, 16%, 54%, 0.3);
  --background-modifier-border-hover: hsla(232, 16%, 54%, 0.25);
  --background-modifier-border-muted: hsla(232, 16%, 54%, 0.1);
  --background-modifier-error: rgb(255, 120, 129);
  --background-modifier-error-hover: rgb(255, 120, 129);
  --background-modifier-error-rgb: 255, 120, 129;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 12%, 40%, 0.25);
  --background-modifier-success: rgb(124, 211, 124);
  --background-modifier-success-rgb: 124, 211, 124;
  --background-primary: hsl(232, 8%, 16.66667%);
  --background-primary-alt: hsl(232, 8%, 19.23077%);
  --background-secondary: hsl(232, 8%, 15.30612%);
  --background-secondary-alt: hsl(232,
            7.40741%,
            25%);
  --background-tertiary: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-dark: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-light: hsl(232,
            7.40741%,
            20.83333%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(232, 40%, 60%);
  --blur-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(255, 120, 129);
  --bold-weight: 600;
  --border-radius-activated-file-dark: 4px;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 120, 129;
  --callout-default: 137, 189, 244;
  --callout-error: 255, 120, 129;
  --callout-example: 203, 158, 255;
  --callout-fail: 255, 120, 129;
  --callout-important: 134, 223, 226;
  --callout-info: 137, 189, 244;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 251, 187, 131;
  --callout-radius: 4px;
  --callout-success: 124, 211, 124;
  --callout-summary: 134, 223, 226;
  --callout-tip: 134, 223, 226;
  --callout-title-weight: 600;
  --callout-todo: 137, 189, 244;
  --callout-warning: 251, 187, 131;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 16%, 54%, 0.2), 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 16%, 54%, 0.1), 0 0 6px hsla(232, 16%, 54%, 0.1);
  --caret-color: hsl(232, 15%, 85%);
  --checkbox-border-color: hsl(232, 9%, 50%);
  --checkbox-border-color-hover: hsl(232, 9%, 50%);
  --checkbox-color: rgb(124, 211, 124);
  --checkbox-color-hover: rgb(124, 211, 124);
  --checkbox-marker-color: hsl(232, 8%, 16.66667%);
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 9%, 50%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-color: hsla(232, 16%, 54%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-light: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-bracket-background: hsla(232, 12%, 40%, 0.25);
  --code-comment: hsl(232, 9%, 50%);
  --code-function: rgb(255, 232, 139);
  --code-important: rgb(251, 187, 131);
  --code-keyword: rgb(242, 182, 222);
  --code-normal: hsl(232, 12%, 75%);
  --code-operator: rgb(255, 120, 129);
  --code-property: rgb(134, 223, 226);
  --code-punctuation: hsl(232, 12%, 75%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(124, 211, 124);
  --code-tag: rgb(255, 120, 129);
  --code-value: rgb(203, 158, 255);
  --collapse-icon-color: hsl(232, 9%, 50%);
  --collapse-icon-color-collapsed: hsl(229, 40.8%, 69%);
  --color-accent: hsl(232, 40%, 60%);
  --color-accent-1: hsl(229, 40.8%, 69%);
  --color-accent-1-dark: hsl(229, 40.8%, 69%);
  --color-accent-2: hsl(227, 42%, 77.4%);
  --color-accent-2-dark: hsl(227, 42%, 77.4%);
  --color-accent-3: hsla(232, 16%, 54%);
  --color-accent-3-dark: hsla(232, 16%, 54%);
  --color-accent-dark: hsl(232, 40%, 60%);
  --color-accent-hsl: 232,
        40%,
        60%;
  --color-accent-hsl-dark: 232,
        40%,
        60%;
  --color-activated-file-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-light: hsl(232, 15%, 85%);
  --color-blue: rgb(137, 189, 244);
  --color-cyan: rgb(134, 223, 226);
  --color-green: rgb(124, 211, 124);
  --color-orange: rgb(251, 187, 131);
  --color-pink: rgb(242, 182, 222);
  --color-purple: rgb(203, 158, 255);
  --color-red: rgb(255, 120, 129);
  --color-yellow: rgb(255, 232, 139);
  --divider-color: hsla(232, 16%, 54%, 0.2);
  --divider-color-hover: hsl(232, 40%, 60%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(232,
            5.71429%,
            25%);
  --dropdown-background-hover: hsl(232,
            5.71429%,
            27.77778%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(232,
            5.71429%,
            25%);
  --flair-color: hsl(232, 15%, 85%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h3-weight, 650);
  --graph-line: #3F3F3F;
  --graph-node: hsl(232, 12%, 75%);
  --graph-node-attachment: rgb(255, 232, 139);
  --graph-node-focused: hsl(229, 40.8%, 69%);
  --graph-node-tag: rgb(124, 211, 124);
  --graph-node-unresolved: hsl(232, 9%, 50%);
  --graph-text: hsl(232, 15%, 85%);
  --grid-background-pattern-color: hsla(232, 16%, 54%, 0.2);
  --h1-accent-color: rgb(255, 120, 129);
  --h2-accent-color: rgb(251, 187, 131);
  --h3-accent-color: rgb(255, 232, 139);
  --h4-accent-color: rgb(124, 211, 124);
  --h5-accent-color: rgb(137, 189, 244);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(203, 158, 255);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 9%, 50%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 16%, 54%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(242, 182, 222);
  --interactive-accent: hsl(232, 40%, 60%);
  --interactive-accent-hover: hsl(229, 40.8%, 69%);
  --interactive-accent-hsl: 232,
        40%,
        60%;
  --interactive-hover: hsl(232,
            5.71429%,
            27.77778%);
  --interactive-normal: hsl(232,
            5.71429%,
            25%);
  --italic-color: rgb(251, 187, 131);
  --line-height-customize: 1.5;
  --link-color: hsl(229, 40.8%, 69%);
  --link-color-hover: hsl(227, 42%, 77.4%);
  --link-external-color: rgb(137, 189, 244);
  --link-external-color-hover: rgb(137, 189, 244);
  --link-unresolved-color: hsl(229, 40.8%, 69%);
  --link-unresolved-decoration-color: hsla(232,
        40%,
        60%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232, 8%, 15.30612%);
  --menu-border-color: hsla(232, 16%, 54%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --on-border-dark: hsla(232, 16%, 54%);
  --on-border-light: hsla(232, 16%, 54%);
  --pdf-background: hsl(232, 8%, 16.66667%);
  --pdf-page-background: hsl(232, 8%, 16.66667%);
  --pdf-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --pdf-sidebar-background: hsl(232, 8%, 16.66667%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.15);
  --scrollbar-bg: rgba(255, 255, 255, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(232, 12%, 75%);
  --search-icon-color: hsl(232, 12%, 75%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 15%, 85%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(232, 8%, 19.23077%);
  --setting-items-border-color: hsla(232, 16%, 54%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 16%, 54%, 0.2), inset 0 2px 4px 0 hsla(232, 16%, 54%, 0.1), inset 0 1px 1px 1px hsla(232, 16%, 54%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 16%, 54%, 0.2), 0 0 4px hsla(232, 16%, 54%, 0.2), 0px 2px 6px -4px hsla(232, 16%, 54%, 0.1), inset 0 -1px 3px 0 hsl(232,
            7.40741%,
            20.83333%);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shiki-active-tab-border-color: hsl(232, 12%, 75%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 9%, 50%);
  --shiki-code-function: rgb(124, 211, 124);
  --shiki-code-important: rgb(251, 187, 131);
  --shiki-code-keyword: rgb(242, 182, 222);
  --shiki-code-normal: hsl(232, 12%, 75%);
  --shiki-code-property: rgb(134, 223, 226);
  --shiki-code-punctuation: hsl(232, 12%, 75%);
  --shiki-code-string: rgb(255, 232, 139);
  --shiki-code-value: rgb(203, 158, 255);
  --shiki-gutter-border-color: hsla(232, 16%, 54%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 9%, 50%);
  --shiki-gutter-text-color-highlight: hsl(232, 12%, 75%);
  --shiki-highlight-green: rgba(124, 211, 124, 0.5);
  --shiki-highlight-green-background: rgba(124, 211, 124, 0.1);
  --shiki-highlight-neutral: hsl(232, 12%, 75%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 120, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 120, 129, 0.1);
  --shiki-terminal-dots-color: hsl(232, 9%, 50%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(232, 8%, 16.66667%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 120, 129);
  --sync-avatar-color-2: rgb(251, 187, 131);
  --sync-avatar-color-3: rgb(255, 232, 139);
  --sync-avatar-color-4: rgb(124, 211, 124);
  --sync-avatar-color-5: rgb(134, 223, 226);
  --sync-avatar-color-6: rgb(137, 189, 244);
  --sync-avatar-color-7: rgb(203, 158, 255);
  --sync-avatar-color-8: rgb(242, 182, 222);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 16%, 54%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 16%, 54%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232, 8%, 15.30612%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232, 8%, 15.30612%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 40%, 60%);
  --tab-text-color: hsl(232, 9%, 50%);
  --tab-text-color-active: hsl(232, 12%, 75%);
  --tab-text-color-focused: hsl(232, 12%, 75%);
  --tab-text-color-focused-active: hsl(232, 12%, 75%);
  --tab-text-color-focused-active-current: hsl(232, 15%, 85%);
  --tab-text-color-focused-highlighted: hsl(229, 40.8%, 69%);
  --table-add-button-border-color: hsla(232, 16%, 54%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 16%, 54%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(232, 40%, 60%);
  --table-drag-handle-color: hsl(232, 9%, 50%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 16%, 54%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 15%, 85%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        40%,
        60%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(232, 40%, 60%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        40%,
        60%, 0.1);
  --tag-background-hover: hsla(232,
        40%,
        60%, 0.2);
  --tag-border-color: hsla(232,
        40%,
        60%, 0.15);
  --tag-border-color-hover: hsla(232,
        40%,
        60%, 0.15);
  --tag-color: hsl(229, 40.8%, 69%);
  --tag-color-hover: hsl(229, 40.8%, 69%);
  --tag-size: 0.875em;
  --text-accent: hsl(229, 40.8%, 69%);
  --text-accent-hover: hsl(227, 42%, 77.4%);
  --text-error: rgb(255, 120, 129);
  --text-faint: hsl(232, 9%, 50%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 12%, 75%);
  --text-normal: hsl(232, 15%, 85%);
  --text-selection: hsla(232,
        40%,
        60%, 0.4);
  --text-success: rgb(124, 211, 124);
  --text-warning: rgb(251, 187, 131);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(255, 232, 139);
  border-bottom-color: rgb(211, 213, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 222);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 222);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(211, 213, 222));
  content: " ";
  font-family: var(--h3-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 21.6px);
  font-weight: var(--font-weight, 650);
  letter-spacing: var(--h3-letter-spacing, -0.1728px);
  line-height: var(--h3-line-height, 28.08px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h4 {
  --accent-h: 232;
  --accent-l: 60%;
  --accent-s: 40%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-file-dark: hsla(232, 12%, 40%, 0.25);
  --background-activated-tab-header-dark: hsla(232,
        40%,
        60%, 0.15);
  --background-activated-tab-header-light: hsl(232, 8%, 16.66667%);
  --background-mod-left-split: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-right-split: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-root-split: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-light: hsl(232, 8%, 16.66667%);
  --background-modifier-active-hover: hsla(232,
        40%,
        60%, 0.15);
  --background-modifier-border: hsla(232, 16%, 54%, 0.2);
  --background-modifier-border-focus: hsla(232, 16%, 54%, 0.3);
  --background-modifier-border-hover: hsla(232, 16%, 54%, 0.25);
  --background-modifier-border-muted: hsla(232, 16%, 54%, 0.1);
  --background-modifier-error: rgb(255, 120, 129);
  --background-modifier-error-hover: rgb(255, 120, 129);
  --background-modifier-error-rgb: 255, 120, 129;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 12%, 40%, 0.25);
  --background-modifier-success: rgb(124, 211, 124);
  --background-modifier-success-rgb: 124, 211, 124;
  --background-primary: hsl(232, 8%, 16.66667%);
  --background-primary-alt: hsl(232, 8%, 19.23077%);
  --background-secondary: hsl(232, 8%, 15.30612%);
  --background-secondary-alt: hsl(232,
            7.40741%,
            25%);
  --background-tertiary: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-dark: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-light: hsl(232,
            7.40741%,
            20.83333%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(232, 40%, 60%);
  --blur-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(255, 120, 129);
  --bold-weight: 600;
  --border-radius-activated-file-dark: 4px;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 120, 129;
  --callout-default: 137, 189, 244;
  --callout-error: 255, 120, 129;
  --callout-example: 203, 158, 255;
  --callout-fail: 255, 120, 129;
  --callout-important: 134, 223, 226;
  --callout-info: 137, 189, 244;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 251, 187, 131;
  --callout-radius: 4px;
  --callout-success: 124, 211, 124;
  --callout-summary: 134, 223, 226;
  --callout-tip: 134, 223, 226;
  --callout-title-weight: 600;
  --callout-todo: 137, 189, 244;
  --callout-warning: 251, 187, 131;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 16%, 54%, 0.2), 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 16%, 54%, 0.1), 0 0 6px hsla(232, 16%, 54%, 0.1);
  --caret-color: hsl(232, 15%, 85%);
  --checkbox-border-color: hsl(232, 9%, 50%);
  --checkbox-border-color-hover: hsl(232, 9%, 50%);
  --checkbox-color: rgb(124, 211, 124);
  --checkbox-color-hover: rgb(124, 211, 124);
  --checkbox-marker-color: hsl(232, 8%, 16.66667%);
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 9%, 50%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-color: hsla(232, 16%, 54%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-light: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-bracket-background: hsla(232, 12%, 40%, 0.25);
  --code-comment: hsl(232, 9%, 50%);
  --code-function: rgb(255, 232, 139);
  --code-important: rgb(251, 187, 131);
  --code-keyword: rgb(242, 182, 222);
  --code-normal: hsl(232, 12%, 75%);
  --code-operator: rgb(255, 120, 129);
  --code-property: rgb(134, 223, 226);
  --code-punctuation: hsl(232, 12%, 75%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(124, 211, 124);
  --code-tag: rgb(255, 120, 129);
  --code-value: rgb(203, 158, 255);
  --collapse-icon-color: hsl(232, 9%, 50%);
  --collapse-icon-color-collapsed: hsl(229, 40.8%, 69%);
  --color-accent: hsl(232, 40%, 60%);
  --color-accent-1: hsl(229, 40.8%, 69%);
  --color-accent-1-dark: hsl(229, 40.8%, 69%);
  --color-accent-2: hsl(227, 42%, 77.4%);
  --color-accent-2-dark: hsl(227, 42%, 77.4%);
  --color-accent-3: hsla(232, 16%, 54%);
  --color-accent-3-dark: hsla(232, 16%, 54%);
  --color-accent-dark: hsl(232, 40%, 60%);
  --color-accent-hsl: 232,
        40%,
        60%;
  --color-accent-hsl-dark: 232,
        40%,
        60%;
  --color-activated-file-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-light: hsl(232, 15%, 85%);
  --color-blue: rgb(137, 189, 244);
  --color-cyan: rgb(134, 223, 226);
  --color-green: rgb(124, 211, 124);
  --color-orange: rgb(251, 187, 131);
  --color-pink: rgb(242, 182, 222);
  --color-purple: rgb(203, 158, 255);
  --color-red: rgb(255, 120, 129);
  --color-yellow: rgb(255, 232, 139);
  --divider-color: hsla(232, 16%, 54%, 0.2);
  --divider-color-hover: hsl(232, 40%, 60%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(232,
            5.71429%,
            25%);
  --dropdown-background-hover: hsl(232,
            5.71429%,
            27.77778%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(232,
            5.71429%,
            25%);
  --flair-color: hsl(232, 15%, 85%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h4-weight, 625);
  --graph-line: #3F3F3F;
  --graph-node: hsl(232, 12%, 75%);
  --graph-node-attachment: rgb(255, 232, 139);
  --graph-node-focused: hsl(229, 40.8%, 69%);
  --graph-node-tag: rgb(124, 211, 124);
  --graph-node-unresolved: hsl(232, 9%, 50%);
  --graph-text: hsl(232, 15%, 85%);
  --grid-background-pattern-color: hsla(232, 16%, 54%, 0.2);
  --h1-accent-color: rgb(255, 120, 129);
  --h2-accent-color: rgb(251, 187, 131);
  --h3-accent-color: rgb(255, 232, 139);
  --h4-accent-color: rgb(124, 211, 124);
  --h5-accent-color: rgb(137, 189, 244);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(203, 158, 255);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 9%, 50%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 16%, 54%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(242, 182, 222);
  --interactive-accent: hsl(232, 40%, 60%);
  --interactive-accent-hover: hsl(229, 40.8%, 69%);
  --interactive-accent-hsl: 232,
        40%,
        60%;
  --interactive-hover: hsl(232,
            5.71429%,
            27.77778%);
  --interactive-normal: hsl(232,
            5.71429%,
            25%);
  --italic-color: rgb(251, 187, 131);
  --line-height-customize: 1.5;
  --link-color: hsl(229, 40.8%, 69%);
  --link-color-hover: hsl(227, 42%, 77.4%);
  --link-external-color: rgb(137, 189, 244);
  --link-external-color-hover: rgb(137, 189, 244);
  --link-unresolved-color: hsl(229, 40.8%, 69%);
  --link-unresolved-decoration-color: hsla(232,
        40%,
        60%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232, 8%, 15.30612%);
  --menu-border-color: hsla(232, 16%, 54%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --on-border-dark: hsla(232, 16%, 54%);
  --on-border-light: hsla(232, 16%, 54%);
  --pdf-background: hsl(232, 8%, 16.66667%);
  --pdf-page-background: hsl(232, 8%, 16.66667%);
  --pdf-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --pdf-sidebar-background: hsl(232, 8%, 16.66667%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.15);
  --scrollbar-bg: rgba(255, 255, 255, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(232, 12%, 75%);
  --search-icon-color: hsl(232, 12%, 75%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 15%, 85%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(232, 8%, 19.23077%);
  --setting-items-border-color: hsla(232, 16%, 54%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 16%, 54%, 0.2), inset 0 2px 4px 0 hsla(232, 16%, 54%, 0.1), inset 0 1px 1px 1px hsla(232, 16%, 54%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 16%, 54%, 0.2), 0 0 4px hsla(232, 16%, 54%, 0.2), 0px 2px 6px -4px hsla(232, 16%, 54%, 0.1), inset 0 -1px 3px 0 hsl(232,
            7.40741%,
            20.83333%);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shiki-active-tab-border-color: hsl(232, 12%, 75%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 9%, 50%);
  --shiki-code-function: rgb(124, 211, 124);
  --shiki-code-important: rgb(251, 187, 131);
  --shiki-code-keyword: rgb(242, 182, 222);
  --shiki-code-normal: hsl(232, 12%, 75%);
  --shiki-code-property: rgb(134, 223, 226);
  --shiki-code-punctuation: hsl(232, 12%, 75%);
  --shiki-code-string: rgb(255, 232, 139);
  --shiki-code-value: rgb(203, 158, 255);
  --shiki-gutter-border-color: hsla(232, 16%, 54%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 9%, 50%);
  --shiki-gutter-text-color-highlight: hsl(232, 12%, 75%);
  --shiki-highlight-green: rgba(124, 211, 124, 0.5);
  --shiki-highlight-green-background: rgba(124, 211, 124, 0.1);
  --shiki-highlight-neutral: hsl(232, 12%, 75%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 120, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 120, 129, 0.1);
  --shiki-terminal-dots-color: hsl(232, 9%, 50%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(232, 8%, 16.66667%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 120, 129);
  --sync-avatar-color-2: rgb(251, 187, 131);
  --sync-avatar-color-3: rgb(255, 232, 139);
  --sync-avatar-color-4: rgb(124, 211, 124);
  --sync-avatar-color-5: rgb(134, 223, 226);
  --sync-avatar-color-6: rgb(137, 189, 244);
  --sync-avatar-color-7: rgb(203, 158, 255);
  --sync-avatar-color-8: rgb(242, 182, 222);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 16%, 54%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 16%, 54%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232, 8%, 15.30612%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232, 8%, 15.30612%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 40%, 60%);
  --tab-text-color: hsl(232, 9%, 50%);
  --tab-text-color-active: hsl(232, 12%, 75%);
  --tab-text-color-focused: hsl(232, 12%, 75%);
  --tab-text-color-focused-active: hsl(232, 12%, 75%);
  --tab-text-color-focused-active-current: hsl(232, 15%, 85%);
  --tab-text-color-focused-highlighted: hsl(229, 40.8%, 69%);
  --table-add-button-border-color: hsla(232, 16%, 54%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 16%, 54%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(232, 40%, 60%);
  --table-drag-handle-color: hsl(232, 9%, 50%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 16%, 54%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 15%, 85%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        40%,
        60%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(232, 40%, 60%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        40%,
        60%, 0.1);
  --tag-background-hover: hsla(232,
        40%,
        60%, 0.2);
  --tag-border-color: hsla(232,
        40%,
        60%, 0.15);
  --tag-border-color-hover: hsla(232,
        40%,
        60%, 0.15);
  --tag-color: hsl(229, 40.8%, 69%);
  --tag-color-hover: hsl(229, 40.8%, 69%);
  --tag-size: 0.875em;
  --text-accent: hsl(229, 40.8%, 69%);
  --text-accent-hover: hsl(227, 42%, 77.4%);
  --text-error: rgb(255, 120, 129);
  --text-faint: hsl(232, 9%, 50%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 12%, 75%);
  --text-normal: hsl(232, 15%, 85%);
  --text-selection: hsla(232,
        40%,
        60%, 0.4);
  --text-success: rgb(124, 211, 124);
  --text-warning: rgb(251, 187, 131);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(124, 211, 124);
  border-bottom-color: rgb(211, 213, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 222);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 222);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(211, 213, 222));
  content: " ";
  font-family: var(--h4-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 20.4px);
  font-weight: var(--font-weight, 625);
  letter-spacing: var(--h4-letter-spacing, -0.102px);
  line-height: var(--h4-line-height, 28.56px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h5 {
  --accent-h: 232;
  --accent-l: 60%;
  --accent-s: 40%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-file-dark: hsla(232, 12%, 40%, 0.25);
  --background-activated-tab-header-dark: hsla(232,
        40%,
        60%, 0.15);
  --background-activated-tab-header-light: hsl(232, 8%, 16.66667%);
  --background-mod-left-split: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-right-split: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-root-split: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-light: hsl(232, 8%, 16.66667%);
  --background-modifier-active-hover: hsla(232,
        40%,
        60%, 0.15);
  --background-modifier-border: hsla(232, 16%, 54%, 0.2);
  --background-modifier-border-focus: hsla(232, 16%, 54%, 0.3);
  --background-modifier-border-hover: hsla(232, 16%, 54%, 0.25);
  --background-modifier-border-muted: hsla(232, 16%, 54%, 0.1);
  --background-modifier-error: rgb(255, 120, 129);
  --background-modifier-error-hover: rgb(255, 120, 129);
  --background-modifier-error-rgb: 255, 120, 129;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 12%, 40%, 0.25);
  --background-modifier-success: rgb(124, 211, 124);
  --background-modifier-success-rgb: 124, 211, 124;
  --background-primary: hsl(232, 8%, 16.66667%);
  --background-primary-alt: hsl(232, 8%, 19.23077%);
  --background-secondary: hsl(232, 8%, 15.30612%);
  --background-secondary-alt: hsl(232,
            7.40741%,
            25%);
  --background-tertiary: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-dark: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-light: hsl(232,
            7.40741%,
            20.83333%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(232, 40%, 60%);
  --blur-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(255, 120, 129);
  --bold-weight: 600;
  --border-radius-activated-file-dark: 4px;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 120, 129;
  --callout-default: 137, 189, 244;
  --callout-error: 255, 120, 129;
  --callout-example: 203, 158, 255;
  --callout-fail: 255, 120, 129;
  --callout-important: 134, 223, 226;
  --callout-info: 137, 189, 244;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 251, 187, 131;
  --callout-radius: 4px;
  --callout-success: 124, 211, 124;
  --callout-summary: 134, 223, 226;
  --callout-tip: 134, 223, 226;
  --callout-title-weight: 600;
  --callout-todo: 137, 189, 244;
  --callout-warning: 251, 187, 131;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 16%, 54%, 0.2), 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 16%, 54%, 0.1), 0 0 6px hsla(232, 16%, 54%, 0.1);
  --caret-color: hsl(232, 15%, 85%);
  --checkbox-border-color: hsl(232, 9%, 50%);
  --checkbox-border-color-hover: hsl(232, 9%, 50%);
  --checkbox-color: rgb(124, 211, 124);
  --checkbox-color-hover: rgb(124, 211, 124);
  --checkbox-marker-color: hsl(232, 8%, 16.66667%);
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 9%, 50%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-color: hsla(232, 16%, 54%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-light: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-bracket-background: hsla(232, 12%, 40%, 0.25);
  --code-comment: hsl(232, 9%, 50%);
  --code-function: rgb(255, 232, 139);
  --code-important: rgb(251, 187, 131);
  --code-keyword: rgb(242, 182, 222);
  --code-normal: hsl(232, 12%, 75%);
  --code-operator: rgb(255, 120, 129);
  --code-property: rgb(134, 223, 226);
  --code-punctuation: hsl(232, 12%, 75%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(124, 211, 124);
  --code-tag: rgb(255, 120, 129);
  --code-value: rgb(203, 158, 255);
  --collapse-icon-color: hsl(232, 9%, 50%);
  --collapse-icon-color-collapsed: hsl(229, 40.8%, 69%);
  --color-accent: hsl(232, 40%, 60%);
  --color-accent-1: hsl(229, 40.8%, 69%);
  --color-accent-1-dark: hsl(229, 40.8%, 69%);
  --color-accent-2: hsl(227, 42%, 77.4%);
  --color-accent-2-dark: hsl(227, 42%, 77.4%);
  --color-accent-3: hsla(232, 16%, 54%);
  --color-accent-3-dark: hsla(232, 16%, 54%);
  --color-accent-dark: hsl(232, 40%, 60%);
  --color-accent-hsl: 232,
        40%,
        60%;
  --color-accent-hsl-dark: 232,
        40%,
        60%;
  --color-activated-file-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-light: hsl(232, 15%, 85%);
  --color-blue: rgb(137, 189, 244);
  --color-cyan: rgb(134, 223, 226);
  --color-green: rgb(124, 211, 124);
  --color-orange: rgb(251, 187, 131);
  --color-pink: rgb(242, 182, 222);
  --color-purple: rgb(203, 158, 255);
  --color-red: rgb(255, 120, 129);
  --color-yellow: rgb(255, 232, 139);
  --divider-color: hsla(232, 16%, 54%, 0.2);
  --divider-color-hover: hsl(232, 40%, 60%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(232,
            5.71429%,
            25%);
  --dropdown-background-hover: hsl(232,
            5.71429%,
            27.77778%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(232,
            5.71429%,
            25%);
  --flair-color: hsl(232, 15%, 85%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h5-weight, 600);
  --graph-line: #3F3F3F;
  --graph-node: hsl(232, 12%, 75%);
  --graph-node-attachment: rgb(255, 232, 139);
  --graph-node-focused: hsl(229, 40.8%, 69%);
  --graph-node-tag: rgb(124, 211, 124);
  --graph-node-unresolved: hsl(232, 9%, 50%);
  --graph-text: hsl(232, 15%, 85%);
  --grid-background-pattern-color: hsla(232, 16%, 54%, 0.2);
  --h1-accent-color: rgb(255, 120, 129);
  --h2-accent-color: rgb(251, 187, 131);
  --h3-accent-color: rgb(255, 232, 139);
  --h4-accent-color: rgb(124, 211, 124);
  --h5-accent-color: rgb(137, 189, 244);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(203, 158, 255);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 9%, 50%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 16%, 54%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(242, 182, 222);
  --interactive-accent: hsl(232, 40%, 60%);
  --interactive-accent-hover: hsl(229, 40.8%, 69%);
  --interactive-accent-hsl: 232,
        40%,
        60%;
  --interactive-hover: hsl(232,
            5.71429%,
            27.77778%);
  --interactive-normal: hsl(232,
            5.71429%,
            25%);
  --italic-color: rgb(251, 187, 131);
  --line-height-customize: 1.5;
  --link-color: hsl(229, 40.8%, 69%);
  --link-color-hover: hsl(227, 42%, 77.4%);
  --link-external-color: rgb(137, 189, 244);
  --link-external-color-hover: rgb(137, 189, 244);
  --link-unresolved-color: hsl(229, 40.8%, 69%);
  --link-unresolved-decoration-color: hsla(232,
        40%,
        60%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232, 8%, 15.30612%);
  --menu-border-color: hsla(232, 16%, 54%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --on-border-dark: hsla(232, 16%, 54%);
  --on-border-light: hsla(232, 16%, 54%);
  --pdf-background: hsl(232, 8%, 16.66667%);
  --pdf-page-background: hsl(232, 8%, 16.66667%);
  --pdf-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --pdf-sidebar-background: hsl(232, 8%, 16.66667%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.15);
  --scrollbar-bg: rgba(255, 255, 255, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(232, 12%, 75%);
  --search-icon-color: hsl(232, 12%, 75%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 15%, 85%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(232, 8%, 19.23077%);
  --setting-items-border-color: hsla(232, 16%, 54%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 16%, 54%, 0.2), inset 0 2px 4px 0 hsla(232, 16%, 54%, 0.1), inset 0 1px 1px 1px hsla(232, 16%, 54%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 16%, 54%, 0.2), 0 0 4px hsla(232, 16%, 54%, 0.2), 0px 2px 6px -4px hsla(232, 16%, 54%, 0.1), inset 0 -1px 3px 0 hsl(232,
            7.40741%,
            20.83333%);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shiki-active-tab-border-color: hsl(232, 12%, 75%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 9%, 50%);
  --shiki-code-function: rgb(124, 211, 124);
  --shiki-code-important: rgb(251, 187, 131);
  --shiki-code-keyword: rgb(242, 182, 222);
  --shiki-code-normal: hsl(232, 12%, 75%);
  --shiki-code-property: rgb(134, 223, 226);
  --shiki-code-punctuation: hsl(232, 12%, 75%);
  --shiki-code-string: rgb(255, 232, 139);
  --shiki-code-value: rgb(203, 158, 255);
  --shiki-gutter-border-color: hsla(232, 16%, 54%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 9%, 50%);
  --shiki-gutter-text-color-highlight: hsl(232, 12%, 75%);
  --shiki-highlight-green: rgba(124, 211, 124, 0.5);
  --shiki-highlight-green-background: rgba(124, 211, 124, 0.1);
  --shiki-highlight-neutral: hsl(232, 12%, 75%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 120, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 120, 129, 0.1);
  --shiki-terminal-dots-color: hsl(232, 9%, 50%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(232, 8%, 16.66667%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 120, 129);
  --sync-avatar-color-2: rgb(251, 187, 131);
  --sync-avatar-color-3: rgb(255, 232, 139);
  --sync-avatar-color-4: rgb(124, 211, 124);
  --sync-avatar-color-5: rgb(134, 223, 226);
  --sync-avatar-color-6: rgb(137, 189, 244);
  --sync-avatar-color-7: rgb(203, 158, 255);
  --sync-avatar-color-8: rgb(242, 182, 222);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 16%, 54%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 16%, 54%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232, 8%, 15.30612%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232, 8%, 15.30612%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 40%, 60%);
  --tab-text-color: hsl(232, 9%, 50%);
  --tab-text-color-active: hsl(232, 12%, 75%);
  --tab-text-color-focused: hsl(232, 12%, 75%);
  --tab-text-color-focused-active: hsl(232, 12%, 75%);
  --tab-text-color-focused-active-current: hsl(232, 15%, 85%);
  --tab-text-color-focused-highlighted: hsl(229, 40.8%, 69%);
  --table-add-button-border-color: hsla(232, 16%, 54%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 16%, 54%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(232, 40%, 60%);
  --table-drag-handle-color: hsl(232, 9%, 50%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 16%, 54%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 15%, 85%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        40%,
        60%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(232, 40%, 60%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        40%,
        60%, 0.1);
  --tag-background-hover: hsla(232,
        40%,
        60%, 0.2);
  --tag-border-color: hsla(232,
        40%,
        60%, 0.15);
  --tag-border-color-hover: hsla(232,
        40%,
        60%, 0.15);
  --tag-color: hsl(229, 40.8%, 69%);
  --tag-color-hover: hsl(229, 40.8%, 69%);
  --tag-size: 0.875em;
  --text-accent: hsl(229, 40.8%, 69%);
  --text-accent-hover: hsl(227, 42%, 77.4%);
  --text-error: rgb(255, 120, 129);
  --text-faint: hsl(232, 9%, 50%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 12%, 75%);
  --text-normal: hsl(232, 15%, 85%);
  --text-selection: hsla(232,
        40%,
        60%, 0.4);
  --text-success: rgb(124, 211, 124);
  --text-warning: rgb(251, 187, 131);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(137, 189, 244);
  border-bottom-color: rgb(211, 213, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 222);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 222);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(211, 213, 222));
  content: " ";
  font-family: var(--h5-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 19.2px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.0384px);
  line-height: var(--h5-line-height, 28.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h6 {
  --accent-h: 232;
  --accent-l: 60%;
  --accent-s: 40%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-file-dark: hsla(232, 12%, 40%, 0.25);
  --background-activated-tab-header-dark: hsla(232,
        40%,
        60%, 0.15);
  --background-activated-tab-header-light: hsl(232, 8%, 16.66667%);
  --background-mod-left-split: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-left-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-right-split: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-right-split-light: hsl(232, 8%, 16.66667%);
  --background-mod-root-split: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-dark: hsl(232, 8%, 16.66667%);
  --background-mod-root-split-light: hsl(232, 8%, 16.66667%);
  --background-modifier-active-hover: hsla(232,
        40%,
        60%, 0.15);
  --background-modifier-border: hsla(232, 16%, 54%, 0.2);
  --background-modifier-border-focus: hsla(232, 16%, 54%, 0.3);
  --background-modifier-border-hover: hsla(232, 16%, 54%, 0.25);
  --background-modifier-border-muted: hsla(232, 16%, 54%, 0.1);
  --background-modifier-error: rgb(255, 120, 129);
  --background-modifier-error-hover: rgb(255, 120, 129);
  --background-modifier-error-rgb: 255, 120, 129;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 12%, 40%, 0.25);
  --background-modifier-success: rgb(124, 211, 124);
  --background-modifier-success-rgb: 124, 211, 124;
  --background-primary: hsl(232, 8%, 16.66667%);
  --background-primary-alt: hsl(232, 8%, 19.23077%);
  --background-secondary: hsl(232, 8%, 15.30612%);
  --background-secondary-alt: hsl(232,
            7.40741%,
            25%);
  --background-tertiary: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-dark: hsl(232,
            7.40741%,
            20.83333%);
  --background-underlying-light: hsl(232,
            7.40741%,
            20.83333%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(232, 40%, 60%);
  --blur-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(255, 120, 129);
  --bold-weight: 600;
  --border-radius-activated-file-dark: 4px;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 120, 129;
  --callout-default: 137, 189, 244;
  --callout-error: 255, 120, 129;
  --callout-example: 203, 158, 255;
  --callout-fail: 255, 120, 129;
  --callout-important: 134, 223, 226;
  --callout-info: 137, 189, 244;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 251, 187, 131;
  --callout-radius: 4px;
  --callout-success: 124, 211, 124;
  --callout-summary: 134, 223, 226;
  --callout-tip: 134, 223, 226;
  --callout-title-weight: 600;
  --callout-todo: 137, 189, 244;
  --callout-warning: 251, 187, 131;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 16%, 54%, 0.2), 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 16%, 54%, 0.1), 0 0 6px hsla(232, 16%, 54%, 0.1);
  --caret-color: hsl(232, 15%, 85%);
  --checkbox-border-color: hsl(232, 9%, 50%);
  --checkbox-border-color-hover: hsl(232, 9%, 50%);
  --checkbox-color: rgb(124, 211, 124);
  --checkbox-color-hover: rgb(124, 211, 124);
  --checkbox-marker-color: hsl(232, 8%, 16.66667%);
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 9%, 50%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-color: hsla(232, 16%, 54%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-border-light: 1px dashed hsla(232, 16%, 54%, 0.2);
  --code-bracket-background: hsla(232, 12%, 40%, 0.25);
  --code-comment: hsl(232, 9%, 50%);
  --code-function: rgb(255, 232, 139);
  --code-important: rgb(251, 187, 131);
  --code-keyword: rgb(242, 182, 222);
  --code-normal: hsl(232, 12%, 75%);
  --code-operator: rgb(255, 120, 129);
  --code-property: rgb(134, 223, 226);
  --code-punctuation: hsl(232, 12%, 75%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(124, 211, 124);
  --code-tag: rgb(255, 120, 129);
  --code-value: rgb(203, 158, 255);
  --collapse-icon-color: hsl(232, 9%, 50%);
  --collapse-icon-color-collapsed: hsl(229, 40.8%, 69%);
  --color-accent: hsl(232, 40%, 60%);
  --color-accent-1: hsl(229, 40.8%, 69%);
  --color-accent-1-dark: hsl(229, 40.8%, 69%);
  --color-accent-2: hsl(227, 42%, 77.4%);
  --color-accent-2-dark: hsl(227, 42%, 77.4%);
  --color-accent-3: hsla(232, 16%, 54%);
  --color-accent-3-dark: hsla(232, 16%, 54%);
  --color-accent-dark: hsl(232, 40%, 60%);
  --color-accent-hsl: 232,
        40%,
        60%;
  --color-accent-hsl-dark: 232,
        40%,
        60%;
  --color-activated-file-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-dark: hsl(232, 15%, 85%);
  --color-activated-tab-header-light: hsl(232, 15%, 85%);
  --color-blue: rgb(137, 189, 244);
  --color-cyan: rgb(134, 223, 226);
  --color-green: rgb(124, 211, 124);
  --color-orange: rgb(251, 187, 131);
  --color-pink: rgb(242, 182, 222);
  --color-purple: rgb(203, 158, 255);
  --color-red: rgb(255, 120, 129);
  --color-yellow: rgb(255, 232, 139);
  --divider-color: hsla(232, 16%, 54%, 0.2);
  --divider-color-hover: hsl(232, 40%, 60%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(232,
            5.71429%,
            25%);
  --dropdown-background-hover: hsl(232,
            5.71429%,
            27.77778%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(232,
            5.71429%,
            25%);
  --flair-color: hsl(232, 15%, 85%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h6-weight, 575);
  --graph-line: #3F3F3F;
  --graph-node: hsl(232, 12%, 75%);
  --graph-node-attachment: rgb(255, 232, 139);
  --graph-node-focused: hsl(229, 40.8%, 69%);
  --graph-node-tag: rgb(124, 211, 124);
  --graph-node-unresolved: hsl(232, 9%, 50%);
  --graph-text: hsl(232, 15%, 85%);
  --grid-background-pattern-color: hsla(232, 16%, 54%, 0.2);
  --h1-accent-color: rgb(255, 120, 129);
  --h2-accent-color: rgb(251, 187, 131);
  --h3-accent-color: rgb(255, 232, 139);
  --h4-accent-color: rgb(124, 211, 124);
  --h5-accent-color: rgb(137, 189, 244);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(203, 158, 255);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 9%, 50%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 16%, 54%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(242, 182, 222);
  --interactive-accent: hsl(232, 40%, 60%);
  --interactive-accent-hover: hsl(229, 40.8%, 69%);
  --interactive-accent-hsl: 232,
        40%,
        60%;
  --interactive-hover: hsl(232,
            5.71429%,
            27.77778%);
  --interactive-normal: hsl(232,
            5.71429%,
            25%);
  --italic-color: rgb(251, 187, 131);
  --line-height-customize: 1.5;
  --link-color: hsl(229, 40.8%, 69%);
  --link-color-hover: hsl(227, 42%, 77.4%);
  --link-external-color: rgb(137, 189, 244);
  --link-external-color-hover: rgb(137, 189, 244);
  --link-unresolved-color: hsl(229, 40.8%, 69%);
  --link-unresolved-decoration-color: hsla(232,
        40%,
        60%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232, 8%, 15.30612%);
  --menu-border-color: hsla(232, 16%, 54%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --on-border-dark: hsla(232, 16%, 54%);
  --on-border-light: hsla(232, 16%, 54%);
  --pdf-background: hsl(232, 8%, 16.66667%);
  --pdf-page-background: hsl(232, 8%, 16.66667%);
  --pdf-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --pdf-sidebar-background: hsl(232, 8%, 16.66667%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.15);
  --scrollbar-bg: rgba(255, 255, 255, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(232, 12%, 75%);
  --search-icon-color: hsl(232, 12%, 75%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 15%, 85%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(232, 8%, 19.23077%);
  --setting-items-border-color: hsla(232, 16%, 54%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 16%, 54%, 0.2), inset 0 2px 4px 0 hsla(232, 16%, 54%, 0.1), inset 0 1px 1px 1px hsla(232, 16%, 54%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 16%, 54%, 0.2), 0 0 4px hsla(232, 16%, 54%, 0.2), 0px 2px 6px -4px hsla(232, 16%, 54%, 0.1), inset 0 -1px 3px 0 hsl(232,
            7.40741%,
            20.83333%);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3);
  --shiki-active-tab-border-color: hsl(232, 12%, 75%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 9%, 50%);
  --shiki-code-function: rgb(124, 211, 124);
  --shiki-code-important: rgb(251, 187, 131);
  --shiki-code-keyword: rgb(242, 182, 222);
  --shiki-code-normal: hsl(232, 12%, 75%);
  --shiki-code-property: rgb(134, 223, 226);
  --shiki-code-punctuation: hsl(232, 12%, 75%);
  --shiki-code-string: rgb(255, 232, 139);
  --shiki-code-value: rgb(203, 158, 255);
  --shiki-gutter-border-color: hsla(232, 16%, 54%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 9%, 50%);
  --shiki-gutter-text-color-highlight: hsl(232, 12%, 75%);
  --shiki-highlight-green: rgba(124, 211, 124, 0.5);
  --shiki-highlight-green-background: rgba(124, 211, 124, 0.1);
  --shiki-highlight-neutral: hsl(232, 12%, 75%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 120, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 120, 129, 0.1);
  --shiki-terminal-dots-color: hsl(232, 9%, 50%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(232, 8%, 16.66667%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 120, 129);
  --sync-avatar-color-2: rgb(251, 187, 131);
  --sync-avatar-color-3: rgb(255, 232, 139);
  --sync-avatar-color-4: rgb(124, 211, 124);
  --sync-avatar-color-5: rgb(134, 223, 226);
  --sync-avatar-color-6: rgb(137, 189, 244);
  --sync-avatar-color-7: rgb(203, 158, 255);
  --sync-avatar-color-8: rgb(242, 182, 222);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 16%, 54%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 16%, 54%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232, 8%, 15.30612%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232, 8%, 15.30612%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 40%, 60%);
  --tab-text-color: hsl(232, 9%, 50%);
  --tab-text-color-active: hsl(232, 12%, 75%);
  --tab-text-color-focused: hsl(232, 12%, 75%);
  --tab-text-color-focused-active: hsl(232, 12%, 75%);
  --tab-text-color-focused-active-current: hsl(232, 15%, 85%);
  --tab-text-color-focused-highlighted: hsl(229, 40.8%, 69%);
  --table-add-button-border-color: hsla(232, 16%, 54%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 16%, 54%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(232, 40%, 60%);
  --table-drag-handle-color: hsl(232, 9%, 50%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 16%, 54%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 15%, 85%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        40%,
        60%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(232, 40%, 60%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        40%,
        60%, 0.1);
  --tag-background-hover: hsla(232,
        40%,
        60%, 0.2);
  --tag-border-color: hsla(232,
        40%,
        60%, 0.15);
  --tag-border-color-hover: hsla(232,
        40%,
        60%, 0.15);
  --tag-color: hsl(229, 40.8%, 69%);
  --tag-color-hover: hsl(229, 40.8%, 69%);
  --tag-size: 0.875em;
  --text-accent: hsl(229, 40.8%, 69%);
  --text-accent-hover: hsl(227, 42%, 77.4%);
  --text-error: rgb(255, 120, 129);
  --text-faint: hsl(232, 9%, 50%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 12%, 75%);
  --text-normal: hsl(232, 15%, 85%);
  --text-selection: hsla(232,
        40%,
        60%, 0.4);
  --text-success: rgb(124, 211, 124);
  --text-warning: rgb(251, 187, 131);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(203, 158, 255);
  border-bottom-color: rgb(211, 213, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 222);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 222);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(211, 213, 222));
  content: " ";
  font-family: var(--h6-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 18px);
  font-weight: var(--font-weight, 575);
  line-height: var(--h6-line-height, 27px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(116, 119, 139);
  border-radius: 6px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(124, 211, 124));
  border-color: rgb(124, 211, 124);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(184, 186, 199));
  outline: rgb(184, 186, 199) none 0px;
  text-decoration-color: rgb(184, 186, 199);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  color: var(--link-external-color, rgb(137, 189, 244));
  outline: rgb(137, 189, 244) none 0px;
  text-decoration-color: rgb(137, 189, 244);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  color: var(--link-color, rgb(144, 156, 208));
  outline: rgb(144, 156, 208) none 0px;
  text-decoration-color: rgb(144, 156, 208);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link.broken {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  color: var(--link-unresolved-color, rgb(144, 156, 208));
  outline: rgb(144, 156, 208) none 0px;
  text-decoration: underline rgba(112, 123, 194, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(112, 123, 194, 0.3));
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body dt {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(116, 119, 139));
}

html[saved-theme="dark"] body blockquote {
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body table {
  color: rgb(211, 213, 222);
  width: 663px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-left-color: rgba(119, 124, 156, 0.2);
  border-right-color: rgba(119, 124, 156, 0.2);
  border-top-color: rgba(119, 124, 156, 0.2);
  color: var(--table-text-color, rgb(211, 213, 222));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-left-color: rgba(119, 124, 156, 0.2);
  border-right-color: rgba(119, 124, 156, 0.2);
  border-top-color: rgba(119, 124, 156, 0.2);
  color: var(--table-header-color, rgb(211, 213, 222));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-left-color: rgba(119, 124, 156, 0.2);
  border-right-color: rgba(119, 124, 156, 0.2);
  border-top-color: rgba(119, 124, 156, 0.2);
  color: var(--inline-code-normal, rgb(242, 182, 222));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgba(119, 124, 156, 0.2);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgba(119, 124, 156, 0.2);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgba(119, 124, 156, 0.2);
  border-top-style: dashed;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"));
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(45, 46, 53));
  border-bottom-color: rgb(184, 186, 199);
  border-left-color: rgb(184, 186, 199);
  border-right-color: rgb(184, 186, 199);
  border-top-color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(211, 213, 222);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(112, 123, 194);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(116, 119, 139);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(116, 119, 139);
  border-right-color: rgb(116, 119, 139);
  border-top-color: rgb(116, 119, 139);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  transition: box-shadow 0.3s cubic-bezier(0, 0.55, 0.45, 1), filter 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(116, 119, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(116, 119, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(116, 119, 139);
  text-decoration: line-through 1px rgb(116, 119, 139);
  text-decoration-color: rgb(116, 119, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(211, 213, 222);
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M0 8a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 0 8Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M0 8a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 0 8Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M8 0a2.463 2.463 0 0 0-2.43 2.864v.002L6.686 9.55a1.334 1.334 0 0 0 2.63 0l1.114-6.685v-.002A2.463 2.463 0 0 0 8 0Zm0 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M8 0a2.463 2.463 0 0 0-2.43 2.864v.002L6.686 9.55a1.334 1.334 0 0 0 2.63 0l1.114-6.685v-.002A2.463 2.463 0 0 0 8 0Zm0 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.871 3.692c0 3.56-3.956 3.319-3.956 5.78v.014c0 .284-.23.514-.514.514H6.243a.514.514 0 0 1-.515-.514V9.34c0-3.803 3.473-3.56 3.473-5.341 0-.77-.571-1.23-1.517-1.23-.768 0-1.554.335-2.268 1.022a.512.512 0 0 1-.67.031l-1.419-1.11a.513.513 0 0 1-.056-.76C4.457.731 5.997 0 8.036 0c3.23 0 4.835 1.736 4.835 3.692ZM9.355 14c0 1.099-.88 2-2 2-1.1 0-2-.901-2-2s.9-2 2-2c1.12 0 2 .901 2 2Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.871 3.692c0 3.56-3.956 3.319-3.956 5.78v.014c0 .284-.23.514-.514.514H6.243a.514.514 0 0 1-.515-.514V9.34c0-3.803 3.473-3.56 3.473-5.341 0-.77-.571-1.23-1.517-1.23-.768 0-1.554.335-2.268 1.022a.512.512 0 0 1-.67.031l-1.419-1.11a.513.513 0 0 1-.056-.76C4.457.731 5.997 0 8.036 0c3.23 0 4.835 1.736 4.835 3.692ZM9.355 14c0 1.099-.88 2-2 2-1.1 0-2-.901-2-2s.9-2 2-2c1.12 0 2 .901 2 2Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 187, 131);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
  color: rgb(203, 158, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 232, 139);
  color: rgb(255, 232, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(134, 223, 226);
  color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(137, 189, 244);
  color: rgb(242, 182, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 129);
  color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 129);
  color: rgb(255, 120, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 129);
  color: rgb(255, 120, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M10.34 14.025c-.007.002-.56.186-1.04.186-.265 0-.372-.055-.406-.08-.168-.116-.48-.335.054-1.4l1-1.993c.593-1.184.681-2.33.245-3.226-.356-.733-1.039-1.236-1.92-1.416A5 5 0 0 0 7.315 6C5.466 6 4.221 7.08 4.17 7.125a.5.5 0 0 0 .493.848c.005-.002.559-.187 1.04-.187.262 0 .368.055.401.078.17.119.482.34-.05 1.403l-1.001 1.995c-.594 1.185-.681 2.33-.245 3.225.356.733 1.038 1.236 1.921 1.416.314.063.636.097.954.097 1.85 0 3.096-1.08 3.148-1.126a.5.5 0 0 0-.49-.85ZM9.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M10.34 14.025c-.007.002-.56.186-1.04.186-.265 0-.372-.055-.406-.08-.168-.116-.48-.335.054-1.4l1-1.993c.593-1.184.681-2.33.245-3.226-.356-.733-1.039-1.236-1.92-1.416A5 5 0 0 0 7.315 6C5.466 6 4.221 7.08 4.17 7.125a.5.5 0 0 0 .493.848c.005-.002.559-.187 1.04-.187.262 0 .368.055.401.078.17.119.482.34-.05 1.403l-1.001 1.995c-.594 1.185-.681 2.33-.245 3.225.356.733 1.038 1.236 1.921 1.416.314.063.636.097.954.097 1.85 0 3.096-1.08 3.148-1.126a.5.5 0 0 0-.49-.85ZM9.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 232, 139);
  color: rgb(251, 187, 131);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 232, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(203, 158, 255);
  color: rgb(255, 120, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 129);
  color: rgb(134, 223, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 211, 124);
  color: rgb(124, 211, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.781 8.34c-.84-.665-2.146-1.247-3.354-1.715V4.396a28.48 28.48 0 0 1 2.123.772c.096.04.209.006.265-.082l1.193-1.805a.219.219 0 0 0-.079-.314c-.68-.365-2.072-.93-3.502-1.293V.366a.27.27 0 0 0-.27-.271H6.985a.271.271 0 0 0-.271.271v.973c-2.014.092-3.38.795-4.166 2.147-.616 1.06-.613 2.255.004 3.118.645.922 1.699 1.332 3.031 1.851l.172.066c.309.118.634.239.959.359v2.715c-1.41-.335-2.736-1.023-2.98-1.189a.218.218 0 0 0-.296.048l-1.444 1.883a.211.211 0 0 0-.043.163.22.22 0 0 0 .086.145c.874.648 2.145 1.266 3.403 1.654a12.4 12.4 0 0 0 1.275.316v1.018c0 .148.121.27.271.27h2.173a.27.27 0 0 0 .27-.27v-.845c1.928-.16 3.368-.997 4.192-2.45.793-1.402.49-2.858-.839-3.998ZM6.712 4.014v1.643c-.624-.2-.993-.394-.953-.872.04-.49.51-.69.954-.771Zm2.716 5.875c.458.205.806.42.927.689.069.152.063.326-.016.533-.14.364-.502.553-.912.649V9.889Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.781 8.34c-.84-.665-2.146-1.247-3.354-1.715V4.396a28.48 28.48 0 0 1 2.123.772c.096.04.209.006.265-.082l1.193-1.805a.219.219 0 0 0-.079-.314c-.68-.365-2.072-.93-3.502-1.293V.366a.27.27 0 0 0-.27-.271H6.985a.271.271 0 0 0-.271.271v.973c-2.014.092-3.38.795-4.166 2.147-.616 1.06-.613 2.255.004 3.118.645.922 1.699 1.332 3.031 1.851l.172.066c.309.118.634.239.959.359v2.715c-1.41-.335-2.736-1.023-2.98-1.189a.218.218 0 0 0-.296.048l-1.444 1.883a.211.211 0 0 0-.043.163.22.22 0 0 0 .086.145c.874.648 2.145 1.266 3.403 1.654a12.4 12.4 0 0 0 1.275.316v1.018c0 .148.121.27.271.27h2.173a.27.27 0 0 0 .27-.27v-.845c1.928-.16 3.368-.997 4.192-2.45.793-1.402.49-2.858-.839-3.998ZM6.712 4.014v1.643c-.624-.2-.993-.394-.953-.872.04-.49.51-.69.954-.771Zm2.716 5.875c.458.205.806.42.927.689.069.152.063.326-.016.533-.14.364-.502.553-.912.649V9.889Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 211, 124);
  color: rgb(124, 211, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 211, 124);
  color: rgb(124, 211, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 134, 223, 226);
  background: rgba(134, 223, 226, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(134, 223, 226, 0.25);
  border-left-color: rgba(134, 223, 226, 0.25);
  border-right-color: rgba(134, 223, 226, 0.25);
  border-top-color: rgba(134, 223, 226, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 255, 120, 129);
  background: rgba(255, 120, 129, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 120, 129, 0.25);
  border-left-color: rgba(255, 120, 129, 0.25);
  border-right-color: rgba(255, 120, 129, 0.25);
  border-top-color: rgba(255, 120, 129, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 120, 129);
  background: rgba(255, 120, 129, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 120, 129, 0.25);
  border-left-color: rgba(255, 120, 129, 0.25);
  border-right-color: rgba(255, 120, 129, 0.25);
  border-top-color: rgba(255, 120, 129, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 203, 158, 255);
  background: rgba(203, 158, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(203, 158, 255, 0.25);
  border-left-color: rgba(203, 158, 255, 0.25);
  border-right-color: rgba(203, 158, 255, 0.25);
  border-top-color: rgba(203, 158, 255, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 120, 129);
  background: rgba(255, 120, 129, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 120, 129, 0.25);
  border-left-color: rgba(255, 120, 129, 0.25);
  border-right-color: rgba(255, 120, 129, 0.25);
  border-top-color: rgba(255, 120, 129, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 137, 189, 244);
  background: rgba(137, 189, 244, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 137, 189, 244);
  background: rgba(137, 189, 244, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 251, 187, 131);
  background: rgba(251, 187, 131, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(251, 187, 131, 0.25);
  border-left-color: rgba(251, 187, 131, 0.25);
  border-right-color: rgba(251, 187, 131, 0.25);
  border-top-color: rgba(251, 187, 131, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 124, 211, 124);
  background: rgba(124, 211, 124, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(124, 211, 124, 0.25);
  border-left-color: rgba(124, 211, 124, 0.25);
  border-right-color: rgba(124, 211, 124, 0.25);
  border-top-color: rgba(124, 211, 124, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 134, 223, 226);
  background: rgba(134, 223, 226, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(134, 223, 226, 0.25);
  border-left-color: rgba(134, 223, 226, 0.25);
  border-right-color: rgba(134, 223, 226, 0.25);
  border-top-color: rgba(134, 223, 226, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 137, 189, 244);
  background: rgba(137, 189, 244, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 251, 187, 131);
  background: rgba(251, 187, 131, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(251, 187, 131, 0.25);
  border-left-color: rgba(251, 187, 131, 0.25);
  border-right-color: rgba(251, 187, 131, 0.25);
  border-top-color: rgba(251, 187, 131, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(211, 213, 222);
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(119, 124, 156, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(119, 124, 156, 0.3);
  border-right-color: rgba(119, 124, 156, 0.3);
  border-top-color: rgba(119, 124, 156, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--text-normal, rgb(211, 213, 222));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--workspace-background-translucent, rgba(49, 50, 57, 0.6));
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-left-color: rgba(119, 124, 156, 0.2);
  border-right-color: rgba(119, 124, 156, 0.2);
  border-top-color: rgba(119, 124, 156, 0.2);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px, rgba(119, 124, 156, 0.3) 0px -1px 0px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(211, 213, 222);
  outline: rgb(211, 213, 222) none 0px;
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(90, 93, 114, 0.25));
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-left-color: rgba(119, 124, 156, 0.2);
  border-right-color: rgba(119, 124, 156, 0.2);
  border-top-color: rgba(119, 124, 156, 0.2);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(211, 213, 222);
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(90, 93, 114, 0.25));
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(90, 93, 114, 0.25));
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(232,
        40%,
        60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(232,
        40%,
        60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(232,
        40%,
        60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(232,
        40%,
        60%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(229, 40.8%, 69%));
  --pill-color-hover: var(--tag-color-hover, hsl(229, 40.8%, 69%));
  --pill-color-remove: var(--tag-color, hsl(229, 40.8%, 69%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(229, 40.8%, 69%));
  background-color: var(--pill-background, rgba(112, 123, 194, 0.1));
  border-bottom-color: rgba(112, 123, 194, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(112, 123, 194, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(112, 123, 194, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(112, 123, 194, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(144, 156, 208);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(211, 213, 222));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(211, 213, 222));
  font-size: var(--inline-title-size, 24px);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 675);
  color: var(--h2-color, rgb(211, 213, 222));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(211, 213, 222));
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 650);
  color: var(--h3-color, rgb(211, 213, 222));
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 625);
  color: var(--h4-color, rgb(211, 213, 222));
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, rgb(211, 213, 222));
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 575);
  color: var(--h6-color, rgb(211, 213, 222));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-left-color: rgba(119, 124, 156, 0.2);
  border-right-color: rgba(119, 124, 156, 0.2);
  border-top-color: rgba(119, 124, 156, 0.2);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 137, 189, 244);
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(184, 186, 199));
  cursor: var(--cursor, pointer);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(184, 186, 199));
  cursor: var(--cursor, pointer);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(211, 213, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(184, 186, 199);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(184, 186, 199);
  border-right-color: rgb(184, 186, 199);
  border-top-color: rgb(184, 186, 199);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(184, 186, 199));
  cursor: var(--cursor, pointer);
}`,
    footer: `html[saved-theme="dark"] body footer {
  --icon-color: var(--text-muted, hsla(232, 16%, 54%));
  --icon-color-hover: var(--text-muted, hsla(232, 16%, 54%));
  --status-bar-text-color: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color: var(--text-faint, hsla(232, 16%, 54%));
  --tab-text-color-active: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color-focused: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color-focused-active: var(--text-muted, hsla(232, 16%, 54%));
  --text-faint: var(--on-border-dark, hsla(232, 16%, 54%));
  --text-muted: var(--on-border-dark, hsla(232, 16%, 54%));
  --titlebar-text-color: var(--text-muted, hsla(232, 16%, 54%));
  --titlebar-text-color-focused: var(--text-muted, hsla(232, 16%, 54%));
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(119, 124, 156));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(119, 124, 156);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  --colorful-folder-color: var(--color-red, rgb(255, 120, 129));
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(184, 186, 199));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 186, 199);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  --colorful-folder-color: var(--color-red, rgb(255, 120, 129));
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(184, 186, 199));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(119, 124, 156);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(119, 124, 156);
  border-right-color: rgb(119, 124, 156);
  border-top-color: rgb(119, 124, 156);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(119, 124, 156));
  cursor: var(--cursor, pointer);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(119, 124, 156);
  stroke: rgb(119, 124, 156);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(184, 186, 199);
  border-left-color: rgb(184, 186, 199);
  border-right-color: rgb(184, 186, 199);
  border-top-color: rgb(184, 186, 199);
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(116, 119, 139));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: var(--h6-accent-color, rgba(0, 0, 0, 0));
  color: var(--h6-accent-color, rgb(211, 213, 222));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(36, 37, 42));
  border-color: rgb(211, 213, 222);
  box-shadow: var(--input-shadow, rgba(0, 0, 0, 0.32) 0px 4px 8px -4px, rgba(0, 0, 0, 0.32) 0px 1px 2px 0px, rgba(0, 0, 0, 0.32) 0px 0px 0px 1px, rgba(0, 0, 0, 0.12) 0px 0px 1px 1px, rgba(255, 255, 255, 0.24) 0px 1px 0.75px 0px inset, rgba(0, 0, 0, 0.16) 0px -2px 0.75px 0px inset);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(119, 124, 156, 0.2);
  color: var(--table-header-color, rgb(211, 213, 222));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-left-color: rgba(119, 124, 156, 0.2);
  border-right-color: rgba(119, 124, 156, 0.2);
  border-top-color: rgba(119, 124, 156, 0.2);
  color: var(--text-muted, rgb(184, 186, 199));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(184, 186, 199);
  border-left-color: rgb(184, 186, 199);
  border-right-color: rgb(184, 186, 199);
  border-top-color: rgb(184, 186, 199);
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(119, 124, 156, 0.2);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(232,
        40%,
        60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(232,
        40%,
        60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(232,
        40%,
        60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(232,
        40%,
        60%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(229, 40.8%, 69%));
  --pill-color-hover: var(--tag-color-hover, hsl(229, 40.8%, 69%));
  --pill-color-remove: var(--tag-color, hsl(229, 40.8%, 69%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(229, 40.8%, 69%));
  background-color: var(--pill-background, rgba(112, 123, 194, 0.1));
  color: var(--pill-color, rgb(144, 156, 208));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(49, 50, 57));
  color: var(--text-normal, rgb(211, 213, 222));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .stacked-page-header {
  --icon-color: var(--text-muted, hsla(232, 16%, 54%));
  --icon-color-hover: var(--text-muted, hsla(232, 16%, 54%));
  --status-bar-text-color: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color: var(--text-faint, hsla(232, 16%, 54%));
  --tab-text-color-active: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color-focused: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color-focused-active: var(--text-muted, hsla(232, 16%, 54%));
  --text-faint: var(--on-border-dark, hsla(232, 16%, 54%));
  --text-muted: var(--on-border-dark, hsla(232, 16%, 54%));
  --titlebar-text-color: var(--text-muted, hsla(232, 16%, 54%));
  --titlebar-text-color-focused: var(--text-muted, hsla(232, 16%, 54%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(211, 213, 222);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .navigation-progress {
  --icon-color: var(--text-muted, hsla(232, 16%, 54%));
  --icon-color-hover: var(--text-muted, hsla(232, 16%, 54%));
  --status-bar-text-color: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color: var(--text-faint, hsla(232, 16%, 54%));
  --tab-text-color-active: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color-focused: var(--text-muted, hsla(232, 16%, 54%));
  --tab-text-color-focused-active: var(--text-muted, hsla(232, 16%, 54%));
  --text-faint: var(--on-border-dark, hsla(232, 16%, 54%));
  --text-muted: var(--on-border-dark, hsla(232, 16%, 54%));
  --titlebar-text-color: var(--text-muted, hsla(232, 16%, 54%));
  --titlebar-text-color-focused: var(--text-muted, hsla(232, 16%, 54%));
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(211, 213, 222));
}

html[saved-theme="dark"] body abbr {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(119, 124, 156, 0.3);
  border-left-color: rgba(119, 124, 156, 0.3);
  border-right-color: rgba(119, 124, 156, 0.3);
  border-top-color: rgba(119, 124, 156, 0.3);
  color: var(--text-normal, rgb(184, 186, 199));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--background-modifier-hover, rgba(90, 93, 114, 0.25));
  border-bottom-color: rgb(184, 186, 199);
  border-left-color: rgb(184, 186, 199);
  border-right-color: rgb(184, 186, 199);
  border-top-color: rgb(184, 186, 199);
  color: var(--text-muted, rgb(184, 186, 199));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body summary {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(112, 123, 194, 0.1));
  border-bottom-color: rgba(112, 123, 194, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(112, 123, 194, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(112, 123, 194, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(112, 123, 194, 0.15);
  border-top-width: 1px;
  color: var(--tag-color, rgb(144, 156, 208));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: var(--accent-light-h, 232);
  --accent-l: var(--accent-light-l, 64%);
  --accent-light-h: 232;
  --accent-light-l: 64%;
  --accent-light-s: 96%;
  --accent-s: var(--accent-light-s, 96%);
  --anim-duration-fast: calc(150ms/var(--anim-speed));
  --anim-duration-moderate: calc(300ms/var(--anim-speed));
  --anim-duration-slow: calc(600ms/var(--anim-speed));
  --anim-duration-superfast: calc(75ms/var(--anim-speed));
  --anim-in: var(--anim-duration-fast) var(--anim-duration-superfast) var(--anim-motion-swing, 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1));
  --anim-out: var(--anim-duration-moderate) var(--anim-duration-slow) var(--anim-motion-swing, 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1));
  --anim-speed: 1;
  --background-activated-file-light: var(--nav-item-background-active, hsla(232, 6%, 64%, 0.15));
  --background-activated-tab-header-dark: var(--background-modifier-active-hover, hsla(232,
        96%,
        64%, 0.15));
  --background-activated-tab-header-light: var(--background-primary, #ffffff);
  --background-alt-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --background-alt-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --background-mod-left-CSS-backdrop-filter-dark: blur(32px);
  --background-mod-left-CSS-backdrop-filter-light: blur(32px);
  --background-mod-left-CSS-blend-mode-dark: normal;
  --background-mod-left-CSS-blend-mode-light: normal;
  --background-mod-left-CSS-dark: rgba(0, 0, 0, 0.5);
  --background-mod-left-CSS-light: rgba(255, 255, 255, 0.5);
  --background-mod-left-split: var(--background-primary, #ffffff);
  --background-mod-left-split-dark: var(--background-primary, #ffffff);
  --background-mod-left-split-light: var(--background-primary, #ffffff);
  --background-mod-right-CSS-backdrop-filter-dark: blur(32px);
  --background-mod-right-CSS-backdrop-filter-light: blur(32px);
  --background-mod-right-CSS-blend-mode-dark: normal;
  --background-mod-right-CSS-blend-mode-light: normal;
  --background-mod-right-CSS-dark: rgba(0, 0, 0, 0.5);
  --background-mod-right-CSS-light: rgba(255, 255, 255, 0.5);
  --background-mod-right-split: var(--background-primary, #ffffff);
  --background-mod-right-split-dark: var(--background-primary, #ffffff);
  --background-mod-right-split-light: var(--background-primary, #ffffff);
  --background-mod-root-CSS-backdrop-filter-dark: blur(32px);
  --background-mod-root-CSS-backdrop-filter-light: blur(32px);
  --background-mod-root-CSS-blend-mode-dark: normal;
  --background-mod-root-CSS-blend-mode-light: normal;
  --background-mod-root-CSS-dark: rgba(0, 0, 0, 0.5);
  --background-mod-root-CSS-light: rgba(255, 255, 255, 0.5);
  --background-mod-root-split: var(--background-primary, #ffffff);
  --background-mod-root-split-dark: var(--background-primary, #ffffff);
  --background-mod-root-split-light: var(--background-primary, #ffffff);
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)), 0.2);
  --background-modifier-border-focus: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)), 0.3);
  --background-modifier-border-hover: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)), 0.25);
  --background-modifier-border-muted: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)), 0.1);
  --background-modifier-error: var(--color-red, rgb(221, 44, 56));
  --background-modifier-error-hover: var(--color-red, rgb(221, 44, 56));
  --background-modifier-error-rgb: var(--color-red-rgb, 221, 44, 56);
  --background-modifier-form-field: var(--color-base-00, transparent);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, transparent);
  --background-modifier-hover: hsla(var(--accent-h), 6%, 64%, 0.15);
  --background-modifier-success: var(--color-green, rgb(29, 165, 29));
  --background-modifier-success-rgb: var(--color-green-rgb, 29, 165, 29);
  --background-secondary: hsl(var(--accent-h),
            calc((var(--accent-s))/6),
            calc(100% - (100% - var(--accent-l))/16));
  --background-tertiary: hsl(var(--accent-h),
            calc((var(--accent-s))/1.5),
            calc(100% - (100% - var(--accent-l))/10));
  --background-underlying: var(--background-tertiary, hsl(232,
            64%,
            96.4%));
  --background-underlying-CSS-blend-mode-dark: soft-light, luminosity, hue, luminosity, hard-light;
  --background-underlying-CSS-blend-mode-light: overlay, color-burn;
  --background-underlying-CSS-dark: linear-gradient(317deg, rgb(112, 55, 205) 0%, rgb(29, 12, 32) 19%, rgb(101, 31, 113) 19%, rgb(101, 31, 113) 33%), radial-gradient(100% 100% at 90% 9%, rgb(29, 12, 32) 0%, rgb(29, 12, 32) 100%), linear-gradient(109deg, rgb(104, 178, 248) 0%, rgb(80, 110, 229) 15%, rgb(112, 55, 205) 34%, rgb(104, 178, 248) 54%, rgb(104, 178, 248) 65%), radial-gradient(100% 100% at 20% 45%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), radial-gradient(100% 100% at 90% 27%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), linear-gradient(339deg, rgb(101, 31, 113) 0%, rgb(104, 178, 248) 12%, rgb(101, 31, 113) 14%, rgb(80, 110, 229) 19%, rgb(101, 31, 113) 20%, rgb(29, 12, 32) 30%);
  --background-underlying-CSS-light: radial-gradient(100% 100% at 13% 50%, rgb(90, 109, 237) 0%, rgb(224, 218, 247) 100%), linear-gradient(6deg, rgb(235, 242, 252) 0%, rgb(90, 109, 237) 5%, rgb(166, 126, 241) 7%, rgb(224, 218, 247) 11%, rgb(90, 109, 237) 16%), radial-gradient(100% 100% at 60% 71%, rgb(224, 218, 247) 0%, rgb(219, 244, 255) 100%), linear-gradient(97deg, rgb(90, 109, 237) 0%, rgb(90, 109, 237) 23%, rgb(90, 109, 237) 53%), linear-gradient(351deg, rgb(235, 242, 252) 0%, rgb(219, 244, 255) 1%, rgb(235, 242, 252) 6%, rgb(224, 218, 247) 10%, rgb(166, 126, 241) 13%, rgb(235, 242, 252) 29%), radial-gradient(100% 100% at 10% 32%, rgb(90, 109, 237) 0%, rgb(219, 244, 255) 100%), radial-gradient(100% 100% at 35% 63%, rgb(224, 218, 247) 0%, rgb(224, 218, 247) 100%);
  --background-underlying-dark: var(--background-tertiary, hsl(232,
            64%,
            96.4%));
  --background-underlying-light: var(--background-tertiary, hsl(232,
            64%,
            96.4%));
  --bases-embed-border-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --bases-group-heading-property-color: var(--text-muted, hsl(232, 9%, 36%));
  --bases-table-border-color: var(--table-border-color, hsla(232, 38.4%, 64%, 0.2));
  --bases-table-cell-background-selected: var(--table-selection, hsla(232,
        96%,
        64%, 0.1));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --bases-table-header-color: var(--text-muted, hsl(232, 9%, 36%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --blockquote-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --blockquote-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --blockquote-border-color: var(--interactive-accent, hsl(231, 96.96%, 68.8%));
  --blockquote-border-thickness: 3px;
  --blockquote-padding: 8px;
  --bold-color: var(--color-red, rgb(221, 44, 56));
  --bold-weight: var(--font-semibold, 600);
  --border-radius-activated-file-light: var(--radius-s, 4px);
  --border-radius-activated-tab-header-dark: 6px;
  --border-radius-activated-tab-header-light: 6px;
  --button-radius: var(--input-radius, 6px);
  --callout-bug: var(--color-red-rgb, 221, 44, 56);
  --callout-content-radius: 0px;
  --callout-default: var(--color-blue-rgb, 23, 117, 217);
  --callout-error: var(--color-red-rgb, 221, 44, 56);
  --callout-example: var(--color-purple-rgb, 143, 71, 225);
  --callout-fail: var(--color-red-rgb, 221, 44, 56);
  --callout-important: var(--color-cyan-rgb, 22, 166, 171);
  --callout-info: var(--color-blue-rgb, 23, 117, 217);
  --callout-question: var(--color-orange-rgb, 222, 116, 23);
  --callout-success: var(--color-green-rgb, 29, 165, 29);
  --callout-summary: var(--color-cyan-rgb, 22, 166, 171);
  --callout-tip: var(--color-cyan-rgb, 22, 166, 171);
  --callout-todo: var(--color-blue-rgb, 23, 117, 217);
  --callout-warning: var(--color-orange-rgb, 222, 116, 23);
  --canvas-background: var(--background-primary, transparent);
  --canvas-card-border-style: solid;
  --canvas-card-border-width: 2px;
  --canvas-card-label-color: var(--text-faint, hsl(232, 12%, 64%));
  --canvas-color-1: var(--color-red-rgb, 221, 44, 56);
  --canvas-color-2: var(--color-orange-rgb, 222, 116, 23);
  --canvas-color-3: var(--color-yellow-rgb, 192, 156, 12);
  --canvas-color-4: var(--color-green-rgb, 29, 165, 29);
  --canvas-color-5: var(--color-cyan-rgb, 22, 166, 171);
  --canvas-color-6: var(--color-purple-rgb, 143, 71, 225);
  --card-border-radius-dark: 8px;
  --card-border-radius-light: 8px;
  --card-shadow-border-radius-dark: calc(var(--card-border-radius-dark) - 1px);
  --card-shadow-border-radius-light: calc(var(--card-border-radius-light) - 1px);
  --card-shadow-dark: 0 -1px 0 0 var(--background-modifier-border), 0 0 0 1px var(--background-modifier-border);
  --card-shadow-light: 0 0 0 1px var(--background-modifier-border-muted), 0 0 6px var(--background-modifier-border-muted);
  --caret-color: var(--text-normal, hsl(232, 6%, 12%));
  --checkbox-border-color: var(--text-faint, hsl(232, 12%, 64%));
  --checkbox-border-color-hover: var(--text-faint, hsl(232, 12%, 64%));
  --checkbox-color: var(--color-green, rgb(29, 165, 29));
  --checkbox-color-hover: var(--color-green, rgb(29, 165, 29));
  --checkbox-radius: var(--radius-s, 6px);
  --checklist-done-color: var(--text-faint, hsl(232, 12%, 64%));
  --clickable-icon-radius: var(--radius-s, 6px);
  --code-background: var(--code-background-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --code-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --code-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --code-border: var(--code-border-light, 1px dashed hsla(232, 38.4%, 64%, 0.2));
  --code-border-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --code-border-dark: 1px dashed var(--background-modifier-border);
  --code-border-light: 1px dashed var(--background-modifier-border);
  --code-bracket-background: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --code-comment: var(--text-faint, hsl(232, 12%, 64%));
  --code-function: var(--color-yellow, rgb(192, 156, 12));
  --code-important: var(--color-orange, rgb(222, 116, 23));
  --code-keyword: var(--color-pink, rgb(221, 19, 153));
  --code-normal: var(--text-muted, hsl(232, 9%, 36%));
  --code-operator: var(--color-red, rgb(221, 44, 56));
  --code-property: var(--color-cyan, rgb(22, 166, 171));
  --code-punctuation: var(--text-muted, hsl(232, 9%, 36%));
  --code-string: var(--color-green, rgb(29, 165, 29));
  --code-tag: var(--color-red, rgb(221, 44, 56));
  --code-value: var(--color-purple, rgb(143, 71, 225));
  --collapse-icon-color: var(--text-faint, hsl(232, 12%, 64%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(231, 96.96%, 68.8%));
  --color-accent: var(--color-accent-light, hsl(232, 96%, 64%));
  --color-accent-1: var(--color-accent-1-light, hsl(231, 96.96%, 68.8%));
  --color-accent-1-light: hsl(calc(var(--accent-h) - 1), calc(var(--accent-s)*1.01), calc(var(--accent-l)*1.075));
  --color-accent-2: var(--color-accent-2-light, hsl(229, 97.92%, 73.6%));
  --color-accent-2-light: hsl(calc(var(--accent-h) - 3), calc(var(--accent-s)*1.02), calc(var(--accent-l)*1.15));
  --color-accent-3: var(--color-accent-3-light, hsla(232, 38.4%, 64%));
  --color-accent-3-light: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)));
  --color-accent-hsl: var(--color-accent-hsl-light, 232,
        96%,
        64%);
  --color-accent-hsl-light: var(--accent-h),
        var(--accent-s),
        var(--accent-l);
  --color-accent-light: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --color-activated-file-light: var(--nav-item-color-active, hsl(232, 6%, 12%));
  --color-activated-tab-header-dark: var(--text-normal, hsl(232, 6%, 12%));
  --color-activated-tab-header-light: var(--text-normal, hsl(232, 6%, 12%));
  --color-base-15: #f7f7f7;
  --color-base-20: #F0F0F0;
  --color-base-70: #5a5a5a;
  --color-blue: rgb(var(--color-blue-rgb));
  --color-blue-rgb: 23, 117, 217;
  --color-cyan: rgb(var(--color-cyan-rgb));
  --color-cyan-rgb: 22, 166, 171;
  --color-green: rgb(var(--color-green-rgb));
  --color-green-rgb: 29, 165, 29;
  --color-orange: rgb(var(--color-orange-rgb));
  --color-orange-rgb: 222, 116, 23;
  --color-pink: rgb(var(--color-pink-rgb));
  --color-pink-rgb: 221, 19, 153;
  --color-purple: rgb(var(--color-purple-rgb));
  --color-purple-rgb: 143, 71, 225;
  --color-red: rgb(var(--color-red-rgb));
  --color-red-rgb: 221, 44, 56;
  --color-yellow: rgb(var(--color-yellow-rgb));
  --color-yellow-rgb: 192, 156, 12;
  --cursor: pointer;
  --dark: var(--text-normal, hsl(var(--accent-h), 6%, 12%));
  --darkgray: var(--text-normal, hsl(var(--accent-h), 6%, 12%));
  --divider-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --divider-color-hover: var(--interactive-accent, hsl(231, 96.96%, 68.8%));
  --dropdown-background: var(--interactive-normal, #fcfcfc);
  --dropdown-background-hover: var(--interactive-hover, #f7f7f7);
  --embed-border-radius: 0px;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' fill-opacity='.15' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e");
  --flair-background: var(--interactive-normal, #fcfcfc);
  --flair-color: var(--text-normal, hsl(232, 6%, 12%));
  --footnote-divider-color: var(--metadata-divider-color, hsla(232, 38.4%, 64%, 0.2));
  --footnote-id-color: var(--text-muted, hsl(232, 9%, 36%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(232, 12%, 64%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsla(232, 6%, 64%, 0.15));
  --frame-right-space: 110px;
  --graph-node: var(--text-muted, hsl(232, 9%, 36%));
  --graph-node-attachment: var(--color-yellow, rgb(192, 156, 12));
  --graph-node-focused: var(--text-accent, hsl(231, 96.96%, 68.8%));
  --graph-node-tag: var(--color-green, rgb(29, 165, 29));
  --graph-node-unresolved: var(--text-faint, hsl(232, 12%, 64%));
  --graph-text: var(--text-normal, hsl(232, 6%, 12%));
  --gray: var(--text-muted, hsl(var(--accent-h), 9%, 36%));
  --grid-background-pattern-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --grid-background-pattern-size: 36px;
  --h1-accent-color: var(--color-red, rgb(221, 44, 56));
  --h1-size: 1.5em;
  --h2-accent-color: var(--color-orange, rgb(222, 116, 23));
  --h2-size: 1.425em;
  --h2-weight: 675;
  --h3-accent-color: var(--color-yellow, rgb(192, 156, 12));
  --h3-size: 1.35em;
  --h3-weight: 650;
  --h4-accent-color: var(--color-green, rgb(29, 165, 29));
  --h4-size: 1.275em;
  --h4-weight: 625;
  --h5-accent-color: var(--color-blue, rgb(23, 117, 217));
  --h5-size: 1.2em;
  --h5-weight: 600;
  --h6-accent-color: var(--color-purple, rgb(143, 71, 225));
  --h6-size: 1.125em;
  --h6-weight: 575;
  --heading-formatting: var(--text-faint, hsl(232, 12%, 64%));
  --highlight: var(--background-modifier-hover, hsla(var(--accent-h), 6%, 64%, 0.15));
  --hr-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --icon-color: var(--text-muted, hsl(232, 9%, 36%));
  --icon-color-active: var(--text-accent, hsl(231, 96.96%, 68.8%));
  --icon-color-focused: var(--text-normal, hsl(232, 6%, 12%));
  --icon-color-hover: var(--text-muted, hsl(232, 9%, 36%));
  --inline-code-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --inline-code-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --inline-code-normal: var(--color-pink, rgb(221, 19, 153));
  --inline-title-size: var(--h1-size, 1.5em);
  --input-date-separator: var(--text-faint, hsl(232, 12%, 64%));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, hsl(232, 12%, 64%));
  --input-radius: var(--input-radius-light, 6px);
  --input-radius-light: 6px;
  --input-shadow: var(--input-shadow-light, 0px 4px 8px -4px rgba(0, 0, 0, 0.16), inset 0px -1px 0px rgba(0, 0, 0, 0.04), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12), inset 0px 2px 0.75px rgba(255, 255, 255, 0.4), inset 0px -3px 0.75px rgba(0, 0, 0, 0.04));
  --input-shadow-hover: var(--input-shadow-hover-light, 0px 4px 8px -4px rgba(0, 0, 0, 0.16), inset 0px -1px 0px rgba(0, 0, 0, 0.04), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12), inset 0px 2px 0.75px rgba(255, 255, 255, 0.4), inset 0px -3px 0.75px rgba(0, 0, 0, 0.04));
  --input-shadow-hover-light: 0px 4px 8px -4px rgba(0, 0, 0, 0.16), inset 0px -1px 0px rgba(0, 0, 0, 0.04), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12), inset 0px 2px 0.75px rgba(255, 255, 255, 0.4), inset 0px -3px 0.75px rgba(0, 0, 0, 0.04);
  --input-shadow-light: 0px 4px 8px -4px rgba(0, 0, 0, 0.16), inset 0px -1px 0px rgba(0, 0, 0, 0.04), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12), inset 0px 2px 0.75px rgba(255, 255, 255, 0.4), inset 0px -3px 0.75px rgba(0, 0, 0, 0.04);
  --interactive-accent: var(--color-accent-1, hsl(231, 96.96%, 68.8%));
  --interactive-accent-hover: var(--color-accent-2, hsl(229, 97.92%, 73.6%));
  --interactive-accent-hsl: var(--color-accent-hsl, 232,
        96%,
        64%);
  --interactive-hover: var(--color-base-15, #f7f7f7);
  --interactive-normal: var(--color-base-05, #fcfcfc);
  --italic-color: var(--color-orange, rgb(222, 116, 23));
  --lightgray: var(--background-secondary, hsl(var(--accent-h),
            calc((var(--accent-s))/6),
            calc(100% - (100% - var(--accent-l))/16)));
  --line-height-customize: var(--line-height-normal, 1.5);
  --line-normal-opacity: 0.5;
  --link-color: var(--text-accent, hsl(231, 96.96%, 68.8%));
  --link-color-hover: var(--text-accent-hover, hsl(229, 97.92%, 73.6%));
  --link-external-color: var(--color-blue, rgb(23, 117, 217));
  --link-external-color-hover: var(--color-blue, rgb(23, 117, 217));
  --link-unresolved-color: var(--text-accent, hsl(231, 96.96%, 68.8%));
  --list-bullet-size-alt: calc(var(--list-bullet-size)/2);
  --list-marker-color: var(--text-faint, hsl(232, 12%, 64%));
  --list-marker-color-collapsed: var(--text-accent, hsl(231, 96.96%, 68.8%));
  --list-marker-color-hover: var(--text-muted, hsl(232, 9%, 36%));
  --menu-background: var(--background-secondary, hsl(232,
            16%,
            97.75%));
  --menu-border-color: var(--background-modifier-border-hover, hsla(232, 38.4%, 64%, 0.25));
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.028),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
        0px 15px 30px rgba(0, 0, 0, 0.07));
  --metadata-border-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --metadata-divider-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --metadata-input-background-active: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --metadata-input-text-color: var(--text-normal, hsl(232, 6%, 12%));
  --metadata-label-background-active: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --metadata-label-text-color: var(--text-muted, hsl(232, 9%, 36%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(232, 9%, 36%));
  --metadata-property-background-active: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --mix-blend-mode-on-border-dark: screen;
  --mix-blend-mode-on-border-light: normal;
  --modal-border-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(232, 12%, 64%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(232, 12%, 64%));
  --nav-heading-color: var(--text-normal, hsl(232, 6%, 12%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(232, 12%, 64%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(232, 9%, 36%));
  --nav-heading-color-hover: var(--text-normal, hsl(232, 6%, 12%));
  --nav-item-background-active: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --nav-item-background-hover: var(--background-modifier-hover, hsla(232, 6%, 64%, 0.15));
  --nav-item-color: var(--text-muted, hsl(232, 9%, 36%));
  --nav-item-color-active: var(--text-normal, hsl(232, 6%, 12%));
  --nav-item-color-highlighted: var(--text-accent, hsl(231, 96.96%, 68.8%));
  --nav-item-color-hover: var(--text-normal, hsl(232, 6%, 12%));
  --nav-item-color-selected: var(--text-normal, hsl(232, 6%, 12%));
  --nav-tag-color: var(--text-faint, hsl(232, 12%, 64%));
  --nav-tag-color-active: var(--text-muted, hsl(232, 9%, 36%));
  --nav-tag-color-hover: var(--text-muted, hsl(232, 9%, 36%));
  --new-tab-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22none%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23000%22%20fill-opacity%3D%22.26%22%20d%3D%22M51.894%2060.617c-.291%202.162-2.41%203.85-4.515%203.267-3-.825-6.474-2.112-9.6-2.352l-4.79-.362a3.163%203.163%200%200%201-2.042-.95l-8.254-8.483a3.15%203.15%200%200%201-.616-3.49S27.18%2037.053%2027.37%2036.47c.19-.582.886-5.66%201.298-8.388a3.153%203.153%200%200%201%201.011-1.875l9.765-8.767a3.165%203.165%200%200%201%204.597.394l8.202%2010.4c.464.59.702%201.32.706%202.07.009%201.97.172%206.016%201.263%208.621%201.062%202.535%203.01%205.272%204.03%206.619.39.517.45%201.216.12%201.773a138.06%20138.06%200%200%201-4.15%206.54c-1.386%202.063-2.028%204.613-2.318%206.761Z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%230E0E0E%22%20d%3D%22M51.602%2060.187c-.292%202.171-2.417%203.867-4.528%203.282-3.008-.829-6.491-2.122-9.626-2.362l-4.803-.365a3.168%203.168%200%200%201-2.048-.953l-8.277-8.523a3.168%203.168%200%200%201-.618-3.504S26.82%2036.515%2027.01%2035.93c.19-.585.888-5.686%201.301-8.427a3.17%203.17%200%200%201%201.015-1.883l9.79-8.807a3.17%203.17%200%200%201%204.61.396l8.226%2010.448c.465.59.704%201.326.707%202.078.01%201.98.173%206.043%201.268%208.66%201.064%202.547%203.018%205.296%204.04%206.65a1.6%201.6%200%200%201%20.12%201.78%20137.46%20137.46%200%200%201-4.16%206.57c-1.39%202.072-2.034%204.634-2.325%206.792Z%22%2F%3E%3Cpath%20fill%3D%22url(%23b)%22%20d%3D%22M31.489%2060.433c3.844-7.804%203.736-13.395%202.1-17.384-1.505-3.672-4.304-5.988-6.51-7.425-.047.208-.115.41-.202.605l-5.175%2011.532a3.168%203.168%200%200%200%20.618%203.505l8.277%208.523c.26.267.562.484.892.644Z%22%2F%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M47.075%2063.469c2.11.585%204.235-1.11%204.527-3.282.252-1.869.769-4.041%201.806-5.936-2.38-5.121-5.256-7.777-8.41-8.954-3.339-1.246-6.987-.835-10.684.063.826%203.76.331%208.673-2.82%2015.073.358.174.75.28%201.154.309%200%200%202.275.191%204.98.383%202.705.191%206.73%201.59%209.447%202.344Z%22%2F%3E%3Cpath%20fill%3D%22url(%23d)%22%20d%3D%22M41.95%2044.595c1.038.108%202.056.332%203.047.702%203.154%201.177%206.032%203.833%208.411%208.954.16-.292.333-.578.519-.855a138.877%20138.877%200%200%200%204.16-6.57%201.603%201.603%200%200%200-.12-1.78c-1.022-1.354-2.976-4.103-4.04-6.65-1.095-2.617-1.258-6.68-1.267-8.66a3.377%203.377%200%200%200-.708-2.079L43.727%2017.21a3.198%203.198%200%200%200-.136-.162c.603%201.978.562%203.569.19%205.015-.345%201.341-.975%202.558-1.641%203.843-.223.43-.45.87-.672%201.323-.884%201.806-1.68%203.85-1.798%206.592-.118%202.74.444%206.179%202.28%2010.774Z%22%2F%3E%3Cpath%20fill%3D%22url(%23e)%22%20d%3D%22M41.948%2044.594c-1.835-4.595-2.398-8.033-2.28-10.774.118-2.742.915-4.786%201.798-6.592.222-.454.45-.893.673-1.324.665-1.285%201.295-2.501%201.64-3.842.373-1.447.414-3.038-.19-5.017a3.17%203.17%200%200%200-4.472-.232l-9.792%208.807a3.17%203.17%200%200%200-1.014%201.883l-1.192%207.902a3.182%203.182%200%200%201-.04.218c2.206%201.438%205.006%203.754%206.511%207.426.294.717.54%201.486.72%202.31%202.6-.632%205.177-1.022%207.638-.765Z%22%2F%3E%3Cg%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%3E%3Cpath%20fill%3D%22url(%23f)%22%20d%3D%22M39.687%2033.638c-.118%202.72.221%205.839%202.053%2010.424l-.575-.052c-1.643-4.785-2.001-7.238-1.881-9.995.12-2.758%201.01-4.879%201.899-6.688.225-.458.75-1.319.974-1.75.665-1.28%201.108-1.955%201.488-3.124.53-1.633.416-2.406.355-3.176.422%202.783-1.178%205.202-2.388%207.667-.882%201.795-1.807%203.976-1.925%206.694Z%22%2F%3E%3Cpath%20fill%3D%22url(%23g)%22%20d%3D%22M34.131%2043.25c.217.502.422.907.552%201.529l-.48.108c-.2-.726-.354-1.242-.63-1.865-1.654-3.902-4.309-5.91-6.478-7.381%202.62%201.41%205.31%203.616%207.036%207.608Z%22%2F%3E%3Cpath%20fill%3D%22url(%23h)%22%20d%3D%22M34.71%2045.27c.917%204.264-.105%209.683-3.118%2014.95%202.518-5.22%203.74-10.234%202.723-14.866l.396-.085Z%22%2F%3E%3Cpath%20fill%3D%22url(%23i)%22%20d%3D%22M45.11%2044.888c4.94%201.848%206.842%205.908%208.264%209.294-1.756-3.546-4.197-7.462-8.441-8.915-3.23-1.106-5.957-.975-10.619.083l-.104-.462c4.948-1.128%207.535-1.26%2010.9%200Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22b%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-5.44827%20-20.95522%2013.96424%20-3.63065%2031.076%2059.662)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23333%22%20stop-opacity%3D%22.52%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22c%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-9.24927%20-16.1868%2016.18663%20-9.24917%2047.535%2064.623)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23565656%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23151515%22%20stop-opacity%3D%22.71%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22d%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(4.6468%20-35.22462%2026.02364%203.433%2049.53%2050.76)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%237E7E7E%22%20stop-opacity%3D%22.91%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231E1E1E%22%20stop-opacity%3D%22.6%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22e%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(13.14708%20-30.29344%2020.65904%208.96583%2034.531%2046.293)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23D7D7D7%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23414141%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22f%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-3.34584%2015.42817%20-10.40357%20-2.25617%2044.882%2027.895)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.17%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22g%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(8.17858%208.27172%20-17.61805%2017.41967%2026.387%2036.445)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22h%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(80.202%20-7.323%2041.856)%20scale(13.634%2028.9518)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.12%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.35%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22i%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(-152.296%2033.168%2019.977)%20scale(20.7745%2065.377)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.21%22%2F%3E%3Cstop%20offset%3D%22.467%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.19%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.29%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%2239.273%22%20height%3D%2249.867%22%20x%3D%2220.551%22%20y%3D%2215.381%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20mode%3D%22normal%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20result%3D%22effect1_foregroundBlur_3584_482%22%20stdDeviation%3D%22.624%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E");
  --on-border-dark: var(--color-accent-3, hsla(232, 38.4%, 64%));
  --on-border-light: var(--color-accent-3, hsla(232, 38.4%, 64%));
  --pill-border-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsla(232, 38.4%, 64%, 0.25));
  --pill-color: var(--text-muted, hsl(232, 9%, 36%));
  --pill-color-hover: var(--text-normal, hsl(232, 6%, 12%));
  --pill-color-remove: var(--text-faint, hsl(232, 12%, 64%));
  --pill-color-remove-hover: var(--text-accent, hsl(231, 96.96%, 68.8%));
  --prompt-border-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --ribbon-background: var(--background-secondary, hsl(232,
            16%,
            97.75%));
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.15);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0);
  --search-clear-button-color: var(--text-muted, hsl(232, 9%, 36%));
  --search-icon-color: var(--text-muted, hsl(232, 9%, 36%));
  --search-result-background: var(--background-primary, transparent);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(231, 96.96%, 68.8%)));
  --setting-group-heading-color: var(--text-normal, hsl(232, 6%, 12%));
  --setting-items-border-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --shadow-activated-file-light: none;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px var(--background-modifier-border), inset 0 2px 4px 0 var(--background-modifier-border-muted), inset 0 1px 1px 1px var(--background-modifier-border);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px var(--background-modifier-border), 0 0 4px var(--background-modifier-border), 0px 2px 6px -4px var(--background-modifier-border-muted), inset 0 -1px 3px 0 var(--background-tertiary);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
        0px 15px 30px rgba(0, 0, 0, 0.07);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(232, 9%, 36%));
  --shiki-code-background: var(--code-background, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --shiki-code-comment: var(--text-faint, hsl(232, 12%, 64%));
  --shiki-code-function: var(--color-green, rgb(29, 165, 29));
  --shiki-code-important: var(--color-orange, rgb(222, 116, 23));
  --shiki-code-keyword: var(--color-pink, rgb(221, 19, 153));
  --shiki-code-normal: var(--text-muted, hsl(232, 9%, 36%));
  --shiki-code-property: var(--color-cyan, rgb(22, 166, 171));
  --shiki-code-punctuation: var(--text-muted, hsl(232, 9%, 36%));
  --shiki-code-string: var(--color-yellow, rgb(192, 156, 12));
  --shiki-code-value: var(--color-purple, rgb(143, 71, 225));
  --shiki-gutter-border-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --shiki-gutter-text-color: var(--text-faint, hsl(232, 12%, 64%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(232, 9%, 36%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(232, 9%, 36%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(232, 12%, 64%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsla(232, 38.4%, 64%, 0.25));
  --slider-thumb-border-width: var(--border-width, 0);
  --slider-track-background: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --status-bar-background: var(--background-secondary, transparent);
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0);
  --status-bar-text-color: var(--text-muted, hsl(232, 9%, 36%));
  --sync-avatar-color-1: var(--color-red, rgb(221, 44, 56));
  --sync-avatar-color-2: var(--color-orange, rgb(222, 116, 23));
  --sync-avatar-color-3: var(--color-yellow, rgb(192, 156, 12));
  --sync-avatar-color-4: var(--color-green, rgb(29, 165, 29));
  --sync-avatar-color-5: var(--color-cyan, rgb(22, 166, 171));
  --sync-avatar-color-6: var(--color-blue, rgb(23, 117, 217));
  --sync-avatar-color-7: var(--color-purple, rgb(143, 71, 225));
  --sync-avatar-color-8: var(--color-pink, rgb(221, 19, 153));
  --tab-background-active: var(--background-primary, transparent);
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, hsla(232, 38.4%, 64%, 0.25));
  --tab-outline-color: var(--divider-color, hsla(232, 38.4%, 64%, 0.2));
  --tab-switcher-background: var(--background-secondary, hsl(232,
            16%,
            97.75%));
  --tab-text-color: var(--text-faint, hsl(232, 12%, 64%));
  --tab-text-color-active: var(--text-muted, hsl(232, 9%, 36%));
  --tab-text-color-focused: var(--text-muted, hsl(232, 9%, 36%));
  --tab-text-color-focused-active: var(--text-muted, hsl(232, 9%, 36%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(232, 6%, 12%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(231, 96.96%, 68.8%));
  --table-add-button-border-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --table-border-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(231, 96.96%, 68.8%));
  --table-drag-handle-color: var(--text-faint, hsl(232, 12%, 64%));
  --table-header-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --table-header-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --table-header-border-color: var(--table-border-color, hsla(232, 38.4%, 64%, 0.2));
  --table-header-color: var(--text-normal, hsl(232, 6%, 12%));
  --table-selection-border-color: var(--interactive-accent, hsl(231, 96.96%, 68.8%));
  --table-width: 88cqw;
  --tag-border-width: 1px;
  --tag-color: var(--text-accent, hsl(231, 96.96%, 68.8%));
  --tag-color-hover: var(--text-accent, hsl(231, 96.96%, 68.8%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(229, 97.92%, 73.6%)));
  --text-accent: var(--color-accent-1, hsl(231, 96.96%, 68.8%));
  --text-accent-hover: var(--color-accent-2, hsl(229, 97.92%, 73.6%));
  --text-error: var(--color-red, rgb(221, 44, 56));
  --text-faint: hsl(var(--accent-h), 12%, 64%);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: hsl(var(--accent-h), 9%, 36%);
  --text-normal: hsl(var(--accent-h), 6%, 12%);
  --text-success: var(--color-green, rgb(29, 165, 29));
  --text-warning: var(--color-orange, rgb(222, 116, 23));
  --textHighlight: var(--background-modifier-hover, hsla(var(--accent-h), 6%, 64%, 0.15));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, hsla(232, 38.4%, 64%, 0.2));
  --titlebar-text-color: var(--text-muted, hsl(232, 9%, 36%));
  --titlebar-text-color-focused: var(--text-normal, hsl(232, 6%, 12%));
  --toggle-thumb-color: var(--toggle-thumb-color-light, white);
  --toggle-thumb-color-light: white;
  --toggle-thumb-enabled-color: var(--toggle-thumb-enabled-color-light, white);
  --toggle-thumb-enabled-color-light: white;
  --toggle-thumb-enabled-shadow: var(--toggle-thumb-enabled-shadow-light, 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 4px hsla(232,
        96%,
        64%, 0.15));
  --toggle-thumb-enabled-shadow-light: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 4px hsla(var(--interactive-accent-hsl), 0.15);
  --toggle-thumb-shadow: var(--toggle-thumb-shadow-light, 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 4px rgba(0, 0, 0, 0.05));
  --toggle-thumb-shadow-light: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 4px rgba(0, 0, 0, 0.05);
  --toggle-track-color: var(--toggle-track-color-light, hsla(232, 38.4%, 64%, 0.25));
  --toggle-track-color-light: var(--background-modifier-border-hover, hsla(232, 38.4%, 64%, 0.25));
  --toggle-track-enabled-color: var(--toggle-track-enabled-color-light, hsl(231, 96.96%, 68.8%));
  --toggle-track-enabled-color-light: var(--interactive-accent, hsl(231, 96.96%, 68.8%));
  --toggle-track-hovered-shadow: var(--toggle-track-hovered-shadow-light, inset 0px 1px 2px rgba(0, 0, 0, 0.25), 0px 1px 0px #ffffff, 0px 2px 4px rgba(0, 0, 0, 0.04));
  --toggle-track-hovered-shadow-light: inset 0px 1px 2px rgba(0, 0, 0, 0.25), 0px 1px 0px var(--background-primary), 0px 2px 4px rgba(0, 0, 0, 0.04);
  --toggle-track-shadow: var(--toggle-track-shadow-light, inset 0px 1px 2px rgba(0, 0, 0, 0.25), 0px 1px 0px #ffffff, 0px 2px 4px rgba(0, 0, 0, 0.04));
  --toggle-track-shadow-light: inset 0px 1px 2px rgba(0, 0, 0, 0.25), 0px 1px 0px var(--background-primary), 0px 2px 4px rgba(0, 0, 0, 0.04);
  --vault-profile-color: var(--text-normal, hsl(232, 6%, 12%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(232, 6%, 12%));
  --workspace-divider-color: var(--divider-color, hsla(232, 38.4%, 64%, 0.2));
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(232,
            16%,
            97.75%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(128, 137, 198, 0.2);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(232,
            16%,
            97.75%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(128, 137, 198, 0.2);
  color: rgb(29, 29, 32);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered > h1 {
  --accent-h: 232;
  --accent-l: 64%;
  --accent-s: 96%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-tab-header-dark: hsla(232,
        96%,
        64%, 0.15);
  --background-activated-tab-header-light: #ffffff;
  --background-mod-left-split: #ffffff;
  --background-mod-left-split-dark: #ffffff;
  --background-mod-left-split-light: #ffffff;
  --background-mod-right-split: #ffffff;
  --background-mod-right-split-dark: #ffffff;
  --background-mod-right-split-light: #ffffff;
  --background-mod-root-split: #ffffff;
  --background-mod-root-split-dark: #ffffff;
  --background-mod-root-split-light: #ffffff;
  --background-modifier-active-hover: hsla(232,
        96%,
        64%, 0.15);
  --background-modifier-border: hsla(232, 38.4%, 64%, 0.2);
  --background-modifier-border-focus: hsla(232, 38.4%, 64%, 0.3);
  --background-modifier-border-hover: hsla(232, 38.4%, 64%, 0.25);
  --background-modifier-border-muted: hsla(232, 38.4%, 64%, 0.1);
  --background-modifier-error: rgb(221, 44, 56);
  --background-modifier-error-hover: rgb(221, 44, 56);
  --background-modifier-error-rgb: 221, 44, 56;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 6%, 64%, 0.15);
  --background-modifier-success: rgb(29, 165, 29);
  --background-modifier-success-rgb: 29, 165, 29;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(232,
            16%,
            97.75%);
  --background-secondary-alt: #fcfcfc;
  --background-tertiary: hsl(232,
            64%,
            96.4%);
  --background-underlying: hsl(232,
            64%,
            96.4%);
  --background-underlying-dark: hsl(232,
            64%,
            96.4%);
  --background-underlying-light: hsl(232,
            64%,
            96.4%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(231, 96.96%, 68.8%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(221, 44, 56);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: darken;
  --callout-bug: 221, 44, 56;
  --callout-default: 23, 117, 217;
  --callout-error: 221, 44, 56;
  --callout-example: 143, 71, 225;
  --callout-fail: 221, 44, 56;
  --callout-important: 22, 166, 171;
  --callout-info: 23, 117, 217;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 222, 116, 23;
  --callout-radius: 4px;
  --callout-success: 29, 165, 29;
  --callout-summary: 22, 166, 171;
  --callout-tip: 22, 166, 171;
  --callout-title-weight: 600;
  --callout-todo: 23, 117, 217;
  --callout-warning: 222, 116, 23;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 38.4%, 64%, 0.2), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 38.4%, 64%, 0.1), 0 0 6px hsla(232, 38.4%, 64%, 0.1);
  --caret-color: hsl(232, 6%, 12%);
  --checkbox-border-color: hsl(232, 12%, 64%);
  --checkbox-border-color-hover: hsl(232, 12%, 64%);
  --checkbox-color: rgb(29, 165, 29);
  --checkbox-color-hover: rgb(29, 165, 29);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 12%, 64%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-color: hsla(232, 38.4%, 64%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-light: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-bracket-background: hsla(232, 6%, 64%, 0.15);
  --code-comment: hsl(232, 12%, 64%);
  --code-function: rgb(192, 156, 12);
  --code-important: rgb(222, 116, 23);
  --code-keyword: rgb(221, 19, 153);
  --code-normal: hsl(232, 9%, 36%);
  --code-operator: rgb(221, 44, 56);
  --code-property: rgb(22, 166, 171);
  --code-punctuation: hsl(232, 9%, 36%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(29, 165, 29);
  --code-tag: rgb(221, 44, 56);
  --code-value: rgb(143, 71, 225);
  --collapse-icon-color: hsl(232, 12%, 64%);
  --collapse-icon-color-collapsed: hsl(231, 96.96%, 68.8%);
  --color-accent: hsl(232, 96%, 64%);
  --color-accent-1: hsl(231, 96.96%, 68.8%);
  --color-accent-2: hsl(229, 97.92%, 73.6%);
  --color-accent-3: hsla(232, 38.4%, 64%);
  --color-accent-hsl: 232,
        96%,
        64%;
  --color-activated-tab-header-dark: hsl(232, 6%, 12%);
  --color-activated-tab-header-light: hsl(232, 6%, 12%);
  --color-blue: rgb(23, 117, 217);
  --color-cyan: rgb(22, 166, 171);
  --color-green: rgb(29, 165, 29);
  --color-orange: rgb(222, 116, 23);
  --color-pink: rgb(221, 19, 153);
  --color-purple: rgb(143, 71, 225);
  --color-red: rgb(221, 44, 56);
  --color-yellow: rgb(192, 156, 12);
  --divider-color: hsla(232, 38.4%, 64%, 0.2);
  --divider-color-hover: hsl(231, 96.96%, 68.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: #fcfcfc;
  --dropdown-background-hover: #f7f7f7;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #fcfcfc;
  --flair-color: hsl(232, 6%, 12%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 700);
  --graph-line: #d4d4d4;
  --graph-node: hsl(232, 9%, 36%);
  --graph-node-attachment: rgb(192, 156, 12);
  --graph-node-focused: hsl(231, 96.96%, 68.8%);
  --graph-node-tag: rgb(29, 165, 29);
  --graph-node-unresolved: hsl(232, 12%, 64%);
  --graph-text: hsl(232, 6%, 12%);
  --grid-background-pattern-color: hsla(232, 38.4%, 64%, 0.2);
  --h1-accent-color: rgb(221, 44, 56);
  --h2-accent-color: rgb(222, 116, 23);
  --h3-accent-color: rgb(192, 156, 12);
  --h4-accent-color: rgb(29, 165, 29);
  --h5-accent-color: rgb(23, 117, 217);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(143, 71, 225);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 12%, 64%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 38.4%, 64%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(221, 19, 153);
  --interactive-accent: hsl(231, 96.96%, 68.8%);
  --interactive-accent-hover: hsl(229, 97.92%, 73.6%);
  --interactive-accent-hsl: 232,
        96%,
        64%;
  --interactive-hover: #f7f7f7;
  --interactive-normal: #fcfcfc;
  --italic-color: rgb(222, 116, 23);
  --line-height-customize: 1.5;
  --link-color: hsl(231, 96.96%, 68.8%);
  --link-color-hover: hsl(229, 97.92%, 73.6%);
  --link-external-color: rgb(23, 117, 217);
  --link-external-color-hover: rgb(23, 117, 217);
  --link-unresolved-color: hsl(231, 96.96%, 68.8%);
  --link-unresolved-decoration-color: hsla(232,
        96%,
        64%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232,
            16%,
            97.75%);
  --menu-border-color: hsla(232, 38.4%, 64%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
        0px 15px 30px rgba(0, 0, 0, 0.07);
  --on-border-dark: hsla(232, 38.4%, 64%);
  --on-border-light: hsla(232, 38.4%, 64%);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(232, 9%, 36%);
  --search-icon-color: hsl(232, 9%, 36%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 6%, 12%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: hsla(232, 38.4%, 64%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), inset 0 2px 4px 0 hsla(232, 38.4%, 64%, 0.1), inset 0 1px 1px 1px hsla(232, 38.4%, 64%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), 0 0 4px hsla(232, 38.4%, 64%, 0.2), 0px 2px 6px -4px hsla(232, 38.4%, 64%, 0.1), inset 0 -1px 3px 0 hsl(232,
            64%,
            96.4%);
  --shiki-active-tab-border-color: hsl(232, 9%, 36%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 12%, 64%);
  --shiki-code-function: rgb(29, 165, 29);
  --shiki-code-important: rgb(222, 116, 23);
  --shiki-code-keyword: rgb(221, 19, 153);
  --shiki-code-normal: hsl(232, 9%, 36%);
  --shiki-code-property: rgb(22, 166, 171);
  --shiki-code-punctuation: hsl(232, 9%, 36%);
  --shiki-code-string: rgb(192, 156, 12);
  --shiki-code-value: rgb(143, 71, 225);
  --shiki-gutter-border-color: hsla(232, 38.4%, 64%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 12%, 64%);
  --shiki-gutter-text-color-highlight: hsl(232, 9%, 36%);
  --shiki-highlight-green: rgba(29, 165, 29, 0.5);
  --shiki-highlight-green-background: rgba(29, 165, 29, 0.1);
  --shiki-highlight-neutral: hsl(232, 9%, 36%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(221, 44, 56, 0.5);
  --shiki-highlight-red-background: rgba(221, 44, 56, 0.1);
  --shiki-terminal-dots-color: hsl(232, 12%, 64%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(221, 44, 56);
  --sync-avatar-color-2: rgb(222, 116, 23);
  --sync-avatar-color-3: rgb(192, 156, 12);
  --sync-avatar-color-4: rgb(29, 165, 29);
  --sync-avatar-color-5: rgb(22, 166, 171);
  --sync-avatar-color-6: rgb(23, 117, 217);
  --sync-avatar-color-7: rgb(143, 71, 225);
  --sync-avatar-color-8: rgb(221, 19, 153);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 38.4%, 64%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 38.4%, 64%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232,
            16%,
            97.75%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232,
            16%,
            97.75%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 96%, 64%);
  --tab-text-color: hsl(232, 12%, 64%);
  --tab-text-color-active: hsl(232, 9%, 36%);
  --tab-text-color-focused: hsl(232, 9%, 36%);
  --tab-text-color-focused-active: hsl(232, 9%, 36%);
  --tab-text-color-focused-active-current: hsl(232, 6%, 12%);
  --tab-text-color-focused-highlighted: hsl(231, 96.96%, 68.8%);
  --table-add-button-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(231, 96.96%, 68.8%);
  --table-drag-handle-color: hsl(232, 12%, 64%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 6%, 12%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        96%,
        64%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(231, 96.96%, 68.8%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        96%,
        64%, 0.1);
  --tag-background-hover: hsla(232,
        96%,
        64%, 0.2);
  --tag-border-color: hsla(232,
        96%,
        64%, 0.15);
  --tag-border-color-hover: hsla(232,
        96%,
        64%, 0.15);
  --tag-color: hsl(231, 96.96%, 68.8%);
  --tag-color-hover: hsl(231, 96.96%, 68.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(231, 96.96%, 68.8%);
  --text-accent-hover: hsl(229, 97.92%, 73.6%);
  --text-error: rgb(221, 44, 56);
  --text-faint: hsl(232, 12%, 64%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 9%, 36%);
  --text-normal: hsl(232, 6%, 12%);
  --text-selection: hsla(232,
        96%,
        64%, 0.2);
  --text-success: rgb(29, 165, 29);
  --text-warning: rgb(222, 116, 23);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(221, 44, 56);
  border-bottom-color: rgb(29, 29, 32);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 29, 32);
  border-left-width: 0px;
  border-right-color: rgb(29, 29, 32);
  border-right-width: 0px;
  border-top-color: rgb(29, 29, 32);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(29, 29, 32));
  content: " ";
  font-family: var(--h1-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 24px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.36px);
  line-height: var(--h1-line-height, 28.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(221, 44, 56));
  outline: rgb(221, 44, 56) none 0px;
  text-decoration-color: rgb(221, 44, 56);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(222, 116, 23));
  outline: rgb(222, 116, 23) none 0px;
  text-decoration-color: rgb(222, 116, 23);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(222, 116, 23));
  outline: rgb(222, 116, 23) none 0px;
  text-decoration-color: rgb(222, 116, 23);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(221, 44, 56));
  outline: rgb(221, 44, 56) none 0px;
  text-decoration-color: rgb(221, 44, 56);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-normal, rgb(29, 29, 32));
  outline: rgb(29, 29, 32) none 0px;
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body del {
  color: rgb(29, 29, 32);
  outline: rgb(29, 29, 32) none 0px;
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body footer {
  --icon-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --icon-color-hover: var(--text-muted, hsla(232, 38.4%, 64%));
  --status-bar-text-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color: var(--text-faint, hsla(232, 38.4%, 64%));
  --tab-text-color-active: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color-focused: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color-focused-active: var(--text-muted, hsla(232, 38.4%, 64%));
  --text-faint: var(--on-border-light, hsla(232, 38.4%, 64%));
  --text-muted: var(--on-border-light, hsla(232, 38.4%, 64%));
  --titlebar-text-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --titlebar-text-color-focused: var(--text-muted, hsla(232, 38.4%, 64%));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(29, 29, 32));
}

html[saved-theme="light"] body h2 {
  --accent-h: 232;
  --accent-l: 64%;
  --accent-s: 96%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-tab-header-dark: hsla(232,
        96%,
        64%, 0.15);
  --background-activated-tab-header-light: #ffffff;
  --background-mod-left-split: #ffffff;
  --background-mod-left-split-dark: #ffffff;
  --background-mod-left-split-light: #ffffff;
  --background-mod-right-split: #ffffff;
  --background-mod-right-split-dark: #ffffff;
  --background-mod-right-split-light: #ffffff;
  --background-mod-root-split: #ffffff;
  --background-mod-root-split-dark: #ffffff;
  --background-mod-root-split-light: #ffffff;
  --background-modifier-active-hover: hsla(232,
        96%,
        64%, 0.15);
  --background-modifier-border: hsla(232, 38.4%, 64%, 0.2);
  --background-modifier-border-focus: hsla(232, 38.4%, 64%, 0.3);
  --background-modifier-border-hover: hsla(232, 38.4%, 64%, 0.25);
  --background-modifier-border-muted: hsla(232, 38.4%, 64%, 0.1);
  --background-modifier-error: rgb(221, 44, 56);
  --background-modifier-error-hover: rgb(221, 44, 56);
  --background-modifier-error-rgb: 221, 44, 56;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 6%, 64%, 0.15);
  --background-modifier-success: rgb(29, 165, 29);
  --background-modifier-success-rgb: 29, 165, 29;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(232,
            16%,
            97.75%);
  --background-secondary-alt: #fcfcfc;
  --background-tertiary: hsl(232,
            64%,
            96.4%);
  --background-underlying: hsl(232,
            64%,
            96.4%);
  --background-underlying-dark: hsl(232,
            64%,
            96.4%);
  --background-underlying-light: hsl(232,
            64%,
            96.4%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(231, 96.96%, 68.8%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(221, 44, 56);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: darken;
  --callout-bug: 221, 44, 56;
  --callout-default: 23, 117, 217;
  --callout-error: 221, 44, 56;
  --callout-example: 143, 71, 225;
  --callout-fail: 221, 44, 56;
  --callout-important: 22, 166, 171;
  --callout-info: 23, 117, 217;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 222, 116, 23;
  --callout-radius: 4px;
  --callout-success: 29, 165, 29;
  --callout-summary: 22, 166, 171;
  --callout-tip: 22, 166, 171;
  --callout-title-weight: 600;
  --callout-todo: 23, 117, 217;
  --callout-warning: 222, 116, 23;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 38.4%, 64%, 0.2), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 38.4%, 64%, 0.1), 0 0 6px hsla(232, 38.4%, 64%, 0.1);
  --caret-color: hsl(232, 6%, 12%);
  --checkbox-border-color: hsl(232, 12%, 64%);
  --checkbox-border-color-hover: hsl(232, 12%, 64%);
  --checkbox-color: rgb(29, 165, 29);
  --checkbox-color-hover: rgb(29, 165, 29);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 12%, 64%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-color: hsla(232, 38.4%, 64%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-light: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-bracket-background: hsla(232, 6%, 64%, 0.15);
  --code-comment: hsl(232, 12%, 64%);
  --code-function: rgb(192, 156, 12);
  --code-important: rgb(222, 116, 23);
  --code-keyword: rgb(221, 19, 153);
  --code-normal: hsl(232, 9%, 36%);
  --code-operator: rgb(221, 44, 56);
  --code-property: rgb(22, 166, 171);
  --code-punctuation: hsl(232, 9%, 36%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(29, 165, 29);
  --code-tag: rgb(221, 44, 56);
  --code-value: rgb(143, 71, 225);
  --collapse-icon-color: hsl(232, 12%, 64%);
  --collapse-icon-color-collapsed: hsl(231, 96.96%, 68.8%);
  --color-accent: hsl(232, 96%, 64%);
  --color-accent-1: hsl(231, 96.96%, 68.8%);
  --color-accent-2: hsl(229, 97.92%, 73.6%);
  --color-accent-3: hsla(232, 38.4%, 64%);
  --color-accent-hsl: 232,
        96%,
        64%;
  --color-activated-tab-header-dark: hsl(232, 6%, 12%);
  --color-activated-tab-header-light: hsl(232, 6%, 12%);
  --color-blue: rgb(23, 117, 217);
  --color-cyan: rgb(22, 166, 171);
  --color-green: rgb(29, 165, 29);
  --color-orange: rgb(222, 116, 23);
  --color-pink: rgb(221, 19, 153);
  --color-purple: rgb(143, 71, 225);
  --color-red: rgb(221, 44, 56);
  --color-yellow: rgb(192, 156, 12);
  --divider-color: hsla(232, 38.4%, 64%, 0.2);
  --divider-color-hover: hsl(231, 96.96%, 68.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: #fcfcfc;
  --dropdown-background-hover: #f7f7f7;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #fcfcfc;
  --flair-color: hsl(232, 6%, 12%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h2-weight, 675);
  --graph-line: #d4d4d4;
  --graph-node: hsl(232, 9%, 36%);
  --graph-node-attachment: rgb(192, 156, 12);
  --graph-node-focused: hsl(231, 96.96%, 68.8%);
  --graph-node-tag: rgb(29, 165, 29);
  --graph-node-unresolved: hsl(232, 12%, 64%);
  --graph-text: hsl(232, 6%, 12%);
  --grid-background-pattern-color: hsla(232, 38.4%, 64%, 0.2);
  --h1-accent-color: rgb(221, 44, 56);
  --h2-accent-color: rgb(222, 116, 23);
  --h3-accent-color: rgb(192, 156, 12);
  --h4-accent-color: rgb(29, 165, 29);
  --h5-accent-color: rgb(23, 117, 217);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(143, 71, 225);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 12%, 64%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 38.4%, 64%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(221, 19, 153);
  --interactive-accent: hsl(231, 96.96%, 68.8%);
  --interactive-accent-hover: hsl(229, 97.92%, 73.6%);
  --interactive-accent-hsl: 232,
        96%,
        64%;
  --interactive-hover: #f7f7f7;
  --interactive-normal: #fcfcfc;
  --italic-color: rgb(222, 116, 23);
  --line-height-customize: 1.5;
  --link-color: hsl(231, 96.96%, 68.8%);
  --link-color-hover: hsl(229, 97.92%, 73.6%);
  --link-external-color: rgb(23, 117, 217);
  --link-external-color-hover: rgb(23, 117, 217);
  --link-unresolved-color: hsl(231, 96.96%, 68.8%);
  --link-unresolved-decoration-color: hsla(232,
        96%,
        64%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232,
            16%,
            97.75%);
  --menu-border-color: hsla(232, 38.4%, 64%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
        0px 15px 30px rgba(0, 0, 0, 0.07);
  --on-border-dark: hsla(232, 38.4%, 64%);
  --on-border-light: hsla(232, 38.4%, 64%);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(232, 9%, 36%);
  --search-icon-color: hsl(232, 9%, 36%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 6%, 12%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: hsla(232, 38.4%, 64%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), inset 0 2px 4px 0 hsla(232, 38.4%, 64%, 0.1), inset 0 1px 1px 1px hsla(232, 38.4%, 64%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), 0 0 4px hsla(232, 38.4%, 64%, 0.2), 0px 2px 6px -4px hsla(232, 38.4%, 64%, 0.1), inset 0 -1px 3px 0 hsl(232,
            64%,
            96.4%);
  --shiki-active-tab-border-color: hsl(232, 9%, 36%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 12%, 64%);
  --shiki-code-function: rgb(29, 165, 29);
  --shiki-code-important: rgb(222, 116, 23);
  --shiki-code-keyword: rgb(221, 19, 153);
  --shiki-code-normal: hsl(232, 9%, 36%);
  --shiki-code-property: rgb(22, 166, 171);
  --shiki-code-punctuation: hsl(232, 9%, 36%);
  --shiki-code-string: rgb(192, 156, 12);
  --shiki-code-value: rgb(143, 71, 225);
  --shiki-gutter-border-color: hsla(232, 38.4%, 64%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 12%, 64%);
  --shiki-gutter-text-color-highlight: hsl(232, 9%, 36%);
  --shiki-highlight-green: rgba(29, 165, 29, 0.5);
  --shiki-highlight-green-background: rgba(29, 165, 29, 0.1);
  --shiki-highlight-neutral: hsl(232, 9%, 36%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(221, 44, 56, 0.5);
  --shiki-highlight-red-background: rgba(221, 44, 56, 0.1);
  --shiki-terminal-dots-color: hsl(232, 12%, 64%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(221, 44, 56);
  --sync-avatar-color-2: rgb(222, 116, 23);
  --sync-avatar-color-3: rgb(192, 156, 12);
  --sync-avatar-color-4: rgb(29, 165, 29);
  --sync-avatar-color-5: rgb(22, 166, 171);
  --sync-avatar-color-6: rgb(23, 117, 217);
  --sync-avatar-color-7: rgb(143, 71, 225);
  --sync-avatar-color-8: rgb(221, 19, 153);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 38.4%, 64%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 38.4%, 64%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232,
            16%,
            97.75%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232,
            16%,
            97.75%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 96%, 64%);
  --tab-text-color: hsl(232, 12%, 64%);
  --tab-text-color-active: hsl(232, 9%, 36%);
  --tab-text-color-focused: hsl(232, 9%, 36%);
  --tab-text-color-focused-active: hsl(232, 9%, 36%);
  --tab-text-color-focused-active-current: hsl(232, 6%, 12%);
  --tab-text-color-focused-highlighted: hsl(231, 96.96%, 68.8%);
  --table-add-button-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(231, 96.96%, 68.8%);
  --table-drag-handle-color: hsl(232, 12%, 64%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 6%, 12%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        96%,
        64%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(231, 96.96%, 68.8%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        96%,
        64%, 0.1);
  --tag-background-hover: hsla(232,
        96%,
        64%, 0.2);
  --tag-border-color: hsla(232,
        96%,
        64%, 0.15);
  --tag-border-color-hover: hsla(232,
        96%,
        64%, 0.15);
  --tag-color: hsl(231, 96.96%, 68.8%);
  --tag-color-hover: hsl(231, 96.96%, 68.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(231, 96.96%, 68.8%);
  --text-accent-hover: hsl(229, 97.92%, 73.6%);
  --text-error: rgb(221, 44, 56);
  --text-faint: hsl(232, 12%, 64%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 9%, 36%);
  --text-normal: hsl(232, 6%, 12%);
  --text-selection: hsla(232,
        96%,
        64%, 0.2);
  --text-success: rgb(29, 165, 29);
  --text-warning: rgb(222, 116, 23);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(222, 116, 23);
  border-bottom-color: rgb(29, 29, 32);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 29, 32);
  border-left-width: 0px;
  border-right-color: rgb(29, 29, 32);
  border-right-width: 0px;
  border-top-color: rgb(29, 29, 32);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(29, 29, 32));
  content: " ";
  font-family: var(--h2-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 22.8px);
  font-weight: var(--font-weight, 675);
  letter-spacing: var(--h2-letter-spacing, -0.2508px);
  line-height: var(--h2-line-height, 27.36px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h3 {
  --accent-h: 232;
  --accent-l: 64%;
  --accent-s: 96%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-tab-header-dark: hsla(232,
        96%,
        64%, 0.15);
  --background-activated-tab-header-light: #ffffff;
  --background-mod-left-split: #ffffff;
  --background-mod-left-split-dark: #ffffff;
  --background-mod-left-split-light: #ffffff;
  --background-mod-right-split: #ffffff;
  --background-mod-right-split-dark: #ffffff;
  --background-mod-right-split-light: #ffffff;
  --background-mod-root-split: #ffffff;
  --background-mod-root-split-dark: #ffffff;
  --background-mod-root-split-light: #ffffff;
  --background-modifier-active-hover: hsla(232,
        96%,
        64%, 0.15);
  --background-modifier-border: hsla(232, 38.4%, 64%, 0.2);
  --background-modifier-border-focus: hsla(232, 38.4%, 64%, 0.3);
  --background-modifier-border-hover: hsla(232, 38.4%, 64%, 0.25);
  --background-modifier-border-muted: hsla(232, 38.4%, 64%, 0.1);
  --background-modifier-error: rgb(221, 44, 56);
  --background-modifier-error-hover: rgb(221, 44, 56);
  --background-modifier-error-rgb: 221, 44, 56;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 6%, 64%, 0.15);
  --background-modifier-success: rgb(29, 165, 29);
  --background-modifier-success-rgb: 29, 165, 29;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(232,
            16%,
            97.75%);
  --background-secondary-alt: #fcfcfc;
  --background-tertiary: hsl(232,
            64%,
            96.4%);
  --background-underlying: hsl(232,
            64%,
            96.4%);
  --background-underlying-dark: hsl(232,
            64%,
            96.4%);
  --background-underlying-light: hsl(232,
            64%,
            96.4%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(231, 96.96%, 68.8%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(221, 44, 56);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: darken;
  --callout-bug: 221, 44, 56;
  --callout-default: 23, 117, 217;
  --callout-error: 221, 44, 56;
  --callout-example: 143, 71, 225;
  --callout-fail: 221, 44, 56;
  --callout-important: 22, 166, 171;
  --callout-info: 23, 117, 217;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 222, 116, 23;
  --callout-radius: 4px;
  --callout-success: 29, 165, 29;
  --callout-summary: 22, 166, 171;
  --callout-tip: 22, 166, 171;
  --callout-title-weight: 600;
  --callout-todo: 23, 117, 217;
  --callout-warning: 222, 116, 23;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 38.4%, 64%, 0.2), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 38.4%, 64%, 0.1), 0 0 6px hsla(232, 38.4%, 64%, 0.1);
  --caret-color: hsl(232, 6%, 12%);
  --checkbox-border-color: hsl(232, 12%, 64%);
  --checkbox-border-color-hover: hsl(232, 12%, 64%);
  --checkbox-color: rgb(29, 165, 29);
  --checkbox-color-hover: rgb(29, 165, 29);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 12%, 64%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-color: hsla(232, 38.4%, 64%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-light: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-bracket-background: hsla(232, 6%, 64%, 0.15);
  --code-comment: hsl(232, 12%, 64%);
  --code-function: rgb(192, 156, 12);
  --code-important: rgb(222, 116, 23);
  --code-keyword: rgb(221, 19, 153);
  --code-normal: hsl(232, 9%, 36%);
  --code-operator: rgb(221, 44, 56);
  --code-property: rgb(22, 166, 171);
  --code-punctuation: hsl(232, 9%, 36%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(29, 165, 29);
  --code-tag: rgb(221, 44, 56);
  --code-value: rgb(143, 71, 225);
  --collapse-icon-color: hsl(232, 12%, 64%);
  --collapse-icon-color-collapsed: hsl(231, 96.96%, 68.8%);
  --color-accent: hsl(232, 96%, 64%);
  --color-accent-1: hsl(231, 96.96%, 68.8%);
  --color-accent-2: hsl(229, 97.92%, 73.6%);
  --color-accent-3: hsla(232, 38.4%, 64%);
  --color-accent-hsl: 232,
        96%,
        64%;
  --color-activated-tab-header-dark: hsl(232, 6%, 12%);
  --color-activated-tab-header-light: hsl(232, 6%, 12%);
  --color-blue: rgb(23, 117, 217);
  --color-cyan: rgb(22, 166, 171);
  --color-green: rgb(29, 165, 29);
  --color-orange: rgb(222, 116, 23);
  --color-pink: rgb(221, 19, 153);
  --color-purple: rgb(143, 71, 225);
  --color-red: rgb(221, 44, 56);
  --color-yellow: rgb(192, 156, 12);
  --divider-color: hsla(232, 38.4%, 64%, 0.2);
  --divider-color-hover: hsl(231, 96.96%, 68.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: #fcfcfc;
  --dropdown-background-hover: #f7f7f7;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #fcfcfc;
  --flair-color: hsl(232, 6%, 12%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h3-weight, 650);
  --graph-line: #d4d4d4;
  --graph-node: hsl(232, 9%, 36%);
  --graph-node-attachment: rgb(192, 156, 12);
  --graph-node-focused: hsl(231, 96.96%, 68.8%);
  --graph-node-tag: rgb(29, 165, 29);
  --graph-node-unresolved: hsl(232, 12%, 64%);
  --graph-text: hsl(232, 6%, 12%);
  --grid-background-pattern-color: hsla(232, 38.4%, 64%, 0.2);
  --h1-accent-color: rgb(221, 44, 56);
  --h2-accent-color: rgb(222, 116, 23);
  --h3-accent-color: rgb(192, 156, 12);
  --h4-accent-color: rgb(29, 165, 29);
  --h5-accent-color: rgb(23, 117, 217);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(143, 71, 225);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 12%, 64%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 38.4%, 64%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(221, 19, 153);
  --interactive-accent: hsl(231, 96.96%, 68.8%);
  --interactive-accent-hover: hsl(229, 97.92%, 73.6%);
  --interactive-accent-hsl: 232,
        96%,
        64%;
  --interactive-hover: #f7f7f7;
  --interactive-normal: #fcfcfc;
  --italic-color: rgb(222, 116, 23);
  --line-height-customize: 1.5;
  --link-color: hsl(231, 96.96%, 68.8%);
  --link-color-hover: hsl(229, 97.92%, 73.6%);
  --link-external-color: rgb(23, 117, 217);
  --link-external-color-hover: rgb(23, 117, 217);
  --link-unresolved-color: hsl(231, 96.96%, 68.8%);
  --link-unresolved-decoration-color: hsla(232,
        96%,
        64%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232,
            16%,
            97.75%);
  --menu-border-color: hsla(232, 38.4%, 64%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
        0px 15px 30px rgba(0, 0, 0, 0.07);
  --on-border-dark: hsla(232, 38.4%, 64%);
  --on-border-light: hsla(232, 38.4%, 64%);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(232, 9%, 36%);
  --search-icon-color: hsl(232, 9%, 36%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 6%, 12%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: hsla(232, 38.4%, 64%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), inset 0 2px 4px 0 hsla(232, 38.4%, 64%, 0.1), inset 0 1px 1px 1px hsla(232, 38.4%, 64%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), 0 0 4px hsla(232, 38.4%, 64%, 0.2), 0px 2px 6px -4px hsla(232, 38.4%, 64%, 0.1), inset 0 -1px 3px 0 hsl(232,
            64%,
            96.4%);
  --shiki-active-tab-border-color: hsl(232, 9%, 36%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 12%, 64%);
  --shiki-code-function: rgb(29, 165, 29);
  --shiki-code-important: rgb(222, 116, 23);
  --shiki-code-keyword: rgb(221, 19, 153);
  --shiki-code-normal: hsl(232, 9%, 36%);
  --shiki-code-property: rgb(22, 166, 171);
  --shiki-code-punctuation: hsl(232, 9%, 36%);
  --shiki-code-string: rgb(192, 156, 12);
  --shiki-code-value: rgb(143, 71, 225);
  --shiki-gutter-border-color: hsla(232, 38.4%, 64%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 12%, 64%);
  --shiki-gutter-text-color-highlight: hsl(232, 9%, 36%);
  --shiki-highlight-green: rgba(29, 165, 29, 0.5);
  --shiki-highlight-green-background: rgba(29, 165, 29, 0.1);
  --shiki-highlight-neutral: hsl(232, 9%, 36%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(221, 44, 56, 0.5);
  --shiki-highlight-red-background: rgba(221, 44, 56, 0.1);
  --shiki-terminal-dots-color: hsl(232, 12%, 64%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(221, 44, 56);
  --sync-avatar-color-2: rgb(222, 116, 23);
  --sync-avatar-color-3: rgb(192, 156, 12);
  --sync-avatar-color-4: rgb(29, 165, 29);
  --sync-avatar-color-5: rgb(22, 166, 171);
  --sync-avatar-color-6: rgb(23, 117, 217);
  --sync-avatar-color-7: rgb(143, 71, 225);
  --sync-avatar-color-8: rgb(221, 19, 153);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 38.4%, 64%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 38.4%, 64%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232,
            16%,
            97.75%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232,
            16%,
            97.75%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 96%, 64%);
  --tab-text-color: hsl(232, 12%, 64%);
  --tab-text-color-active: hsl(232, 9%, 36%);
  --tab-text-color-focused: hsl(232, 9%, 36%);
  --tab-text-color-focused-active: hsl(232, 9%, 36%);
  --tab-text-color-focused-active-current: hsl(232, 6%, 12%);
  --tab-text-color-focused-highlighted: hsl(231, 96.96%, 68.8%);
  --table-add-button-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(231, 96.96%, 68.8%);
  --table-drag-handle-color: hsl(232, 12%, 64%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 6%, 12%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        96%,
        64%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(231, 96.96%, 68.8%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        96%,
        64%, 0.1);
  --tag-background-hover: hsla(232,
        96%,
        64%, 0.2);
  --tag-border-color: hsla(232,
        96%,
        64%, 0.15);
  --tag-border-color-hover: hsla(232,
        96%,
        64%, 0.15);
  --tag-color: hsl(231, 96.96%, 68.8%);
  --tag-color-hover: hsl(231, 96.96%, 68.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(231, 96.96%, 68.8%);
  --text-accent-hover: hsl(229, 97.92%, 73.6%);
  --text-error: rgb(221, 44, 56);
  --text-faint: hsl(232, 12%, 64%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 9%, 36%);
  --text-normal: hsl(232, 6%, 12%);
  --text-selection: hsla(232,
        96%,
        64%, 0.2);
  --text-success: rgb(29, 165, 29);
  --text-warning: rgb(222, 116, 23);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(192, 156, 12);
  border-bottom-color: rgb(29, 29, 32);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 29, 32);
  border-left-width: 0px;
  border-right-color: rgb(29, 29, 32);
  border-right-width: 0px;
  border-top-color: rgb(29, 29, 32);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(29, 29, 32));
  content: " ";
  font-family: var(--h3-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 21.6px);
  font-weight: var(--font-weight, 650);
  letter-spacing: var(--h3-letter-spacing, -0.1728px);
  line-height: var(--h3-line-height, 28.08px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h4 {
  --accent-h: 232;
  --accent-l: 64%;
  --accent-s: 96%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-tab-header-dark: hsla(232,
        96%,
        64%, 0.15);
  --background-activated-tab-header-light: #ffffff;
  --background-mod-left-split: #ffffff;
  --background-mod-left-split-dark: #ffffff;
  --background-mod-left-split-light: #ffffff;
  --background-mod-right-split: #ffffff;
  --background-mod-right-split-dark: #ffffff;
  --background-mod-right-split-light: #ffffff;
  --background-mod-root-split: #ffffff;
  --background-mod-root-split-dark: #ffffff;
  --background-mod-root-split-light: #ffffff;
  --background-modifier-active-hover: hsla(232,
        96%,
        64%, 0.15);
  --background-modifier-border: hsla(232, 38.4%, 64%, 0.2);
  --background-modifier-border-focus: hsla(232, 38.4%, 64%, 0.3);
  --background-modifier-border-hover: hsla(232, 38.4%, 64%, 0.25);
  --background-modifier-border-muted: hsla(232, 38.4%, 64%, 0.1);
  --background-modifier-error: rgb(221, 44, 56);
  --background-modifier-error-hover: rgb(221, 44, 56);
  --background-modifier-error-rgb: 221, 44, 56;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 6%, 64%, 0.15);
  --background-modifier-success: rgb(29, 165, 29);
  --background-modifier-success-rgb: 29, 165, 29;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(232,
            16%,
            97.75%);
  --background-secondary-alt: #fcfcfc;
  --background-tertiary: hsl(232,
            64%,
            96.4%);
  --background-underlying: hsl(232,
            64%,
            96.4%);
  --background-underlying-dark: hsl(232,
            64%,
            96.4%);
  --background-underlying-light: hsl(232,
            64%,
            96.4%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(231, 96.96%, 68.8%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(221, 44, 56);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: darken;
  --callout-bug: 221, 44, 56;
  --callout-default: 23, 117, 217;
  --callout-error: 221, 44, 56;
  --callout-example: 143, 71, 225;
  --callout-fail: 221, 44, 56;
  --callout-important: 22, 166, 171;
  --callout-info: 23, 117, 217;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 222, 116, 23;
  --callout-radius: 4px;
  --callout-success: 29, 165, 29;
  --callout-summary: 22, 166, 171;
  --callout-tip: 22, 166, 171;
  --callout-title-weight: 600;
  --callout-todo: 23, 117, 217;
  --callout-warning: 222, 116, 23;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 38.4%, 64%, 0.2), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 38.4%, 64%, 0.1), 0 0 6px hsla(232, 38.4%, 64%, 0.1);
  --caret-color: hsl(232, 6%, 12%);
  --checkbox-border-color: hsl(232, 12%, 64%);
  --checkbox-border-color-hover: hsl(232, 12%, 64%);
  --checkbox-color: rgb(29, 165, 29);
  --checkbox-color-hover: rgb(29, 165, 29);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 12%, 64%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-color: hsla(232, 38.4%, 64%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-light: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-bracket-background: hsla(232, 6%, 64%, 0.15);
  --code-comment: hsl(232, 12%, 64%);
  --code-function: rgb(192, 156, 12);
  --code-important: rgb(222, 116, 23);
  --code-keyword: rgb(221, 19, 153);
  --code-normal: hsl(232, 9%, 36%);
  --code-operator: rgb(221, 44, 56);
  --code-property: rgb(22, 166, 171);
  --code-punctuation: hsl(232, 9%, 36%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(29, 165, 29);
  --code-tag: rgb(221, 44, 56);
  --code-value: rgb(143, 71, 225);
  --collapse-icon-color: hsl(232, 12%, 64%);
  --collapse-icon-color-collapsed: hsl(231, 96.96%, 68.8%);
  --color-accent: hsl(232, 96%, 64%);
  --color-accent-1: hsl(231, 96.96%, 68.8%);
  --color-accent-2: hsl(229, 97.92%, 73.6%);
  --color-accent-3: hsla(232, 38.4%, 64%);
  --color-accent-hsl: 232,
        96%,
        64%;
  --color-activated-tab-header-dark: hsl(232, 6%, 12%);
  --color-activated-tab-header-light: hsl(232, 6%, 12%);
  --color-blue: rgb(23, 117, 217);
  --color-cyan: rgb(22, 166, 171);
  --color-green: rgb(29, 165, 29);
  --color-orange: rgb(222, 116, 23);
  --color-pink: rgb(221, 19, 153);
  --color-purple: rgb(143, 71, 225);
  --color-red: rgb(221, 44, 56);
  --color-yellow: rgb(192, 156, 12);
  --divider-color: hsla(232, 38.4%, 64%, 0.2);
  --divider-color-hover: hsl(231, 96.96%, 68.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: #fcfcfc;
  --dropdown-background-hover: #f7f7f7;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #fcfcfc;
  --flair-color: hsl(232, 6%, 12%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h4-weight, 625);
  --graph-line: #d4d4d4;
  --graph-node: hsl(232, 9%, 36%);
  --graph-node-attachment: rgb(192, 156, 12);
  --graph-node-focused: hsl(231, 96.96%, 68.8%);
  --graph-node-tag: rgb(29, 165, 29);
  --graph-node-unresolved: hsl(232, 12%, 64%);
  --graph-text: hsl(232, 6%, 12%);
  --grid-background-pattern-color: hsla(232, 38.4%, 64%, 0.2);
  --h1-accent-color: rgb(221, 44, 56);
  --h2-accent-color: rgb(222, 116, 23);
  --h3-accent-color: rgb(192, 156, 12);
  --h4-accent-color: rgb(29, 165, 29);
  --h5-accent-color: rgb(23, 117, 217);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(143, 71, 225);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 12%, 64%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 38.4%, 64%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(221, 19, 153);
  --interactive-accent: hsl(231, 96.96%, 68.8%);
  --interactive-accent-hover: hsl(229, 97.92%, 73.6%);
  --interactive-accent-hsl: 232,
        96%,
        64%;
  --interactive-hover: #f7f7f7;
  --interactive-normal: #fcfcfc;
  --italic-color: rgb(222, 116, 23);
  --line-height-customize: 1.5;
  --link-color: hsl(231, 96.96%, 68.8%);
  --link-color-hover: hsl(229, 97.92%, 73.6%);
  --link-external-color: rgb(23, 117, 217);
  --link-external-color-hover: rgb(23, 117, 217);
  --link-unresolved-color: hsl(231, 96.96%, 68.8%);
  --link-unresolved-decoration-color: hsla(232,
        96%,
        64%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232,
            16%,
            97.75%);
  --menu-border-color: hsla(232, 38.4%, 64%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
        0px 15px 30px rgba(0, 0, 0, 0.07);
  --on-border-dark: hsla(232, 38.4%, 64%);
  --on-border-light: hsla(232, 38.4%, 64%);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(232, 9%, 36%);
  --search-icon-color: hsl(232, 9%, 36%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 6%, 12%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: hsla(232, 38.4%, 64%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), inset 0 2px 4px 0 hsla(232, 38.4%, 64%, 0.1), inset 0 1px 1px 1px hsla(232, 38.4%, 64%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), 0 0 4px hsla(232, 38.4%, 64%, 0.2), 0px 2px 6px -4px hsla(232, 38.4%, 64%, 0.1), inset 0 -1px 3px 0 hsl(232,
            64%,
            96.4%);
  --shiki-active-tab-border-color: hsl(232, 9%, 36%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 12%, 64%);
  --shiki-code-function: rgb(29, 165, 29);
  --shiki-code-important: rgb(222, 116, 23);
  --shiki-code-keyword: rgb(221, 19, 153);
  --shiki-code-normal: hsl(232, 9%, 36%);
  --shiki-code-property: rgb(22, 166, 171);
  --shiki-code-punctuation: hsl(232, 9%, 36%);
  --shiki-code-string: rgb(192, 156, 12);
  --shiki-code-value: rgb(143, 71, 225);
  --shiki-gutter-border-color: hsla(232, 38.4%, 64%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 12%, 64%);
  --shiki-gutter-text-color-highlight: hsl(232, 9%, 36%);
  --shiki-highlight-green: rgba(29, 165, 29, 0.5);
  --shiki-highlight-green-background: rgba(29, 165, 29, 0.1);
  --shiki-highlight-neutral: hsl(232, 9%, 36%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(221, 44, 56, 0.5);
  --shiki-highlight-red-background: rgba(221, 44, 56, 0.1);
  --shiki-terminal-dots-color: hsl(232, 12%, 64%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(221, 44, 56);
  --sync-avatar-color-2: rgb(222, 116, 23);
  --sync-avatar-color-3: rgb(192, 156, 12);
  --sync-avatar-color-4: rgb(29, 165, 29);
  --sync-avatar-color-5: rgb(22, 166, 171);
  --sync-avatar-color-6: rgb(23, 117, 217);
  --sync-avatar-color-7: rgb(143, 71, 225);
  --sync-avatar-color-8: rgb(221, 19, 153);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 38.4%, 64%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 38.4%, 64%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232,
            16%,
            97.75%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232,
            16%,
            97.75%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 96%, 64%);
  --tab-text-color: hsl(232, 12%, 64%);
  --tab-text-color-active: hsl(232, 9%, 36%);
  --tab-text-color-focused: hsl(232, 9%, 36%);
  --tab-text-color-focused-active: hsl(232, 9%, 36%);
  --tab-text-color-focused-active-current: hsl(232, 6%, 12%);
  --tab-text-color-focused-highlighted: hsl(231, 96.96%, 68.8%);
  --table-add-button-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(231, 96.96%, 68.8%);
  --table-drag-handle-color: hsl(232, 12%, 64%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 6%, 12%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        96%,
        64%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(231, 96.96%, 68.8%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        96%,
        64%, 0.1);
  --tag-background-hover: hsla(232,
        96%,
        64%, 0.2);
  --tag-border-color: hsla(232,
        96%,
        64%, 0.15);
  --tag-border-color-hover: hsla(232,
        96%,
        64%, 0.15);
  --tag-color: hsl(231, 96.96%, 68.8%);
  --tag-color-hover: hsl(231, 96.96%, 68.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(231, 96.96%, 68.8%);
  --text-accent-hover: hsl(229, 97.92%, 73.6%);
  --text-error: rgb(221, 44, 56);
  --text-faint: hsl(232, 12%, 64%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 9%, 36%);
  --text-normal: hsl(232, 6%, 12%);
  --text-selection: hsla(232,
        96%,
        64%, 0.2);
  --text-success: rgb(29, 165, 29);
  --text-warning: rgb(222, 116, 23);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(29, 165, 29);
  border-bottom-color: rgb(29, 29, 32);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 29, 32);
  border-left-width: 0px;
  border-right-color: rgb(29, 29, 32);
  border-right-width: 0px;
  border-top-color: rgb(29, 29, 32);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(29, 29, 32));
  content: " ";
  font-family: var(--h4-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 20.4px);
  font-weight: var(--font-weight, 625);
  letter-spacing: var(--h4-letter-spacing, -0.102px);
  line-height: var(--h4-line-height, 28.56px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h5 {
  --accent-h: 232;
  --accent-l: 64%;
  --accent-s: 96%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-tab-header-dark: hsla(232,
        96%,
        64%, 0.15);
  --background-activated-tab-header-light: #ffffff;
  --background-mod-left-split: #ffffff;
  --background-mod-left-split-dark: #ffffff;
  --background-mod-left-split-light: #ffffff;
  --background-mod-right-split: #ffffff;
  --background-mod-right-split-dark: #ffffff;
  --background-mod-right-split-light: #ffffff;
  --background-mod-root-split: #ffffff;
  --background-mod-root-split-dark: #ffffff;
  --background-mod-root-split-light: #ffffff;
  --background-modifier-active-hover: hsla(232,
        96%,
        64%, 0.15);
  --background-modifier-border: hsla(232, 38.4%, 64%, 0.2);
  --background-modifier-border-focus: hsla(232, 38.4%, 64%, 0.3);
  --background-modifier-border-hover: hsla(232, 38.4%, 64%, 0.25);
  --background-modifier-border-muted: hsla(232, 38.4%, 64%, 0.1);
  --background-modifier-error: rgb(221, 44, 56);
  --background-modifier-error-hover: rgb(221, 44, 56);
  --background-modifier-error-rgb: 221, 44, 56;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 6%, 64%, 0.15);
  --background-modifier-success: rgb(29, 165, 29);
  --background-modifier-success-rgb: 29, 165, 29;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(232,
            16%,
            97.75%);
  --background-secondary-alt: #fcfcfc;
  --background-tertiary: hsl(232,
            64%,
            96.4%);
  --background-underlying: hsl(232,
            64%,
            96.4%);
  --background-underlying-dark: hsl(232,
            64%,
            96.4%);
  --background-underlying-light: hsl(232,
            64%,
            96.4%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(231, 96.96%, 68.8%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(221, 44, 56);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: darken;
  --callout-bug: 221, 44, 56;
  --callout-default: 23, 117, 217;
  --callout-error: 221, 44, 56;
  --callout-example: 143, 71, 225;
  --callout-fail: 221, 44, 56;
  --callout-important: 22, 166, 171;
  --callout-info: 23, 117, 217;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 222, 116, 23;
  --callout-radius: 4px;
  --callout-success: 29, 165, 29;
  --callout-summary: 22, 166, 171;
  --callout-tip: 22, 166, 171;
  --callout-title-weight: 600;
  --callout-todo: 23, 117, 217;
  --callout-warning: 222, 116, 23;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 38.4%, 64%, 0.2), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 38.4%, 64%, 0.1), 0 0 6px hsla(232, 38.4%, 64%, 0.1);
  --caret-color: hsl(232, 6%, 12%);
  --checkbox-border-color: hsl(232, 12%, 64%);
  --checkbox-border-color-hover: hsl(232, 12%, 64%);
  --checkbox-color: rgb(29, 165, 29);
  --checkbox-color-hover: rgb(29, 165, 29);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 12%, 64%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-color: hsla(232, 38.4%, 64%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-light: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-bracket-background: hsla(232, 6%, 64%, 0.15);
  --code-comment: hsl(232, 12%, 64%);
  --code-function: rgb(192, 156, 12);
  --code-important: rgb(222, 116, 23);
  --code-keyword: rgb(221, 19, 153);
  --code-normal: hsl(232, 9%, 36%);
  --code-operator: rgb(221, 44, 56);
  --code-property: rgb(22, 166, 171);
  --code-punctuation: hsl(232, 9%, 36%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(29, 165, 29);
  --code-tag: rgb(221, 44, 56);
  --code-value: rgb(143, 71, 225);
  --collapse-icon-color: hsl(232, 12%, 64%);
  --collapse-icon-color-collapsed: hsl(231, 96.96%, 68.8%);
  --color-accent: hsl(232, 96%, 64%);
  --color-accent-1: hsl(231, 96.96%, 68.8%);
  --color-accent-2: hsl(229, 97.92%, 73.6%);
  --color-accent-3: hsla(232, 38.4%, 64%);
  --color-accent-hsl: 232,
        96%,
        64%;
  --color-activated-tab-header-dark: hsl(232, 6%, 12%);
  --color-activated-tab-header-light: hsl(232, 6%, 12%);
  --color-blue: rgb(23, 117, 217);
  --color-cyan: rgb(22, 166, 171);
  --color-green: rgb(29, 165, 29);
  --color-orange: rgb(222, 116, 23);
  --color-pink: rgb(221, 19, 153);
  --color-purple: rgb(143, 71, 225);
  --color-red: rgb(221, 44, 56);
  --color-yellow: rgb(192, 156, 12);
  --divider-color: hsla(232, 38.4%, 64%, 0.2);
  --divider-color-hover: hsl(231, 96.96%, 68.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: #fcfcfc;
  --dropdown-background-hover: #f7f7f7;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #fcfcfc;
  --flair-color: hsl(232, 6%, 12%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h5-weight, 600);
  --graph-line: #d4d4d4;
  --graph-node: hsl(232, 9%, 36%);
  --graph-node-attachment: rgb(192, 156, 12);
  --graph-node-focused: hsl(231, 96.96%, 68.8%);
  --graph-node-tag: rgb(29, 165, 29);
  --graph-node-unresolved: hsl(232, 12%, 64%);
  --graph-text: hsl(232, 6%, 12%);
  --grid-background-pattern-color: hsla(232, 38.4%, 64%, 0.2);
  --h1-accent-color: rgb(221, 44, 56);
  --h2-accent-color: rgb(222, 116, 23);
  --h3-accent-color: rgb(192, 156, 12);
  --h4-accent-color: rgb(29, 165, 29);
  --h5-accent-color: rgb(23, 117, 217);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(143, 71, 225);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 12%, 64%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 38.4%, 64%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(221, 19, 153);
  --interactive-accent: hsl(231, 96.96%, 68.8%);
  --interactive-accent-hover: hsl(229, 97.92%, 73.6%);
  --interactive-accent-hsl: 232,
        96%,
        64%;
  --interactive-hover: #f7f7f7;
  --interactive-normal: #fcfcfc;
  --italic-color: rgb(222, 116, 23);
  --line-height-customize: 1.5;
  --link-color: hsl(231, 96.96%, 68.8%);
  --link-color-hover: hsl(229, 97.92%, 73.6%);
  --link-external-color: rgb(23, 117, 217);
  --link-external-color-hover: rgb(23, 117, 217);
  --link-unresolved-color: hsl(231, 96.96%, 68.8%);
  --link-unresolved-decoration-color: hsla(232,
        96%,
        64%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232,
            16%,
            97.75%);
  --menu-border-color: hsla(232, 38.4%, 64%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
        0px 15px 30px rgba(0, 0, 0, 0.07);
  --on-border-dark: hsla(232, 38.4%, 64%);
  --on-border-light: hsla(232, 38.4%, 64%);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(232, 9%, 36%);
  --search-icon-color: hsl(232, 9%, 36%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 6%, 12%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: hsla(232, 38.4%, 64%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), inset 0 2px 4px 0 hsla(232, 38.4%, 64%, 0.1), inset 0 1px 1px 1px hsla(232, 38.4%, 64%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), 0 0 4px hsla(232, 38.4%, 64%, 0.2), 0px 2px 6px -4px hsla(232, 38.4%, 64%, 0.1), inset 0 -1px 3px 0 hsl(232,
            64%,
            96.4%);
  --shiki-active-tab-border-color: hsl(232, 9%, 36%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 12%, 64%);
  --shiki-code-function: rgb(29, 165, 29);
  --shiki-code-important: rgb(222, 116, 23);
  --shiki-code-keyword: rgb(221, 19, 153);
  --shiki-code-normal: hsl(232, 9%, 36%);
  --shiki-code-property: rgb(22, 166, 171);
  --shiki-code-punctuation: hsl(232, 9%, 36%);
  --shiki-code-string: rgb(192, 156, 12);
  --shiki-code-value: rgb(143, 71, 225);
  --shiki-gutter-border-color: hsla(232, 38.4%, 64%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 12%, 64%);
  --shiki-gutter-text-color-highlight: hsl(232, 9%, 36%);
  --shiki-highlight-green: rgba(29, 165, 29, 0.5);
  --shiki-highlight-green-background: rgba(29, 165, 29, 0.1);
  --shiki-highlight-neutral: hsl(232, 9%, 36%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(221, 44, 56, 0.5);
  --shiki-highlight-red-background: rgba(221, 44, 56, 0.1);
  --shiki-terminal-dots-color: hsl(232, 12%, 64%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(221, 44, 56);
  --sync-avatar-color-2: rgb(222, 116, 23);
  --sync-avatar-color-3: rgb(192, 156, 12);
  --sync-avatar-color-4: rgb(29, 165, 29);
  --sync-avatar-color-5: rgb(22, 166, 171);
  --sync-avatar-color-6: rgb(23, 117, 217);
  --sync-avatar-color-7: rgb(143, 71, 225);
  --sync-avatar-color-8: rgb(221, 19, 153);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 38.4%, 64%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 38.4%, 64%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232,
            16%,
            97.75%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232,
            16%,
            97.75%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 96%, 64%);
  --tab-text-color: hsl(232, 12%, 64%);
  --tab-text-color-active: hsl(232, 9%, 36%);
  --tab-text-color-focused: hsl(232, 9%, 36%);
  --tab-text-color-focused-active: hsl(232, 9%, 36%);
  --tab-text-color-focused-active-current: hsl(232, 6%, 12%);
  --tab-text-color-focused-highlighted: hsl(231, 96.96%, 68.8%);
  --table-add-button-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(231, 96.96%, 68.8%);
  --table-drag-handle-color: hsl(232, 12%, 64%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 6%, 12%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        96%,
        64%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(231, 96.96%, 68.8%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        96%,
        64%, 0.1);
  --tag-background-hover: hsla(232,
        96%,
        64%, 0.2);
  --tag-border-color: hsla(232,
        96%,
        64%, 0.15);
  --tag-border-color-hover: hsla(232,
        96%,
        64%, 0.15);
  --tag-color: hsl(231, 96.96%, 68.8%);
  --tag-color-hover: hsl(231, 96.96%, 68.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(231, 96.96%, 68.8%);
  --text-accent-hover: hsl(229, 97.92%, 73.6%);
  --text-error: rgb(221, 44, 56);
  --text-faint: hsl(232, 12%, 64%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 9%, 36%);
  --text-normal: hsl(232, 6%, 12%);
  --text-selection: hsla(232,
        96%,
        64%, 0.2);
  --text-success: rgb(29, 165, 29);
  --text-warning: rgb(222, 116, 23);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(23, 117, 217);
  border-bottom-color: rgb(29, 29, 32);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 29, 32);
  border-left-width: 0px;
  border-right-color: rgb(29, 29, 32);
  border-right-width: 0px;
  border-top-color: rgb(29, 29, 32);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(29, 29, 32));
  content: " ";
  font-family: var(--h5-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 19.2px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.0384px);
  line-height: var(--h5-line-height, 28.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h6 {
  --accent-h: 232;
  --accent-l: 64%;
  --accent-s: 96%;
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-activated-tab-header-dark: hsla(232,
        96%,
        64%, 0.15);
  --background-activated-tab-header-light: #ffffff;
  --background-mod-left-split: #ffffff;
  --background-mod-left-split-dark: #ffffff;
  --background-mod-left-split-light: #ffffff;
  --background-mod-right-split: #ffffff;
  --background-mod-right-split-dark: #ffffff;
  --background-mod-right-split-light: #ffffff;
  --background-mod-root-split: #ffffff;
  --background-mod-root-split-dark: #ffffff;
  --background-mod-root-split-light: #ffffff;
  --background-modifier-active-hover: hsla(232,
        96%,
        64%, 0.15);
  --background-modifier-border: hsla(232, 38.4%, 64%, 0.2);
  --background-modifier-border-focus: hsla(232, 38.4%, 64%, 0.3);
  --background-modifier-border-hover: hsla(232, 38.4%, 64%, 0.25);
  --background-modifier-border-muted: hsla(232, 38.4%, 64%, 0.1);
  --background-modifier-error: rgb(221, 44, 56);
  --background-modifier-error-hover: rgb(221, 44, 56);
  --background-modifier-error-rgb: 221, 44, 56;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: hsla(232, 6%, 64%, 0.15);
  --background-modifier-success: rgb(29, 165, 29);
  --background-modifier-success-rgb: 29, 165, 29;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(232,
            16%,
            97.75%);
  --background-secondary-alt: #fcfcfc;
  --background-tertiary: hsl(232,
            64%,
            96.4%);
  --background-underlying: hsl(232,
            64%,
            96.4%);
  --background-underlying-dark: hsl(232,
            64%,
            96.4%);
  --background-underlying-light: hsl(232,
            64%,
            96.4%);
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --blockquote-border-color: hsl(231, 96.96%, 68.8%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(221, 44, 56);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 6px;
  --callout-blend-mode: darken;
  --callout-bug: 221, 44, 56;
  --callout-default: 23, 117, 217;
  --callout-error: 221, 44, 56;
  --callout-example: 143, 71, 225;
  --callout-fail: 221, 44, 56;
  --callout-important: 22, 166, 171;
  --callout-info: 23, 117, 217;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 222, 116, 23;
  --callout-radius: 4px;
  --callout-success: 29, 165, 29;
  --callout-summary: 22, 166, 171;
  --callout-tip: 22, 166, 171;
  --callout-title-weight: 600;
  --callout-todo: 23, 117, 217;
  --callout-warning: 222, 116, 23;
  --canvas-background: transparent;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --card-shadow-border-radius-dark: 7px;
  --card-shadow-border-radius-light: 7px;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 38.4%, 64%, 0.2), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2);
  --card-shadow-light: 0 0 0 1px hsla(232, 38.4%, 64%, 0.1), 0 0 6px hsla(232, 38.4%, 64%, 0.1);
  --caret-color: hsl(232, 6%, 12%);
  --checkbox-border-color: hsl(232, 12%, 64%);
  --checkbox-border-color-hover: hsl(232, 12%, 64%);
  --checkbox-color: rgb(29, 165, 29);
  --checkbox-color-hover: rgb(29, 165, 29);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 6px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(232, 12%, 64%);
  --clickable-icon-radius: 6px;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --code-border: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-color: hsla(232, 38.4%, 64%, 0.2);
  --code-border-dark: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-border-light: 1px dashed hsla(232, 38.4%, 64%, 0.2);
  --code-bracket-background: hsla(232, 6%, 64%, 0.15);
  --code-comment: hsl(232, 12%, 64%);
  --code-function: rgb(192, 156, 12);
  --code-important: rgb(222, 116, 23);
  --code-keyword: rgb(221, 19, 153);
  --code-normal: hsl(232, 9%, 36%);
  --code-operator: rgb(221, 44, 56);
  --code-property: rgb(22, 166, 171);
  --code-punctuation: hsl(232, 9%, 36%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(29, 165, 29);
  --code-tag: rgb(221, 44, 56);
  --code-value: rgb(143, 71, 225);
  --collapse-icon-color: hsl(232, 12%, 64%);
  --collapse-icon-color-collapsed: hsl(231, 96.96%, 68.8%);
  --color-accent: hsl(232, 96%, 64%);
  --color-accent-1: hsl(231, 96.96%, 68.8%);
  --color-accent-2: hsl(229, 97.92%, 73.6%);
  --color-accent-3: hsla(232, 38.4%, 64%);
  --color-accent-hsl: 232,
        96%,
        64%;
  --color-activated-tab-header-dark: hsl(232, 6%, 12%);
  --color-activated-tab-header-light: hsl(232, 6%, 12%);
  --color-blue: rgb(23, 117, 217);
  --color-cyan: rgb(22, 166, 171);
  --color-green: rgb(29, 165, 29);
  --color-orange: rgb(222, 116, 23);
  --color-pink: rgb(221, 19, 153);
  --color-purple: rgb(143, 71, 225);
  --color-red: rgb(221, 44, 56);
  --color-yellow: rgb(192, 156, 12);
  --divider-color: hsla(232, 38.4%, 64%, 0.2);
  --divider-color-hover: hsl(231, 96.96%, 68.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: #fcfcfc;
  --dropdown-background-hover: #f7f7f7;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #fcfcfc;
  --flair-color: hsl(232, 6%, 12%);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h6-weight, 575);
  --graph-line: #d4d4d4;
  --graph-node: hsl(232, 9%, 36%);
  --graph-node-attachment: rgb(192, 156, 12);
  --graph-node-focused: hsl(231, 96.96%, 68.8%);
  --graph-node-tag: rgb(29, 165, 29);
  --graph-node-unresolved: hsl(232, 12%, 64%);
  --graph-text: hsl(232, 6%, 12%);
  --grid-background-pattern-color: hsla(232, 38.4%, 64%, 0.2);
  --h1-accent-color: rgb(221, 44, 56);
  --h2-accent-color: rgb(222, 116, 23);
  --h3-accent-color: rgb(192, 156, 12);
  --h4-accent-color: rgb(29, 165, 29);
  --h5-accent-color: rgb(23, 117, 217);
  --h5-line-height: 1.5;
  --h6-accent-color: rgb(143, 71, 225);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(232, 12%, 64%);
  --heading-spacing: 2.5rem;
  --hr-color: hsla(232, 38.4%, 64%, 0.2);
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --inline-code-normal: rgb(221, 19, 153);
  --interactive-accent: hsl(231, 96.96%, 68.8%);
  --interactive-accent-hover: hsl(229, 97.92%, 73.6%);
  --interactive-accent-hsl: 232,
        96%,
        64%;
  --interactive-hover: #f7f7f7;
  --interactive-normal: #fcfcfc;
  --italic-color: rgb(222, 116, 23);
  --line-height-customize: 1.5;
  --link-color: hsl(231, 96.96%, 68.8%);
  --link-color-hover: hsl(229, 97.92%, 73.6%);
  --link-external-color: rgb(23, 117, 217);
  --link-external-color-hover: rgb(23, 117, 217);
  --link-unresolved-color: hsl(231, 96.96%, 68.8%);
  --link-unresolved-decoration-color: hsla(232,
        96%,
        64%, 0.3);
  --link-weight: 400;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --menu-background: hsl(232,
            16%,
            97.75%);
  --menu-border-color: hsla(232, 38.4%, 64%, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
        0px 15px 30px rgba(0, 0, 0, 0.07);
  --on-border-dark: hsla(232, 38.4%, 64%);
  --on-border-light: hsla(232, 38.4%, 64%);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(232, 9%, 36%);
  --search-icon-color: hsl(232, 9%, 36%);
  --search-result-background: transparent;
  --setting-group-heading-color: hsl(232, 6%, 12%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: hsla(232, 38.4%, 64%, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), inset 0 2px 4px 0 hsla(232, 38.4%, 64%, 0.1), inset 0 1px 1px 1px hsla(232, 38.4%, 64%, 0.2);
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), 0 0 4px hsla(232, 38.4%, 64%, 0.2), 0px 2px 6px -4px hsla(232, 38.4%, 64%, 0.1), inset 0 -1px 3px 0 hsl(232,
            64%,
            96.4%);
  --shiki-active-tab-border-color: hsl(232, 9%, 36%);
  --shiki-code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(232, 12%, 64%);
  --shiki-code-function: rgb(29, 165, 29);
  --shiki-code-important: rgb(222, 116, 23);
  --shiki-code-keyword: rgb(221, 19, 153);
  --shiki-code-normal: hsl(232, 9%, 36%);
  --shiki-code-property: rgb(22, 166, 171);
  --shiki-code-punctuation: hsl(232, 9%, 36%);
  --shiki-code-string: rgb(192, 156, 12);
  --shiki-code-value: rgb(143, 71, 225);
  --shiki-gutter-border-color: hsla(232, 38.4%, 64%, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(232, 12%, 64%);
  --shiki-gutter-text-color-highlight: hsl(232, 9%, 36%);
  --shiki-highlight-green: rgba(29, 165, 29, 0.5);
  --shiki-highlight-green-background: rgba(29, 165, 29, 0.1);
  --shiki-highlight-neutral: hsl(232, 9%, 36%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(221, 44, 56, 0.5);
  --shiki-highlight-red-background: rgba(221, 44, 56, 0.1);
  --shiki-terminal-dots-color: hsl(232, 12%, 64%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(221, 44, 56);
  --sync-avatar-color-2: rgb(222, 116, 23);
  --sync-avatar-color-3: rgb(192, 156, 12);
  --sync-avatar-color-4: rgb(29, 165, 29);
  --sync-avatar-color-5: rgb(22, 166, 171);
  --sync-avatar-color-6: rgb(23, 117, 217);
  --sync-avatar-color-7: rgb(143, 71, 225);
  --sync-avatar-color-8: rgb(221, 19, 153);
  --tab-background-active: transparent;
  --tab-divider-color: hsla(232, 38.4%, 64%, 0.25);
  --tab-font-size: 13px;
  --tab-outline-color: hsla(232, 38.4%, 64%, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(232,
            16%,
            97.75%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232,
            16%,
            97.75%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 96%, 64%);
  --tab-text-color: hsl(232, 12%, 64%);
  --tab-text-color-active: hsl(232, 9%, 36%);
  --tab-text-color-focused: hsl(232, 9%, 36%);
  --tab-text-color-focused-active: hsl(232, 9%, 36%);
  --tab-text-color-focused-active-current: hsl(232, 6%, 12%);
  --tab-text-color-focused-highlighted: hsl(231, 96.96%, 68.8%);
  --table-add-button-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(231, 96.96%, 68.8%);
  --table-drag-handle-color: hsl(232, 12%, 64%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --table-header-border-color: hsla(232, 38.4%, 64%, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: hsl(232, 6%, 12%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(232,
        96%,
        64%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(231, 96.96%, 68.8%);
  --table-text-size: 16px;
  --tag-background: hsla(232,
        96%,
        64%, 0.1);
  --tag-background-hover: hsla(232,
        96%,
        64%, 0.2);
  --tag-border-color: hsla(232,
        96%,
        64%, 0.15);
  --tag-border-color-hover: hsla(232,
        96%,
        64%, 0.15);
  --tag-color: hsl(231, 96.96%, 68.8%);
  --tag-color-hover: hsl(231, 96.96%, 68.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(231, 96.96%, 68.8%);
  --text-accent-hover: hsl(229, 97.92%, 73.6%);
  --text-error: rgb(221, 44, 56);
  --text-faint: hsl(232, 12%, 64%);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: hsl(232, 9%, 36%);
  --text-normal: hsl(232, 6%, 12%);
  --text-selection: hsla(232,
        96%,
        64%, 0.2);
  --text-success: rgb(29, 165, 29);
  --text-warning: rgb(222, 116, 23);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(143, 71, 225);
  border-bottom-color: rgb(29, 29, 32);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 29, 32);
  border-left-width: 0px;
  border-right-color: rgb(29, 29, 32);
  border-right-width: 0px;
  border-top-color: rgb(29, 29, 32);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(29, 29, 32));
  content: " ";
  font-family: var(--h6-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 18px);
  font-weight: var(--font-weight, 575);
  line-height: var(--h6-line-height, 27px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(152, 155, 174);
  border-radius: 6px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(29, 165, 29));
  border-color: rgb(29, 165, 29);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(84, 86, 100));
  outline: rgb(84, 86, 100) none 0px;
  text-decoration-color: rgb(84, 86, 100);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  color: var(--link-external-color, rgb(23, 117, 217));
  outline: rgb(23, 117, 217) none 0px;
  text-decoration-color: rgb(23, 117, 217);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  color: var(--link-color, rgb(98, 121, 253));
  outline: rgb(98, 121, 253) none 0px;
  text-decoration-color: rgb(98, 121, 253);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal-link.broken {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  color: var(--link-unresolved-color, rgb(98, 121, 253));
  outline: rgb(98, 121, 253) none 0px;
  text-decoration: underline rgba(75, 99, 251, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(75, 99, 251, 0.3));
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body dt {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body ol > li {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body ul > li {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(152, 155, 174));
}

html[saved-theme="light"] body blockquote {
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body table {
  color: rgb(29, 29, 32);
  width: 663px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-left-color: rgba(128, 137, 198, 0.2);
  border-right-color: rgba(128, 137, 198, 0.2);
  border-top-color: rgba(128, 137, 198, 0.2);
  color: var(--table-text-color, rgb(29, 29, 32));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-left-color: rgba(128, 137, 198, 0.2);
  border-right-color: rgba(128, 137, 198, 0.2);
  border-top-color: rgba(128, 137, 198, 0.2);
  color: var(--table-header-color, rgb(29, 29, 32));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-left-color: rgba(128, 137, 198, 0.2);
  border-right-color: rgba(128, 137, 198, 0.2);
  border-top-color: rgba(128, 137, 198, 0.2);
  color: var(--inline-code-normal, rgb(221, 19, 153));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgba(128, 137, 198, 0.2);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgba(128, 137, 198, 0.2);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgba(128, 137, 198, 0.2);
  border-top-style: dashed;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body figcaption {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"));
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(84, 86, 100);
  border-left-color: rgb(84, 86, 100);
  border-right-color: rgb(84, 86, 100);
  border-top-color: rgb(84, 86, 100);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(29, 29, 32);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(98, 121, 253);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(152, 155, 174);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(152, 155, 174);
  border-right-color: rgb(152, 155, 174);
  border-top-color: rgb(152, 155, 174);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  transition: box-shadow 0.3s cubic-bezier(0, 0.55, 0.45, 1), filter 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(152, 155, 174);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(152, 155, 174);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(152, 155, 174);
  text-decoration: line-through 1px rgb(152, 155, 174);
  text-decoration-color: rgb(152, 155, 174);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(29, 29, 32);
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M0 8a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 0 8Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M0 8a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 0 8Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M8 0a2.463 2.463 0 0 0-2.43 2.864v.002L6.686 9.55a1.334 1.334 0 0 0 2.63 0l1.114-6.685v-.002A2.463 2.463 0 0 0 8 0Zm0 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' fill-rule='evenodd' d='M8 0a2.463 2.463 0 0 0-2.43 2.864v.002L6.686 9.55a1.334 1.334 0 0 0 2.63 0l1.114-6.685v-.002A2.463 2.463 0 0 0 8 0Zm0 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z' clip-rule='evenodd'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.871 3.692c0 3.56-3.956 3.319-3.956 5.78v.014c0 .284-.23.514-.514.514H6.243a.514.514 0 0 1-.515-.514V9.34c0-3.803 3.473-3.56 3.473-5.341 0-.77-.571-1.23-1.517-1.23-.768 0-1.554.335-2.268 1.022a.512.512 0 0 1-.67.031l-1.419-1.11a.513.513 0 0 1-.056-.76C4.457.731 5.997 0 8.036 0c3.23 0 4.835 1.736 4.835 3.692ZM9.355 14c0 1.099-.88 2-2 2-1.1 0-2-.901-2-2s.9-2 2-2c1.12 0 2 .901 2 2Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.871 3.692c0 3.56-3.956 3.319-3.956 5.78v.014c0 .284-.23.514-.514.514H6.243a.514.514 0 0 1-.515-.514V9.34c0-3.803 3.473-3.56 3.473-5.341 0-.77-.571-1.23-1.517-1.23-.768 0-1.554.335-2.268 1.022a.512.512 0 0 1-.67.031l-1.419-1.11a.513.513 0 0 1-.056-.76C4.457.731 5.997 0 8.036 0c3.23 0 4.835 1.736 4.835 3.692ZM9.355 14c0 1.099-.88 2-2 2-1.1 0-2-.901-2-2s.9-2 2-2c1.12 0 2 .901 2 2Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(222, 116, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
  color: rgb(143, 71, 225);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 156, 12);
  color: rgb(192, 156, 12);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 166, 171);
  color: rgb(23, 117, 217);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(23, 117, 217);
  color: rgb(221, 19, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(221, 44, 56);
  color: rgb(23, 117, 217);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(221, 44, 56);
  color: rgb(221, 44, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(221, 44, 56);
  color: rgb(221, 44, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(221, 44, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M10.34 14.025c-.007.002-.56.186-1.04.186-.265 0-.372-.055-.406-.08-.168-.116-.48-.335.054-1.4l1-1.993c.593-1.184.681-2.33.245-3.226-.356-.733-1.039-1.236-1.92-1.416A5 5 0 0 0 7.315 6C5.466 6 4.221 7.08 4.17 7.125a.5.5 0 0 0 .493.848c.005-.002.559-.187 1.04-.187.262 0 .368.055.401.078.17.119.482.34-.05 1.403l-1.001 1.995c-.594 1.185-.681 2.33-.245 3.225.356.733 1.038 1.236 1.921 1.416.314.063.636.097.954.097 1.85 0 3.096-1.08 3.148-1.126a.5.5 0 0 0-.49-.85ZM9.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M10.34 14.025c-.007.002-.56.186-1.04.186-.265 0-.372-.055-.406-.08-.168-.116-.48-.335.054-1.4l1-1.993c.593-1.184.681-2.33.245-3.226-.356-.733-1.039-1.236-1.92-1.416A5 5 0 0 0 7.315 6C5.466 6 4.221 7.08 4.17 7.125a.5.5 0 0 0 .493.848c.005-.002.559-.187 1.04-.187.262 0 .368.055.401.078.17.119.482.34-.05 1.403l-1.001 1.995c-.594 1.185-.681 2.33-.245 3.225.356.733 1.038 1.236 1.921 1.416.314.063.636.097.954.097 1.85 0 3.096-1.08 3.148-1.126a.5.5 0 0 0-.49-.85ZM9.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 156, 12);
  color: rgb(222, 116, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 156, 12);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 71, 225);
  color: rgb(221, 44, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(221, 44, 56);
  color: rgb(22, 166, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 165, 29);
  color: rgb(29, 165, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.781 8.34c-.84-.665-2.146-1.247-3.354-1.715V4.396a28.48 28.48 0 0 1 2.123.772c.096.04.209.006.265-.082l1.193-1.805a.219.219 0 0 0-.079-.314c-.68-.365-2.072-.93-3.502-1.293V.366a.27.27 0 0 0-.27-.271H6.985a.271.271 0 0 0-.271.271v.973c-2.014.092-3.38.795-4.166 2.147-.616 1.06-.613 2.255.004 3.118.645.922 1.699 1.332 3.031 1.851l.172.066c.309.118.634.239.959.359v2.715c-1.41-.335-2.736-1.023-2.98-1.189a.218.218 0 0 0-.296.048l-1.444 1.883a.211.211 0 0 0-.043.163.22.22 0 0 0 .086.145c.874.648 2.145 1.266 3.403 1.654a12.4 12.4 0 0 0 1.275.316v1.018c0 .148.121.27.271.27h2.173a.27.27 0 0 0 .27-.27v-.845c1.928-.16 3.368-.997 4.192-2.45.793-1.402.49-2.858-.839-3.998ZM6.712 4.014v1.643c-.624-.2-.993-.394-.953-.872.04-.49.51-.69.954-.771Zm2.716 5.875c.458.205.806.42.927.689.069.152.063.326-.016.533-.14.364-.502.553-.912.649V9.889Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cpath fill='black' d='M12.781 8.34c-.84-.665-2.146-1.247-3.354-1.715V4.396a28.48 28.48 0 0 1 2.123.772c.096.04.209.006.265-.082l1.193-1.805a.219.219 0 0 0-.079-.314c-.68-.365-2.072-.93-3.502-1.293V.366a.27.27 0 0 0-.27-.271H6.985a.271.271 0 0 0-.271.271v.973c-2.014.092-3.38.795-4.166 2.147-.616 1.06-.613 2.255.004 3.118.645.922 1.699 1.332 3.031 1.851l.172.066c.309.118.634.239.959.359v2.715c-1.41-.335-2.736-1.023-2.98-1.189a.218.218 0 0 0-.296.048l-1.444 1.883a.211.211 0 0 0-.043.163.22.22 0 0 0 .086.145c.874.648 2.145 1.266 3.403 1.654a12.4 12.4 0 0 0 1.275.316v1.018c0 .148.121.27.271.27h2.173a.27.27 0 0 0 .27-.27v-.845c1.928-.16 3.368-.997 4.192-2.45.793-1.402.49-2.858-.839-3.998ZM6.712 4.014v1.643c-.624-.2-.993-.394-.953-.872.04-.49.51-.69.954-.771Zm2.716 5.875c.458.205.806.42.927.689.069.152.063.326-.016.533-.14.364-.502.553-.912.649V9.889Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 165, 29);
  color: rgb(29, 165, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 165, 29);
  color: rgb(29, 165, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 22, 166, 171);
  background: rgba(22, 166, 171, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(22, 166, 171, 0.25);
  border-left-color: rgba(22, 166, 171, 0.25);
  border-right-color: rgba(22, 166, 171, 0.25);
  border-top-color: rgba(22, 166, 171, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 221, 44, 56);
  background: rgba(221, 44, 56, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(221, 44, 56, 0.25);
  border-left-color: rgba(221, 44, 56, 0.25);
  border-right-color: rgba(221, 44, 56, 0.25);
  border-top-color: rgba(221, 44, 56, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 221, 44, 56);
  background: rgba(221, 44, 56, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(221, 44, 56, 0.25);
  border-left-color: rgba(221, 44, 56, 0.25);
  border-right-color: rgba(221, 44, 56, 0.25);
  border-top-color: rgba(221, 44, 56, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 143, 71, 225);
  background: rgba(143, 71, 225, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(143, 71, 225, 0.25);
  border-left-color: rgba(143, 71, 225, 0.25);
  border-right-color: rgba(143, 71, 225, 0.25);
  border-top-color: rgba(143, 71, 225, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 221, 44, 56);
  background: rgba(221, 44, 56, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(221, 44, 56, 0.25);
  border-left-color: rgba(221, 44, 56, 0.25);
  border-right-color: rgba(221, 44, 56, 0.25);
  border-top-color: rgba(221, 44, 56, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 23, 117, 217);
  background: rgba(23, 117, 217, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(23, 117, 217, 0.25);
  border-left-color: rgba(23, 117, 217, 0.25);
  border-right-color: rgba(23, 117, 217, 0.25);
  border-top-color: rgba(23, 117, 217, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 23, 117, 217);
  background: rgba(23, 117, 217, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(23, 117, 217, 0.25);
  border-left-color: rgba(23, 117, 217, 0.25);
  border-right-color: rgba(23, 117, 217, 0.25);
  border-top-color: rgba(23, 117, 217, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 222, 116, 23);
  background: rgba(222, 116, 23, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(222, 116, 23, 0.25);
  border-left-color: rgba(222, 116, 23, 0.25);
  border-right-color: rgba(222, 116, 23, 0.25);
  border-top-color: rgba(222, 116, 23, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 29, 165, 29);
  background: rgba(29, 165, 29, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(29, 165, 29, 0.25);
  border-left-color: rgba(29, 165, 29, 0.25);
  border-right-color: rgba(29, 165, 29, 0.25);
  border-top-color: rgba(29, 165, 29, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 22, 166, 171);
  background: rgba(22, 166, 171, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(22, 166, 171, 0.25);
  border-left-color: rgba(22, 166, 171, 0.25);
  border-right-color: rgba(22, 166, 171, 0.25);
  border-top-color: rgba(22, 166, 171, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 23, 117, 217);
  background: rgba(23, 117, 217, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(23, 117, 217, 0.25);
  border-left-color: rgba(23, 117, 217, 0.25);
  border-right-color: rgba(23, 117, 217, 0.25);
  border-top-color: rgba(23, 117, 217, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 222, 116, 23);
  background: rgba(222, 116, 23, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(222, 116, 23, 0.25);
  border-left-color: rgba(222, 116, 23, 0.25);
  border-right-color: rgba(222, 116, 23, 0.25);
  border-top-color: rgba(222, 116, 23, 0.25);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 117, 217));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(29, 29, 32);
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(128, 137, 198, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(128, 137, 198, 0.3);
  border-right-color: rgba(128, 137, 198, 0.3);
  border-top-color: rgba(128, 137, 198, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--text-normal, rgb(29, 29, 32));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--workspace-background-translucent, rgba(246, 246, 246, 0.8));
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-left-color: rgba(128, 137, 198, 0.2);
  border-right-color: rgba(128, 137, 198, 0.2);
  border-top-color: rgba(128, 137, 198, 0.2);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(29, 29, 32);
  outline: rgb(29, 29, 32) none 0px;
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(158, 159, 169, 0.15));
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-left-color: rgba(128, 137, 198, 0.2);
  border-right-color: rgba(128, 137, 198, 0.2);
  border-top-color: rgba(128, 137, 198, 0.2);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 29, 32);
  border-bottom-width: 0px;
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(158, 159, 169, 0.15));
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(158, 159, 169, 0.15));
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(232,
        96%,
        64%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(232,
        96%,
        64%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(232,
        96%,
        64%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(232,
        96%,
        64%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(231, 96.96%, 68.8%));
  --pill-color-hover: var(--tag-color-hover, hsl(231, 96.96%, 68.8%));
  --pill-color-remove: var(--tag-color, hsl(231, 96.96%, 68.8%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(231, 96.96%, 68.8%));
  background-color: var(--pill-background, rgba(75, 99, 251, 0.1));
  border-bottom-color: rgba(75, 99, 251, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(75, 99, 251, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(75, 99, 251, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(75, 99, 251, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(98, 121, 253);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(29, 29, 32));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(29, 29, 32));
  font-size: var(--inline-title-size, 24px);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 675);
  color: var(--h2-color, rgb(29, 29, 32));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(29, 29, 32));
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 650);
  color: var(--h3-color, rgb(29, 29, 32));
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 625);
  color: var(--h4-color, rgb(29, 29, 32));
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, rgb(29, 29, 32));
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 575);
  color: var(--h6-color, rgb(29, 29, 32));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-left-color: rgba(128, 137, 198, 0.2);
  border-right-color: rgba(128, 137, 198, 0.2);
  border-top-color: rgba(128, 137, 198, 0.2);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 23, 117, 217);
  border-bottom-color: rgba(23, 117, 217, 0.25);
  border-left-color: rgba(23, 117, 217, 0.25);
  border-right-color: rgba(23, 117, 217, 0.25);
  border-top-color: rgba(23, 117, 217, 0.25);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(84, 86, 100));
  cursor: var(--cursor, pointer);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(84, 86, 100));
  cursor: var(--cursor, pointer);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(29, 29, 32);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(84, 86, 100);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(84, 86, 100);
  border-right-color: rgb(84, 86, 100);
  border-top-color: rgb(84, 86, 100);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(84, 86, 100));
  cursor: var(--cursor, pointer);
}`,
    footer: `html[saved-theme="light"] body footer {
  --icon-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --icon-color-hover: var(--text-muted, hsla(232, 38.4%, 64%));
  --status-bar-text-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color: var(--text-faint, hsla(232, 38.4%, 64%));
  --tab-text-color-active: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color-focused: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color-focused-active: var(--text-muted, hsla(232, 38.4%, 64%));
  --text-faint: var(--on-border-light, hsla(232, 38.4%, 64%));
  --text-muted: var(--on-border-light, hsla(232, 38.4%, 64%));
  --titlebar-text-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --titlebar-text-color-focused: var(--text-muted, hsla(232, 38.4%, 64%));
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(128, 137, 198));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(128, 137, 198);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  --colorful-folder-color: var(--color-red, rgb(221, 44, 56));
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(84, 86, 100));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(84, 86, 100);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  --colorful-folder-color: var(--color-red, rgb(221, 44, 56));
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(84, 86, 100));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(128, 137, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(128, 137, 198);
  border-right-color: rgb(128, 137, 198);
  border-top-color: rgb(128, 137, 198);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(128, 137, 198));
  cursor: var(--cursor, pointer);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(128, 137, 198);
  stroke: rgb(128, 137, 198);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(84, 86, 100);
  border-left-color: rgb(84, 86, 100);
  border-right-color: rgb(84, 86, 100);
  border-top-color: rgb(84, 86, 100);
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(152, 155, 174));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: var(--h6-accent-color, rgba(0, 0, 0, 0));
  color: var(--h6-accent-color, rgb(29, 29, 32));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(29, 29, 32);
  box-shadow: var(--input-shadow, rgba(0, 0, 0, 0.16) 0px 4px 8px -4px, rgba(0, 0, 0, 0.04) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.4) 0px 2px 0.75px 0px inset, rgba(0, 0, 0, 0.04) 0px -3px 0.75px 0px inset);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(128, 137, 198, 0.2);
  color: var(--table-header-color, rgb(29, 29, 32));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-left-color: rgba(128, 137, 198, 0.2);
  border-right-color: rgba(128, 137, 198, 0.2);
  border-top-color: rgba(128, 137, 198, 0.2);
  color: var(--text-muted, rgb(84, 86, 100));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(84, 86, 100);
  border-left-color: rgb(84, 86, 100);
  border-right-color: rgb(84, 86, 100);
  border-top-color: rgb(84, 86, 100);
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(128, 137, 198, 0.2);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(84, 86, 100);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(232,
        96%,
        64%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(232,
        96%,
        64%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(232,
        96%,
        64%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(232,
        96%,
        64%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(231, 96.96%, 68.8%));
  --pill-color-hover: var(--tag-color-hover, hsl(231, 96.96%, 68.8%));
  --pill-color-remove: var(--tag-color, hsl(231, 96.96%, 68.8%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(231, 96.96%, 68.8%));
  background-color: var(--pill-background, rgba(75, 99, 251, 0.1));
  color: var(--pill-color, rgb(98, 121, 253));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(240, 242, 252));
  color: var(--text-normal, rgb(29, 29, 32));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .stacked-page-header {
  --icon-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --icon-color-hover: var(--text-muted, hsla(232, 38.4%, 64%));
  --status-bar-text-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color: var(--text-faint, hsla(232, 38.4%, 64%));
  --tab-text-color-active: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color-focused: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color-focused-active: var(--text-muted, hsla(232, 38.4%, 64%));
  --text-faint: var(--on-border-light, hsla(232, 38.4%, 64%));
  --text-muted: var(--on-border-light, hsla(232, 38.4%, 64%));
  --titlebar-text-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --titlebar-text-color-focused: var(--text-muted, hsla(232, 38.4%, 64%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(29, 29, 32);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .navigation-progress {
  --icon-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --icon-color-hover: var(--text-muted, hsla(232, 38.4%, 64%));
  --status-bar-text-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color: var(--text-faint, hsla(232, 38.4%, 64%));
  --tab-text-color-active: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color-focused: var(--text-muted, hsla(232, 38.4%, 64%));
  --tab-text-color-focused-active: var(--text-muted, hsla(232, 38.4%, 64%));
  --text-faint: var(--on-border-light, hsla(232, 38.4%, 64%));
  --text-muted: var(--on-border-light, hsla(232, 38.4%, 64%));
  --titlebar-text-color: var(--text-muted, hsla(232, 38.4%, 64%));
  --titlebar-text-color-focused: var(--text-muted, hsla(232, 38.4%, 64%));
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(29, 29, 32));
}

html[saved-theme="light"] body abbr {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(128, 137, 198, 0.3);
  border-left-color: rgba(128, 137, 198, 0.3);
  border-right-color: rgba(128, 137, 198, 0.3);
  border-top-color: rgba(128, 137, 198, 0.3);
  color: var(--text-normal, rgb(84, 86, 100));
}

html[saved-theme="light"] body kbd {
  background-color: var(--background-modifier-hover, rgba(158, 159, 169, 0.15));
  border-bottom-color: rgb(84, 86, 100);
  border-left-color: rgb(84, 86, 100);
  border-right-color: rgb(84, 86, 100);
  border-top-color: rgb(84, 86, 100);
  color: var(--text-muted, rgb(84, 86, 100));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body sub {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body summary {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body sup {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(75, 99, 251, 0.1));
  border-bottom-color: rgba(75, 99, 251, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(75, 99, 251, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(75, 99, 251, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(75, 99, 251, 0.15);
  border-top-width: 1px;
  color: var(--tag-color, rgb(98, 121, 253));
}`,
  },
  classSettings: {
    "card-layout-pad-open": {
      general: `.is-tablet .workspace-drawer {
padding-top: 0;
}

.is-tablet .workspace-drawer-ribbon {
border-right: 1px solid var(--divider-color);
}

.is-tablet {
--titlebar-background: var(--background-underlying);
--titlebar-background-focused: var(--background-underlying);
}

.is-tablet, .is-tablet .app-container, .is-tablet .workspace, .is-tablet .horizontal-main-container {
background-color: var(--background-underlying) !important;
}

.is-tablet .workspace {
gap: 16px;
padding: 16px;
padding-bottom: 24px;
padding-top: 8px;
}

.is-tablet .app-container:has(>.mobile-toolbar) .workspace {
padding-bottom: 8px;
}

.is-tablet .workspace-drawer {
background-color: var(--background-primary);
border-radius: var(--card-border-radius-light, 8px) !important;
overflow: hidden !important;
margin: 16px;
margin-bottom: 24px;
margin-top: 32px;
}

.is-tablet .workspace-split.mod-root {
border-radius: var(--card-border-radius-light, 8px) !important;
overflow: hidden !important;
background-color: var(--background-primary) !important;
box-shadow: 0px 0px 6px hsla(var(--accent-h), 18%, 80%, 0.4), 0px 0px 2px hsla(var(--accent-h), 18%, 80%, 0.2), 0 0 0 1px var(--background-modifier-border);
}

.is-tablet .workspace-drawer.is-pinned {
border-right: none;
border-left: none;
border-radius: var(--card-border-radius-light, 8px) !important;
margin: 0px;
box-shadow: 0px 0px 6px hsla(var(--accent-h), 18%, 80%, 0.4), 0px 0px 2px hsla(var(--accent-h), 18%, 80%, 0.2), 0 0 0 1px var(--background-modifier-border);
}

.is-tablet .workspace-drawer-inner {
padding-top: 8px;
}`,
      dark: `.is-tablet.theme-dark .workspace-drawer {
border-radius: var(--card-border-radius-dark, 8px) !important;
}

.is-tablet.theme-dark .workspace-split.mod-root {
box-shadow: 0px 0px 0px 1px var(--background-modifier-border);
border-radius: var(--card-border-radius-dark, 8px);
}

.is-tablet.theme-dark .workspace-drawer.is-pinned {
box-shadow: 0px 0px 0px 1px var(--background-modifier-border);
border-radius: var(--card-border-radius-dark, 8px) !important;
}`,
    },
    "drawer-phone-full-width": {
      general: `.is-phone.drawer-phone-full-width .workspace-drawer {
width: 100vw;
border-radius: 0px;
}`,
    },
    "DB-table-bg-color-adapt": {
      general: `body.DB-table-bg-color-adapt .database-plugin__navbar, body.DB-table-bg-color-adapt .database-plugin__table {
--background-primary: transparent;
--background-secondary: rgba(var(--mono-rgb-100), 0.025);
}

body.DB-table-bg-color-adapt .database-plugin__th:hover, body.DB-table-bg-color-adapt .data-input:hover {
--background-modifier-hover: rgba(var(--mono-rgb-100), 0.025);
--background-secondary: var(--background-modifier-hover);
}`,
    },
    "DB-table-bg-color-unify": {
      general: `body.DB-table-bg-color-unify .database-plugin__navbar, body.DB-table-bg-color-unify .database-plugin__table {
--background-primary: transparent;
--background-secondary: transparent;
}

body.DB-table-bg-color-unify .database-plugin__th:hover, body.DB-table-bg-color-unify .data-input:hover {
--background-modifier-hover: rgba(var(--mono-rgb-100), 0.025);
--background-secondary: var(--background-modifier-hover);
}`,
    },
    "Projects-bg-color-adapt": {
      general: `body.Projects-bg-color-adapt .projects-container.svelte-gr1f73 {
--background-primary: transparent;
--background-secondary: rgba(var(--mono-rgb-100), 0.025);
--tab-background-active: var(--background-primary);
}`,
    },
    "Projects-bg-color-unify": {
      general: `body.Projects-bg-color-unify .projects-container.svelte-gr1f73 {
--background-primary: transparent;
--background-secondary: transparent;
--tab-background-active: var(--background-primary);
}`,
    },
    "colorful-checkbox": {
      general: `body.colorful-checkbox li.svelte-sx5ktw.svelte-sx5ktw:nth-child(8n+1) .checkbox.svelte-1wagsqu {
--checklist-checkboxBorder: 2px solid var(--color-red);
}

body.colorful-checkbox li.svelte-sx5ktw.svelte-sx5ktw:nth-child(8n+2) .checkbox.svelte-1wagsqu {
--checklist-checkboxBorder: 2px solid var(--color-green);
}

body.colorful-checkbox li.svelte-sx5ktw.svelte-sx5ktw:nth-child(8n+3) .checkbox.svelte-1wagsqu {
--checklist-checkboxBorder: 2px solid var(--color-orange);
}

body.colorful-checkbox li.svelte-sx5ktw.svelte-sx5ktw:nth-child(8n+4) .checkbox.svelte-1wagsqu {
--checklist-checkboxBorder: 2px solid var(--color-yellow);
}

body.colorful-checkbox li.svelte-sx5ktw.svelte-sx5ktw:nth-child(8n+5) .checkbox.svelte-1wagsqu {
--checklist-checkboxBorder: 2px solid var(--color-cyan);
}

body.colorful-checkbox li.svelte-sx5ktw.svelte-sx5ktw:nth-child(8n+6) .checkbox.svelte-1wagsqu {
--checklist-checkboxBorder: 2px solid var(--color-blue);
}

body.colorful-checkbox li.svelte-sx5ktw.svelte-sx5ktw:nth-child(8n+7) .checkbox.svelte-1wagsqu {
--checklist-checkboxBorder: 2px solid var(--color-purple);
}

body.colorful-checkbox li.svelte-sx5ktw.svelte-sx5ktw:nth-child(8n+8) .checkbox.svelte-1wagsqu {
--checklist-checkboxBorder: 2px solid var(--color-pink);
}`,
    },
  },
};
