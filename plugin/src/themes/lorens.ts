import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "lorens", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-dark-h: 216;
  --accent-dark-l: 49%;
  --accent-dark-s: 25%;
  --accent-h: var(--accent-dark-h, 216);
  --accent-l: var(--accent-dark-l, 49%);
  --accent-s: var(--accent-dark-s, 25%);
  --anim-duration-fast: calc(150ms/var(--anim-speed));
  --anim-duration-moderate: calc(300ms/var(--anim-speed));
  --anim-duration-slow: calc(600ms/var(--anim-speed));
  --anim-duration-superfast: calc(75ms/var(--anim-speed));
  --anim-in: var(--anim-duration-fast) var(--anim-duration-superfast) var(--anim-motion-swing, 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1));
  --anim-out: var(--anim-duration-moderate) var(--anim-duration-slow) var(--anim-motion-swing, 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1));
  --anim-speed: 1;
  --background-activated-file-dark: var(--nav-item-background-active, hsla(216, 12%, 40%, 0.25));
  --background-activated-tab-header-dark: var(--background-modifier-active-hover, hsla(216,
        25%,
        49%, 0.15));
  --background-activated-tab-header-light: var(--background-primary, hsl(216, 5%, 13.61111%));
  --background-alt-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --background-alt-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  --background-mod-left-CSS-backdrop-filter-dark: blur(32px);
  --background-mod-left-CSS-backdrop-filter-light: blur(32px);
  --background-mod-left-CSS-blend-mode-dark: normal;
  --background-mod-left-CSS-blend-mode-light: normal;
  --background-mod-left-CSS-dark: rgba(0, 0, 0, 0.5);
  --background-mod-left-CSS-light: rgba(255, 255, 255, 0.5);
  --background-mod-left-split: var(--background-primary, hsl(216, 5%, 13.61111%));
  --background-mod-left-split-dark: var(--background-primary, hsl(216, 5%, 13.61111%));
  --background-mod-left-split-light: var(--background-primary, hsl(216, 5%, 13.61111%));
  --background-mod-right-CSS-backdrop-filter-dark: blur(32px);
  --background-mod-right-CSS-backdrop-filter-light: blur(32px);
  --background-mod-right-CSS-blend-mode-dark: normal;
  --background-mod-right-CSS-blend-mode-light: normal;
  --background-mod-right-CSS-dark: rgba(0, 0, 0, 0.5);
  --background-mod-right-CSS-light: rgba(255, 255, 255, 0.5);
  --background-mod-right-split: var(--background-primary, hsl(216, 5%, 13.61111%));
  --background-mod-right-split-dark: var(--background-primary, hsl(216, 5%, 13.61111%));
  --background-mod-right-split-light: var(--background-primary, hsl(216, 5%, 13.61111%));
  --background-mod-root-CSS-backdrop-filter-dark: blur(32px);
  --background-mod-root-CSS-backdrop-filter-light: blur(32px);
  --background-mod-root-CSS-blend-mode-dark: normal;
  --background-mod-root-CSS-blend-mode-light: normal;
  --background-mod-root-CSS-dark: rgba(0, 0, 0, 0.5);
  --background-mod-root-CSS-light: rgba(255, 255, 255, 0.5);
  --background-mod-root-split: var(--background-primary, hsl(216, 5%, 13.61111%));
  --background-mod-root-split-dark: var(--background-primary, hsl(216, 5%, 13.61111%));
  --background-mod-root-split-light: var(--background-primary, hsl(216, 5%, 13.61111%));
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)*0.9), 0.2);
  --background-modifier-border-focus: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)*0.9), 0.3);
  --background-modifier-border-hover: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)*0.9), 0.25);
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
  --background-underlying: var(--background-tertiary, hsl(216,
            4.62963%,
            17.01389%));
  --background-underlying-CSS-blend-mode-dark: soft-light, luminosity, hue, luminosity, hard-light;
  --background-underlying-CSS-blend-mode-light: overlay, color-burn;
  --background-underlying-CSS-dark: linear-gradient(317deg, rgb(112, 55, 205) 0%, rgb(29, 12, 32) 19%, rgb(101, 31, 113) 19%, rgb(101, 31, 113) 33%), radial-gradient(100% 100% at 90% 9%, rgb(29, 12, 32) 0%, rgb(29, 12, 32) 100%), linear-gradient(109deg, rgb(104, 178, 248) 0%, rgb(80, 110, 229) 15%, rgb(112, 55, 205) 34%, rgb(104, 178, 248) 54%, rgb(104, 178, 248) 65%), radial-gradient(100% 100% at 20% 45%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), radial-gradient(100% 100% at 90% 27%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), linear-gradient(339deg, rgb(101, 31, 113) 0%, rgb(104, 178, 248) 12%, rgb(101, 31, 113) 14%, rgb(80, 110, 229) 19%, rgb(101, 31, 113) 20%, rgb(29, 12, 32) 30%);
  --background-underlying-CSS-light: radial-gradient(100% 100% at 13% 50%, rgb(90, 109, 237) 0%, rgb(224, 218, 247) 100%), linear-gradient(6deg, rgb(235, 242, 252) 0%, rgb(90, 109, 237) 5%, rgb(166, 126, 241) 7%, rgb(224, 218, 247) 11%, rgb(90, 109, 237) 16%), radial-gradient(100% 100% at 60% 71%, rgb(224, 218, 247) 0%, rgb(219, 244, 255) 100%), linear-gradient(97deg, rgb(90, 109, 237) 0%, rgb(90, 109, 237) 23%, rgb(90, 109, 237) 53%), linear-gradient(351deg, rgb(235, 242, 252) 0%, rgb(219, 244, 255) 1%, rgb(235, 242, 252) 6%, rgb(224, 218, 247) 10%, rgb(166, 126, 241) 13%, rgb(235, 242, 252) 29%), radial-gradient(100% 100% at 10% 32%, rgb(90, 109, 237) 0%, rgb(219, 244, 255) 100%), radial-gradient(100% 100% at 35% 63%, rgb(224, 218, 247) 0%, rgb(224, 218, 247) 100%);
  --background-underlying-dark: var(--background-tertiary, hsl(216,
            4.62963%,
            17.01389%));
  --background-underlying-light: var(--background-tertiary, hsl(216,
            4.62963%,
            17.01389%));
  --bases-cards-background: var(--background-primary, hsl(216, 5%, 13.61111%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(216, 5%, 15.70513%));
  --bases-cards-radius: var(--radius-m, 2px);
  --bases-embed-border-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --bases-embed-border-radius: var(--radius-s, 0px);
  --bases-group-heading-property-color: var(--text-muted, hsl(216, 18%, 72%));
  --bases-table-border-color: var(--table-border-color, hsla(216, 10%, 44.1%, 0.2));
  --bases-table-cell-background-active: var(--background-primary, hsl(216, 5%, 13.61111%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(216, 5%, 15.70513%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(216,
        25%,
        49%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 0px);
  --bases-table-group-background: var(--background-primary-alt, hsl(216, 5%, 15.70513%));
  --bases-table-header-background: var(--background-primary, hsl(216, 5%, 13.61111%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla(216, 12%, 40%, 0.25));
  --bases-table-header-color: var(--text-muted, hsl(216, 18%, 72%));
  --bases-table-summary-background: var(--background-primary, hsl(216, 5%, 13.61111%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla(216, 12%, 40%, 0.25));
  --blockquote-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --blockquote-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --blockquote-border-color: var(--interactive-accent, #0ba360);
  --blockquote-border-thickness: 3px;
  --bold-color: var(--color-red, rgb(255, 120, 129));
  --bold-weight: var(--font-semibold, 600);
  --border-900: hsl(219, 10%, 29%);
  --border-radius-activated-file-dark: var(--radius-s, 0px);
  --border-radius-activated-tab-header-dark: 6px;
  --border-radius-activated-tab-header-light: 6px;
  --callout-bug: var(--color-red-rgb, 255, 120, 129);
  --callout-content-radius: 0px;
  --callout-default: var(--color-blue-rgb, 137, 189, 244);
  --callout-error: var(--color-red-rgb, 255, 120, 129);
  --callout-example: var(--color-purple-rgb, 203, 158, 255);
  --callout-fail: var(--color-red-rgb, 255, 120, 129);
  --callout-important: var(--color-cyan-rgb, 134, 223, 226);
  --callout-info: var(--color-blue-rgb, 137, 189, 244);
  --callout-question: var(--color-orange-rgb, 251, 187, 131);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 0px);
  --callout-success: var(--color-green-rgb, 124, 211, 124);
  --callout-summary: var(--color-cyan-rgb, 134, 223, 226);
  --callout-tip: var(--color-cyan-rgb, 134, 223, 226);
  --callout-todo: var(--color-blue-rgb, 137, 189, 244);
  --callout-warning: var(--color-orange-rgb, 251, 187, 131);
  --canvas-background: var(--background-primary, transparent);
  --canvas-card-border-style: solid;
  --canvas-card-border-width: 2px;
  --canvas-card-label-color: var(--text-faint, hsl(216, 12%, 44%));
  --canvas-color-1: var(--color-red-rgb, 255, 120, 129);
  --canvas-color-2: var(--color-orange-rgb, 251, 187, 131);
  --canvas-color-3: var(--color-yellow-rgb, 255, 232, 139);
  --canvas-color-4: var(--color-green-rgb, 124, 211, 124);
  --canvas-color-5: var(--color-cyan-rgb, 134, 223, 226);
  --canvas-color-6: var(--color-purple-rgb, 203, 158, 255);
  --canvas-controls-radius: var(--radius-s, 0px);
  --card-border-radius-dark: 8px;
  --card-border-radius-light: 8px;
  --card-shadow-border-radius-dark: calc(var(--card-border-radius-dark) - 1px);
  --card-shadow-border-radius-light: calc(var(--card-border-radius-light) - 1px);
  --card-shadow-dark: 0px 0px 0px 1px var(--background-modifier-border);
  --card-shadow-light: 0px 0px 6px hsla(var(--accent-h), 18%, 80%, 0.4), 0px 0px 2px hsla(var(--accent-h), 18%, 80%, 0.2), 0 0 0 1px var(--background-modifier-border);
  --caret-color: var(--text-normal, hsl(216, 24%, 84%));
  --checkbox-border-color: var(--text-faint, hsl(216, 12%, 44%));
  --checkbox-border-color-hover: var(--text-faint, hsl(216, 12%, 44%));
  --checkbox-color: var(--color-green, rgb(124, 211, 124));
  --checkbox-color-hover: var(--color-green, rgb(124, 211, 124));
  --checkbox-marker-color: var(--background-primary, hsl(216, 5%, 13.61111%));
  --checkbox-radius: var(--radius-l, 4px);
  --checklist-done-color: var(--text-faint, hsl(216, 12%, 44%));
  --clickable-icon-radius: var(--radius-s, 6px);
  --code-background: var(--code-background-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --code-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --code-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --code-border: var(--code-border-dark, 1px dashed hsla(216, 10%, 44.1%, 0.2));
  --code-border-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --code-border-dark: 1px dashed var(--background-modifier-border);
  --code-border-light: 1px dashed var(--background-modifier-border);
  --code-bracket-background: var(--background-modifier-hover, hsla(216, 12%, 40%, 0.25));
  --code-comment: var(--text-faint, hsl(216, 12%, 44%));
  --code-function: var(--color-yellow, rgb(255, 232, 139));
  --code-important: var(--color-orange, rgb(251, 187, 131));
  --code-keyword: var(--color-pink, rgb(242, 182, 222));
  --code-normal: var(--text-muted, hsl(216, 18%, 72%));
  --code-operator: var(--color-red, rgb(255, 120, 129));
  --code-property: var(--color-cyan, rgb(134, 223, 226));
  --code-punctuation: var(--text-muted, hsl(216, 18%, 72%));
  --code-radius: var(--radius-s, 0px);
  --code-string: var(--color-green, rgb(124, 211, 124));
  --code-tag: var(--color-red, rgb(255, 120, 129));
  --code-value: var(--color-purple, rgb(203, 158, 255));
  --collapse-icon-color: var(--text-faint, hsl(216, 12%, 44%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(216, 25%, 45.2%));
  --color-accent: var(--color-accent-dark, #0ba360);
  --color-accent-1: var(--color-accent-1-dark, hsl(216, 25%, 45.2%));
  --color-accent-1-dark: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) - 3.8%));
  --color-accent-2: var(--color-accent-2-dark, hsl(216, 25%, 52.8%));
  --color-accent-2-dark: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 3.8%));
  --color-accent-3: var(--color-accent-3-dark, hsla(216, 10%, 44.1%));
  --color-accent-3-dark: hsla(var(--accent-h), calc(var(--accent-s)*0.4), calc(var(--accent-l)*0.9));
  --color-accent-dark: #0ba360;
  --color-accent-hsl: var(--color-accent-hsl-dark, 216,
        25%,
        49%);
  --color-accent-hsl-dark: var(--accent-h),
        var(--accent-s),
        var(--accent-l);
  --color-activated-file-dark: var(--nav-item-color-active, hsl(216, 24%, 84%));
  --color-activated-tab-header-dark: var(--text-normal, hsl(216, 24%, 84%));
  --color-activated-tab-header-light: var(--text-normal, hsl(216, 24%, 84%));
  --color-base-15: #252525;
  --color-base-35: #3F3F3F;
  --color-base-40: #555;
  --color-base-50: #666;
  --color-base-60: #999;
  --color-base-70: #bababa;
  --color-blue: rgb(var(--color-blue-rgb));
  --color-blue-rgb: 137, 189, 244;
  --color-cyan: rgb(var(--color-cyan-rgb));
  --color-cyan-300: hsl(183, 29%, 62%);
  --color-cyan-533: hsl(191, 90%, 50%);
  --color-cyan-rgb: 134, 223, 226;
  --color-gray-95: hsl(228, 10%, 18%);
  --color-green: rgb(var(--color-green-rgb));
  --color-green-710: hsl(151, 54%, 64%);
  --color-green-rgb: 124, 211, 124;
  --color-magenta-300: hsl(334, 37%, 65%);
  --color-orange: rgb(var(--color-orange-rgb));
  --color-orange-rgb: 251, 187, 131;
  --color-pink: rgb(var(--color-pink-rgb));
  --color-pink-rgb: 242, 182, 222;
  --color-purple: rgb(var(--color-purple-rgb));
  --color-purple-rgb: 203, 158, 255;
  --color-red: rgb(var(--color-red-rgb));
  --color-red-rgb: 255, 120, 129;
  --color-slate-500: hsl(224, 37%, 80%);
  --color-slate-700: hsl(223, 18%, 68%);
  --color-slate-900: hsl(225, 14%, 40%);
  --color-yellow: rgb(var(--color-yellow-rgb));
  --color-yellow-700: hsl(58, 86%, 66%);
  --color-yellow-900: hsl(59, 81%, 47%);
  --color-yellow-rgb: 255, 232, 139;
  --cursor: pointer;
  --dark: var(--text-normal, hsl(var(--accent-h), 24%, 84%));
  --darkgray: var(--text-normal, hsl(var(--accent-h), 24%, 84%));
  --divider-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --divider-color-hover: var(--interactive-accent, #0ba360);
  --dropdown-background: var(--interactive-normal, hsl(216,
            3.57143%,
            20.41667%));
  --dropdown-background-hover: var(--interactive-hover, hsl(216,
            3.57143%,
            22.68519%));
  --embed-border-radius: 0px;
  --empty-state-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%20fill%3D%22none%22%20viewBox%3D%220%200%20160%20160%22%3E%3Cg%20fill%3D%22%23000%22%20clip-path%3D%22url(%23a)%22%20opacity%3D%22.75%22%3E%3Cpath%20fill-opacity%3D%22.25%22%20d%3D%22M38.66%20123.48C27.16%20112.55%2020%2097.11%2020%2080c0-5.18.66-10.2%201.89-15l16.77%2058.48Zm70.35%209.05C100.41%20137.29%2090.52%20140%2080%20140c-10.52%200-20.47-2.73-29.08-7.52l19.24-5.51c3%201.03%206.22%201.58%209.57%201.58%203.7%200%207.24-.68%2010.5-1.91l17.97%205.15.81.74Zm29.04-67.75-16.88%2058.86C132.76%20112.71%20140%2097.2%20140%2080c0-5.26-.68-10.36-1.95-15.22Zm-15.41-26.99-39.3-11.27a5.27%205.27%200%200%200-6.51%203.61l-1.34%204.68-8.94-4.95-29.78%208.54C47.68%2027.06%2063.02%2020%2080%2020c16.98%200%2031.77%206.8%2042.64%2017.79Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.05%22%20d%3D%22m70.31%2052.88-.98%203.41-38.26%2010.97-.83-2.89%2040.07-11.49ZM58.37%2078.15a28.777%2028.777%200%200%200-3.3%204.07l-18.21%205.22-.83-2.88%2022.34-6.41Zm-7.78%2014.72c-.21%201.06-.37%202.15-.47%203.25l-9.96%202.86-.82-2.88%2011.25-3.23Zm.24-43.76-23.07%206.61-.83-2.88L50%2046.22l.83%202.89Zm4.9%2067.25-.06.02-9.72%202.79-.83-2.89%208.67-2.48.23-.07c.51.91%201.09%201.79%201.71%202.63Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.15%22%20d%3D%22m72.71%2044.51-1.81.52-4.35-15.17-29.78%208.54-15.74%204.51a5.27%205.27%200%200%200-3.61%206.51L21.89%2065l16.77%2058.48%201.87%206.51c.8%202.79%203.71%204.41%206.5%203.61l3.89-1.12%2019.24-5.51a29.706%2029.706%200%200%201-14.43-10.61l-.06.02-9.72%202.79-.83-2.89%208.67-2.48.23-.07c-.15-.24-.29-.48-.43-.73A29.64%2029.64%200%200%201%2050%2098.82c0-.91.04-1.81.12-2.7l-9.96%202.86-.82-2.88%2011.25-3.23c.79-3.88%202.34-7.48%204.48-10.65l-18.21%205.22-.83-2.88%2022.34-6.41a29.14%2029.14%200%200%201%206.07-4.82l4.89-17.04-38.26%2010.97-.83-2.89%2040.07-11.49%202.4-8.37ZM27.76%2055.72l-.83-2.88L50%2046.22l.83%202.89-23.07%206.61Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.1%22%20d%3D%22m108.2%20131.79-17.97-5.15c2.76-1.04%205.32-2.48%207.61-4.25l10.36%209.4ZM135.84%2058l-11.33-3.25%203.19-11.14%201.16-4.04-6.22-1.78-39.3-11.27a5.27%205.27%200%200%200-6.51%203.61l-1.34%204.68-2.78%209.7-2.4%208.37-.98%203.41-4.89%2017.04c4.47-2.69%209.7-4.24%2015.29-4.24s11.22%201.66%2015.79%204.55a28.65%2028.65%200%200%201%204.74%203.68l23.71%206.8-.82%202.89-19.27-5.52c2.3%203.17%203.97%206.81%204.85%2010.75l11.94%203.42-.83%202.88-10.55-3.03c.12%201.09.18%202.19.18%203.31%200%204.7-1.09%209.14-3.03%2013.09-.22.45-.45.89-.7%201.32l.67.19%208.47%202.43-.83%202.88-6.55-1.88%2010.53%209.55%201.87%201.69%201.27-4.45%2016.88-58.86%201.63-5.68-3.84-1.1ZM82.85%2038.89l.23-.82%2023.07%206.62-.82%202.88-18.83-5.4-2.81-.81-1.43-.41.59-2.06Zm46.09%2027.93L90.4%2055.77l-9.63-2.76-1.82-.52.65-2.27.18-.62%209.64%202.77%2040.34%2011.57-.82%202.88Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20d%3D%22m75.49%2034.81-2.78%209.7-1.81.52-4.35-15.17%208.94%204.95Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.3%22%20d%3D%22m128.86%2039.57-1.16%204.03v.01l-3.19%2011.14L135.84%2058l3.84%201.1-10.82-19.53Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20d%3D%22m122.01%20130.01-7.12%207.85-5.88-5.33-.81-.74-10.36-9.4c1.83-1.39%203.49-3%204.94-4.79.46-.56.9-1.13%201.3-1.73.32-.43.61-.87.88-1.32l.79.71%201.75%201.59%2010.53%209.55%201.87%201.69%202.11%201.92Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20fill-rule%3D%22evenodd%22%20d%3D%22M109.29%2095.51c-.13-1.11-.31-2.2-.56-3.27-.88-3.94-2.55-7.58-4.85-10.75-1.07-1.51-2.28-2.9-3.62-4.17a28.65%2028.65%200%200%200-4.74-3.68c-4.57-2.89-9.99-4.55-15.79-4.55-5.8%200-10.82%201.55-15.29%204.24a29.14%2029.14%200%200%200-6.07%204.82%2028.777%2028.777%200%200%200-3.3%204.07%2029.564%2029.564%200%200%200-4.48%2010.65%2030.145%2030.145%200%200%200-.59%205.95c0%205.13%201.3%209.96%203.59%2014.17.14.26.28.5.43.74.51.91%201.09%201.79%201.71%202.63a29.706%2029.706%200%200%200%2014.43%2010.61c3%201.03%206.22%201.58%209.57%201.58%203.7%200%207.24-.68%2010.5-1.91%202.76-1.04%205.32-2.48%207.61-4.25%201.83-1.39%203.49-3%204.94-4.79.46-.56.9-1.13%201.3-1.73.32-.43.61-.87.88-1.32.28-.43.54-.87.78-1.32.25-.43.48-.87.7-1.32%201.94-3.95%203.03-8.39%203.03-13.09%200-1.12-.06-2.22-.18-3.31Zm-4.98%208.78a24.97%2024.97%200%200%201-4.91%2010.24c-.31.4-.63.78-.97%201.15-.02.02-.04.05-.06.07-.27.3-.55.59-.83.87-.29.28-.58.56-.88.83-.59.55-1.21%201.06-1.86%201.54-.65.49-1.32.94-2.01%201.36l-.42.24s-.01.01-.02.01c-.55.33-1.12.63-1.7.91-1.1.53-2.25.98-3.43%201.35-2.01.62-4.14%201-6.33%201.1-.1.01-.19.01-.29.01-.29.02-.58.02-.87.02-2.61%200-5.12-.4-7.48-1.13a24.94%2024.94%200%200%201-5.57-2.51c-.21-.13-.43-.27-.64-.4-.21-.13-.41-.27-.62-.42-.26-.17-.5-.35-.75-.54-.65-.48-1.27-.99-1.86-1.54-.84-.76-1.62-1.57-2.35-2.44-.69-.81-1.32-1.68-1.9-2.58a25.1%2025.1%200%200%201-3.22-7.35c-.51-2-.78-4.1-.78-6.26%200-1.38.11-2.74.33-4.06.18-1.15.44-2.26.78-3.34%201.28-4.17%203.61-7.87%206.68-10.8.26-.26.52-.5.79-.71a24.966%2024.966%200%200%201%2016.59-6.26c1.39%200%202.74.11%204.07.33%204.28.69%208.2%202.47%2011.46%205.04.85.65%201.66%201.37%202.42%202.14%202.63%202.68%204.68%205.95%205.9%209.6.38%201.09.68%202.21.89%203.37a25.259%2025.259%200%200%201-.16%2010.16Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill-opacity%3D%22.05%22%20fill-rule%3D%22evenodd%22%20d%3D%22M104.47%2094.13c-.21-1.16-.51-2.28-.89-3.37a25.082%2025.082%200%200%200-5.9-9.6c-.76-.77-1.57-1.49-2.42-2.14a24.907%2024.907%200%200%200-11.46-5.04c-1.33-.22-2.68-.33-4.07-.33a24.966%2024.966%200%200%200-16.59%206.26c-.27.21-.53.45-.79.71-3.07%202.93-5.4%206.63-6.68%2010.8-.34%201.08-.6%202.19-.78%203.34-.22%201.32-.33%202.68-.33%204.06%200%202.16.27%204.26.78%206.26a25.1%2025.1%200%200%200%203.22%207.35c.58.9%201.21%201.77%201.9%202.58.73.87%201.51%201.68%202.35%202.44.59.55%201.21%201.06%201.86%201.54.25.19.49.37.75.54.21.15.41.29.62.42.21.13.43.27.64.4a24.94%2024.94%200%200%200%205.57%202.51c2.36.73%204.87%201.13%207.48%201.13.29%200%20.58%200%20.87-.02.1%200%20.19%200%20.29-.01%202.19-.1%204.32-.48%206.33-1.1%201.18-.37%202.33-.82%203.43-1.35.58-.28%201.15-.58%201.7-.91.01%200%20.02%200%20.02-.01l.42-.24c.69-.42%201.36-.87%202.01-1.36.65-.48%201.27-.99%201.86-1.54.3-.27.59-.55.88-.83.28-.28.56-.57.83-.87.02-.02.04-.05.06-.07.34-.37.66-.75.97-1.15.66-.82%201.27-1.68%201.83-2.59a25.174%2025.174%200%200%200%203.68-13.12c0-1.6-.15-3.17-.44-4.69Zm-14.69%209.35h.01l2.41%202.42.14.14c.64.72.98%201.65.95%202.61-.01.33-.06.65-.16.96-.17.6-.49%201.14-.94%201.59-.39.39-.86.69-1.37.87-.37.15-.77.23-1.18.24-.96.03-1.89-.3-2.61-.94l-.54-.54-2.56-2.56-1.83-1.82-2.29-2.29-1.27%201.27-1.78%201.78-.64.64-3.52%203.52c-.08.08-.16.16-.24.22-.3.27-.63.48-.99.64-.46.21-.96.32-1.46.32-.23%200-.46%200-.69-.06h-.02c-.26-.04-.51-.11-.76-.21a3.796%203.796%200%200%201-2.08-2.08c-.19-.48-.28-.97-.28-1.47.01-.51.12-1%20.32-1.47.2-.46.5-.87.86-1.22l.56-.56%202.43-2.43%204.23-4.23-7.22-7.21c-.1-.1-.2-.2-.29-.31-.23-.28-.43-.58-.57-.91-.2-.47-.31-.96-.32-1.47%200-.17.01-.34.04-.5.03-.33.11-.66.24-.97.19-.47.47-.89.83-1.25.35-.36.78-.64%201.25-.83.46-.19.96-.28%201.47-.27.5%200%201%20.11%201.46.31.46.21.88.5%201.23.87l.22.22%202.42%202.42%204.56%204.57%205-5%202.21-2.21c.08-.07.16-.14.24-.2.68-.56%201.53-.85%202.4-.83.99.01%201.92.41%202.62%201.1.4.41.7.89.88%201.42.13.38.21.79.21%201.2a3.7%203.7%200%200%201-1.03%202.64l-7.2%207.21%204.64%204.66h.01Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill-opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20d%3D%22M92.34%20106.04c.64.72.98%201.65.95%202.61-.01.33-.06.65-.16.96-.17.6-.49%201.14-.94%201.59-.39.39-.86.69-1.37.87-.37.15-.77.23-1.18.24-.96.03-1.89-.3-2.61-.94l-.54-.54-2.56-2.56-1.83-1.82-2.29-2.29-1.27%201.27-1.78%201.78-.64.64-3.52%203.52c-.08.08-.16.16-.24.22-.3.27-.63.48-.99.64-.46.21-.96.32-1.46.32-.23%200-.46%200-.69-.06h-.02c-.26-.04-.51-.11-.76-.21a3.796%203.796%200%200%201-2.08-2.08c-.19-.48-.28-.97-.28-1.47.01-.51.12-1%20.32-1.47.2-.46.5-.87.86-1.22l.56-.56%202.43-2.43%204.23-4.23-7.22-7.21c-.1-.1-.2-.2-.29-.31-.23-.28-.43-.58-.57-.91-.2-.47-.31-.96-.32-1.47%200-.17.01-.34.04-.5.03-.33.11-.66.24-.97.19-.47.47-.89.83-1.25.35-.36.78-.64%201.25-.83.46-.19.96-.28%201.47-.27.5%200%201%20.11%201.46.31.46.21.88.5%201.23.87l.22.22%202.42%202.42%204.56%204.57%205-5%202.21-2.21c.08-.07.16-.14.24-.2.68-.56%201.53-.85%202.4-.83.99.01%201.92.41%202.62%201.1.4.41.7.89.88%201.42.13.38.21.79.21%201.2a3.7%203.7%200%200%201-1.03%202.64l-7.2%207.21%204.64%204.66h.01l2.41%202.42.14.14h.01Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20d%3D%22M124.81%20134.66c.07%201.4-.42%202.77-1.36%203.81a5.29%205.29%200%200%201-3.67%201.73c-1.4.07-2.78-.42-3.82-1.36l-1.07-.98%207.12-7.84%201.07.97c1.04.94%201.66%202.26%201.73%203.67Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E");
  --file-header-background: var(--background-primary, hsl(216, 5%, 13.61111%));
  --file-header-background-focused: var(--background-primary, hsl(216, 5%, 13.61111%));
  --flair-background: var(--interactive-normal, hsl(216,
            3.57143%,
            20.41667%));
  --flair-color: var(--text-normal, hsl(216, 24%, 84%));
  --footnote-divider-color: var(--metadata-divider-color, hsla(216, 10%, 44.1%, 0.2));
  --footnote-id-color: var(--text-muted, hsl(216, 18%, 72%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(216, 12%, 44%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsla(216, 12%, 40%, 0.25));
  --footnote-radius: var(--radius-s, 0px);
  --frame-right-space: 110px;
  --graph-node: var(--text-muted, hsl(216, 18%, 72%));
  --graph-node-attachment: var(--color-yellow, rgb(255, 232, 139));
  --graph-node-focused: var(--text-accent, hsl(216, 25%, 45.2%));
  --graph-node-tag: var(--color-green, rgb(124, 211, 124));
  --graph-node-unresolved: var(--text-faint, hsl(216, 12%, 44%));
  --graph-text: var(--text-normal, hsl(216, 24%, 84%));
  --gray: var(--text-muted, hsl(var(--accent-h), 18%, 72%));
  --h1-accent-color: var(--color-red, rgb(255, 120, 129));
  --h1-color: hsl(59, 81%, 47%);
  --h1-size: 1.5em;
  --h2-accent-color: var(--color-orange, rgb(251, 187, 131));
  --h2-color: hsl(191, 90%, 50%);
  --h2-size: 1.425em;
  --h2-weight: 675;
  --h3-accent-color: var(--color-yellow, rgb(255, 232, 139));
  --h3-color: hsl(151, 54%, 64%);
  --h3-size: 1.35em;
  --h3-weight: 650;
  --h4-accent-color: var(--color-green, rgb(124, 211, 124));
  --h4-color: hsl(224, 37%, 80%);
  --h4-size: 1.275em;
  --h4-weight: 625;
  --h5-accent-color: var(--color-blue, rgb(137, 189, 244));
  --h5-color: hsl(224, 37%, 80%);
  --h5-size: 1.2em;
  --h5-weight: 600;
  --h6-accent-color: var(--color-purple, rgb(203, 158, 255));
  --h6-color: hsl(224, 37%, 80%);
  --h6-size: 1.125em;
  --h6-weight: 575;
  --heading-formatting: var(--text-faint, hsl(216, 12%, 44%));
  --highlight: var(--background-modifier-hover, hsla(var(--accent-h), 12%, 40%, 0.25));
  --hover-indicator-color: var(--color-accent, #0ba360);
  --hr-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --icon-color: var(--text-muted, hsl(216, 18%, 72%));
  --icon-color-active: var(--text-accent, hsl(216, 25%, 45.2%));
  --icon-color-focused: var(--text-normal, hsl(216, 24%, 84%));
  --icon-color-hover: var(--text-muted, hsl(216, 18%, 72%));
  --inline-code-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --inline-code-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --inline-code-normal: var(--color-pink, rgb(242, 182, 222));
  --inline-title-size: var(--h1-size, 1.5em);
  --input-date-separator: var(--text-faint, hsl(216, 12%, 44%));
  --input-placeholder-color: var(--text-faint, hsl(216, 12%, 44%));
  --input-radius: var(--input-radius-dark, 5px);
  --input-radius-dark: 5px;
  --input-shadow: var(--input-shadow-dark, 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16));
  --input-shadow-dark: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16);
  --input-shadow-hover: var(--input-shadow-hover-dark, 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16));
  --input-shadow-hover-dark: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16);
  --interactive-accent: var(--color-accent, #0ba360);
  --interactive-accent-hover: var(--color-accent-1, hsl(216, 25%, 45.2%));
  --interactive-accent-hsl: var(--color-accent-hsl, 216,
        25%,
        49%);
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
  --link-color: var(--text-accent, hsl(216, 25%, 45.2%));
  --link-color-hover: var(--text-accent-hover, hsl(216, 25%, 52.8%));
  --link-external-color: var(--color-blue, rgb(137, 189, 244));
  --link-external-color-hover: var(--color-blue, rgb(137, 189, 244));
  --link-unresolved-color: var(--text-accent, hsl(216, 25%, 45.2%));
  --list-bullet-size-alt: calc(var(--list-bullet-size)/2);
  --list-marker-color: var(--text-faint, hsl(216, 12%, 44%));
  --list-marker-color-collapsed: var(--text-accent, hsl(216, 25%, 45.2%));
  --list-marker-color-hover: var(--text-muted, hsl(216, 18%, 72%));
  --menu-background: var(--background-secondary, hsl(216, 5%, 12.5%));
  --menu-border-color: var(--background-modifier-border-hover, hsla(216, 10%, 44.1%, 0.25));
  --menu-radius: var(--radius-m, 2px);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3));
  --metadata-border-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --metadata-divider-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --metadata-input-background-active: var(--background-modifier-hover, hsla(216, 12%, 40%, 0.25));
  --metadata-input-text-color: var(--text-normal, hsl(216, 24%, 84%));
  --metadata-label-background-active: var(--background-modifier-hover, hsla(216, 12%, 40%, 0.25));
  --metadata-label-text-color: var(--text-muted, hsl(216, 18%, 72%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(216, 18%, 72%));
  --metadata-property-background-active: var(--background-modifier-hover, hsla(216, 12%, 40%, 0.25));
  --mix-blend-mode-on-border-dark: screen;
  --mix-blend-mode-on-border-light: normal;
  --modal-background: var(--background-primary, hsl(216, 5%, 13.61111%));
  --modal-border-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --modal-radius: var(--radius-l, 4px);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(216, 12%, 44%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(216, 12%, 44%));
  --nav-heading-color: var(--text-normal, hsl(216, 24%, 84%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(216, 12%, 44%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(216, 18%, 72%));
  --nav-heading-color-hover: var(--text-normal, hsl(216, 24%, 84%));
  --nav-item-background-active: var(--background-modifier-hover, hsla(216, 12%, 40%, 0.25));
  --nav-item-background-hover: var(--background-modifier-hover, hsla(216, 12%, 40%, 0.25));
  --nav-item-color: var(--text-muted, hsl(216, 18%, 72%));
  --nav-item-color-active: var(--text-normal, hsl(216, 24%, 84%));
  --nav-item-color-highlighted: var(--text-accent, hsl(216, 25%, 45.2%));
  --nav-item-color-hover: var(--text-normal, hsl(216, 24%, 84%));
  --nav-item-color-selected: var(--text-normal, hsl(216, 24%, 84%));
  --nav-item-radius: var(--radius-s, 0px);
  --nav-tag-color: var(--text-faint, hsl(216, 12%, 44%));
  --nav-tag-color-active: var(--text-muted, hsl(216, 18%, 72%));
  --nav-tag-color-hover: var(--text-muted, hsl(216, 18%, 72%));
  --nav-tag-radius: var(--radius-s, 0px);
  --new-tab-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22none%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23000%22%20fill-opacity%3D%22.26%22%20d%3D%22M51.894%2060.617c-.291%202.162-2.41%203.85-4.515%203.267-3-.825-6.474-2.112-9.6-2.352l-4.79-.362a3.163%203.163%200%200%201-2.042-.95l-8.254-8.483a3.15%203.15%200%200%201-.616-3.49S27.18%2037.053%2027.37%2036.47c.19-.582.886-5.66%201.298-8.388a3.153%203.153%200%200%201%201.011-1.875l9.765-8.767a3.165%203.165%200%200%201%204.597.394l8.202%2010.4c.464.59.702%201.32.706%202.07.009%201.97.172%206.016%201.263%208.621%201.062%202.535%203.01%205.272%204.03%206.619.39.517.45%201.216.12%201.773a138.06%20138.06%200%200%201-4.15%206.54c-1.386%202.063-2.028%204.613-2.318%206.761Z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%230E0E0E%22%20d%3D%22M51.602%2060.187c-.292%202.171-2.417%203.867-4.528%203.282-3.008-.829-6.491-2.122-9.626-2.362l-4.803-.365a3.168%203.168%200%200%201-2.048-.953l-8.277-8.523a3.168%203.168%200%200%201-.618-3.504S26.82%2036.515%2027.01%2035.93c.19-.585.888-5.686%201.301-8.427a3.17%203.17%200%200%201%201.015-1.883l9.79-8.807a3.17%203.17%200%200%201%204.61.396l8.226%2010.448c.465.59.704%201.326.707%202.078.01%201.98.173%206.043%201.268%208.66%201.064%202.547%203.018%205.296%204.04%206.65a1.6%201.6%200%200%201%20.12%201.78%20137.46%20137.46%200%200%201-4.16%206.57c-1.39%202.072-2.034%204.634-2.325%206.792Z%22%2F%3E%3Cpath%20fill%3D%22url(%23b)%22%20d%3D%22M31.489%2060.433c3.844-7.804%203.736-13.395%202.1-17.384-1.505-3.672-4.304-5.988-6.51-7.425-.047.208-.115.41-.202.605l-5.175%2011.532a3.168%203.168%200%200%200%20.618%203.505l8.277%208.523c.26.267.562.484.892.644Z%22%2F%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M47.075%2063.469c2.11.585%204.235-1.11%204.527-3.282.252-1.869.769-4.041%201.806-5.936-2.38-5.121-5.256-7.777-8.41-8.954-3.339-1.246-6.987-.835-10.684.063.826%203.76.331%208.673-2.82%2015.073.358.174.75.28%201.154.309%200%200%202.275.191%204.98.383%202.705.191%206.73%201.59%209.447%202.344Z%22%2F%3E%3Cpath%20fill%3D%22url(%23d)%22%20d%3D%22M41.95%2044.595c1.038.108%202.056.332%203.047.702%203.154%201.177%206.032%203.833%208.411%208.954.16-.292.333-.578.519-.855a138.877%20138.877%200%200%200%204.16-6.57%201.603%201.603%200%200%200-.12-1.78c-1.022-1.354-2.976-4.103-4.04-6.65-1.095-2.617-1.258-6.68-1.267-8.66a3.377%203.377%200%200%200-.708-2.079L43.727%2017.21a3.198%203.198%200%200%200-.136-.162c.603%201.978.562%203.569.19%205.015-.345%201.341-.975%202.558-1.641%203.843-.223.43-.45.87-.672%201.323-.884%201.806-1.68%203.85-1.798%206.592-.118%202.74.444%206.179%202.28%2010.774Z%22%2F%3E%3Cpath%20fill%3D%22url(%23e)%22%20d%3D%22M41.948%2044.594c-1.835-4.595-2.398-8.033-2.28-10.774.118-2.742.915-4.786%201.798-6.592.222-.454.45-.893.673-1.324.665-1.285%201.295-2.501%201.64-3.842.373-1.447.414-3.038-.19-5.017a3.17%203.17%200%200%200-4.472-.232l-9.792%208.807a3.17%203.17%200%200%200-1.014%201.883l-1.192%207.902a3.182%203.182%200%200%201-.04.218c2.206%201.438%205.006%203.754%206.511%207.426.294.717.54%201.486.72%202.31%202.6-.632%205.177-1.022%207.638-.765Z%22%2F%3E%3Cg%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%3E%3Cpath%20fill%3D%22url(%23f)%22%20d%3D%22M39.687%2033.638c-.118%202.72.221%205.839%202.053%2010.424l-.575-.052c-1.643-4.785-2.001-7.238-1.881-9.995.12-2.758%201.01-4.879%201.899-6.688.225-.458.75-1.319.974-1.75.665-1.28%201.108-1.955%201.488-3.124.53-1.633.416-2.406.355-3.176.422%202.783-1.178%205.202-2.388%207.667-.882%201.795-1.807%203.976-1.925%206.694Z%22%2F%3E%3Cpath%20fill%3D%22url(%23g)%22%20d%3D%22M34.131%2043.25c.217.502.422.907.552%201.529l-.48.108c-.2-.726-.354-1.242-.63-1.865-1.654-3.902-4.309-5.91-6.478-7.381%202.62%201.41%205.31%203.616%207.036%207.608Z%22%2F%3E%3Cpath%20fill%3D%22url(%23h)%22%20d%3D%22M34.71%2045.27c.917%204.264-.105%209.683-3.118%2014.95%202.518-5.22%203.74-10.234%202.723-14.866l.396-.085Z%22%2F%3E%3Cpath%20fill%3D%22url(%23i)%22%20d%3D%22M45.11%2044.888c4.94%201.848%206.842%205.908%208.264%209.294-1.756-3.546-4.197-7.462-8.441-8.915-3.23-1.106-5.957-.975-10.619.083l-.104-.462c4.948-1.128%207.535-1.26%2010.9%200Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22b%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-5.44827%20-20.95522%2013.96424%20-3.63065%2031.076%2059.662)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23333%22%20stop-opacity%3D%22.52%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22c%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-9.24927%20-16.1868%2016.18663%20-9.24917%2047.535%2064.623)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23565656%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23151515%22%20stop-opacity%3D%22.71%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22d%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(4.6468%20-35.22462%2026.02364%203.433%2049.53%2050.76)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%237E7E7E%22%20stop-opacity%3D%22.91%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231E1E1E%22%20stop-opacity%3D%22.6%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22e%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(13.14708%20-30.29344%2020.65904%208.96583%2034.531%2046.293)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23D7D7D7%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23414141%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22f%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-3.34584%2015.42817%20-10.40357%20-2.25617%2044.882%2027.895)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.17%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22g%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(8.17858%208.27172%20-17.61805%2017.41967%2026.387%2036.445)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22h%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(80.202%20-7.323%2041.856)%20scale(13.634%2028.9518)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.12%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.35%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22i%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(-152.296%2033.168%2019.977)%20scale(20.7745%2065.377)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.21%22%2F%3E%3Cstop%20offset%3D%22.467%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.19%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.29%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%2239.273%22%20height%3D%2249.867%22%20x%3D%2220.551%22%20y%3D%2215.381%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20mode%3D%22normal%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20result%3D%22effect1_foregroundBlur_3584_482%22%20stdDeviation%3D%22.624%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E");
  --on-border-dark: var(--color-accent-3, hsla(216, 10%, 44.1%));
  --on-border-light: var(--color-accent-3, hsla(216, 10%, 44.1%));
  --pdf-background: var(--background-primary, hsl(216, 5%, 13.61111%));
  --pdf-page-background: var(--background-primary, hsl(216, 5%, 13.61111%));
  --pdf-sidebar-background: var(--background-primary, hsl(216, 5%, 13.61111%));
  --pill-border-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsla(216, 10%, 44.1%, 0.25));
  --pill-color: var(--text-muted, hsl(216, 18%, 72%));
  --pill-color-hover: var(--text-normal, hsl(216, 24%, 84%));
  --pill-color-remove: var(--text-faint, hsl(216, 12%, 44%));
  --pill-color-remove-hover: var(--text-accent, hsl(216, 25%, 45.2%));
  --prompt-background: var(--background-primary, hsl(216, 5%, 13.61111%));
  --prompt-border-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --radius-l: 4px;
  --radius-m: 2px;
  --radius-s: 0px;
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(216,
            3.57143%,
            20.41667%) 65%, transparent) linear-gradient(hsl(216,
            3.57143%,
            20.41667%), color-mix(in srgb, hsl(216,
            3.57143%,
            20.41667%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(216, 5%, 12.5%));
  --ribbon-background-collapsed: var(--background-primary, hsl(216, 5%, 13.61111%));
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.15);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0);
  --scrollbar-radius: var(--radius-l, 4px);
  --search-clear-button-color: var(--text-muted, hsl(216, 18%, 72%));
  --search-icon-color: var(--text-muted, hsl(216, 18%, 72%));
  --search-result-background: var(--background-primary, transparent);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(216, 25%, 45.2%)));
  --setting-group-heading-color: var(--text-normal, hsl(216, 24%, 84%));
  --setting-items-background: var(--background-primary-alt, hsl(216, 5%, 15.70513%));
  --setting-items-border-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --setting-items-radius: var(--radius-l, 4px);
  --shadow-300: rgba(0, 0, 0, 0.15);
  --shadow-activated-file-dark: none;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px var(--background-modifier-border);
  --shadow-activated-tab-header-light: 0px 0px 6px hsla(var(--accent-h), 18%, 80%, 0.4), 0px 0px 2px hsla(var(--accent-h), 18%, 80%, 0.2), 0 0 0 1px var(--background-modifier-border);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(216, 18%, 72%));
  --shiki-code-background: var(--code-background, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --shiki-code-block-border-radius: var(--code-radius, 0px);
  --shiki-code-comment: var(--text-faint, hsl(216, 12%, 44%));
  --shiki-code-function: var(--color-green, rgb(124, 211, 124));
  --shiki-code-important: var(--color-orange, rgb(251, 187, 131));
  --shiki-code-keyword: var(--color-pink, rgb(242, 182, 222));
  --shiki-code-normal: var(--text-muted, hsl(216, 18%, 72%));
  --shiki-code-property: var(--color-cyan, rgb(134, 223, 226));
  --shiki-code-punctuation: var(--text-muted, hsl(216, 18%, 72%));
  --shiki-code-string: var(--color-yellow, rgb(255, 232, 139));
  --shiki-code-value: var(--color-purple, rgb(203, 158, 255));
  --shiki-gutter-border-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --shiki-gutter-text-color: var(--text-faint, hsl(216, 12%, 44%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(216, 18%, 72%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(216, 18%, 72%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(216, 12%, 44%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsla(216, 10%, 44.1%, 0.25));
  --slider-track-background: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --status-bar-background: var(--background-secondary, transparent);
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0);
  --status-bar-radius: var(--radius-m, 2px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, hsl(216, 18%, 72%));
  --suggestion-background: var(--background-primary, hsl(216, 5%, 13.61111%));
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
  --tab-divider-color: var(--background-modifier-border-hover, hsla(216, 10%, 44.1%, 0.25));
  --tab-outline-color: var(--divider-color, hsla(216, 10%, 44.1%, 0.2));
  --tab-radius: var(--radius-s, 0px);
  --tab-switcher-background: var(--background-secondary, hsl(216, 5%, 12.5%));
  --tab-text-color: var(--text-faint, hsl(216, 12%, 44%));
  --tab-text-color-active: var(--text-muted, hsl(216, 18%, 72%));
  --tab-text-color-focused: var(--text-muted, hsl(216, 18%, 72%));
  --tab-text-color-focused-active: var(--text-muted, hsl(216, 18%, 72%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(216, 24%, 84%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(216, 25%, 45.2%));
  --table-add-button-border-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --table-border-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --table-drag-handle-background-active: var(--table-selection-border-color, #0ba360);
  --table-drag-handle-color: var(--text-faint, hsl(216, 12%, 44%));
  --table-header-background-dark: var(--background-alt-dark, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --table-header-background-light: var(--background-alt-light, url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E%22));
  --table-header-border-color: var(--table-border-color, hsla(216, 10%, 44.1%, 0.2));
  --table-header-color: var(--text-normal, hsl(216, 24%, 84%));
  --table-selection-border-color: var(--interactive-accent, #0ba360);
  --table-width: 88cqw;
  --tag-color: var(--text-accent, hsl(216, 25%, 45.2%));
  --tag-color-hover: var(--text-accent, hsl(216, 25%, 45.2%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(216, 25%, 52.8%)));
  --text-accent: var(--color-accent-1, hsl(216, 25%, 45.2%));
  --text-accent-hover: var(--color-accent-2, hsl(216, 25%, 52.8%));
  --text-error: var(--color-red, rgb(255, 120, 129));
  --text-faint: hsl(var(--accent-h), 12%, 44%);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: hsl(var(--accent-h), 18%, 72%);
  --text-normal: hsl(var(--accent-h), 24%, 84%);
  --text-selection: hsla(var(--interactive-accent-hsl), 0.25);
  --text-success: var(--color-green, rgb(124, 211, 124));
  --text-warning: var(--color-orange, rgb(251, 187, 131));
  --textHighlight: var(--background-modifier-hover, hsla(var(--accent-h), 12%, 40%, 0.25));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, hsla(216, 10%, 44.1%, 0.2));
  --titlebar-text-color: var(--text-muted, hsl(216, 18%, 72%));
  --titlebar-text-color-focused: var(--text-normal, hsl(216, 24%, 84%));
  --toggle-thumb-color: var(--toggle-thumb-color-dark, white);
  --toggle-thumb-color-dark: white;
  --toggle-thumb-enabled-color: var(--toggle-thumb-enabled-color-dark, white);
  --toggle-thumb-enabled-color-dark: white;
  --toggle-thumb-enabled-shadow: var(--toggle-thumb-enabled-shadow-dark, 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.3), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px hsla(216,
        25%,
        49%, 0.5), inset 0px 4px 4px #FFFFFF);
  --toggle-thumb-enabled-shadow-dark: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.3), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px hsla(var(--interactive-accent-hsl), 0.5), inset 0px 4px 4px #FFFFFF;
  --toggle-thumb-shadow: var(--toggle-thumb-shadow-dark, 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.6), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px rgba(0, 0, 0, 0.25), inset 0px 4px 4px #FFFFFF);
  --toggle-thumb-shadow-dark: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.6), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px rgba(0, 0, 0, 0.25), inset 0px 4px 4px #FFFFFF;
  --toggle-track-color: var(--toggle-track-color-dark, hsla(216, 10%, 44.1%, 0.25));
  --toggle-track-color-dark: var(--background-modifier-border-hover, hsla(216, 10%, 44.1%, 0.25));
  --toggle-track-enabled-color: var(--toggle-track-enabled-color-dark, #0ba360);
  --toggle-track-enabled-color-dark: var(--interactive-accent, #0ba360);
  --toggle-track-hovered-shadow: var(--toggle-track-hovered-shadow-dark, inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(216, 10%, 44.1%, 0.2));
  --toggle-track-hovered-shadow-dark: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px var(--background-modifier-border);
  --toggle-track-shadow: var(--toggle-track-shadow-dark, inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(216, 10%, 44.1%, 0.2));
  --toggle-track-shadow-dark: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px var(--background-modifier-border);
  --vault-name-color: var(--nav-item-color, hsl(216, 18%, 72%));
  --vault-name-font-size: var(--nav-item-size, 13px);
  --vault-profile-color: var(--text-normal, hsl(216, 24%, 84%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(216, 24%, 84%));
  --window-border: 1px solid hsl(225, 11%, 36%);
  --workspace-background-translucent: hsla(var(--accent-h),
            calc(var(--accent-s)/5.4),
            calc(var(--accent-l)*1.25/3.6), 0.6);
  --workspace-divider-color: var(--divider-color, hsla(216, 10%, 44.1%, 0.2));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(216, 5%, 12.5%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(204, 212, 224);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(204, 212, 224);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(204, 212, 224);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(101, 110, 124, 0.2);
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(216, 5%, 12.5%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(101, 110, 124, 0.2);
  color: rgb(204, 212, 224);
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(255, 120, 129));
  outline: rgb(255, 120, 129) none 0px;
  text-decoration-color: rgb(255, 120, 129);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(251, 187, 131));
  outline: rgb(251, 187, 131) none 0px;
  text-decoration-color: rgb(251, 187, 131);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(251, 187, 131));
  outline: rgb(251, 187, 131) none 0px;
  text-decoration-color: rgb(251, 187, 131);
}

html body .markdown-rendered p > strong > em, html strong > em {
  color: var(--italic-color, rgb(251, 187, 131));
  outline: rgb(251, 187, 131) none 0px;
  text-decoration-color: rgb(251, 187, 131);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(255, 120, 129));
  outline: rgb(255, 120, 129) none 0px;
  text-decoration-color: rgb(255, 120, 129);
}

html body .text-highlight {
  color: var(--text-normal, rgb(204, 212, 224));
  outline: rgb(204, 212, 224) none 0px;
  text-decoration-color: rgb(204, 212, 224);
}

html body del {
  color: rgb(204, 212, 224);
  outline: rgb(204, 212, 224) none 0px;
  text-decoration-color: rgb(204, 212, 224);
}

html body footer {
  --icon-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --icon-color-hover: var(--text-muted, hsla(216, 10%, 44.1%));
  --status-bar-text-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color: var(--text-faint, hsla(216, 10%, 44.1%));
  --tab-text-color-active: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color-focused: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color-focused-active: var(--text-muted, hsla(216, 10%, 44.1%));
  --text-faint: var(--on-border-dark, hsla(216, 10%, 44.1%));
  --text-muted: var(--on-border-dark, hsla(216, 10%, 44.1%));
  --titlebar-text-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --titlebar-text-color-focused: var(--text-muted, hsla(216, 10%, 44.1%));
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(99, 110, 126);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(124, 211, 124));
  border-color: rgb(124, 211, 124);
}

html body p {
  color: var(--text-muted, rgb(171, 181, 196));
  outline: rgb(171, 181, 196) none 0px;
  text-decoration-color: rgb(171, 181, 196);
}`,
    links: `html body a.external-link, html footer a {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  color: var(--link-external-color, rgb(137, 189, 244));
  outline: rgb(137, 189, 244) none 0px;
  text-decoration-color: rgb(137, 189, 244);
  transition: opacity 0.15s ease-in-out;
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  color: var(--link-color, rgb(86, 109, 144));
  outline: rgb(86, 109, 144) none 0px;
  text-decoration-color: rgb(86, 109, 144);
  transition: opacity 0.15s ease-in-out;
}

html body a.internal-link.broken {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  color: var(--link-unresolved-color, rgb(86, 109, 144));
  outline: rgb(86, 109, 144) none 0px;
  text-decoration: underline rgba(94, 119, 156, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(94, 119, 156, 0.3));
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html body dd {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  color: rgb(204, 212, 224);
}

html body dt {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  color: rgb(204, 212, 224);
}

html body ol > li {
  color: rgb(204, 212, 224);
}

html body ul > li {
  color: rgb(204, 212, 224);
}

html body ul.overflow {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(99, 110, 126));
}

html body blockquote {
  color: var(--blockquote-color, rgb(204, 212, 224));
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}

html body table {
  color: rgb(204, 212, 224);
}

html body td {
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-left-color: rgba(101, 110, 124, 0.2);
  border-right-color: rgba(101, 110, 124, 0.2);
  border-top-color: rgba(101, 110, 124, 0.2);
  color: var(--table-text-color, rgb(204, 212, 224));
}

html body th {
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-left-color: rgba(101, 110, 124, 0.2);
  border-right-color: rgba(101, 110, 124, 0.2);
  border-top-color: rgba(101, 110, 124, 0.2);
  color: var(--table-header-color, rgb(204, 212, 224));
}`,
    code: `html body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(171, 181, 196);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(171, 181, 196);
  border-right-color: rgb(171, 181, 196);
  border-top-color: rgb(171, 181, 196);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgb(171, 181, 196));
  font-family: var(--ec-codeFontFml, "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html body pre:has(> code) {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgba(101, 110, 124, 0.2);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgba(101, 110, 124, 0.2);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgba(101, 110, 124, 0.2);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dashed;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}

html body figcaption {
  color: rgb(204, 212, 224);
}

html body figure {
  --code-background: var(--ec-frm-edBg, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"));
  border-bottom-color: rgb(204, 212, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body img {
  border-bottom-color: rgb(217, 214, 23);
  border-left-color: rgb(217, 214, 23);
  border-right-color: rgb(217, 214, 23);
  border-top-color: rgb(217, 214, 23);
}

html body video {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(38, 40, 42));
  border-bottom-color: rgb(171, 181, 196);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(171, 181, 196);
  border-radius: 2px;
  border-right-color: rgb(171, 181, 196);
  border-top-color: rgb(171, 181, 196);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-muted, rgb(171, 181, 196));
}

html body .footnotes {
  border-top-color: rgb(204, 212, 224);
  color: rgb(204, 212, 224);
}

html body .transclude {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(11, 163, 96);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  color: rgb(204, 212, 224);
}

html body .transclude-inner {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  color: rgb(204, 212, 224);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(99, 110, 126);
  border-left-color: rgb(99, 110, 126);
  border-right-color: rgb(99, 110, 126);
  border-top-color: rgb(99, 110, 126);
  transition: box-shadow 0.3s cubic-bezier(0, 0.55, 0.45, 1), filter 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html body li.task-list-item[data-task="#"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(204, 212, 224);
}

html li.task-list-item[data-task="body"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="."] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="="] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(99, 110, 126);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(99, 110, 126);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(99, 110, 126);
  text-decoration: line-through 1px rgb(99, 110, 126);
  text-decoration-color: rgb(99, 110, 126);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM3.5,7c-.55,0-1,.45-1,1s.45,1,1,1H12.5c.55,0,1-.45,1-1s-.45-1-1-1H3.5Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM3.5,7c-.55,0-1,.45-1,1s.45,1,1,1H12.5c.55,0,1-.45,1-1s-.45-1-1-1H3.5Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(99, 110, 126);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(251, 187, 131);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM4.84,3.66c-.32,.48-.09,1.14,.44,1.37,.23,.1,.49,.1,.72,0,.17-.07,.31-.18,.41-.34,.31-.49,.82-.89,1.6-.89,1.72,0,2.06,1.61,1.45,2.47-.36,.51-.87,.91-1.33,1.37-.28,.28-.55,.58-.74,.93-.19,.33-.27,.69-.31,1.03-.04,.31,.08,.59,.28,.79,.18,.18,.43,.29,.71,.29,.49,0,.89-.38,.95-.87,.04-.3,.1-.45,.2-.63,.41-.76,1.18-1.12,1.98-2.3,.72-1.07,.45-2.5-.02-3.27-.55-.89-1.62-1.61-3.19-1.61-1.43,0-2.51,.7-3.15,1.66Zm3.16,11.01c.73,0,1.33-.6,1.33-1.33s-.6-1.33-1.33-1.33-1.33,.6-1.33,1.33,.6,1.33,1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM4.84,3.66c-.32,.48-.09,1.14,.44,1.37,.23,.1,.49,.1,.72,0,.17-.07,.31-.18,.41-.34,.31-.49,.82-.89,1.6-.89,1.72,0,2.06,1.61,1.45,2.47-.36,.51-.87,.91-1.33,1.37-.28,.28-.55,.58-.74,.93-.19,.33-.27,.69-.31,1.03-.04,.31,.08,.59,.28,.79,.18,.18,.43,.29,.71,.29,.49,0,.89-.38,.95-.87,.04-.3,.1-.45,.2-.63,.41-.76,1.18-1.12,1.98-2.3,.72-1.07,.45-2.5-.02-3.27-.55-.89-1.62-1.61-3.19-1.61-1.43,0-2.51,.7-3.15,1.66Zm3.16,11.01c.73,0,1.33-.6,1.33-1.33s-.6-1.33-1.33-1.33-1.33,.6-1.33,1.33,.6,1.33,1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 187, 131);
  color: rgb(242, 182, 222);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
  color: rgb(203, 158, 255);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 232, 139);
  color: rgb(255, 232, 139);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M13.66,13.66c-1.45,1.45-3.45,2.34-5.66,2.34C3.58,16,0,12.42,0,8S3.58,0,8,0c2.17,0,4.15,.87,5.59,2.28,.06,.06,.12,.12,.18,.18,1.37,1.43,2.22,3.36,2.23,5.5,0,.03,0,.07,0,.1-.01,2.19-.91,4.17-2.34,5.6Zm-1.41-1.41c-1.09,1.09-2.59,1.76-4.24,1.76-3.31,0-6-2.69-6-6S4.69,2,8,2v6l4.24,4.24Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M13.66,13.66c-1.45,1.45-3.45,2.34-5.66,2.34C3.58,16,0,12.42,0,8S3.58,0,8,0c2.17,0,4.15,.87,5.59,2.28,.06,.06,.12,.12,.18,.18,1.37,1.43,2.22,3.36,2.23,5.5,0,.03,0,.07,0,.1-.01,2.19-.91,4.17-2.34,5.6Zm-1.41-1.41c-1.09,1.09-2.59,1.76-4.24,1.76-3.31,0-6-2.69-6-6S4.69,2,8,2v6l4.24,4.24Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(255, 232, 139);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(134, 223, 226);
  color: rgb(137, 189, 244);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(137, 189, 244);
  color: rgb(242, 182, 222);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 129);
  color: rgb(137, 189, 244);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 129);
  color: rgb(255, 120, 129);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 129);
  color: rgb(255, 120, 129);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 129);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(137, 189, 244);
  color: rgb(134, 223, 226);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 232, 139);
  color: rgb(251, 187, 131);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 232, 139);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(203, 158, 255);
  color: rgb(255, 120, 129);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 129);
  color: rgb(134, 223, 226);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 211, 124);
  color: rgb(124, 211, 124);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M6.43,5.42c.15-.1,.35-.2,.57-.27v1.7c-.2-.06-.39-.15-.57-.27-.36-.24-.43-.47-.43-.58s.07-.34,.43-.58Zm2.57,5.43v-1.7c.22,.07,.41,.16,.57,.27,.36,.24,.43,.47,.43,.58s-.07,.34-.43,.58c-.18,.11-.37,.2-.57,.27Z%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c2.12,0,4.16-.84,5.66-2.34,1.5-1.5,2.34-3.54,2.34-5.66s-.84-4.16-2.34-5.66c-1.5-1.5-3.54-2.34-5.66-2.34S3.84,.84,2.34,2.34C.84,3.84,0,5.88,0,8s.84,4.16,2.34,5.66c1.5,1.5,3.54,2.34,5.66,2.34Zm1-13c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v.09c-.6,.11-1.17,.33-1.68,.66-.72,.48-1.32,1.25-1.32,2.25s.6,1.76,1.32,2.25c.48,.32,1.05,.55,1.68,.66v1.94c-.39-.13-.68-.32-.84-.5-.08-.1-.19-.19-.31-.25-.12-.06-.25-.1-.38-.11s-.27,0-.4,.05c-.13,.04-.25,.11-.35,.2-.1,.09-.18,.19-.24,.32-.06,.12-.09,.25-.1,.38,0,.13,.01,.27,.06,.39,.05,.13,.12,.24,.21,.34,.56,.65,1.41,1.08,2.35,1.25v.09c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71v-.09c.6-.11,1.17-.33,1.68-.66,.72-.48,1.32-1.26,1.32-2.25s-.6-1.77-1.32-2.25c-.51-.33-1.08-.56-1.68-.66v-1.94c.39,.13,.68,.32,.84,.5,.09,.1,.19,.18,.31,.25,.12,.06,.25,.1,.38,.11,.13,.01,.26,0,.39-.05,.13-.04,.24-.11,.34-.19,.1-.09,.18-.19,.24-.31,.06-.12,.09-.25,.1-.38,0-.13,0-.26-.05-.39-.04-.13-.11-.24-.2-.34-.56-.65-1.41-1.08-2.35-1.25v-.09Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M6.43,5.42c.15-.1,.35-.2,.57-.27v1.7c-.2-.06-.39-.15-.57-.27-.36-.24-.43-.47-.43-.58s.07-.34,.43-.58Zm2.57,5.43v-1.7c.22,.07,.41,.16,.57,.27,.36,.24,.43,.47,.43,.58s-.07,.34-.43,.58c-.18,.11-.37,.2-.57,.27Z%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c2.12,0,4.16-.84,5.66-2.34,1.5-1.5,2.34-3.54,2.34-5.66s-.84-4.16-2.34-5.66c-1.5-1.5-3.54-2.34-5.66-2.34S3.84,.84,2.34,2.34C.84,3.84,0,5.88,0,8s.84,4.16,2.34,5.66c1.5,1.5,3.54,2.34,5.66,2.34Zm1-13c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v.09c-.6,.11-1.17,.33-1.68,.66-.72,.48-1.32,1.25-1.32,2.25s.6,1.76,1.32,2.25c.48,.32,1.05,.55,1.68,.66v1.94c-.39-.13-.68-.32-.84-.5-.08-.1-.19-.19-.31-.25-.12-.06-.25-.1-.38-.11s-.27,0-.4,.05c-.13,.04-.25,.11-.35,.2-.1,.09-.18,.19-.24,.32-.06,.12-.09,.25-.1,.38,0,.13,.01,.27,.06,.39,.05,.13,.12,.24,.21,.34,.56,.65,1.41,1.08,2.35,1.25v.09c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71v-.09c.6-.11,1.17-.33,1.68-.66,.72-.48,1.32-1.26,1.32-2.25s-.6-1.77-1.32-2.25c-.51-.33-1.08-.56-1.68-.66v-1.94c.39,.13,.68,.32,.84,.5,.09,.1,.19,.18,.31,.25,.12,.06,.25,.1,.38,.11,.13,.01,.26,0,.39-.05,.13-.04,.24-.11,.34-.19,.1-.09,.18-.19,.24-.31,.06-.12,.09-.25,.1-.38,0-.13,0-.26-.05-.39-.04-.13-.11-.24-.2-.34-.56-.65-1.41-1.08-2.35-1.25v-.09Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 211, 124);
  color: rgb(124, 211, 124);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 211, 124);
  color: rgb(124, 211, 124);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 134, 223, 226);
  background: rgba(134, 223, 226, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(134, 223, 226, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(134, 223, 226, 0.25);
  border-right-color: rgba(134, 223, 226, 0.25);
  border-top-color: rgba(134, 223, 226, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 10, 100, 250);
  background: rgba(10, 100, 250, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(10, 100, 250, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(10, 100, 250, 0.25);
  border-right-color: rgba(10, 100, 250, 0.25);
  border-top-color: rgba(10, 100, 250, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 120, 129);
  background: rgba(255, 120, 129, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 120, 129, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 120, 129, 0.25);
  border-right-color: rgba(255, 120, 129, 0.25);
  border-top-color: rgba(255, 120, 129, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 203, 158, 255);
  background: rgba(203, 158, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(203, 158, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(203, 158, 255, 0.25);
  border-right-color: rgba(203, 158, 255, 0.25);
  border-top-color: rgba(203, 158, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 120, 129);
  background: rgba(255, 120, 129, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 120, 129, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 120, 129, 0.25);
  border-right-color: rgba(255, 120, 129, 0.25);
  border-top-color: rgba(255, 120, 129, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 137, 189, 244);
  background: rgba(137, 189, 244, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 137, 189, 244);
  background: rgba(137, 189, 244, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 251, 187, 131);
  background: rgba(251, 187, 131, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(251, 187, 131, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 187, 131, 0.25);
  border-right-color: rgba(251, 187, 131, 0.25);
  border-top-color: rgba(251, 187, 131, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 124, 211, 124);
  background: rgba(124, 211, 124, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(124, 211, 124, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(124, 211, 124, 0.25);
  border-right-color: rgba(124, 211, 124, 0.25);
  border-top-color: rgba(124, 211, 124, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 134, 223, 226);
  background: rgba(134, 223, 226, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(134, 223, 226, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(134, 223, 226, 0.25);
  border-right-color: rgba(134, 223, 226, 0.25);
  border-top-color: rgba(134, 223, 226, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 137, 189, 244);
  background: rgba(137, 189, 244, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 251, 187, 131);
  background: rgba(251, 187, 131, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(251, 187, 131, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 187, 131, 0.25);
  border-right-color: rgba(251, 187, 131, 0.25);
  border-top-color: rgba(251, 187, 131, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(137, 189, 244));
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(204, 212, 224);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-left-color: rgba(101, 110, 124, 0.2);
  border-right-color: rgba(101, 110, 124, 0.2);
  border-top-color: rgba(101, 110, 124, 0.2);
  color: var(--text-normal, rgb(204, 212, 224));
}

html body .search > .search-container > .search-space {
  background-color: var(--workspace-background-translucent, rgba(41, 43, 45, 0.6));
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(101, 110, 124, 0.2);
  border-right-color: rgba(101, 110, 124, 0.2);
  border-top-color: rgba(101, 110, 124, 0.2);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(204, 212, 224);
  outline: rgb(204, 212, 224) none 0px;
  text-decoration-color: rgb(204, 212, 224);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 212, 224);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 212, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(204, 212, 224);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(90, 100, 114, 0.25));
  color: rgb(204, 212, 224);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(101, 110, 124, 0.2);
  border-right-color: rgba(101, 110, 124, 0.2);
  border-top-color: rgba(101, 110, 124, 0.2);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(204, 212, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(90, 100, 114, 0.25));
  border-bottom-color: rgb(204, 212, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(90, 100, 114, 0.25));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(216,
        25%,
        49%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(216,
        25%,
        49%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(216,
        25%,
        49%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(216,
        25%,
        49%, 0.15));
  --pill-color: var(--tag-color, hsl(216, 25%, 45.2%));
  --pill-color-hover: var(--tag-color-hover, hsl(216, 25%, 45.2%));
  --pill-color-remove: var(--tag-color, hsl(216, 25%, 45.2%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(216, 25%, 45.2%));
  background-color: var(--pill-background, rgba(94, 119, 156, 0.1));
  border-bottom-color: rgba(94, 119, 156, 0.15);
  border-left-color: rgba(94, 119, 156, 0.15);
  border-right-color: rgba(94, 119, 156, 0.15);
  border-top-color: rgba(94, 119, 156, 0.15);
  color: var(--pill-color, rgb(86, 109, 144));
}

html body a.internal-link.tag-link::before {
  color: rgb(86, 109, 144);
}

html body h1 {
  border-bottom-color: rgb(217, 214, 23);
  border-left-color: rgb(217, 214, 23);
  border-right-color: rgb(217, 214, 23);
  border-top-color: rgb(217, 214, 23);
  color: var(--h1-color, rgb(217, 214, 23));
  font-size: var(--h1-size, 24px);
  letter-spacing: var(--h1-letter-spacing, -0.36px);
  line-height: var(--h1-line-height, 28.8px);
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(204, 212, 224));
  font-size: var(--inline-title-size, 24px);
}

html body h2 {
  --font-weight: var(--h2-weight, 675);
  border-bottom-color: rgb(13, 200, 242);
  border-left-color: rgb(13, 200, 242);
  border-right-color: rgb(13, 200, 242);
  border-top-color: rgb(13, 200, 242);
  color: var(--h2-color, rgb(13, 200, 242));
  font-size: var(--h2-size, 22.8px);
  font-weight: var(--font-weight, 675);
  letter-spacing: var(--h2-letter-spacing, -0.2508px);
  line-height: var(--h2-line-height, 27.36px);
}

html body h2.page-title, html h2.page-title a {
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  color: var(--inline-title-color, rgb(204, 212, 224));
  font-size: var(--inline-title-size, 24px);
  letter-spacing: -0.36px;
  line-height: var(--inline-title-line-height, 28.8px);
  margin-bottom: var(--size-4-3, 12px);
  padding-bottom: var(--size-4-3, 12px);
}

html body h2::before {
  --font-weight: var(--h2-weight, 675);
  background: rgb(13, 200, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 200, 242);
  border-bottom-color: rgb(13, 200, 242);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(13, 200, 242);
  border-left-width: 0px;
  border-right-color: rgb(13, 200, 242);
  border-right-width: 0px;
  border-top-color: rgb(13, 200, 242);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(13, 200, 242));
  content: " ";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 18px;
}

html body h3 {
  --font-weight: var(--h3-weight, 650);
  border-bottom-color: rgb(114, 213, 165);
  border-left-color: rgb(114, 213, 165);
  border-right-color: rgb(114, 213, 165);
  border-top-color: rgb(114, 213, 165);
  color: var(--h3-color, rgb(114, 213, 165));
  font-size: var(--h3-size, 21.6px);
  font-weight: var(--font-weight, 650);
  letter-spacing: var(--h3-letter-spacing, -0.1728px);
  line-height: var(--h3-line-height, 28.08px);
}

html body h3::before {
  --font-weight: var(--h3-weight, 650);
  background: rgb(114, 213, 165) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(114, 213, 165);
  border-bottom-color: rgb(114, 213, 165);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(114, 213, 165);
  border-left-width: 0px;
  border-right-color: rgb(114, 213, 165);
  border-right-width: 0px;
  border-top-color: rgb(114, 213, 165);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(114, 213, 165));
  content: " ";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 10px;
}

html body h4 {
  --font-weight: var(--h4-weight, 625);
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
  color: var(--h4-color, rgb(185, 195, 223));
  font-size: var(--h4-size, 20.4px);
  font-weight: var(--font-weight, 625);
  letter-spacing: var(--h4-letter-spacing, -0.102px);
  line-height: var(--h4-line-height, 28.56px);
}

html body h4::before {
  --font-weight: var(--h4-weight, 625);
  background: rgb(185, 195, 223) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 223);
  border-bottom-color: rgb(185, 195, 223);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(185, 195, 223);
  border-left-width: 0px;
  border-right-color: rgb(185, 195, 223);
  border-right-width: 0px;
  border-top-color: rgb(185, 195, 223);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(185, 195, 223));
  content: " ";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 3px;
}

html body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
  color: var(--h5-color, rgb(185, 195, 223));
  font-size: var(--h5-size, 19.2px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.0384px);
  line-height: var(--h5-line-height, 28.8px);
}

html body h6 {
  --font-weight: var(--h6-weight, 575);
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
  color: var(--h6-color, rgb(185, 195, 223));
  font-size: var(--h6-size, 18px);
  font-weight: var(--font-weight, 575);
  line-height: var(--h6-line-height, 27px);
}

html body hr {
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-left-color: rgba(101, 110, 124, 0.2);
  border-right-color: rgba(101, 110, 124, 0.2);
  border-top-color: rgba(101, 110, 124, 0.2);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 137, 189, 244);
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(171, 181, 196));
  cursor: var(--cursor, pointer);
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(171, 181, 196));
  cursor: var(--cursor, pointer);
}

html body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(204, 212, 224);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(171, 181, 196);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(171, 181, 196);
  border-right-color: rgb(171, 181, 196);
  border-top-color: rgb(171, 181, 196);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(171, 181, 196));
  cursor: var(--cursor, pointer);
}`,
    footer: `html body footer {
  --icon-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --icon-color-hover: var(--text-muted, hsla(216, 10%, 44.1%));
  --status-bar-text-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color: var(--text-faint, hsla(216, 10%, 44.1%));
  --tab-text-color-active: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color-focused: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color-focused-active: var(--text-muted, hsla(216, 10%, 44.1%));
  --text-faint: var(--on-border-dark, hsla(216, 10%, 44.1%));
  --text-muted: var(--on-border-dark, hsla(216, 10%, 44.1%));
  --titlebar-text-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --titlebar-text-color-focused: var(--text-muted, hsla(216, 10%, 44.1%));
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 2px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(101, 110, 124));
  padding-bottom: 0px;
  padding-left: 0px;
  padding-top: 0px;
}

html body footer ul li a {
  color: rgb(101, 110, 124);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(204, 212, 224);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  color: rgb(204, 212, 224);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(171, 181, 196));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 181, 196);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}

html body li.section-li > .section .meta {
  color: rgb(171, 181, 196);
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(171, 181, 196));
}

html body ul.section-ul {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}`,
    darkmode: `html body .darkmode {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(101, 110, 124);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(101, 110, 124);
  border-right-color: rgb(101, 110, 124);
  border-top-color: rgb(101, 110, 124);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(101, 110, 124));
  cursor: var(--cursor, pointer);
}

html body .darkmode svg {
  color: rgb(101, 110, 124);
  stroke: rgb(101, 110, 124);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(171, 181, 196);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(171, 181, 196);
  border-right-color: rgb(171, 181, 196);
  border-top-color: rgb(171, 181, 196);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(171, 181, 196);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(99, 110, 126));
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(204, 212, 224);
}

html body .canvas-node-content {
  color: rgb(204, 212, 224);
}

html body .canvas-node-file {
  background-color: var(--h6-accent-color, rgba(0, 0, 0, 0));
  color: var(--h6-accent-color, rgb(204, 212, 224));
}

html body .canvas-node-group {
  border-color: rgb(204, 212, 224);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(30, 32, 33));
  border-color: rgb(204, 212, 224);
  box-shadow: var(--input-shadow, rgba(0, 0, 0, 0.32) 0px 4px 8px -4px, rgba(0, 0, 0, 0.32) 0px 1px 2px 0px, rgba(0, 0, 0, 0.32) 0px 0px 0px 1px, rgba(0, 0, 0, 0.12) 0px 0px 1px 1px, rgba(255, 255, 255, 0.16) 0px 1px 0.75px 0px inset, rgba(0, 0, 0, 0.16) 0px -2px 0.75px 0px inset);
}`,
    bases: `html body .bases-table thead th {
  border-color: rgba(101, 110, 124, 0.2);
  color: var(--table-header-color, rgb(204, 212, 224));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-left-color: rgba(101, 110, 124, 0.2);
  border-right-color: rgba(101, 110, 124, 0.2);
  border-top-color: rgba(101, 110, 124, 0.2);
  color: var(--text-muted, rgb(171, 181, 196));
}

html body .metadata-container .metadata-property {
  --pill-radius: var(--radius-s, 0px);
  border-bottom-color: rgb(171, 181, 196);
  border-left-color: rgb(171, 181, 196);
  border-right-color: rgb(171, 181, 196);
  border-top-color: rgb(171, 181, 196);
  color: rgb(171, 181, 196);
}

html body .metadata-properties {
  border-bottom-color: rgb(171, 181, 196);
  border-left-color: rgb(171, 181, 196);
  border-right-color: rgb(171, 181, 196);
  border-top-color: rgb(171, 181, 196);
  color: rgb(171, 181, 196);
}

html body .metadata-property-key {
  color: rgb(171, 181, 196);
}

html body .metadata-property-value {
  color: rgb(171, 181, 196);
}

html body .note-properties {
  border-color: rgba(101, 110, 124, 0.2);
}

html body .note-properties-key {
  color: rgb(171, 181, 196);
}

html body .note-properties-row {
  --pill-radius: var(--radius-s, 0px);
  border-color: rgb(171, 181, 196);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(216,
        25%,
        49%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(216,
        25%,
        49%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(216,
        25%,
        49%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(216,
        25%,
        49%, 0.15));
  --pill-color: var(--tag-color, hsl(216, 25%, 45.2%));
  --pill-color-hover: var(--tag-color-hover, hsl(216, 25%, 45.2%));
  --pill-color-remove: var(--tag-color, hsl(216, 25%, 45.2%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(216, 25%, 45.2%));
  background-color: var(--pill-background, rgba(94, 119, 156, 0.1));
  color: var(--pill-color, rgb(86, 109, 144));
}

html body .note-properties-value {
  color: rgb(171, 181, 196);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(41, 43, 45));
  color: var(--text-normal, rgb(204, 212, 224));
}

html body ol.overflow {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(204, 212, 224);
}

html body .stacked-page-header {
  --icon-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --icon-color-hover: var(--text-muted, hsla(216, 10%, 44.1%));
  --status-bar-text-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color: var(--text-faint, hsla(216, 10%, 44.1%));
  --tab-text-color-active: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color-focused: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color-focused-active: var(--text-muted, hsla(216, 10%, 44.1%));
  --text-faint: var(--on-border-dark, hsla(216, 10%, 44.1%));
  --text-muted: var(--on-border-dark, hsla(216, 10%, 44.1%));
  --titlebar-text-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --titlebar-text-color-focused: var(--text-muted, hsla(216, 10%, 44.1%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html body .stacked-page.active {
  border-color: rgb(204, 212, 224);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  color: rgb(204, 212, 224);
}

html body .navigation-progress {
  --icon-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --icon-color-hover: var(--text-muted, hsla(216, 10%, 44.1%));
  --status-bar-text-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color: var(--text-faint, hsla(216, 10%, 44.1%));
  --tab-text-color-active: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color-focused: var(--text-muted, hsla(216, 10%, 44.1%));
  --tab-text-color-focused-active: var(--text-muted, hsla(216, 10%, 44.1%));
  --text-faint: var(--on-border-dark, hsla(216, 10%, 44.1%));
  --text-muted: var(--on-border-dark, hsla(216, 10%, 44.1%));
  --titlebar-text-color: var(--text-muted, hsla(216, 10%, 44.1%));
  --titlebar-text-color-focused: var(--text-muted, hsla(216, 10%, 44.1%));
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html body .page-header h2.page-title {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  color: var(--text-normal, rgb(204, 212, 224));
}

html body abbr {
  color: rgb(204, 212, 224);
}

html body details {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}

html body input[type=text] {
  border-bottom-color: rgb(171, 181, 196);
  border-left-color: rgb(171, 181, 196);
  border-right-color: rgb(171, 181, 196);
  border-top-color: rgb(171, 181, 196);
  color: var(--text-normal, rgb(171, 181, 196));
}

html body kbd {
  background-color: var(--background-modifier-hover, rgba(90, 100, 114, 0.25));
  border-bottom-color: rgb(171, 181, 196);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(171, 181, 196);
  border-right-color: rgb(171, 181, 196);
  border-top-color: rgb(171, 181, 196);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-muted, rgb(171, 181, 196));
}

html body progress {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}

html body sub {
  color: rgb(204, 212, 224);
}

html body summary {
  color: rgb(204, 212, 224);
}

html body sup {
  color: rgb(204, 212, 224);
}

html body ul.tags > li {
  background-color: var(--tag-background, rgba(94, 119, 156, 0.1));
  border-bottom-color: rgba(94, 119, 156, 0.15);
  border-left-color: rgba(94, 119, 156, 0.15);
  border-right-color: rgba(94, 119, 156, 0.15);
  border-top-color: rgba(94, 119, 156, 0.15);
  color: var(--tag-color, rgb(86, 109, 144));
}`,
  },
  light: {},
};
