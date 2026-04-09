import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "lorens", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-dark-h: 216 !important;
  --accent-dark-l: 49% !important;
  --accent-dark-s: 25% !important;
  --accent-h: 216 !important;
  --accent-l: 49% !important;
  --accent-s: 25% !important;
  --anim-duration-fast: 150ms !important;
  --anim-duration-moderate: 300ms !important;
  --anim-duration-slow: 600ms !important;
  --anim-duration-superfast: 75ms !important;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-speed: 1 !important;
  --background-activated-file-dark: hsla(216, 12%, 40%, 0.25) !important;
  --background-activated-tab-header-dark: hsla(216,
        25%,
        49%, 0.15) !important;
  --background-activated-tab-header-light: hsl(216, 5%, 13.61111%) !important;
  --background-alt-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --background-alt-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --background-mod-left-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-left-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-left-CSS-blend-mode-dark: normal !important;
  --background-mod-left-CSS-blend-mode-light: normal !important;
  --background-mod-left-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-left-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-left-split: hsl(216, 5%, 13.61111%) !important;
  --background-mod-left-split-dark: hsl(216, 5%, 13.61111%) !important;
  --background-mod-left-split-light: hsl(216, 5%, 13.61111%) !important;
  --background-mod-right-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-right-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-right-CSS-blend-mode-dark: normal !important;
  --background-mod-right-CSS-blend-mode-light: normal !important;
  --background-mod-right-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-right-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-right-split: hsl(216, 5%, 13.61111%) !important;
  --background-mod-right-split-dark: hsl(216, 5%, 13.61111%) !important;
  --background-mod-right-split-light: hsl(216, 5%, 13.61111%) !important;
  --background-mod-root-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-root-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-root-CSS-blend-mode-dark: normal !important;
  --background-mod-root-CSS-blend-mode-light: normal !important;
  --background-mod-root-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-root-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-root-split: hsl(216, 5%, 13.61111%) !important;
  --background-mod-root-split-dark: hsl(216, 5%, 13.61111%) !important;
  --background-mod-root-split-light: hsl(216, 5%, 13.61111%) !important;
  --background-modifier-active-hover: hsla(216,
        25%,
        49%, 0.15) !important;
  --background-modifier-border: hsla(216, 10%, 44.1%, 0.2) !important;
  --background-modifier-border-focus: hsla(216, 10%, 44.1%, 0.3) !important;
  --background-modifier-border-hover: hsla(216, 10%, 44.1%, 0.25) !important;
  --background-modifier-error: rgb(255, 120, 129) !important;
  --background-modifier-error-hover: rgb(255, 120, 129) !important;
  --background-modifier-error-rgb: 255, 120, 129 !important;
  --background-modifier-form-field: transparent !important;
  --background-modifier-form-field-hover: transparent !important;
  --background-modifier-hover: hsla(216, 12%, 40%, 0.25) !important;
  --background-modifier-success: rgb(124, 211, 124) !important;
  --background-modifier-success-rgb: 124, 211, 124 !important;
  --background-primary: hsl(216, 5%, 13.61111%) !important;
  --background-primary-alt: hsl(216, 5%, 15.70513%) !important;
  --background-secondary: hsl(216, 5%, 12.5%) !important;
  --background-secondary-alt: hsl(216,
            4.62963%,
            20.41667%) !important;
  --background-tertiary: hsl(216,
            4.62963%,
            17.01389%) !important;
  --background-underlying: hsl(216,
            4.62963%,
            17.01389%) !important;
  --background-underlying-CSS-blend-mode-dark: soft-light, luminosity, hue, luminosity, hard-light !important;
  --background-underlying-CSS-blend-mode-light: overlay, color-burn !important;
  --background-underlying-CSS-dark: linear-gradient(317deg, rgb(112, 55, 205) 0%, rgb(29, 12, 32) 19%, rgb(101, 31, 113) 19%, rgb(101, 31, 113) 33%), radial-gradient(100% 100% at 90% 9%, rgb(29, 12, 32) 0%, rgb(29, 12, 32) 100%), linear-gradient(109deg, rgb(104, 178, 248) 0%, rgb(80, 110, 229) 15%, rgb(112, 55, 205) 34%, rgb(104, 178, 248) 54%, rgb(104, 178, 248) 65%), radial-gradient(100% 100% at 20% 45%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), radial-gradient(100% 100% at 90% 27%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), linear-gradient(339deg, rgb(101, 31, 113) 0%, rgb(104, 178, 248) 12%, rgb(101, 31, 113) 14%, rgb(80, 110, 229) 19%, rgb(101, 31, 113) 20%, rgb(29, 12, 32) 30%) !important;
  --background-underlying-CSS-light: radial-gradient(100% 100% at 13% 50%, rgb(90, 109, 237) 0%, rgb(224, 218, 247) 100%), linear-gradient(6deg, rgb(235, 242, 252) 0%, rgb(90, 109, 237) 5%, rgb(166, 126, 241) 7%, rgb(224, 218, 247) 11%, rgb(90, 109, 237) 16%), radial-gradient(100% 100% at 60% 71%, rgb(224, 218, 247) 0%, rgb(219, 244, 255) 100%), linear-gradient(97deg, rgb(90, 109, 237) 0%, rgb(90, 109, 237) 23%, rgb(90, 109, 237) 53%), linear-gradient(351deg, rgb(235, 242, 252) 0%, rgb(219, 244, 255) 1%, rgb(235, 242, 252) 6%, rgb(224, 218, 247) 10%, rgb(166, 126, 241) 13%, rgb(235, 242, 252) 29%), radial-gradient(100% 100% at 10% 32%, rgb(90, 109, 237) 0%, rgb(219, 244, 255) 100%), radial-gradient(100% 100% at 35% 63%, rgb(224, 218, 247) 0%, rgb(224, 218, 247) 100%) !important;
  --background-underlying-dark: hsl(216,
            4.62963%,
            17.01389%) !important;
  --background-underlying-light: hsl(216,
            4.62963%,
            17.01389%) !important;
  --bases-cards-background: hsl(216, 5%, 13.61111%) !important;
  --bases-cards-cover-background: hsl(216, 5%, 15.70513%) !important;
  --bases-cards-radius: 2px !important;
  --bases-cards-shadow: 0 0 0 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(216, 10%, 44.1%, 0.25) !important;
  --bases-embed-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: hsl(216, 18%, 72%) !important;
  --bases-table-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --bases-table-cell-background-active: hsl(216, 5%, 13.61111%) !important;
  --bases-table-cell-background-disabled: hsl(216, 5%, 15.70513%) !important;
  --bases-table-cell-background-selected: hsla(216,
        25%,
        49%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsla(216, 10%, 44.1%, 0.3) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0ba360 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: hsl(216, 5%, 15.70513%) !important;
  --bases-table-header-background: hsl(216, 5%, 13.61111%) !important;
  --bases-table-header-background-hover: hsla(216, 12%, 40%, 0.25) !important;
  --bases-table-header-color: hsl(216, 18%, 72%) !important;
  --bases-table-summary-background: hsl(216, 5%, 13.61111%) !important;
  --bases-table-summary-background-hover: hsla(216, 12%, 40%, 0.25) !important;
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --blockquote-border-color: #0ba360 !important;
  --blockquote-border-thickness: 3px !important;
  --blur-background: color-mix(in srgb, hsl(216,
            3.57143%,
            20.41667%) 65%, transparent) linear-gradient(hsl(216,
            3.57143%,
            20.41667%), color-mix(in srgb, hsl(216,
            3.57143%,
            20.41667%) 65%, transparent)) !important;
  --bold-color: rgb(255, 120, 129) !important;
  --bold-weight: 600 !important;
  --border-900: hsl(219, 10%, 29%) !important;
  --border-radius-activated-file-dark: 0px !important;
  --border-radius-activated-tab-header-dark: 6px !important;
  --border-radius-activated-tab-header-light: 6px !important;
  --callout-bug: 255, 120, 129;
  --callout-content-radius: 0px;
  --callout-default: 137, 189, 244;
  --callout-error: 255, 120, 129;
  --callout-example: 203, 158, 255;
  --callout-fail: 255, 120, 129;
  --callout-important: 134, 223, 226;
  --callout-info: 137, 189, 244;
  --callout-question: 251, 187, 131;
  --callout-radius: 0px;
  --callout-success: 124, 211, 124;
  --callout-summary: 134, 223, 226;
  --callout-tip: 134, 223, 226;
  --callout-todo: 137, 189, 244;
  --callout-warning: 251, 187, 131;
  --canvas-background: transparent !important;
  --canvas-card-border-style: solid !important;
  --canvas-card-border-width: 2px !important;
  --canvas-card-label-color: hsl(216, 12%, 44%) !important;
  --canvas-color-1: 255, 120, 129 !important;
  --canvas-color-2: 251, 187, 131 !important;
  --canvas-color-3: 255, 232, 139 !important;
  --canvas-color-4: 124, 211, 124 !important;
  --canvas-color-5: 134, 223, 226 !important;
  --canvas-color-6: 203, 158, 255 !important;
  --canvas-controls-radius: 0px !important;
  --card-border-radius-dark: 8px !important;
  --card-border-radius-light: 8px !important;
  --card-shadow-border-radius-dark: 7px !important;
  --card-shadow-border-radius-light: 7px !important;
  --card-shadow-dark: 0px 0px 0px 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --card-shadow-light: 0px 0px 6px hsla(216, 18%, 80%, 0.4), 0px 0px 2px hsla(216, 18%, 80%, 0.2), 0 0 0 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --caret-color: hsl(216, 24%, 84%) !important;
  --checkbox-border-color: hsl(216, 12%, 44%) !important;
  --checkbox-border-color-hover: hsl(216, 12%, 44%) !important;
  --checkbox-color: rgb(124, 211, 124) !important;
  --checkbox-color-hover: rgb(124, 211, 124) !important;
  --checkbox-marker-color: hsl(216, 5%, 13.61111%) !important;
  --checklist-done-color: hsl(216, 12%, 44%) !important;
  --clickable-icon-radius: 6px !important;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-border: 1px dashed hsla(216, 10%, 44.1%, 0.2) !important;
  --code-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --code-border-dark: 1px dashed hsla(216, 10%, 44.1%, 0.2) !important;
  --code-border-light: 1px dashed hsla(216, 10%, 44.1%, 0.2) !important;
  --code-bracket-background: hsla(216, 12%, 40%, 0.25) !important;
  --code-comment: hsl(216, 12%, 44%) !important;
  --code-function: rgb(255, 232, 139) !important;
  --code-important: rgb(251, 187, 131) !important;
  --code-keyword: rgb(242, 182, 222) !important;
  --code-normal: hsl(216, 18%, 72%) !important;
  --code-operator: rgb(255, 120, 129) !important;
  --code-property: rgb(134, 223, 226) !important;
  --code-punctuation: hsl(216, 18%, 72%) !important;
  --code-radius: 0px !important;
  --code-string: rgb(124, 211, 124) !important;
  --code-tag: rgb(255, 120, 129) !important;
  --code-value: rgb(203, 158, 255) !important;
  --collapse-icon-color: hsl(216, 12%, 44%) !important;
  --collapse-icon-color-collapsed: hsl(216, 25%, 45.2%) !important;
  --color-accent: #0ba360 !important;
  --color-accent-1: hsl(216, 25%, 45.2%) !important;
  --color-accent-1-dark: hsl(216, 25%, 45.2%) !important;
  --color-accent-2: hsl(216, 25%, 52.8%) !important;
  --color-accent-2-dark: hsl(216, 25%, 52.8%) !important;
  --color-accent-3: hsla(216, 10%, 44.1%) !important;
  --color-accent-3-dark: hsla(216, 10%, 44.1%) !important;
  --color-accent-dark: #0ba360 !important;
  --color-accent-hsl: 216,
        25%,
        49% !important;
  --color-accent-hsl-dark: 216,
        25%,
        49% !important;
  --color-activated-file-dark: hsl(216, 24%, 84%) !important;
  --color-activated-tab-header-dark: hsl(216, 24%, 84%) !important;
  --color-activated-tab-header-light: hsl(216, 24%, 84%) !important;
  --color-base-15: #252525 !important;
  --color-base-35: #3F3F3F !important;
  --color-base-40: #555 !important;
  --color-base-50: #666 !important;
  --color-base-60: #999 !important;
  --color-base-70: #bababa !important;
  --color-blue: rgb(137, 189, 244) !important;
  --color-blue-rgb: 137, 189, 244 !important;
  --color-cyan: rgb(134, 223, 226) !important;
  --color-cyan-300: hsl(183, 29%, 62%) !important;
  --color-cyan-533: hsl(191, 90%, 50%) !important;
  --color-cyan-rgb: 134, 223, 226 !important;
  --color-gray-95: hsl(228, 10%, 18%) !important;
  --color-green: rgb(124, 211, 124) !important;
  --color-green-710: hsl(151, 54%, 64%) !important;
  --color-green-rgb: 124, 211, 124 !important;
  --color-magenta-300: hsl(334, 37%, 65%) !important;
  --color-orange: rgb(251, 187, 131) !important;
  --color-orange-rgb: 251, 187, 131 !important;
  --color-pink: rgb(242, 182, 222) !important;
  --color-pink-rgb: 242, 182, 222 !important;
  --color-purple: rgb(203, 158, 255) !important;
  --color-purple-rgb: 203, 158, 255 !important;
  --color-red: rgb(255, 120, 129) !important;
  --color-red-rgb: 255, 120, 129 !important;
  --color-slate-500: hsl(224, 37%, 80%) !important;
  --color-slate-700: hsl(223, 18%, 68%) !important;
  --color-slate-900: hsl(225, 14%, 40%) !important;
  --color-yellow: rgb(255, 232, 139) !important;
  --color-yellow-700: hsl(58, 86%, 66%) !important;
  --color-yellow-900: hsl(59, 81%, 47%) !important;
  --color-yellow-rgb: 255, 232, 139 !important;
  --cursor: pointer !important;
  --dark: hsl(216, 24%, 84%) !important;
  --darkgray: hsl(216, 24%, 84%) !important;
  --divider-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --divider-color-hover: #0ba360 !important;
  --dropdown-background: hsl(216,
            3.57143%,
            20.41667%) !important;
  --dropdown-background-hover: hsl(216,
            3.57143%,
            22.68519%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsla(216, 10%, 44.1%, 0.2), inset 0 0 0 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --embed-border-radius: 0px !important;
  --embed-border-start: 2px solid #0ba360 !important;
  --empty-state-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%20fill%3D%22none%22%20viewBox%3D%220%200%20160%20160%22%3E%3Cg%20fill%3D%22%23000%22%20clip-path%3D%22url(%23a)%22%20opacity%3D%22.75%22%3E%3Cpath%20fill-opacity%3D%22.25%22%20d%3D%22M38.66%20123.48C27.16%20112.55%2020%2097.11%2020%2080c0-5.18.66-10.2%201.89-15l16.77%2058.48Zm70.35%209.05C100.41%20137.29%2090.52%20140%2080%20140c-10.52%200-20.47-2.73-29.08-7.52l19.24-5.51c3%201.03%206.22%201.58%209.57%201.58%203.7%200%207.24-.68%2010.5-1.91l17.97%205.15.81.74Zm29.04-67.75-16.88%2058.86C132.76%20112.71%20140%2097.2%20140%2080c0-5.26-.68-10.36-1.95-15.22Zm-15.41-26.99-39.3-11.27a5.27%205.27%200%200%200-6.51%203.61l-1.34%204.68-8.94-4.95-29.78%208.54C47.68%2027.06%2063.02%2020%2080%2020c16.98%200%2031.77%206.8%2042.64%2017.79Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.05%22%20d%3D%22m70.31%2052.88-.98%203.41-38.26%2010.97-.83-2.89%2040.07-11.49ZM58.37%2078.15a28.777%2028.777%200%200%200-3.3%204.07l-18.21%205.22-.83-2.88%2022.34-6.41Zm-7.78%2014.72c-.21%201.06-.37%202.15-.47%203.25l-9.96%202.86-.82-2.88%2011.25-3.23Zm.24-43.76-23.07%206.61-.83-2.88L50%2046.22l.83%202.89Zm4.9%2067.25-.06.02-9.72%202.79-.83-2.89%208.67-2.48.23-.07c.51.91%201.09%201.79%201.71%202.63Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.15%22%20d%3D%22m72.71%2044.51-1.81.52-4.35-15.17-29.78%208.54-15.74%204.51a5.27%205.27%200%200%200-3.61%206.51L21.89%2065l16.77%2058.48%201.87%206.51c.8%202.79%203.71%204.41%206.5%203.61l3.89-1.12%2019.24-5.51a29.706%2029.706%200%200%201-14.43-10.61l-.06.02-9.72%202.79-.83-2.89%208.67-2.48.23-.07c-.15-.24-.29-.48-.43-.73A29.64%2029.64%200%200%201%2050%2098.82c0-.91.04-1.81.12-2.7l-9.96%202.86-.82-2.88%2011.25-3.23c.79-3.88%202.34-7.48%204.48-10.65l-18.21%205.22-.83-2.88%2022.34-6.41a29.14%2029.14%200%200%201%206.07-4.82l4.89-17.04-38.26%2010.97-.83-2.89%2040.07-11.49%202.4-8.37ZM27.76%2055.72l-.83-2.88L50%2046.22l.83%202.89-23.07%206.61Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.1%22%20d%3D%22m108.2%20131.79-17.97-5.15c2.76-1.04%205.32-2.48%207.61-4.25l10.36%209.4ZM135.84%2058l-11.33-3.25%203.19-11.14%201.16-4.04-6.22-1.78-39.3-11.27a5.27%205.27%200%200%200-6.51%203.61l-1.34%204.68-2.78%209.7-2.4%208.37-.98%203.41-4.89%2017.04c4.47-2.69%209.7-4.24%2015.29-4.24s11.22%201.66%2015.79%204.55a28.65%2028.65%200%200%201%204.74%203.68l23.71%206.8-.82%202.89-19.27-5.52c2.3%203.17%203.97%206.81%204.85%2010.75l11.94%203.42-.83%202.88-10.55-3.03c.12%201.09.18%202.19.18%203.31%200%204.7-1.09%209.14-3.03%2013.09-.22.45-.45.89-.7%201.32l.67.19%208.47%202.43-.83%202.88-6.55-1.88%2010.53%209.55%201.87%201.69%201.27-4.45%2016.88-58.86%201.63-5.68-3.84-1.1ZM82.85%2038.89l.23-.82%2023.07%206.62-.82%202.88-18.83-5.4-2.81-.81-1.43-.41.59-2.06Zm46.09%2027.93L90.4%2055.77l-9.63-2.76-1.82-.52.65-2.27.18-.62%209.64%202.77%2040.34%2011.57-.82%202.88Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20d%3D%22m75.49%2034.81-2.78%209.7-1.81.52-4.35-15.17%208.94%204.95Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.3%22%20d%3D%22m128.86%2039.57-1.16%204.03v.01l-3.19%2011.14L135.84%2058l3.84%201.1-10.82-19.53Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20d%3D%22m122.01%20130.01-7.12%207.85-5.88-5.33-.81-.74-10.36-9.4c1.83-1.39%203.49-3%204.94-4.79.46-.56.9-1.13%201.3-1.73.32-.43.61-.87.88-1.32l.79.71%201.75%201.59%2010.53%209.55%201.87%201.69%202.11%201.92Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20fill-rule%3D%22evenodd%22%20d%3D%22M109.29%2095.51c-.13-1.11-.31-2.2-.56-3.27-.88-3.94-2.55-7.58-4.85-10.75-1.07-1.51-2.28-2.9-3.62-4.17a28.65%2028.65%200%200%200-4.74-3.68c-4.57-2.89-9.99-4.55-15.79-4.55-5.8%200-10.82%201.55-15.29%204.24a29.14%2029.14%200%200%200-6.07%204.82%2028.777%2028.777%200%200%200-3.3%204.07%2029.564%2029.564%200%200%200-4.48%2010.65%2030.145%2030.145%200%200%200-.59%205.95c0%205.13%201.3%209.96%203.59%2014.17.14.26.28.5.43.74.51.91%201.09%201.79%201.71%202.63a29.706%2029.706%200%200%200%2014.43%2010.61c3%201.03%206.22%201.58%209.57%201.58%203.7%200%207.24-.68%2010.5-1.91%202.76-1.04%205.32-2.48%207.61-4.25%201.83-1.39%203.49-3%204.94-4.79.46-.56.9-1.13%201.3-1.73.32-.43.61-.87.88-1.32.28-.43.54-.87.78-1.32.25-.43.48-.87.7-1.32%201.94-3.95%203.03-8.39%203.03-13.09%200-1.12-.06-2.22-.18-3.31Zm-4.98%208.78a24.97%2024.97%200%200%201-4.91%2010.24c-.31.4-.63.78-.97%201.15-.02.02-.04.05-.06.07-.27.3-.55.59-.83.87-.29.28-.58.56-.88.83-.59.55-1.21%201.06-1.86%201.54-.65.49-1.32.94-2.01%201.36l-.42.24s-.01.01-.02.01c-.55.33-1.12.63-1.7.91-1.1.53-2.25.98-3.43%201.35-2.01.62-4.14%201-6.33%201.1-.1.01-.19.01-.29.01-.29.02-.58.02-.87.02-2.61%200-5.12-.4-7.48-1.13a24.94%2024.94%200%200%201-5.57-2.51c-.21-.13-.43-.27-.64-.4-.21-.13-.41-.27-.62-.42-.26-.17-.5-.35-.75-.54-.65-.48-1.27-.99-1.86-1.54-.84-.76-1.62-1.57-2.35-2.44-.69-.81-1.32-1.68-1.9-2.58a25.1%2025.1%200%200%201-3.22-7.35c-.51-2-.78-4.1-.78-6.26%200-1.38.11-2.74.33-4.06.18-1.15.44-2.26.78-3.34%201.28-4.17%203.61-7.87%206.68-10.8.26-.26.52-.5.79-.71a24.966%2024.966%200%200%201%2016.59-6.26c1.39%200%202.74.11%204.07.33%204.28.69%208.2%202.47%2011.46%205.04.85.65%201.66%201.37%202.42%202.14%202.63%202.68%204.68%205.95%205.9%209.6.38%201.09.68%202.21.89%203.37a25.259%2025.259%200%200%201-.16%2010.16Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill-opacity%3D%22.05%22%20fill-rule%3D%22evenodd%22%20d%3D%22M104.47%2094.13c-.21-1.16-.51-2.28-.89-3.37a25.082%2025.082%200%200%200-5.9-9.6c-.76-.77-1.57-1.49-2.42-2.14a24.907%2024.907%200%200%200-11.46-5.04c-1.33-.22-2.68-.33-4.07-.33a24.966%2024.966%200%200%200-16.59%206.26c-.27.21-.53.45-.79.71-3.07%202.93-5.4%206.63-6.68%2010.8-.34%201.08-.6%202.19-.78%203.34-.22%201.32-.33%202.68-.33%204.06%200%202.16.27%204.26.78%206.26a25.1%2025.1%200%200%200%203.22%207.35c.58.9%201.21%201.77%201.9%202.58.73.87%201.51%201.68%202.35%202.44.59.55%201.21%201.06%201.86%201.54.25.19.49.37.75.54.21.15.41.29.62.42.21.13.43.27.64.4a24.94%2024.94%200%200%200%205.57%202.51c2.36.73%204.87%201.13%207.48%201.13.29%200%20.58%200%20.87-.02.1%200%20.19%200%20.29-.01%202.19-.1%204.32-.48%206.33-1.1%201.18-.37%202.33-.82%203.43-1.35.58-.28%201.15-.58%201.7-.91.01%200%20.02%200%20.02-.01l.42-.24c.69-.42%201.36-.87%202.01-1.36.65-.48%201.27-.99%201.86-1.54.3-.27.59-.55.88-.83.28-.28.56-.57.83-.87.02-.02.04-.05.06-.07.34-.37.66-.75.97-1.15.66-.82%201.27-1.68%201.83-2.59a25.174%2025.174%200%200%200%203.68-13.12c0-1.6-.15-3.17-.44-4.69Zm-14.69%209.35h.01l2.41%202.42.14.14c.64.72.98%201.65.95%202.61-.01.33-.06.65-.16.96-.17.6-.49%201.14-.94%201.59-.39.39-.86.69-1.37.87-.37.15-.77.23-1.18.24-.96.03-1.89-.3-2.61-.94l-.54-.54-2.56-2.56-1.83-1.82-2.29-2.29-1.27%201.27-1.78%201.78-.64.64-3.52%203.52c-.08.08-.16.16-.24.22-.3.27-.63.48-.99.64-.46.21-.96.32-1.46.32-.23%200-.46%200-.69-.06h-.02c-.26-.04-.51-.11-.76-.21a3.796%203.796%200%200%201-2.08-2.08c-.19-.48-.28-.97-.28-1.47.01-.51.12-1%20.32-1.47.2-.46.5-.87.86-1.22l.56-.56%202.43-2.43%204.23-4.23-7.22-7.21c-.1-.1-.2-.2-.29-.31-.23-.28-.43-.58-.57-.91-.2-.47-.31-.96-.32-1.47%200-.17.01-.34.04-.5.03-.33.11-.66.24-.97.19-.47.47-.89.83-1.25.35-.36.78-.64%201.25-.83.46-.19.96-.28%201.47-.27.5%200%201%20.11%201.46.31.46.21.88.5%201.23.87l.22.22%202.42%202.42%204.56%204.57%205-5%202.21-2.21c.08-.07.16-.14.24-.2.68-.56%201.53-.85%202.4-.83.99.01%201.92.41%202.62%201.1.4.41.7.89.88%201.42.13.38.21.79.21%201.2a3.7%203.7%200%200%201-1.03%202.64l-7.2%207.21%204.64%204.66h.01Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill-opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20d%3D%22M92.34%20106.04c.64.72.98%201.65.95%202.61-.01.33-.06.65-.16.96-.17.6-.49%201.14-.94%201.59-.39.39-.86.69-1.37.87-.37.15-.77.23-1.18.24-.96.03-1.89-.3-2.61-.94l-.54-.54-2.56-2.56-1.83-1.82-2.29-2.29-1.27%201.27-1.78%201.78-.64.64-3.52%203.52c-.08.08-.16.16-.24.22-.3.27-.63.48-.99.64-.46.21-.96.32-1.46.32-.23%200-.46%200-.69-.06h-.02c-.26-.04-.51-.11-.76-.21a3.796%203.796%200%200%201-2.08-2.08c-.19-.48-.28-.97-.28-1.47.01-.51.12-1%20.32-1.47.2-.46.5-.87.86-1.22l.56-.56%202.43-2.43%204.23-4.23-7.22-7.21c-.1-.1-.2-.2-.29-.31-.23-.28-.43-.58-.57-.91-.2-.47-.31-.96-.32-1.47%200-.17.01-.34.04-.5.03-.33.11-.66.24-.97.19-.47.47-.89.83-1.25.35-.36.78-.64%201.25-.83.46-.19.96-.28%201.47-.27.5%200%201%20.11%201.46.31.46.21.88.5%201.23.87l.22.22%202.42%202.42%204.56%204.57%205-5%202.21-2.21c.08-.07.16-.14.24-.2.68-.56%201.53-.85%202.4-.83.99.01%201.92.41%202.62%201.1.4.41.7.89.88%201.42.13.38.21.79.21%201.2a3.7%203.7%200%200%201-1.03%202.64l-7.2%207.21%204.64%204.66h.01l2.41%202.42.14.14h.01Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20d%3D%22M124.81%20134.66c.07%201.4-.42%202.77-1.36%203.81a5.29%205.29%200%200%201-3.67%201.73c-1.4.07-2.78-.42-3.82-1.36l-1.07-.98%207.12-7.84%201.07.97c1.04.94%201.66%202.26%201.73%203.67Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E") !important;
  --file-header-background: hsl(216, 5%, 13.61111%) !important;
  --file-header-background-focused: hsl(216, 5%, 13.61111%) !important;
  --flair-background: hsl(216,
            3.57143%,
            20.41667%) !important;
  --flair-color: hsl(216, 24%, 84%) !important;
  --footnote-divider-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --footnote-id-color: hsl(216, 18%, 72%) !important;
  --footnote-id-color-no-occurrences: hsl(216, 12%, 44%) !important;
  --footnote-input-background-active: hsla(216, 12%, 40%, 0.25) !important;
  --footnote-radius: 0px !important;
  --frame-right-space: 110px !important;
  --graph-line: #3F3F3F !important;
  --graph-node: hsl(216, 18%, 72%) !important;
  --graph-node-attachment: rgb(255, 232, 139) !important;
  --graph-node-focused: hsl(216, 25%, 45.2%) !important;
  --graph-node-tag: rgb(124, 211, 124) !important;
  --graph-node-unresolved: hsl(216, 12%, 44%) !important;
  --graph-text: hsl(216, 24%, 84%) !important;
  --gray: hsl(216, 18%, 72%) !important;
  --h1-accent-color: rgb(255, 120, 129) !important;
  --h1-color: hsl(59, 81%, 47%) !important;
  --h1-size: 1.5em !important;
  --h2-accent-color: rgb(251, 187, 131) !important;
  --h2-color: hsl(191, 90%, 50%) !important;
  --h2-size: 1.425em !important;
  --h2-weight: 675 !important;
  --h3-accent-color: rgb(255, 232, 139) !important;
  --h3-color: hsl(151, 54%, 64%) !important;
  --h3-size: 1.35em !important;
  --h3-weight: 650 !important;
  --h4-accent-color: rgb(124, 211, 124) !important;
  --h4-color: hsl(224, 37%, 80%) !important;
  --h4-size: 1.275em !important;
  --h4-weight: 625 !important;
  --h5-accent-color: rgb(137, 189, 244) !important;
  --h5-color: hsl(224, 37%, 80%) !important;
  --h5-size: 1.2em !important;
  --h5-weight: 600 !important;
  --h6-accent-color: rgb(203, 158, 255) !important;
  --h6-color: hsl(224, 37%, 80%) !important;
  --h6-size: 1.125em !important;
  --h6-weight: 575 !important;
  --heading-formatting: hsl(216, 12%, 44%) !important;
  --highlight: hsla(216, 12%, 40%, 0.25) !important;
  --hover-indicator-color: #0ba360 !important;
  --hr-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --icon-color: hsl(216, 18%, 72%) !important;
  --icon-color-active: hsl(216, 25%, 45.2%) !important;
  --icon-color-focused: hsl(216, 24%, 84%) !important;
  --icon-color-hover: hsl(216, 18%, 72%) !important;
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --inline-code-normal: rgb(242, 182, 222) !important;
  --inline-title-size: 1.5em !important;
  --input-date-separator: hsl(216, 12%, 44%) !important;
  --input-placeholder-color: hsl(216, 12%, 44%) !important;
  --input-radius-dark: 5px !important;
  --input-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --input-shadow-dark: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --input-shadow-hover: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --input-shadow-hover-dark: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --interactive-accent: #0ba360 !important;
  --interactive-accent-hover: hsl(216, 25%, 45.2%) !important;
  --interactive-accent-hsl: 216,
        25%,
        49% !important;
  --interactive-hover: hsl(216,
            3.57143%,
            22.68519%) !important;
  --interactive-normal: hsl(216,
            3.57143%,
            20.41667%) !important;
  --italic-color: rgb(251, 187, 131) !important;
  --light: hsl(216, 5%, 13.61111%) !important;
  --lightgray: hsl(216, 5%, 12.5%) !important;
  --line-height-customize: 1.5 !important;
  --line-normal-opacity: 0.5 !important;
  --link-color: hsl(216, 25%, 45.2%) !important;
  --link-color-hover: hsl(216, 25%, 52.8%) !important;
  --link-external-color: rgb(137, 189, 244) !important;
  --link-external-color-hover: rgb(137, 189, 244) !important;
  --link-unresolved-color: hsl(216, 25%, 45.2%) !important;
  --link-unresolved-decoration-color: hsla(216,
        25%,
        49%, 0.3) !important;
  --list-bullet-size-alt: 0.15em !important;
  --list-indent: 2em !important;
  --list-marker-color: hsl(216, 12%, 44%) !important;
  --list-marker-color-collapsed: hsl(216, 25%, 45.2%) !important;
  --list-marker-color-hover: hsl(216, 18%, 72%) !important;
  --menu-background: hsl(216, 5%, 12.5%) !important;
  --menu-border-color: hsla(216, 10%, 44.1%, 0.25) !important;
  --menu-radius: 2px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --metadata-divider-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --metadata-input-background-active: hsla(216, 12%, 40%, 0.25) !important;
  --metadata-input-text-color: hsl(216, 24%, 84%) !important;
  --metadata-label-background-active: hsla(216, 12%, 40%, 0.25) !important;
  --metadata-label-text-color: hsl(216, 18%, 72%) !important;
  --metadata-label-text-color-hover: hsl(216, 18%, 72%) !important;
  --metadata-property-background-active: hsla(216, 12%, 40%, 0.25) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsla(216, 10%, 44.1%, 0.3) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(216, 10%, 44.1%, 0.25) !important;
  --mix-blend-mode-on-border-dark: screen !important;
  --mix-blend-mode-on-border-light: normal !important;
  --modal-background: hsl(216, 5%, 13.61111%) !important;
  --modal-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --modal-radius: 4px !important;
  --nav-collapse-icon-color: hsl(216, 12%, 44%) !important;
  --nav-collapse-icon-color-collapsed: hsl(216, 12%, 44%) !important;
  --nav-heading-color: hsl(216, 24%, 84%) !important;
  --nav-heading-color-collapsed: hsl(216, 12%, 44%) !important;
  --nav-heading-color-collapsed-hover: hsl(216, 18%, 72%) !important;
  --nav-heading-color-hover: hsl(216, 24%, 84%) !important;
  --nav-item-background-active: hsla(216, 12%, 40%, 0.25) !important;
  --nav-item-background-hover: hsla(216, 12%, 40%, 0.25) !important;
  --nav-item-background-selected: hsla(216,
        25%,
        49%, 0.15) !important;
  --nav-item-color: hsl(216, 18%, 72%) !important;
  --nav-item-color-active: hsl(216, 24%, 84%) !important;
  --nav-item-color-highlighted: hsl(216, 25%, 45.2%) !important;
  --nav-item-color-hover: hsl(216, 24%, 84%) !important;
  --nav-item-color-selected: hsl(216, 24%, 84%) !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: hsl(216, 12%, 44%) !important;
  --nav-tag-color-active: hsl(216, 18%, 72%) !important;
  --nav-tag-color-hover: hsl(216, 18%, 72%) !important;
  --nav-tag-radius: 0px !important;
  --new-tab-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22none%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23000%22%20fill-opacity%3D%22.26%22%20d%3D%22M51.894%2060.617c-.291%202.162-2.41%203.85-4.515%203.267-3-.825-6.474-2.112-9.6-2.352l-4.79-.362a3.163%203.163%200%200%201-2.042-.95l-8.254-8.483a3.15%203.15%200%200%201-.616-3.49S27.18%2037.053%2027.37%2036.47c.19-.582.886-5.66%201.298-8.388a3.153%203.153%200%200%201%201.011-1.875l9.765-8.767a3.165%203.165%200%200%201%204.597.394l8.202%2010.4c.464.59.702%201.32.706%202.07.009%201.97.172%206.016%201.263%208.621%201.062%202.535%203.01%205.272%204.03%206.619.39.517.45%201.216.12%201.773a138.06%20138.06%200%200%201-4.15%206.54c-1.386%202.063-2.028%204.613-2.318%206.761Z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%230E0E0E%22%20d%3D%22M51.602%2060.187c-.292%202.171-2.417%203.867-4.528%203.282-3.008-.829-6.491-2.122-9.626-2.362l-4.803-.365a3.168%203.168%200%200%201-2.048-.953l-8.277-8.523a3.168%203.168%200%200%201-.618-3.504S26.82%2036.515%2027.01%2035.93c.19-.585.888-5.686%201.301-8.427a3.17%203.17%200%200%201%201.015-1.883l9.79-8.807a3.17%203.17%200%200%201%204.61.396l8.226%2010.448c.465.59.704%201.326.707%202.078.01%201.98.173%206.043%201.268%208.66%201.064%202.547%203.018%205.296%204.04%206.65a1.6%201.6%200%200%201%20.12%201.78%20137.46%20137.46%200%200%201-4.16%206.57c-1.39%202.072-2.034%204.634-2.325%206.792Z%22%2F%3E%3Cpath%20fill%3D%22url(%23b)%22%20d%3D%22M31.489%2060.433c3.844-7.804%203.736-13.395%202.1-17.384-1.505-3.672-4.304-5.988-6.51-7.425-.047.208-.115.41-.202.605l-5.175%2011.532a3.168%203.168%200%200%200%20.618%203.505l8.277%208.523c.26.267.562.484.892.644Z%22%2F%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M47.075%2063.469c2.11.585%204.235-1.11%204.527-3.282.252-1.869.769-4.041%201.806-5.936-2.38-5.121-5.256-7.777-8.41-8.954-3.339-1.246-6.987-.835-10.684.063.826%203.76.331%208.673-2.82%2015.073.358.174.75.28%201.154.309%200%200%202.275.191%204.98.383%202.705.191%206.73%201.59%209.447%202.344Z%22%2F%3E%3Cpath%20fill%3D%22url(%23d)%22%20d%3D%22M41.95%2044.595c1.038.108%202.056.332%203.047.702%203.154%201.177%206.032%203.833%208.411%208.954.16-.292.333-.578.519-.855a138.877%20138.877%200%200%200%204.16-6.57%201.603%201.603%200%200%200-.12-1.78c-1.022-1.354-2.976-4.103-4.04-6.65-1.095-2.617-1.258-6.68-1.267-8.66a3.377%203.377%200%200%200-.708-2.079L43.727%2017.21a3.198%203.198%200%200%200-.136-.162c.603%201.978.562%203.569.19%205.015-.345%201.341-.975%202.558-1.641%203.843-.223.43-.45.87-.672%201.323-.884%201.806-1.68%203.85-1.798%206.592-.118%202.74.444%206.179%202.28%2010.774Z%22%2F%3E%3Cpath%20fill%3D%22url(%23e)%22%20d%3D%22M41.948%2044.594c-1.835-4.595-2.398-8.033-2.28-10.774.118-2.742.915-4.786%201.798-6.592.222-.454.45-.893.673-1.324.665-1.285%201.295-2.501%201.64-3.842.373-1.447.414-3.038-.19-5.017a3.17%203.17%200%200%200-4.472-.232l-9.792%208.807a3.17%203.17%200%200%200-1.014%201.883l-1.192%207.902a3.182%203.182%200%200%201-.04.218c2.206%201.438%205.006%203.754%206.511%207.426.294.717.54%201.486.72%202.31%202.6-.632%205.177-1.022%207.638-.765Z%22%2F%3E%3Cg%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%3E%3Cpath%20fill%3D%22url(%23f)%22%20d%3D%22M39.687%2033.638c-.118%202.72.221%205.839%202.053%2010.424l-.575-.052c-1.643-4.785-2.001-7.238-1.881-9.995.12-2.758%201.01-4.879%201.899-6.688.225-.458.75-1.319.974-1.75.665-1.28%201.108-1.955%201.488-3.124.53-1.633.416-2.406.355-3.176.422%202.783-1.178%205.202-2.388%207.667-.882%201.795-1.807%203.976-1.925%206.694Z%22%2F%3E%3Cpath%20fill%3D%22url(%23g)%22%20d%3D%22M34.131%2043.25c.217.502.422.907.552%201.529l-.48.108c-.2-.726-.354-1.242-.63-1.865-1.654-3.902-4.309-5.91-6.478-7.381%202.62%201.41%205.31%203.616%207.036%207.608Z%22%2F%3E%3Cpath%20fill%3D%22url(%23h)%22%20d%3D%22M34.71%2045.27c.917%204.264-.105%209.683-3.118%2014.95%202.518-5.22%203.74-10.234%202.723-14.866l.396-.085Z%22%2F%3E%3Cpath%20fill%3D%22url(%23i)%22%20d%3D%22M45.11%2044.888c4.94%201.848%206.842%205.908%208.264%209.294-1.756-3.546-4.197-7.462-8.441-8.915-3.23-1.106-5.957-.975-10.619.083l-.104-.462c4.948-1.128%207.535-1.26%2010.9%200Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22b%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-5.44827%20-20.95522%2013.96424%20-3.63065%2031.076%2059.662)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23333%22%20stop-opacity%3D%22.52%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22c%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-9.24927%20-16.1868%2016.18663%20-9.24917%2047.535%2064.623)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23565656%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23151515%22%20stop-opacity%3D%22.71%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22d%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(4.6468%20-35.22462%2026.02364%203.433%2049.53%2050.76)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%237E7E7E%22%20stop-opacity%3D%22.91%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231E1E1E%22%20stop-opacity%3D%22.6%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22e%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(13.14708%20-30.29344%2020.65904%208.96583%2034.531%2046.293)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23D7D7D7%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23414141%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22f%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-3.34584%2015.42817%20-10.40357%20-2.25617%2044.882%2027.895)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.17%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22g%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(8.17858%208.27172%20-17.61805%2017.41967%2026.387%2036.445)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22h%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(80.202%20-7.323%2041.856)%20scale(13.634%2028.9518)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.12%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.35%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22i%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(-152.296%2033.168%2019.977)%20scale(20.7745%2065.377)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.21%22%2F%3E%3Cstop%20offset%3D%22.467%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.19%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.29%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%2239.273%22%20height%3D%2249.867%22%20x%3D%2220.551%22%20y%3D%2215.381%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20mode%3D%22normal%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20result%3D%22effect1_foregroundBlur_3584_482%22%20stdDeviation%3D%22.624%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E") !important;
  --on-border-dark: hsla(216, 10%, 44.1%) !important;
  --on-border-light: hsla(216, 10%, 44.1%) !important;
  --pdf-background: hsl(216, 5%, 13.61111%) !important;
  --pdf-page-background: hsl(216, 5%, 13.61111%) !important;
  --pdf-shadow: 0 0 0 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --pdf-sidebar-background: hsl(216, 5%, 13.61111%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --pill-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --pill-border-color-hover: hsla(216, 10%, 44.1%, 0.25) !important;
  --pill-color: hsl(216, 18%, 72%) !important;
  --pill-color-hover: hsl(216, 24%, 84%) !important;
  --pill-color-remove: hsl(216, 12%, 44%) !important;
  --pill-color-remove-hover: hsl(216, 25%, 45.2%) !important;
  --prompt-background: hsl(216, 5%, 13.61111%) !important;
  --prompt-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --radius-l: 4px !important;
  --radius-m: 2px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, hsl(216,
            3.57143%,
            20.41667%) 65%, transparent) linear-gradient(hsl(216,
            3.57143%,
            20.41667%), color-mix(in srgb, hsl(216,
            3.57143%,
            20.41667%) 65%, transparent)) !important;
  --ribbon-background: hsl(216, 5%, 12.5%) !important;
  --ribbon-background-collapsed: hsl(216, 5%, 13.61111%) !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.15) !important;
  --scrollbar-bg: rgba(255, 255, 255, 0) !important;
  --scrollbar-radius: 4px !important;
  --search-clear-button-color: hsl(216, 18%, 72%) !important;
  --search-icon-color: hsl(216, 18%, 72%) !important;
  --search-result-background: transparent !important;
  --secondary: hsl(216, 25%, 45.2%) !important;
  --setting-group-heading-color: hsl(216, 24%, 84%) !important;
  --setting-items-background: hsl(216, 5%, 15.70513%) !important;
  --setting-items-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --setting-items-radius: 4px !important;
  --shadow-300: rgba(0, 0, 0, 0.15) !important;
  --shadow-activated-file-dark: none !important;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --shadow-activated-tab-header-light: 0px 0px 6px hsla(216, 18%, 80%, 0.4), 0px 0px 2px hsla(216, 18%, 80%, 0.2), 0 0 0 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --slider-thumb-border-color: hsla(216, 10%, 44.1%, 0.25) !important;
  --slider-track-background: hsla(216, 10%, 44.1%, 0.2) !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: transparent !important;
  --status-bar-border-width: 0 !important;
  --status-bar-radius: 2px 0 0 0 !important;
  --status-bar-text-color: hsl(216, 18%, 72%) !important;
  --suggestion-background: hsl(216, 5%, 13.61111%) !important;
  --sync-avatar-color-1: rgb(255, 120, 129) !important;
  --sync-avatar-color-2: rgb(251, 187, 131) !important;
  --sync-avatar-color-3: rgb(255, 232, 139) !important;
  --sync-avatar-color-4: rgb(124, 211, 124) !important;
  --sync-avatar-color-5: rgb(134, 223, 226) !important;
  --sync-avatar-color-6: rgb(137, 189, 244) !important;
  --sync-avatar-color-7: rgb(203, 158, 255) !important;
  --sync-avatar-color-8: rgb(242, 182, 222) !important;
  --tab-background-active: transparent !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: hsla(216, 10%, 44.1%, 0.25) !important;
  --tab-outline-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: hsl(216, 5%, 12.5%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(216, 5%, 12.5%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #0ba360 !important;
  --tab-text-color: hsl(216, 12%, 44%) !important;
  --tab-text-color-active: hsl(216, 18%, 72%) !important;
  --tab-text-color-focused: hsl(216, 18%, 72%) !important;
  --tab-text-color-focused-active: hsl(216, 18%, 72%) !important;
  --tab-text-color-focused-active-current: hsl(216, 24%, 84%) !important;
  --tab-text-color-focused-highlighted: hsl(216, 25%, 45.2%) !important;
  --table-add-button-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --table-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --table-drag-handle-background-active: #0ba360 !important;
  --table-drag-handle-color: hsl(216, 12%, 44%) !important;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --table-header-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --table-header-color: hsl(216, 24%, 84%) !important;
  --table-selection: hsla(216,
        25%,
        49%, 0.1) !important;
  --table-selection-border-color: #0ba360 !important;
  --table-width: 88cqw !important;
  --tag-background: hsla(216,
        25%,
        49%, 0.1) !important;
  --tag-background-hover: hsla(216,
        25%,
        49%, 0.2) !important;
  --tag-border-color: hsla(216,
        25%,
        49%, 0.15) !important;
  --tag-border-color-hover: hsla(216,
        25%,
        49%, 0.15) !important;
  --tag-color: hsl(216, 25%, 45.2%) !important;
  --tag-color-hover: hsl(216, 25%, 45.2%) !important;
  --tertiary: hsl(216, 25%, 52.8%) !important;
  --text-accent: hsl(216, 25%, 45.2%) !important;
  --text-accent-hover: hsl(216, 25%, 52.8%) !important;
  --text-error: rgb(255, 120, 129) !important;
  --text-faint: hsl(216, 12%, 44%) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: hsl(216, 18%, 72%) !important;
  --text-normal: hsl(216, 24%, 84%) !important;
  --text-selection: hsla(216,
        25%,
        49%, 0.25) !important;
  --text-success: rgb(124, 211, 124) !important;
  --text-warning: rgb(251, 187, 131) !important;
  --textHighlight: hsla(216, 12%, 40%, 0.25) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --titlebar-text-color: hsl(216, 18%, 72%) !important;
  --titlebar-text-color-focused: hsl(216, 24%, 84%) !important;
  --toggle-thumb-color-dark: white !important;
  --toggle-thumb-enabled-color: white !important;
  --toggle-thumb-enabled-color-dark: white !important;
  --toggle-thumb-enabled-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.3), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px hsla(216,
        25%,
        49%, 0.5), inset 0px 4px 4px #FFFFFF !important;
  --toggle-thumb-enabled-shadow-dark: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.3), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px hsla(216,
        25%,
        49%, 0.5), inset 0px 4px 4px #FFFFFF !important;
  --toggle-thumb-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.6), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px rgba(0, 0, 0, 0.25), inset 0px 4px 4px #FFFFFF !important;
  --toggle-thumb-shadow-dark: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.6), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px rgba(0, 0, 0, 0.25), inset 0px 4px 4px #FFFFFF !important;
  --toggle-track-color: hsla(216, 10%, 44.1%, 0.25) !important;
  --toggle-track-color-dark: hsla(216, 10%, 44.1%, 0.25) !important;
  --toggle-track-enabled-color: #0ba360 !important;
  --toggle-track-enabled-color-dark: #0ba360 !important;
  --toggle-track-hovered-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --toggle-track-hovered-shadow-dark: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --toggle-track-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --toggle-track-shadow-dark: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(216, 10%, 44.1%, 0.2) !important;
  --vault-name-color: hsl(216, 18%, 72%) !important;
  --vault-name-font-size: 13px !important;
  --vault-profile-color: hsl(216, 24%, 84%) !important;
  --vault-profile-color-hover: hsl(216, 24%, 84%) !important;
  --window-border: 1px solid hsl(225, 11%, 36%) !important;
  --workspace-background-translucent: hsla(216,
            4.62963%,
            17.01389%, 0.6) !important;
  --workspace-divider-color: hsla(216, 10%, 44.1%, 0.2) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(204, 212, 224);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(204, 212, 224);
}

html body .bases-table thead th {
  border-color: rgba(101, 110, 124, 0.2);
  color: rgb(204, 212, 224);
}

html body .canvas-node {
  border-color: rgb(204, 212, 224);
}

html body .canvas-node-content {
  color: rgb(204, 212, 224);
}

html body .canvas-node-file {
  color: rgb(204, 212, 224);
}

html body .canvas-node-group {
  border-color: rgb(204, 212, 224);
}

html body .canvas-sidebar {
  background-color: rgb(30, 32, 33);
  border-color: rgb(204, 212, 224);
  box-shadow: rgba(0, 0, 0, 0.32) 0px 4px 8px -4px, rgba(0, 0, 0, 0.32) 0px 1px 2px 0px, rgba(0, 0, 0, 0.32) 0px 0px 0px 1px, rgba(0, 0, 0, 0.12) 0px 0px 1px 1px, rgba(255, 255, 255, 0.16) 0px 1px 0.75px 0px inset, rgba(0, 0, 0, 0.16) 0px -2px 0.75px 0px inset;
}

html body .note-properties {
  border-color: rgba(101, 110, 124, 0.2);
}

html body .note-properties-key {
  color: rgb(171, 181, 196);
}

html body .note-properties-row {
  border-color: rgb(171, 181, 196);
}

html body .note-properties-tags {
  background-color: rgba(94, 119, 156, 0.1);
  color: rgb(86, 109, 144);
}

html body .note-properties-value {
  color: rgb(171, 181, 196);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(204, 212, 224);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(101, 110, 124, 0.2);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(101, 110, 124, 0.2);
  color: rgb(204, 212, 224);
}

html body div#quartz-root {
  background-color: rgb(41, 43, 45);
  color: rgb(204, 212, 224);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 120, 129);
  outline: rgb(255, 120, 129) none 0px;
  text-decoration-color: rgb(255, 120, 129);
}

html body .page article p > em, html em {
  color: rgb(251, 187, 131);
  outline: rgb(251, 187, 131) none 0px;
  text-decoration-color: rgb(251, 187, 131);
}

html body .page article p > i, html i {
  color: rgb(251, 187, 131);
  outline: rgb(251, 187, 131) none 0px;
  text-decoration-color: rgb(251, 187, 131);
}

html body .page article p > strong, html strong {
  color: rgb(255, 120, 129);
  outline: rgb(255, 120, 129) none 0px;
  text-decoration-color: rgb(255, 120, 129);
}

html body .text-highlight {
  color: rgb(204, 212, 224);
  outline: rgb(204, 212, 224) none 0px;
  text-decoration-color: rgb(204, 212, 224);
}

html body del {
  color: rgb(204, 212, 224);
  outline: rgb(204, 212, 224) none 0px;
  text-decoration-color: rgb(204, 212, 224);
}

html body h1.article-title {
  color: rgb(204, 212, 224);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(99, 110, 126);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(124, 211, 124);
  border-color: rgb(124, 211, 124);
}

html body p {
  color: rgb(171, 181, 196);
  outline: rgb(171, 181, 196) none 0px;
  text-decoration-color: rgb(171, 181, 196);
}`,
    links: `html body a.external, html footer a {
  color: rgb(137, 189, 244);
  outline: rgb(137, 189, 244) none 0px;
  text-decoration-color: rgb(137, 189, 244);
  transition: opacity 0.15s ease-in-out;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(86, 109, 144);
  outline: rgb(86, 109, 144) none 0px;
  text-decoration-color: rgb(86, 109, 144);
  transition: opacity 0.15s ease-in-out;
}

html body a.internal.broken {
  color: rgb(86, 109, 144);
  outline: rgb(86, 109, 144) none 0px;
  text-decoration: underline rgba(94, 119, 156, 0.3);
  text-decoration-color: rgba(94, 119, 156, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html body dd {
  color: rgb(204, 212, 224);
}

html body dt {
  color: rgb(204, 212, 224);
}

html body ol > li {
  color: rgb(204, 212, 224);
}

html body ol.overflow {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
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
  color: rgb(99, 110, 126);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}

html body table {
  color: rgb(204, 212, 224);
  width: 663px;
}

html body td {
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-left-color: rgba(101, 110, 124, 0.2);
  border-right-color: rgba(101, 110, 124, 0.2);
  border-top-color: rgba(101, 110, 124, 0.2);
  color: rgb(204, 212, 224);
}

html body th {
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-left-color: rgba(101, 110, 124, 0.2);
  border-right-color: rgba(101, 110, 124, 0.2);
  border-top-color: rgba(101, 110, 124, 0.2);
  color: rgb(204, 212, 224);
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
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
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
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
  color: rgb(204, 212, 224);
}

html body pre > code > [data-line] {
  border-left-color: rgb(255, 232, 139);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 232, 139);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 232, 139);
  border-left-color: rgb(255, 232, 139);
  border-right-color: rgb(255, 232, 139);
  border-top-color: rgb(255, 232, 139);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
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
}

html body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
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
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
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
  background-color: rgb(38, 40, 42);
  border-bottom-color: rgb(171, 181, 196);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(171, 181, 196);
  border-right-color: rgb(171, 181, 196);
  border-top-color: rgb(171, 181, 196);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
}

html body .transclude-inner {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(99, 110, 126);
  border-left-color: rgb(99, 110, 126);
  border-right-color: rgb(99, 110, 126);
  border-top-color: rgb(99, 110, 126);
  transition: box-shadow 0.3s cubic-bezier(0, 0.55, 0.45, 1), filter 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(134, 223, 226);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 34, 36);
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
  color: rgb(137, 189, 244);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(137, 189, 244);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 134, 223, 226;
  background-color: rgba(134, 223, 226, 0.1);
  border-bottom-color: rgba(134, 223, 226, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(134, 223, 226, 0.25);
  border-right-color: rgba(134, 223, 226, 0.25);
  border-top-color: rgba(134, 223, 226, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 10, 100, 250;
  background-color: rgba(10, 100, 250, 0.1);
  border-bottom-color: rgba(10, 100, 250, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(10, 100, 250, 0.25);
  border-right-color: rgba(10, 100, 250, 0.25);
  border-top-color: rgba(10, 100, 250, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 255, 120, 129;
  background-color: rgba(255, 120, 129, 0.1);
  border-bottom-color: rgba(255, 120, 129, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 120, 129, 0.25);
  border-right-color: rgba(255, 120, 129, 0.25);
  border-top-color: rgba(255, 120, 129, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] {
  --callout-color: 203, 158, 255;
  background-color: rgba(203, 158, 255, 0.1);
  border-bottom-color: rgba(203, 158, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(203, 158, 255, 0.25);
  border-right-color: rgba(203, 158, 255, 0.25);
  border-top-color: rgba(203, 158, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 255, 120, 129;
  background-color: rgba(255, 120, 129, 0.1);
  border-bottom-color: rgba(255, 120, 129, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 120, 129, 0.25);
  border-right-color: rgba(255, 120, 129, 0.25);
  border-top-color: rgba(255, 120, 129, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] {
  --callout-color: 137, 189, 244;
  background-color: rgba(137, 189, 244, 0.1);
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  --callout-color: 137, 189, 244;
  background-color: rgba(137, 189, 244, 0.1);
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] {
  --callout-color: 251, 187, 131;
  background-color: rgba(251, 187, 131, 0.1);
  border-bottom-color: rgba(251, 187, 131, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 187, 131, 0.25);
  border-right-color: rgba(251, 187, 131, 0.25);
  border-top-color: rgba(251, 187, 131, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  --callout-color: 124, 211, 124;
  background-color: rgba(124, 211, 124, 0.1);
  border-bottom-color: rgba(124, 211, 124, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(124, 211, 124, 0.25);
  border-right-color: rgba(124, 211, 124, 0.25);
  border-top-color: rgba(124, 211, 124, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 134, 223, 226;
  background-color: rgba(134, 223, 226, 0.1);
  border-bottom-color: rgba(134, 223, 226, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(134, 223, 226, 0.25);
  border-right-color: rgba(134, 223, 226, 0.25);
  border-top-color: rgba(134, 223, 226, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 137, 189, 244;
  background-color: rgba(137, 189, 244, 0.1);
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 251, 187, 131;
  background-color: rgba(251, 187, 131, 0.1);
  border-bottom-color: rgba(251, 187, 131, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 187, 131, 0.25);
  border-right-color: rgba(251, 187, 131, 0.25);
  border-top-color: rgba(251, 187, 131, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  color: rgb(204, 212, 224);
}

html body .search > .search-container > .search-space {
  background-color: rgba(41, 43, 45, 0.6);
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
  background-color: rgba(90, 100, 114, 0.25);
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
  background-color: rgba(90, 100, 114, 0.25);
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
  background-color: rgba(90, 100, 114, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 212, 224);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(94, 119, 156, 0.1);
  border-bottom-color: rgba(94, 119, 156, 0.15);
  border-left-color: rgba(94, 119, 156, 0.15);
  border-right-color: rgba(94, 119, 156, 0.15);
  border-top-color: rgba(94, 119, 156, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(86, 109, 144);
}

html body h1 {
  color: rgb(217, 214, 23);
}

html body h2 {
  color: rgb(13, 200, 242);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(204, 212, 224);
}

html body h3 {
  color: rgb(114, 213, 165);
}

html body h4 {
  color: rgb(185, 195, 223);
}

html body h5 {
  color: rgb(185, 195, 223);
}

html body h6 {
  color: rgb(185, 195, 223);
}

html body hr {
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-left-color: rgba(101, 110, 124, 0.2);
  border-right-color: rgba(101, 110, 124, 0.2);
  border-top-color: rgba(101, 110, 124, 0.2);
}`,
    scrollbars: `html body .callout {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body ::-webkit-scrollbar {
  background: rgb(41, 43, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 43, 45);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(41, 43, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 43, 45);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(41, 43, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 43, 45);
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(41, 43, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 43, 45);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(41, 43, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 43, 45);
}

html body ::-webkit-scrollbar-track {
  background: rgb(41, 43, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 43, 45);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(171, 181, 196);
  cursor: pointer;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(171, 181, 196);
  cursor: pointer;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(204, 212, 224);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 181, 196);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(171, 181, 196);
  border-right-color: rgb(171, 181, 196);
  border-top-color: rgb(171, 181, 196);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(171, 181, 196);
  cursor: pointer;
}`,
    footer: `html body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 2px;
  border-top-width: 0px;
  color: rgb(101, 110, 124);
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
  color: rgb(171, 181, 196);
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
  color: rgb(171, 181, 196);
}

html body ul.section-ul {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(101, 110, 124);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(101, 110, 124);
  border-right-color: rgb(101, 110, 124);
  border-top-color: rgb(101, 110, 124);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(101, 110, 124);
  cursor: pointer;
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
  color: rgb(99, 110, 126);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
  color: rgb(204, 212, 224);
}

html body .metadata {
  border-bottom-color: rgba(101, 110, 124, 0.2);
  border-left-color: rgba(101, 110, 124, 0.2);
  border-right-color: rgba(101, 110, 124, 0.2);
  border-top-color: rgba(101, 110, 124, 0.2);
  color: rgb(171, 181, 196);
}

html body .metadata-properties {
  border-bottom-color: rgb(171, 181, 196);
  border-left-color: rgb(171, 181, 196);
  border-right-color: rgb(171, 181, 196);
  border-top-color: rgb(171, 181, 196);
  color: rgb(171, 181, 196);
}

html body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html body .page-header h2.page-title {
  color: rgb(204, 212, 224);
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
  color: rgb(171, 181, 196);
}

html body kbd {
  background-color: rgba(90, 100, 114, 0.25);
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
  background-color: rgba(94, 119, 156, 0.1);
  border-bottom-color: rgba(94, 119, 156, 0.15);
  border-left-color: rgba(94, 119, 156, 0.15);
  border-right-color: rgba(94, 119, 156, 0.15);
  border-top-color: rgba(94, 119, 156, 0.15);
  color: rgb(86, 109, 144);
}`,
  },
  light: {},
};
