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
  --background-activated-file-dark: rgba(90, 100, 114, 0.25) !important;
  --background-activated-tab-header-dark: rgba(94, 119, 156, 0.15) !important;
  --background-activated-tab-header-light: rgb(34, 35, 37) !important;
  --background-alt-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --background-alt-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --background-mod-left-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-left-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-left-CSS-blend-mode-dark: normal !important;
  --background-mod-left-CSS-blend-mode-light: normal !important;
  --background-mod-left-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-left-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-left-split: rgb(34, 35, 37) !important;
  --background-mod-left-split-dark: rgb(34, 35, 37) !important;
  --background-mod-left-split-light: rgb(34, 35, 37) !important;
  --background-mod-right-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-right-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-right-CSS-blend-mode-dark: normal !important;
  --background-mod-right-CSS-blend-mode-light: normal !important;
  --background-mod-right-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-right-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-right-split: rgb(34, 35, 37) !important;
  --background-mod-right-split-dark: rgb(34, 35, 37) !important;
  --background-mod-right-split-light: rgb(34, 35, 37) !important;
  --background-mod-root-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-root-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-root-CSS-blend-mode-dark: normal !important;
  --background-mod-root-CSS-blend-mode-light: normal !important;
  --background-mod-root-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-root-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-root-split: rgb(34, 35, 37) !important;
  --background-mod-root-split-dark: rgb(34, 35, 37) !important;
  --background-mod-root-split-light: rgb(34, 35, 37) !important;
  --background-modifier-active-hover: rgba(94, 119, 156, 0.15) !important;
  --background-modifier-border: rgba(101, 110, 123, 0.2) !important;
  --background-modifier-border-focus: rgba(101, 110, 123, 0.3) !important;
  --background-modifier-border-hover: rgba(101, 110, 123, 0.25) !important;
  --background-modifier-error: rgb(255, 120, 129) !important;
  --background-modifier-error-hover: rgb(255, 120, 129) !important;
  --background-modifier-error-rgb: 255, 120, 129 !important;
  --background-modifier-form-field: transparent !important;
  --background-modifier-form-field-hover: transparent !important;
  --background-modifier-hover: rgba(90, 100, 114, 0.25) !important;
  --background-modifier-success: rgb(124, 211, 124) !important;
  --background-modifier-success-rgb: 124, 211, 124 !important;
  --background-primary: rgb(34, 35, 37) !important;
  --background-primary-alt: rgb(39, 40, 43) !important;
  --background-secondary: rgb(31, 33, 35) !important;
  --background-secondary-alt: hsl(216,
            5%,
            20%) !important;
  --background-tertiary: hsl(216,
            5%,
            17%) !important;
  --background-underlying: hsl(216,
            5%,
            17%) !important;
  --background-underlying-CSS-blend-mode-dark: soft-light, luminosity, hue, luminosity, hard-light !important;
  --background-underlying-CSS-blend-mode-light: overlay, color-burn !important;
  --background-underlying-CSS-dark: linear-gradient(317deg, rgb(112, 55, 205) 0%, rgb(29, 12, 32) 19%, rgb(101, 31, 113) 19%, rgb(101, 31, 113) 33%), radial-gradient(100% 100% at 90% 9%, rgb(29, 12, 32) 0%, rgb(29, 12, 32) 100%), linear-gradient(109deg, rgb(104, 178, 248) 0%, rgb(80, 110, 229) 15%, rgb(112, 55, 205) 34%, rgb(104, 178, 248) 54%, rgb(104, 178, 248) 65%), radial-gradient(100% 100% at 20% 45%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), radial-gradient(100% 100% at 90% 27%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), linear-gradient(339deg, rgb(101, 31, 113) 0%, rgb(104, 178, 248) 12%, rgb(101, 31, 113) 14%, rgb(80, 110, 229) 19%, rgb(101, 31, 113) 20%, rgb(29, 12, 32) 30%) !important;
  --background-underlying-CSS-light: radial-gradient(100% 100% at 13% 50%, rgb(90, 109, 237) 0%, rgb(224, 218, 247) 100%), linear-gradient(6deg, rgb(235, 242, 252) 0%, rgb(90, 109, 237) 5%, rgb(166, 126, 241) 7%, rgb(224, 218, 247) 11%, rgb(90, 109, 237) 16%), radial-gradient(100% 100% at 60% 71%, rgb(224, 218, 247) 0%, rgb(219, 244, 255) 100%), linear-gradient(97deg, rgb(90, 109, 237) 0%, rgb(90, 109, 237) 23%, rgb(90, 109, 237) 53%), linear-gradient(351deg, rgb(235, 242, 252) 0%, rgb(219, 244, 255) 1%, rgb(235, 242, 252) 6%, rgb(224, 218, 247) 10%, rgb(166, 126, 241) 13%, rgb(235, 242, 252) 29%), radial-gradient(100% 100% at 10% 32%, rgb(90, 109, 237) 0%, rgb(219, 244, 255) 100%), radial-gradient(100% 100% at 35% 63%, rgb(224, 218, 247) 0%, rgb(224, 218, 247) 100%) !important;
  --background-underlying-dark: hsl(216,
            5%,
            17%) !important;
  --background-underlying-light: hsl(216,
            4.62963%,
            17.01389%) !important;
  --bases-cards-background: rgb(34, 35, 37) !important;
  --bases-cards-cover-background: rgb(39, 40, 43) !important;
  --bases-cards-radius: 2px !important;
  --bases-cards-shadow: 0 0 0 1px rgba(101, 110, 123, 0.2) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgba(101, 110, 123, 0.25) !important;
  --bases-embed-border-color: rgba(101, 110, 123, 0.2) !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: rgb(171, 181, 196) !important;
  --bases-table-border-color: rgba(101, 110, 123, 0.2) !important;
  --bases-table-cell-background-active: rgb(34, 35, 37) !important;
  --bases-table-cell-background-disabled: rgb(39, 40, 43) !important;
  --bases-table-cell-background-selected: rgba(94, 119, 156, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgba(101, 110, 123, 0.3) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0ba360 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: rgb(39, 40, 43) !important;
  --bases-table-header-background: rgb(34, 35, 37) !important;
  --bases-table-header-background-hover: rgba(90, 100, 114, 0.25) !important;
  --bases-table-header-color: rgb(171, 181, 196) !important;
  --bases-table-summary-background: rgb(34, 35, 37) !important;
  --bases-table-summary-background-hover: rgba(90, 100, 114, 0.25) !important;
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --blockquote-border-color: #0ba360 !important;
  --blockquote-border-thickness: 3px !important;
  --blur-background: color-mix(in srgb, hsl(216,
            4%,
            20%) 65%, transparent) linear-gradient(hsl(216,
            4%,
            20%), color-mix(in srgb, hsl(216,
            4%,
            20%) 65%, transparent)) !important;
  --bold-color: rgb(255, 120, 129) !important;
  --bold-weight: 600 !important;
  --border-900: rgb(67, 72, 81) !important;
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
  --canvas-card-label-color: rgb(99, 110, 126) !important;
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
  --card-shadow-dark: 0px 0px 0px 1px rgba(101, 110, 123, 0.2) !important;
  --card-shadow-light: 0px 0px 6px rgba(195, 202, 213, 0.4), 0px 0px 2px rgba(195, 202, 213, 0.2), 0 0 0 1px rgba(101, 110, 123, 0.2) !important;
  --caret-color: rgb(204, 212, 224) !important;
  --checkbox-border-color: rgb(99, 110, 126) !important;
  --checkbox-border-color-hover: rgb(99, 110, 126) !important;
  --checkbox-color: rgb(124, 211, 124) !important;
  --checkbox-color-hover: rgb(124, 211, 124) !important;
  --checkbox-marker-color: rgb(34, 35, 37) !important;
  --checklist-done-color: rgb(99, 110, 126) !important;
  --clickable-icon-radius: 6px !important;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-border: 1px dashed rgba(101, 110, 123, 0.2) !important;
  --code-border-color: rgba(101, 110, 123, 0.2) !important;
  --code-border-dark: 1px dashed rgba(101, 110, 123, 0.2) !important;
  --code-border-light: 1px dashed rgba(101, 110, 123, 0.2) !important;
  --code-bracket-background: rgba(90, 100, 114, 0.25) !important;
  --code-comment: rgb(99, 110, 126) !important;
  --code-function: rgb(255, 232, 139) !important;
  --code-important: rgb(251, 187, 131) !important;
  --code-keyword: rgb(242, 182, 222) !important;
  --code-normal: rgb(171, 181, 196) !important;
  --code-operator: rgb(255, 120, 129) !important;
  --code-property: rgb(134, 223, 226) !important;
  --code-punctuation: rgb(171, 181, 196) !important;
  --code-radius: 0px !important;
  --code-string: rgb(124, 211, 124) !important;
  --code-tag: rgb(255, 120, 129) !important;
  --code-value: rgb(203, 158, 255) !important;
  --collapse-icon-color: rgb(99, 110, 126) !important;
  --collapse-icon-color-collapsed: rgb(86, 109, 143) !important;
  --color-accent: #0ba360 !important;
  --color-accent-1: rgb(86, 109, 143) !important;
  --color-accent-1-dark: rgb(86, 109, 143) !important;
  --color-accent-2: rgb(105, 129, 165) !important;
  --color-accent-2-dark: rgb(105, 129, 165) !important;
  --color-accent-3: rgba(101, 110, 123, 0) !important;
  --color-accent-3-dark: rgba(101, 110, 123, 0) !important;
  --color-accent-dark: #0ba360 !important;
  --color-accent-hsl: 216,
        25%,
        49% !important;
  --color-accent-hsl-dark: 216,
        25%,
        49% !important;
  --color-activated-file-dark: rgb(204, 212, 224) !important;
  --color-activated-tab-header-dark: rgb(204, 212, 224) !important;
  --color-activated-tab-header-light: rgb(204, 212, 224) !important;
  --color-base-15: #252525 !important;
  --color-base-35: #3F3F3F !important;
  --color-base-40: #555 !important;
  --color-base-50: #666 !important;
  --color-base-60: #999 !important;
  --color-base-70: #bababa !important;
  --color-blue: rgb(137, 189, 244) !important;
  --color-blue-rgb: 137, 189, 244 !important;
  --color-cyan: rgb(134, 223, 226) !important;
  --color-cyan-300: rgb(130, 183, 186) !important;
  --color-cyan-533: rgb(13, 200, 242) !important;
  --color-cyan-rgb: 134, 223, 226 !important;
  --color-gray-95: rgb(41, 43, 50) !important;
  --color-green: rgb(124, 211, 124) !important;
  --color-green-710: rgb(114, 213, 165) !important;
  --color-green-rgb: 124, 211, 124 !important;
  --color-magenta-300: rgb(199, 133, 161) !important;
  --color-orange: rgb(251, 187, 131) !important;
  --color-orange-rgb: 251, 187, 131 !important;
  --color-pink: rgb(242, 182, 222) !important;
  --color-pink-rgb: 242, 182, 222 !important;
  --color-purple: rgb(203, 158, 255) !important;
  --color-purple-rgb: 203, 158, 255 !important;
  --color-red: rgb(255, 120, 129) !important;
  --color-red-rgb: 255, 120, 129 !important;
  --color-slate-500: rgb(185, 195, 223) !important;
  --color-slate-700: rgb(159, 167, 188) !important;
  --color-slate-900: rgb(88, 95, 116) !important;
  --color-yellow: rgb(255, 232, 139) !important;
  --color-yellow-700: rgb(243, 238, 94) !important;
  --color-yellow-900: rgb(217, 214, 23) !important;
  --color-yellow-rgb: 255, 232, 139 !important;
  --cursor: pointer !important;
  --dark: rgb(204, 212, 224) !important;
  --darkgray: rgb(204, 212, 224) !important;
  --divider-color: rgba(101, 110, 123, 0.2) !important;
  --divider-color-hover: #0ba360 !important;
  --dropdown-background: hsl(216,
            4%,
            20%) !important;
  --dropdown-background-hover: hsl(216,
            3.57143%,
            22.68519%) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(101, 110, 123, 0.2), inset 0 0 0 1px rgba(101, 110, 123, 0.2) !important;
  --embed-border-radius: 0px !important;
  --embed-border-start: 2px solid #0ba360 !important;
  --empty-state-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%20fill%3D%22none%22%20viewBox%3D%220%200%20160%20160%22%3E%3Cg%20fill%3D%22%23000%22%20clip-path%3D%22url(%23a)%22%20opacity%3D%22.75%22%3E%3Cpath%20fill-opacity%3D%22.25%22%20d%3D%22M38.66%20123.48C27.16%20112.55%2020%2097.11%2020%2080c0-5.18.66-10.2%201.89-15l16.77%2058.48Zm70.35%209.05C100.41%20137.29%2090.52%20140%2080%20140c-10.52%200-20.47-2.73-29.08-7.52l19.24-5.51c3%201.03%206.22%201.58%209.57%201.58%203.7%200%207.24-.68%2010.5-1.91l17.97%205.15.81.74Zm29.04-67.75-16.88%2058.86C132.76%20112.71%20140%2097.2%20140%2080c0-5.26-.68-10.36-1.95-15.22Zm-15.41-26.99-39.3-11.27a5.27%205.27%200%200%200-6.51%203.61l-1.34%204.68-8.94-4.95-29.78%208.54C47.68%2027.06%2063.02%2020%2080%2020c16.98%200%2031.77%206.8%2042.64%2017.79Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.05%22%20d%3D%22m70.31%2052.88-.98%203.41-38.26%2010.97-.83-2.89%2040.07-11.49ZM58.37%2078.15a28.777%2028.777%200%200%200-3.3%204.07l-18.21%205.22-.83-2.88%2022.34-6.41Zm-7.78%2014.72c-.21%201.06-.37%202.15-.47%203.25l-9.96%202.86-.82-2.88%2011.25-3.23Zm.24-43.76-23.07%206.61-.83-2.88L50%2046.22l.83%202.89Zm4.9%2067.25-.06.02-9.72%202.79-.83-2.89%208.67-2.48.23-.07c.51.91%201.09%201.79%201.71%202.63Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.15%22%20d%3D%22m72.71%2044.51-1.81.52-4.35-15.17-29.78%208.54-15.74%204.51a5.27%205.27%200%200%200-3.61%206.51L21.89%2065l16.77%2058.48%201.87%206.51c.8%202.79%203.71%204.41%206.5%203.61l3.89-1.12%2019.24-5.51a29.706%2029.706%200%200%201-14.43-10.61l-.06.02-9.72%202.79-.83-2.89%208.67-2.48.23-.07c-.15-.24-.29-.48-.43-.73A29.64%2029.64%200%200%201%2050%2098.82c0-.91.04-1.81.12-2.7l-9.96%202.86-.82-2.88%2011.25-3.23c.79-3.88%202.34-7.48%204.48-10.65l-18.21%205.22-.83-2.88%2022.34-6.41a29.14%2029.14%200%200%201%206.07-4.82l4.89-17.04-38.26%2010.97-.83-2.89%2040.07-11.49%202.4-8.37ZM27.76%2055.72l-.83-2.88L50%2046.22l.83%202.89-23.07%206.61Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.1%22%20d%3D%22m108.2%20131.79-17.97-5.15c2.76-1.04%205.32-2.48%207.61-4.25l10.36%209.4ZM135.84%2058l-11.33-3.25%203.19-11.14%201.16-4.04-6.22-1.78-39.3-11.27a5.27%205.27%200%200%200-6.51%203.61l-1.34%204.68-2.78%209.7-2.4%208.37-.98%203.41-4.89%2017.04c4.47-2.69%209.7-4.24%2015.29-4.24s11.22%201.66%2015.79%204.55a28.65%2028.65%200%200%201%204.74%203.68l23.71%206.8-.82%202.89-19.27-5.52c2.3%203.17%203.97%206.81%204.85%2010.75l11.94%203.42-.83%202.88-10.55-3.03c.12%201.09.18%202.19.18%203.31%200%204.7-1.09%209.14-3.03%2013.09-.22.45-.45.89-.7%201.32l.67.19%208.47%202.43-.83%202.88-6.55-1.88%2010.53%209.55%201.87%201.69%201.27-4.45%2016.88-58.86%201.63-5.68-3.84-1.1ZM82.85%2038.89l.23-.82%2023.07%206.62-.82%202.88-18.83-5.4-2.81-.81-1.43-.41.59-2.06Zm46.09%2027.93L90.4%2055.77l-9.63-2.76-1.82-.52.65-2.27.18-.62%209.64%202.77%2040.34%2011.57-.82%202.88Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20d%3D%22m75.49%2034.81-2.78%209.7-1.81.52-4.35-15.17%208.94%204.95Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.3%22%20d%3D%22m128.86%2039.57-1.16%204.03v.01l-3.19%2011.14L135.84%2058l3.84%201.1-10.82-19.53Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20d%3D%22m122.01%20130.01-7.12%207.85-5.88-5.33-.81-.74-10.36-9.4c1.83-1.39%203.49-3%204.94-4.79.46-.56.9-1.13%201.3-1.73.32-.43.61-.87.88-1.32l.79.71%201.75%201.59%2010.53%209.55%201.87%201.69%202.11%201.92Z%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20fill-rule%3D%22evenodd%22%20d%3D%22M109.29%2095.51c-.13-1.11-.31-2.2-.56-3.27-.88-3.94-2.55-7.58-4.85-10.75-1.07-1.51-2.28-2.9-3.62-4.17a28.65%2028.65%200%200%200-4.74-3.68c-4.57-2.89-9.99-4.55-15.79-4.55-5.8%200-10.82%201.55-15.29%204.24a29.14%2029.14%200%200%200-6.07%204.82%2028.777%2028.777%200%200%200-3.3%204.07%2029.564%2029.564%200%200%200-4.48%2010.65%2030.145%2030.145%200%200%200-.59%205.95c0%205.13%201.3%209.96%203.59%2014.17.14.26.28.5.43.74.51.91%201.09%201.79%201.71%202.63a29.706%2029.706%200%200%200%2014.43%2010.61c3%201.03%206.22%201.58%209.57%201.58%203.7%200%207.24-.68%2010.5-1.91%202.76-1.04%205.32-2.48%207.61-4.25%201.83-1.39%203.49-3%204.94-4.79.46-.56.9-1.13%201.3-1.73.32-.43.61-.87.88-1.32.28-.43.54-.87.78-1.32.25-.43.48-.87.7-1.32%201.94-3.95%203.03-8.39%203.03-13.09%200-1.12-.06-2.22-.18-3.31Zm-4.98%208.78a24.97%2024.97%200%200%201-4.91%2010.24c-.31.4-.63.78-.97%201.15-.02.02-.04.05-.06.07-.27.3-.55.59-.83.87-.29.28-.58.56-.88.83-.59.55-1.21%201.06-1.86%201.54-.65.49-1.32.94-2.01%201.36l-.42.24s-.01.01-.02.01c-.55.33-1.12.63-1.7.91-1.1.53-2.25.98-3.43%201.35-2.01.62-4.14%201-6.33%201.1-.1.01-.19.01-.29.01-.29.02-.58.02-.87.02-2.61%200-5.12-.4-7.48-1.13a24.94%2024.94%200%200%201-5.57-2.51c-.21-.13-.43-.27-.64-.4-.21-.13-.41-.27-.62-.42-.26-.17-.5-.35-.75-.54-.65-.48-1.27-.99-1.86-1.54-.84-.76-1.62-1.57-2.35-2.44-.69-.81-1.32-1.68-1.9-2.58a25.1%2025.1%200%200%201-3.22-7.35c-.51-2-.78-4.1-.78-6.26%200-1.38.11-2.74.33-4.06.18-1.15.44-2.26.78-3.34%201.28-4.17%203.61-7.87%206.68-10.8.26-.26.52-.5.79-.71a24.966%2024.966%200%200%201%2016.59-6.26c1.39%200%202.74.11%204.07.33%204.28.69%208.2%202.47%2011.46%205.04.85.65%201.66%201.37%202.42%202.14%202.63%202.68%204.68%205.95%205.9%209.6.38%201.09.68%202.21.89%203.37a25.259%2025.259%200%200%201-.16%2010.16Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill-opacity%3D%22.05%22%20fill-rule%3D%22evenodd%22%20d%3D%22M104.47%2094.13c-.21-1.16-.51-2.28-.89-3.37a25.082%2025.082%200%200%200-5.9-9.6c-.76-.77-1.57-1.49-2.42-2.14a24.907%2024.907%200%200%200-11.46-5.04c-1.33-.22-2.68-.33-4.07-.33a24.966%2024.966%200%200%200-16.59%206.26c-.27.21-.53.45-.79.71-3.07%202.93-5.4%206.63-6.68%2010.8-.34%201.08-.6%202.19-.78%203.34-.22%201.32-.33%202.68-.33%204.06%200%202.16.27%204.26.78%206.26a25.1%2025.1%200%200%200%203.22%207.35c.58.9%201.21%201.77%201.9%202.58.73.87%201.51%201.68%202.35%202.44.59.55%201.21%201.06%201.86%201.54.25.19.49.37.75.54.21.15.41.29.62.42.21.13.43.27.64.4a24.94%2024.94%200%200%200%205.57%202.51c2.36.73%204.87%201.13%207.48%201.13.29%200%20.58%200%20.87-.02.1%200%20.19%200%20.29-.01%202.19-.1%204.32-.48%206.33-1.1%201.18-.37%202.33-.82%203.43-1.35.58-.28%201.15-.58%201.7-.91.01%200%20.02%200%20.02-.01l.42-.24c.69-.42%201.36-.87%202.01-1.36.65-.48%201.27-.99%201.86-1.54.3-.27.59-.55.88-.83.28-.28.56-.57.83-.87.02-.02.04-.05.06-.07.34-.37.66-.75.97-1.15.66-.82%201.27-1.68%201.83-2.59a25.174%2025.174%200%200%200%203.68-13.12c0-1.6-.15-3.17-.44-4.69Zm-14.69%209.35h.01l2.41%202.42.14.14c.64.72.98%201.65.95%202.61-.01.33-.06.65-.16.96-.17.6-.49%201.14-.94%201.59-.39.39-.86.69-1.37.87-.37.15-.77.23-1.18.24-.96.03-1.89-.3-2.61-.94l-.54-.54-2.56-2.56-1.83-1.82-2.29-2.29-1.27%201.27-1.78%201.78-.64.64-3.52%203.52c-.08.08-.16.16-.24.22-.3.27-.63.48-.99.64-.46.21-.96.32-1.46.32-.23%200-.46%200-.69-.06h-.02c-.26-.04-.51-.11-.76-.21a3.796%203.796%200%200%201-2.08-2.08c-.19-.48-.28-.97-.28-1.47.01-.51.12-1%20.32-1.47.2-.46.5-.87.86-1.22l.56-.56%202.43-2.43%204.23-4.23-7.22-7.21c-.1-.1-.2-.2-.29-.31-.23-.28-.43-.58-.57-.91-.2-.47-.31-.96-.32-1.47%200-.17.01-.34.04-.5.03-.33.11-.66.24-.97.19-.47.47-.89.83-1.25.35-.36.78-.64%201.25-.83.46-.19.96-.28%201.47-.27.5%200%201%20.11%201.46.31.46.21.88.5%201.23.87l.22.22%202.42%202.42%204.56%204.57%205-5%202.21-2.21c.08-.07.16-.14.24-.2.68-.56%201.53-.85%202.4-.83.99.01%201.92.41%202.62%201.1.4.41.7.89.88%201.42.13.38.21.79.21%201.2a3.7%203.7%200%200%201-1.03%202.64l-7.2%207.21%204.64%204.66h.01Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill-opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20d%3D%22M92.34%20106.04c.64.72.98%201.65.95%202.61-.01.33-.06.65-.16.96-.17.6-.49%201.14-.94%201.59-.39.39-.86.69-1.37.87-.37.15-.77.23-1.18.24-.96.03-1.89-.3-2.61-.94l-.54-.54-2.56-2.56-1.83-1.82-2.29-2.29-1.27%201.27-1.78%201.78-.64.64-3.52%203.52c-.08.08-.16.16-.24.22-.3.27-.63.48-.99.64-.46.21-.96.32-1.46.32-.23%200-.46%200-.69-.06h-.02c-.26-.04-.51-.11-.76-.21a3.796%203.796%200%200%201-2.08-2.08c-.19-.48-.28-.97-.28-1.47.01-.51.12-1%20.32-1.47.2-.46.5-.87.86-1.22l.56-.56%202.43-2.43%204.23-4.23-7.22-7.21c-.1-.1-.2-.2-.29-.31-.23-.28-.43-.58-.57-.91-.2-.47-.31-.96-.32-1.47%200-.17.01-.34.04-.5.03-.33.11-.66.24-.97.19-.47.47-.89.83-1.25.35-.36.78-.64%201.25-.83.46-.19.96-.28%201.47-.27.5%200%201%20.11%201.46.31.46.21.88.5%201.23.87l.22.22%202.42%202.42%204.56%204.57%205-5%202.21-2.21c.08-.07.16-.14.24-.2.68-.56%201.53-.85%202.4-.83.99.01%201.92.41%202.62%201.1.4.41.7.89.88%201.42.13.38.21.79.21%201.2a3.7%203.7%200%200%201-1.03%202.64l-7.2%207.21%204.64%204.66h.01l2.41%202.42.14.14h.01Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill-opacity%3D%22.35%22%20d%3D%22M124.81%20134.66c.07%201.4-.42%202.77-1.36%203.81a5.29%205.29%200%200%201-3.67%201.73c-1.4.07-2.78-.42-3.82-1.36l-1.07-.98%207.12-7.84%201.07.97c1.04.94%201.66%202.26%201.73%203.67Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E") !important;
  --file-header-background: rgb(34, 35, 37) !important;
  --file-header-background-focused: rgb(34, 35, 37) !important;
  --flair-background: hsl(216,
            4%,
            20%) !important;
  --flair-color: rgb(204, 212, 224) !important;
  --footnote-divider-color: rgba(101, 110, 123, 0.2) !important;
  --footnote-id-color: rgb(171, 181, 196) !important;
  --footnote-id-color-no-occurrences: rgb(99, 110, 126) !important;
  --footnote-input-background-active: rgba(90, 100, 114, 0.25) !important;
  --footnote-radius: 0px !important;
  --frame-right-space: 110px !important;
  --graph-line: #3F3F3F !important;
  --graph-node: rgb(171, 181, 196) !important;
  --graph-node-attachment: rgb(255, 232, 139) !important;
  --graph-node-focused: rgb(86, 109, 143) !important;
  --graph-node-tag: rgb(124, 211, 124) !important;
  --graph-node-unresolved: rgb(99, 110, 126) !important;
  --graph-text: rgb(204, 212, 224) !important;
  --gray: rgb(171, 181, 196) !important;
  --h1-accent-color: rgb(255, 120, 129) !important;
  --h1-color: rgb(217, 214, 23) !important;
  --h1-size: 1.5em !important;
  --h2-accent-color: rgb(251, 187, 131) !important;
  --h2-color: rgb(13, 200, 242) !important;
  --h2-size: 1.425em !important;
  --h2-weight: 675 !important;
  --h3-accent-color: rgb(255, 232, 139) !important;
  --h3-color: rgb(114, 213, 165) !important;
  --h3-size: 1.35em !important;
  --h3-weight: 650 !important;
  --h4-accent-color: rgb(124, 211, 124) !important;
  --h4-color: rgb(185, 195, 223) !important;
  --h4-size: 1.275em !important;
  --h4-weight: 625 !important;
  --h5-accent-color: rgb(137, 189, 244) !important;
  --h5-color: rgb(185, 195, 223) !important;
  --h5-size: 1.2em !important;
  --h5-weight: 600 !important;
  --h6-accent-color: rgb(203, 158, 255) !important;
  --h6-color: rgb(185, 195, 223) !important;
  --h6-size: 1.125em !important;
  --h6-weight: 575 !important;
  --heading-formatting: rgb(99, 110, 126) !important;
  --highlight: rgba(90, 100, 114, 0.25) !important;
  --hover-indicator-color: #0ba360 !important;
  --hr-color: rgba(101, 110, 123, 0.2) !important;
  --icon-color: rgb(171, 181, 196) !important;
  --icon-color-active: rgb(86, 109, 143) !important;
  --icon-color-focused: rgb(204, 212, 224) !important;
  --icon-color-hover: rgb(171, 181, 196) !important;
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --inline-code-normal: rgb(242, 182, 222) !important;
  --inline-title-size: 1.5em !important;
  --input-date-separator: rgb(99, 110, 126) !important;
  --input-placeholder-color: rgb(99, 110, 126) !important;
  --input-radius-dark: 5px !important;
  --input-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --input-shadow-dark: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --input-shadow-hover: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --input-shadow-hover-dark: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.16), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --interactive-accent: #0ba360 !important;
  --interactive-accent-hover: rgb(86, 109, 143) !important;
  --interactive-accent-hsl: 216,
        25%,
        49% !important;
  --interactive-hover: hsl(216,
            4%,
            23%) !important;
  --interactive-normal: hsl(216,
            4%,
            20%) !important;
  --italic-color: rgb(251, 187, 131) !important;
  --light: rgb(34, 35, 37) !important;
  --lightgray: rgb(31, 33, 35) !important;
  --line-height-customize: 1.5 !important;
  --line-normal-opacity: 0.5 !important;
  --link-color: rgb(86, 109, 143) !important;
  --link-color-hover: rgb(105, 129, 165) !important;
  --link-external-color: rgb(137, 189, 244) !important;
  --link-external-color-hover: rgb(137, 189, 244) !important;
  --link-unresolved-color: rgb(86, 109, 143) !important;
  --link-unresolved-decoration-color: rgba(94, 119, 156, 0.3) !important;
  --list-bullet-size-alt: 0.15em !important;
  --list-indent: 2em !important;
  --list-marker-color: rgb(99, 110, 126) !important;
  --list-marker-color-collapsed: rgb(86, 109, 143) !important;
  --list-marker-color-hover: rgb(171, 181, 196) !important;
  --menu-background: rgb(31, 33, 35) !important;
  --menu-border-color: rgba(101, 110, 123, 0.25) !important;
  --menu-radius: 2px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-border-color: rgba(101, 110, 123, 0.2) !important;
  --metadata-divider-color: rgba(101, 110, 123, 0.2) !important;
  --metadata-input-background-active: rgba(90, 100, 114, 0.25) !important;
  --metadata-input-text-color: rgb(204, 212, 224) !important;
  --metadata-label-background-active: rgba(90, 100, 114, 0.25) !important;
  --metadata-label-text-color: rgb(171, 181, 196) !important;
  --metadata-label-text-color-hover: rgb(171, 181, 196) !important;
  --metadata-property-background-active: rgba(90, 100, 114, 0.25) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgba(101, 110, 123, 0.3) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(101, 110, 123, 0.25) !important;
  --mix-blend-mode-on-border-dark: screen !important;
  --mix-blend-mode-on-border-light: normal !important;
  --modal-background: rgb(34, 35, 37) !important;
  --modal-border-color: rgba(101, 110, 123, 0.2) !important;
  --modal-radius: 4px !important;
  --nav-collapse-icon-color: rgb(99, 110, 126) !important;
  --nav-collapse-icon-color-collapsed: rgb(99, 110, 126) !important;
  --nav-heading-color: rgb(204, 212, 224) !important;
  --nav-heading-color-collapsed: rgb(99, 110, 126) !important;
  --nav-heading-color-collapsed-hover: rgb(171, 181, 196) !important;
  --nav-heading-color-hover: rgb(204, 212, 224) !important;
  --nav-item-background-active: rgba(90, 100, 114, 0.25) !important;
  --nav-item-background-hover: rgba(90, 100, 114, 0.25) !important;
  --nav-item-background-selected: rgba(94, 119, 156, 0.15) !important;
  --nav-item-color: rgb(171, 181, 196) !important;
  --nav-item-color-active: rgb(204, 212, 224) !important;
  --nav-item-color-highlighted: rgb(86, 109, 143) !important;
  --nav-item-color-hover: rgb(204, 212, 224) !important;
  --nav-item-color-selected: rgb(204, 212, 224) !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: rgb(99, 110, 126) !important;
  --nav-tag-color-active: rgb(171, 181, 196) !important;
  --nav-tag-color-hover: rgb(171, 181, 196) !important;
  --nav-tag-radius: 0px !important;
  --new-tab-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22none%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23000%22%20fill-opacity%3D%22.26%22%20d%3D%22M51.894%2060.617c-.291%202.162-2.41%203.85-4.515%203.267-3-.825-6.474-2.112-9.6-2.352l-4.79-.362a3.163%203.163%200%200%201-2.042-.95l-8.254-8.483a3.15%203.15%200%200%201-.616-3.49S27.18%2037.053%2027.37%2036.47c.19-.582.886-5.66%201.298-8.388a3.153%203.153%200%200%201%201.011-1.875l9.765-8.767a3.165%203.165%200%200%201%204.597.394l8.202%2010.4c.464.59.702%201.32.706%202.07.009%201.97.172%206.016%201.263%208.621%201.062%202.535%203.01%205.272%204.03%206.619.39.517.45%201.216.12%201.773a138.06%20138.06%200%200%201-4.15%206.54c-1.386%202.063-2.028%204.613-2.318%206.761Z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%230E0E0E%22%20d%3D%22M51.602%2060.187c-.292%202.171-2.417%203.867-4.528%203.282-3.008-.829-6.491-2.122-9.626-2.362l-4.803-.365a3.168%203.168%200%200%201-2.048-.953l-8.277-8.523a3.168%203.168%200%200%201-.618-3.504S26.82%2036.515%2027.01%2035.93c.19-.585.888-5.686%201.301-8.427a3.17%203.17%200%200%201%201.015-1.883l9.79-8.807a3.17%203.17%200%200%201%204.61.396l8.226%2010.448c.465.59.704%201.326.707%202.078.01%201.98.173%206.043%201.268%208.66%201.064%202.547%203.018%205.296%204.04%206.65a1.6%201.6%200%200%201%20.12%201.78%20137.46%20137.46%200%200%201-4.16%206.57c-1.39%202.072-2.034%204.634-2.325%206.792Z%22%2F%3E%3Cpath%20fill%3D%22url(%23b)%22%20d%3D%22M31.489%2060.433c3.844-7.804%203.736-13.395%202.1-17.384-1.505-3.672-4.304-5.988-6.51-7.425-.047.208-.115.41-.202.605l-5.175%2011.532a3.168%203.168%200%200%200%20.618%203.505l8.277%208.523c.26.267.562.484.892.644Z%22%2F%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M47.075%2063.469c2.11.585%204.235-1.11%204.527-3.282.252-1.869.769-4.041%201.806-5.936-2.38-5.121-5.256-7.777-8.41-8.954-3.339-1.246-6.987-.835-10.684.063.826%203.76.331%208.673-2.82%2015.073.358.174.75.28%201.154.309%200%200%202.275.191%204.98.383%202.705.191%206.73%201.59%209.447%202.344Z%22%2F%3E%3Cpath%20fill%3D%22url(%23d)%22%20d%3D%22M41.95%2044.595c1.038.108%202.056.332%203.047.702%203.154%201.177%206.032%203.833%208.411%208.954.16-.292.333-.578.519-.855a138.877%20138.877%200%200%200%204.16-6.57%201.603%201.603%200%200%200-.12-1.78c-1.022-1.354-2.976-4.103-4.04-6.65-1.095-2.617-1.258-6.68-1.267-8.66a3.377%203.377%200%200%200-.708-2.079L43.727%2017.21a3.198%203.198%200%200%200-.136-.162c.603%201.978.562%203.569.19%205.015-.345%201.341-.975%202.558-1.641%203.843-.223.43-.45.87-.672%201.323-.884%201.806-1.68%203.85-1.798%206.592-.118%202.74.444%206.179%202.28%2010.774Z%22%2F%3E%3Cpath%20fill%3D%22url(%23e)%22%20d%3D%22M41.948%2044.594c-1.835-4.595-2.398-8.033-2.28-10.774.118-2.742.915-4.786%201.798-6.592.222-.454.45-.893.673-1.324.665-1.285%201.295-2.501%201.64-3.842.373-1.447.414-3.038-.19-5.017a3.17%203.17%200%200%200-4.472-.232l-9.792%208.807a3.17%203.17%200%200%200-1.014%201.883l-1.192%207.902a3.182%203.182%200%200%201-.04.218c2.206%201.438%205.006%203.754%206.511%207.426.294.717.54%201.486.72%202.31%202.6-.632%205.177-1.022%207.638-.765Z%22%2F%3E%3Cg%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%3E%3Cpath%20fill%3D%22url(%23f)%22%20d%3D%22M39.687%2033.638c-.118%202.72.221%205.839%202.053%2010.424l-.575-.052c-1.643-4.785-2.001-7.238-1.881-9.995.12-2.758%201.01-4.879%201.899-6.688.225-.458.75-1.319.974-1.75.665-1.28%201.108-1.955%201.488-3.124.53-1.633.416-2.406.355-3.176.422%202.783-1.178%205.202-2.388%207.667-.882%201.795-1.807%203.976-1.925%206.694Z%22%2F%3E%3Cpath%20fill%3D%22url(%23g)%22%20d%3D%22M34.131%2043.25c.217.502.422.907.552%201.529l-.48.108c-.2-.726-.354-1.242-.63-1.865-1.654-3.902-4.309-5.91-6.478-7.381%202.62%201.41%205.31%203.616%207.036%207.608Z%22%2F%3E%3Cpath%20fill%3D%22url(%23h)%22%20d%3D%22M34.71%2045.27c.917%204.264-.105%209.683-3.118%2014.95%202.518-5.22%203.74-10.234%202.723-14.866l.396-.085Z%22%2F%3E%3Cpath%20fill%3D%22url(%23i)%22%20d%3D%22M45.11%2044.888c4.94%201.848%206.842%205.908%208.264%209.294-1.756-3.546-4.197-7.462-8.441-8.915-3.23-1.106-5.957-.975-10.619.083l-.104-.462c4.948-1.128%207.535-1.26%2010.9%200Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22b%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-5.44827%20-20.95522%2013.96424%20-3.63065%2031.076%2059.662)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23333%22%20stop-opacity%3D%22.52%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22c%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-9.24927%20-16.1868%2016.18663%20-9.24917%2047.535%2064.623)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23565656%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23151515%22%20stop-opacity%3D%22.71%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22d%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(4.6468%20-35.22462%2026.02364%203.433%2049.53%2050.76)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%237E7E7E%22%20stop-opacity%3D%22.91%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231E1E1E%22%20stop-opacity%3D%22.6%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22e%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(13.14708%20-30.29344%2020.65904%208.96583%2034.531%2046.293)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23D7D7D7%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23414141%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22f%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-3.34584%2015.42817%20-10.40357%20-2.25617%2044.882%2027.895)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.17%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22g%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(8.17858%208.27172%20-17.61805%2017.41967%2026.387%2036.445)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22h%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(80.202%20-7.323%2041.856)%20scale(13.634%2028.9518)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.12%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.35%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22i%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(-152.296%2033.168%2019.977)%20scale(20.7745%2065.377)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.21%22%2F%3E%3Cstop%20offset%3D%22.467%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.19%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.29%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%2239.273%22%20height%3D%2249.867%22%20x%3D%2220.551%22%20y%3D%2215.381%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20mode%3D%22normal%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20result%3D%22effect1_foregroundBlur_3584_482%22%20stdDeviation%3D%22.624%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E") !important;
  --on-border-dark: rgba(101, 110, 123, 0) !important;
  --on-border-light: rgba(101, 110, 123, 0) !important;
  --pdf-background: rgb(34, 35, 37) !important;
  --pdf-page-background: rgb(34, 35, 37) !important;
  --pdf-shadow: 0 0 0 1px rgba(101, 110, 123, 0.2) !important;
  --pdf-sidebar-background: rgb(34, 35, 37) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(101, 110, 123, 0.2) !important;
  --pill-border-color: rgba(101, 110, 123, 0.2) !important;
  --pill-border-color-hover: rgba(101, 110, 123, 0.25) !important;
  --pill-color: rgb(171, 181, 196) !important;
  --pill-color-hover: rgb(204, 212, 224) !important;
  --pill-color-remove: rgb(99, 110, 126) !important;
  --pill-color-remove-hover: rgb(86, 109, 143) !important;
  --prompt-background: rgb(34, 35, 37) !important;
  --prompt-border-color: rgba(101, 110, 123, 0.2) !important;
  --radius-l: 4px !important;
  --radius-m: 2px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, hsl(216,
            4%,
            20%) 65%, transparent) linear-gradient(hsl(216,
            4%,
            20%), color-mix(in srgb, hsl(216,
            4%,
            20%) 65%, transparent)) !important;
  --ribbon-background: rgb(31, 33, 35) !important;
  --ribbon-background-collapsed: rgb(34, 35, 37) !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.15) !important;
  --scrollbar-bg: rgba(255, 255, 255, 0) !important;
  --scrollbar-radius: 4px !important;
  --search-clear-button-color: rgb(171, 181, 196) !important;
  --search-icon-color: rgb(171, 181, 196) !important;
  --search-result-background: transparent !important;
  --secondary: rgb(86, 109, 143) !important;
  --setting-group-heading-color: rgb(204, 212, 224) !important;
  --setting-items-background: rgb(39, 40, 43) !important;
  --setting-items-border-color: rgba(101, 110, 123, 0.2) !important;
  --setting-items-radius: 4px !important;
  --shadow-300: rgba(0, 0, 0, 0.15) !important;
  --shadow-activated-file-dark: none !important;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px rgba(101, 110, 123, 0.2) !important;
  --shadow-activated-tab-header-light: 0px 0px 6px rgba(195, 202, 213, 0.4), 0px 0px 2px rgba(195, 202, 213, 0.2), 0 0 0 1px rgba(101, 110, 123, 0.2) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --slider-thumb-border-color: rgba(101, 110, 123, 0.25) !important;
  --slider-track-background: rgba(101, 110, 123, 0.2) !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: transparent !important;
  --status-bar-border-width: 0 !important;
  --status-bar-radius: 2px 0 0 0 !important;
  --status-bar-text-color: rgb(171, 181, 196) !important;
  --suggestion-background: rgb(34, 35, 37) !important;
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
  --tab-divider-color: rgba(101, 110, 123, 0.25) !important;
  --tab-outline-color: rgba(101, 110, 123, 0.2) !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: rgb(31, 33, 35) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(31, 33, 35), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #0ba360 !important;
  --tab-text-color: rgb(99, 110, 126) !important;
  --tab-text-color-active: rgb(171, 181, 196) !important;
  --tab-text-color-focused: rgb(171, 181, 196) !important;
  --tab-text-color-focused-active: rgb(171, 181, 196) !important;
  --tab-text-color-focused-active-current: rgb(204, 212, 224) !important;
  --tab-text-color-focused-highlighted: rgb(86, 109, 143) !important;
  --table-add-button-border-color: rgba(101, 110, 123, 0.2) !important;
  --table-border-color: rgba(101, 110, 123, 0.2) !important;
  --table-drag-handle-background-active: #0ba360 !important;
  --table-drag-handle-color: rgb(99, 110, 126) !important;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --table-header-border-color: rgba(101, 110, 123, 0.2) !important;
  --table-header-color: rgb(204, 212, 224) !important;
  --table-selection: rgba(94, 119, 156, 0.1) !important;
  --table-selection-border-color: #0ba360 !important;
  --table-width: 88cqw !important;
  --tag-background: rgba(94, 119, 156, 0.1) !important;
  --tag-background-hover: rgba(94, 119, 156, 0.2) !important;
  --tag-border-color: rgba(94, 119, 156, 0.15) !important;
  --tag-border-color-hover: rgba(94, 119, 156, 0.15) !important;
  --tag-color: rgb(86, 109, 143) !important;
  --tag-color-hover: rgb(86, 109, 143) !important;
  --tertiary: rgb(105, 129, 165) !important;
  --text-accent: rgb(86, 109, 143) !important;
  --text-accent-hover: rgb(105, 129, 165) !important;
  --text-error: rgb(255, 120, 129) !important;
  --text-faint: rgb(99, 110, 126) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: rgb(171, 181, 196) !important;
  --text-normal: rgb(204, 212, 224) !important;
  --text-selection: rgba(94, 119, 156, 0.25) !important;
  --text-success: rgb(124, 211, 124) !important;
  --text-warning: rgb(251, 187, 131) !important;
  --textHighlight: rgba(90, 100, 114, 0.25) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: rgba(101, 110, 123, 0.2) !important;
  --titlebar-text-color: rgb(171, 181, 196) !important;
  --titlebar-text-color-focused: rgb(204, 212, 224) !important;
  --toggle-thumb-color-dark: white !important;
  --toggle-thumb-enabled-color: white !important;
  --toggle-thumb-enabled-color-dark: white !important;
  --toggle-thumb-enabled-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.3), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px rgba(94, 119, 156, 0.5), inset 0px 4px 4px #FFFFFF !important;
  --toggle-thumb-enabled-shadow-dark: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.3), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px rgba(94, 119, 156, 0.5), inset 0px 4px 4px #FFFFFF !important;
  --toggle-thumb-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.6), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px rgba(0, 0, 0, 0.25), inset 0px 4px 4px #FFFFFF !important;
  --toggle-thumb-shadow-dark: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.6), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 6px rgba(0, 0, 0, 0.25), inset 0px 4px 4px #FFFFFF !important;
  --toggle-track-color: rgba(101, 110, 123, 0.25) !important;
  --toggle-track-color-dark: rgba(101, 110, 123, 0.25) !important;
  --toggle-track-enabled-color: #0ba360 !important;
  --toggle-track-enabled-color-dark: #0ba360 !important;
  --toggle-track-hovered-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px rgba(101, 110, 123, 0.2) !important;
  --toggle-track-hovered-shadow-dark: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px rgba(101, 110, 123, 0.2) !important;
  --toggle-track-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px rgba(101, 110, 123, 0.2) !important;
  --toggle-track-shadow-dark: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px rgba(101, 110, 123, 0.2) !important;
  --vault-name-color: rgb(171, 181, 196) !important;
  --vault-name-font-size: 13px !important;
  --vault-profile-color: rgb(204, 212, 224) !important;
  --vault-profile-color-hover: rgb(204, 212, 224) !important;
  --window-border: 1px solid rgb(82, 87, 102) !important;
  --workspace-background-translucent: hsla(216,
            5%,
            17%, 0.6) !important;
  --workspace-divider-color: rgba(101, 110, 123, 0.2) !important;
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
  text-decoration: rgb(255, 120, 129);
  text-decoration-color: rgb(255, 120, 129);
}

html body .page article p > em, html em {
  color: rgb(251, 187, 131);
  outline: rgb(251, 187, 131) none 0px;
  text-decoration: rgb(251, 187, 131);
  text-decoration-color: rgb(251, 187, 131);
}

html body .page article p > i, html i {
  color: rgb(251, 187, 131);
  outline: rgb(251, 187, 131) none 0px;
  text-decoration: rgb(251, 187, 131);
  text-decoration-color: rgb(251, 187, 131);
}

html body .page article p > strong, html strong {
  color: rgb(255, 120, 129);
  outline: rgb(255, 120, 129) none 0px;
  text-decoration: rgb(255, 120, 129);
  text-decoration-color: rgb(255, 120, 129);
}

html body .text-highlight {
  color: rgb(204, 212, 224);
  outline: rgb(204, 212, 224) none 0px;
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body del {
  color: rgb(204, 212, 224);
  outline: rgb(204, 212, 224) none 0px;
  text-decoration: line-through rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body p {
  color: rgb(171, 181, 196);
  outline: rgb(171, 181, 196) none 0px;
  text-decoration: rgb(171, 181, 196);
  text-decoration-color: rgb(171, 181, 196);
}`,
    links: `html body a.external, html footer a {
  color: rgb(137, 189, 244);
  outline: rgb(137, 189, 244) none 0px;
  text-decoration: underline rgb(137, 189, 244);
  text-decoration-color: rgb(137, 189, 244);
  transition: opacity 0.15s ease-in-out;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(86, 109, 144);
  outline: rgb(86, 109, 144) none 0px;
  text-decoration: underline rgb(86, 109, 144);
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
  text-decoration: rgb(99, 110, 126);
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
  border-bottom-color: rgb(204, 212, 224);
  border-left-color: rgb(204, 212, 224);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
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
  border-left-color: rgb(11, 163, 96);
  border-right-color: rgb(204, 212, 224);
  border-top-color: rgb(204, 212, 224);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(99, 110, 126);
  text-decoration: line-through rgb(99, 110, 126);
  text-decoration-color: rgb(99, 110, 126);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(99, 110, 126);
  border-left-color: rgb(99, 110, 126);
  border-right-color: rgb(99, 110, 126);
  border-top-color: rgb(99, 110, 126);
  transition: box-shadow 0.3s cubic-bezier(0, 0.55, 0.45, 1), filter 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(99, 110, 126);
  text-decoration: line-through 1px rgb(99, 110, 126);
  text-decoration-color: rgb(99, 110, 126);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(204, 212, 224);
  text-decoration: rgb(204, 212, 224);
  text-decoration-color: rgb(204, 212, 224);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
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
  text-decoration: rgb(204, 212, 224);
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
  text-decoration: rgb(171, 181, 196);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(171, 181, 196);
  cursor: pointer;
  text-decoration: rgb(171, 181, 196);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(171, 181, 196);
  cursor: pointer;
  text-decoration: rgb(171, 181, 196);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
  cursor: pointer;
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
  text-decoration: rgb(101, 110, 124);
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
  text-decoration: rgb(171, 181, 196);
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
  text-decoration: rgb(171, 181, 196);
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
  text-decoration: underline dotted rgb(204, 212, 224);
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
}`,
  },
  light: {},
};
