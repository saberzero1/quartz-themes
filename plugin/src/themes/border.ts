import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "border", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-dark-h: 232 !important;
  --accent-dark-l: 60% !important;
  --accent-dark-s: 40% !important;
  --accent-h: 232 !important;
  --accent-l: 60% !important;
  --accent-s: 40% !important;
  --anim-duration-fast: 150ms !important;
  --anim-duration-moderate: 300ms !important;
  --anim-duration-slow: 600ms !important;
  --anim-duration-superfast: 75ms !important;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-speed: 1 !important;
  --background-activated-file-dark: hsla(232, 12%, 40%, 0.25) !important;
  --background-activated-tab-header-dark: hsla(232,
        40%,
        60%, 0.15) !important;
  --background-activated-tab-header-light: hsl(232, 8%, 16.66667%) !important;
  --background-alt-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --background-alt-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --background-mod-left-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-left-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-left-CSS-blend-mode-dark: normal !important;
  --background-mod-left-CSS-blend-mode-light: normal !important;
  --background-mod-left-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-left-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-left-split: hsl(232, 8%, 16.66667%) !important;
  --background-mod-left-split-dark: hsl(232, 8%, 16.66667%) !important;
  --background-mod-left-split-light: hsl(232, 8%, 16.66667%) !important;
  --background-mod-right-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-right-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-right-CSS-blend-mode-dark: normal !important;
  --background-mod-right-CSS-blend-mode-light: normal !important;
  --background-mod-right-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-right-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-right-split: hsl(232, 8%, 16.66667%) !important;
  --background-mod-right-split-dark: hsl(232, 8%, 16.66667%) !important;
  --background-mod-right-split-light: hsl(232, 8%, 16.66667%) !important;
  --background-mod-root-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-root-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-root-CSS-blend-mode-dark: normal !important;
  --background-mod-root-CSS-blend-mode-light: normal !important;
  --background-mod-root-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-root-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-root-split: hsl(232, 8%, 16.66667%) !important;
  --background-mod-root-split-dark: hsl(232, 8%, 16.66667%) !important;
  --background-mod-root-split-light: hsl(232, 8%, 16.66667%) !important;
  --background-modifier-active-hover: hsla(232,
        40%,
        60%, 0.15) !important;
  --background-modifier-border: hsla(232, 16%, 54%, 0.2) !important;
  --background-modifier-border-focus: hsla(232, 16%, 54%, 0.3) !important;
  --background-modifier-border-hover: hsla(232, 16%, 54%, 0.25) !important;
  --background-modifier-border-muted: hsla(232, 16%, 54%, 0.1) !important;
  --background-modifier-error: rgb(255, 120, 129) !important;
  --background-modifier-error-hover: rgb(255, 120, 129) !important;
  --background-modifier-error-rgb: 255, 120, 129 !important;
  --background-modifier-form-field: transparent !important;
  --background-modifier-form-field-hover: transparent !important;
  --background-modifier-hover: hsla(232, 12%, 40%, 0.25) !important;
  --background-modifier-success: rgb(124, 211, 124) !important;
  --background-modifier-success-rgb: 124, 211, 124 !important;
  --background-primary: hsl(232, 8%, 16.66667%) !important;
  --background-primary-alt: hsl(232, 8%, 19.23077%) !important;
  --background-secondary: hsl(232, 8%, 15.30612%) !important;
  --background-secondary-alt: hsl(232,
            7.40741%,
            25%) !important;
  --background-tertiary: hsl(232,
            7.40741%,
            20.83333%) !important;
  --background-underlying: hsl(232,
            7.40741%,
            20.83333%) !important;
  --background-underlying-CSS-blend-mode-dark: soft-light, luminosity, hue, luminosity, hard-light !important;
  --background-underlying-CSS-blend-mode-light: overlay, color-burn !important;
  --background-underlying-CSS-dark: linear-gradient(317deg, rgb(112, 55, 205) 0%, rgb(29, 12, 32) 19%, rgb(101, 31, 113) 19%, rgb(101, 31, 113) 33%), radial-gradient(100% 100% at 90% 9%, rgb(29, 12, 32) 0%, rgb(29, 12, 32) 100%), linear-gradient(109deg, rgb(104, 178, 248) 0%, rgb(80, 110, 229) 15%, rgb(112, 55, 205) 34%, rgb(104, 178, 248) 54%, rgb(104, 178, 248) 65%), radial-gradient(100% 100% at 20% 45%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), radial-gradient(100% 100% at 90% 27%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), linear-gradient(339deg, rgb(101, 31, 113) 0%, rgb(104, 178, 248) 12%, rgb(101, 31, 113) 14%, rgb(80, 110, 229) 19%, rgb(101, 31, 113) 20%, rgb(29, 12, 32) 30%) !important;
  --background-underlying-CSS-light: radial-gradient(100% 100% at 13% 50%, rgb(90, 109, 237) 0%, rgb(224, 218, 247) 100%), linear-gradient(6deg, rgb(235, 242, 252) 0%, rgb(90, 109, 237) 5%, rgb(166, 126, 241) 7%, rgb(224, 218, 247) 11%, rgb(90, 109, 237) 16%), radial-gradient(100% 100% at 60% 71%, rgb(224, 218, 247) 0%, rgb(219, 244, 255) 100%), linear-gradient(97deg, rgb(90, 109, 237) 0%, rgb(90, 109, 237) 23%, rgb(90, 109, 237) 53%), linear-gradient(351deg, rgb(235, 242, 252) 0%, rgb(219, 244, 255) 1%, rgb(235, 242, 252) 6%, rgb(224, 218, 247) 10%, rgb(166, 126, 241) 13%, rgb(235, 242, 252) 29%), radial-gradient(100% 100% at 10% 32%, rgb(90, 109, 237) 0%, rgb(219, 244, 255) 100%), radial-gradient(100% 100% at 35% 63%, rgb(224, 218, 247) 0%, rgb(224, 218, 247) 100%) !important;
  --background-underlying-dark: hsl(232,
            7.40741%,
            20.83333%) !important;
  --background-underlying-light: hsl(232,
            7.40741%,
            20.83333%) !important;
  --bases-cards-background: hsl(232, 8%, 16.66667%) !important;
  --bases-cards-cover-background: hsl(232, 8%, 19.23077%) !important;
  --bases-cards-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(232, 16%, 54%, 0.25) !important;
  --bases-embed-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --bases-group-heading-property-color: hsl(232, 12%, 75%) !important;
  --bases-table-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --bases-table-cell-background-active: hsl(232, 8%, 16.66667%) !important;
  --bases-table-cell-background-disabled: hsl(232, 8%, 19.23077%) !important;
  --bases-table-cell-background-selected: hsla(232,
        40%,
        60%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsla(232, 16%, 54%, 0.3) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(232, 40%, 60%) !important;
  --bases-table-group-background: hsl(232, 8%, 19.23077%) !important;
  --bases-table-header-background: hsl(232, 8%, 16.66667%) !important;
  --bases-table-header-background-hover: hsla(232, 12%, 40%, 0.25) !important;
  --bases-table-header-color: hsl(232, 12%, 75%) !important;
  --bases-table-summary-background: hsl(232, 8%, 16.66667%) !important;
  --bases-table-summary-background-hover: hsla(232, 12%, 40%, 0.25) !important;
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --blockquote-border-color: hsl(232, 40%, 60%) !important;
  --blockquote-border-thickness: 3px !important;
  --blockquote-padding: 8px !important;
  --blur-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent)) !important;
  --bold-color: rgb(255, 120, 129) !important;
  --bold-weight: 600 !important;
  --border-radius-activated-file-dark: 4px !important;
  --border-radius-activated-tab-header-dark: 6px !important;
  --border-radius-activated-tab-header-light: 6px !important;
  --button-radius: 6px !important;
  --callout-bug: 255, 120, 129;
  --callout-content-radius: 0px;
  --callout-default: 137, 189, 244;
  --callout-error: 255, 120, 129;
  --callout-example: 203, 158, 255;
  --callout-fail: 255, 120, 129;
  --callout-important: 134, 223, 226;
  --callout-info: 137, 189, 244;
  --callout-question: 251, 187, 131;
  --callout-success: 124, 211, 124;
  --callout-summary: 134, 223, 226;
  --callout-tip: 134, 223, 226;
  --callout-todo: 137, 189, 244;
  --callout-warning: 251, 187, 131;
  --canvas-background: transparent !important;
  --canvas-card-border-style: solid !important;
  --canvas-card-border-width: 2px !important;
  --canvas-card-label-color: hsl(232, 9%, 50%) !important;
  --canvas-color-1: 255, 120, 129 !important;
  --canvas-color-2: 251, 187, 131 !important;
  --canvas-color-3: 255, 232, 139 !important;
  --canvas-color-4: 124, 211, 124 !important;
  --canvas-color-5: 134, 223, 226 !important;
  --canvas-color-6: 203, 158, 255 !important;
  --card-border-radius-dark: 8px !important;
  --card-border-radius-light: 8px !important;
  --card-shadow-border-radius-dark: 7px !important;
  --card-shadow-border-radius-light: 7px !important;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 16%, 54%, 0.2), 0 0 0 1px hsla(232, 16%, 54%, 0.2) !important;
  --card-shadow-light: 0 0 0 1px hsla(232, 16%, 54%, 0.1), 0 0 6px hsla(232, 16%, 54%, 0.1) !important;
  --caret-color: hsl(232, 15%, 85%) !important;
  --checkbox-border-color: hsl(232, 9%, 50%) !important;
  --checkbox-border-color-hover: hsl(232, 9%, 50%) !important;
  --checkbox-color: rgb(124, 211, 124) !important;
  --checkbox-color-hover: rgb(124, 211, 124) !important;
  --checkbox-marker-color: hsl(232, 8%, 16.66667%) !important;
  --checkbox-radius: 6px !important;
  --checklist-done-color: hsl(232, 9%, 50%) !important;
  --clickable-icon-radius: 6px !important;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-border: 1px dashed hsla(232, 16%, 54%, 0.2) !important;
  --code-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --code-border-dark: 1px dashed hsla(232, 16%, 54%, 0.2) !important;
  --code-border-light: 1px dashed hsla(232, 16%, 54%, 0.2) !important;
  --code-bracket-background: hsla(232, 12%, 40%, 0.25) !important;
  --code-comment: hsl(232, 9%, 50%) !important;
  --code-function: rgb(255, 232, 139) !important;
  --code-important: rgb(251, 187, 131) !important;
  --code-keyword: rgb(242, 182, 222) !important;
  --code-normal: hsl(232, 12%, 75%) !important;
  --code-operator: rgb(255, 120, 129) !important;
  --code-property: rgb(134, 223, 226) !important;
  --code-punctuation: hsl(232, 12%, 75%) !important;
  --code-string: rgb(124, 211, 124) !important;
  --code-tag: rgb(255, 120, 129) !important;
  --code-value: rgb(203, 158, 255) !important;
  --collapse-icon-color: hsl(232, 9%, 50%) !important;
  --collapse-icon-color-collapsed: hsl(229, 40.8%, 69%) !important;
  --color-accent: hsl(232, 40%, 60%) !important;
  --color-accent-1: hsl(229, 40.8%, 69%) !important;
  --color-accent-1-dark: hsl(229, 40.8%, 69%) !important;
  --color-accent-2: hsl(227, 42%, 77.4%) !important;
  --color-accent-2-dark: hsl(227, 42%, 77.4%) !important;
  --color-accent-3: hsla(232, 16%, 54%) !important;
  --color-accent-3-dark: hsla(232, 16%, 54%) !important;
  --color-accent-dark: hsl(232, 40%, 60%) !important;
  --color-accent-hsl: 232,
        40%,
        60% !important;
  --color-accent-hsl-dark: 232,
        40%,
        60% !important;
  --color-activated-file-dark: hsl(232, 15%, 85%) !important;
  --color-activated-tab-header-dark: hsl(232, 15%, 85%) !important;
  --color-activated-tab-header-light: hsl(232, 15%, 85%) !important;
  --color-base-15: #252525 !important;
  --color-base-35: #3F3F3F !important;
  --color-base-40: #555 !important;
  --color-base-50: #666 !important;
  --color-base-60: #999 !important;
  --color-base-70: #bababa !important;
  --color-blue: rgb(137, 189, 244) !important;
  --color-blue-rgb: 137, 189, 244 !important;
  --color-cyan: rgb(134, 223, 226) !important;
  --color-cyan-rgb: 134, 223, 226 !important;
  --color-green: rgb(124, 211, 124) !important;
  --color-green-rgb: 124, 211, 124 !important;
  --color-orange: rgb(251, 187, 131) !important;
  --color-orange-rgb: 251, 187, 131 !important;
  --color-pink: rgb(242, 182, 222) !important;
  --color-pink-rgb: 242, 182, 222 !important;
  --color-purple: rgb(203, 158, 255) !important;
  --color-purple-rgb: 203, 158, 255 !important;
  --color-red: rgb(255, 120, 129) !important;
  --color-red-rgb: 255, 120, 129 !important;
  --color-yellow: rgb(255, 232, 139) !important;
  --color-yellow-rgb: 255, 232, 139 !important;
  --cursor: pointer !important;
  --dark: hsl(232, 15%, 85%) !important;
  --darkgray: hsl(232, 15%, 85%) !important;
  --divider-color: hsla(232, 16%, 54%, 0.2) !important;
  --divider-color-hover: hsl(232, 40%, 60%) !important;
  --dropdown-background: hsl(232,
            5.71429%,
            25%) !important;
  --dropdown-background-hover: hsl(232,
            5.71429%,
            27.77778%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsla(232, 16%, 54%, 0.2), inset 0 0 0 1px hsla(232, 16%, 54%, 0.2) !important;
  --embed-border-radius: 0px !important;
  --embed-border-start: 2px solid hsl(232, 40%, 60%) !important;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' fill-opacity='.15' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e") !important;
  --file-header-background: hsl(232, 8%, 16.66667%) !important;
  --file-header-background-focused: hsl(232, 8%, 16.66667%) !important;
  --flair-background: hsl(232,
            5.71429%,
            25%) !important;
  --flair-color: hsl(232, 15%, 85%) !important;
  --footnote-divider-color: hsla(232, 16%, 54%, 0.2) !important;
  --footnote-id-color: hsl(232, 12%, 75%) !important;
  --footnote-id-color-no-occurrences: hsl(232, 9%, 50%) !important;
  --footnote-input-background-active: hsla(232, 12%, 40%, 0.25) !important;
  --frame-right-space: 110px !important;
  --graph-line: #3F3F3F !important;
  --graph-node: hsl(232, 12%, 75%) !important;
  --graph-node-attachment: rgb(255, 232, 139) !important;
  --graph-node-focused: hsl(229, 40.8%, 69%) !important;
  --graph-node-tag: rgb(124, 211, 124) !important;
  --graph-node-unresolved: hsl(232, 9%, 50%) !important;
  --graph-text: hsl(232, 15%, 85%) !important;
  --gray: hsl(232, 12%, 75%) !important;
  --grid-background-pattern-color: hsla(232, 16%, 54%, 0.2) !important;
  --grid-background-pattern-size: 36px !important;
  --h1-accent-color: rgb(255, 120, 129) !important;
  --h1-size: 1.5em !important;
  --h2-accent-color: rgb(251, 187, 131) !important;
  --h2-size: 1.425em !important;
  --h2-weight: 675 !important;
  --h3-accent-color: rgb(255, 232, 139) !important;
  --h3-size: 1.35em !important;
  --h3-weight: 650 !important;
  --h4-accent-color: rgb(124, 211, 124) !important;
  --h4-size: 1.275em !important;
  --h4-weight: 625 !important;
  --h5-accent-color: rgb(137, 189, 244) !important;
  --h5-size: 1.2em !important;
  --h5-weight: 600 !important;
  --h6-accent-color: rgb(203, 158, 255) !important;
  --h6-size: 1.125em !important;
  --h6-weight: 575 !important;
  --heading-formatting: hsl(232, 9%, 50%) !important;
  --highlight: hsla(232, 12%, 40%, 0.25) !important;
  --hr-color: hsla(232, 16%, 54%, 0.2) !important;
  --icon-color: hsl(232, 12%, 75%) !important;
  --icon-color-active: hsl(229, 40.8%, 69%) !important;
  --icon-color-focused: hsl(232, 15%, 85%) !important;
  --icon-color-hover: hsl(232, 12%, 75%) !important;
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --inline-code-normal: rgb(242, 182, 222) !important;
  --inline-title-size: 1.5em !important;
  --input-date-separator: hsl(232, 9%, 50%) !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsl(232, 9%, 50%) !important;
  --input-radius: 6px !important;
  --input-radius-dark: 6px !important;
  --input-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.24), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --input-shadow-dark: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.24), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --input-shadow-hover: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.24), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --input-shadow-hover-dark: 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px 1px 2px rgba(0, 0, 0, 0.32), 0px 0px 0px 1px rgba(0, 0, 0, 0.32), 0px 0px 1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 0.75px rgba(255, 255, 255, 0.24), inset 0px -2px 0.75px rgba(0, 0, 0, 0.16) !important;
  --interactive-accent: hsl(232, 40%, 60%) !important;
  --interactive-accent-hover: hsl(229, 40.8%, 69%) !important;
  --interactive-accent-hsl: 232,
        40%,
        60% !important;
  --interactive-hover: hsl(232,
            5.71429%,
            27.77778%) !important;
  --interactive-normal: hsl(232,
            5.71429%,
            25%) !important;
  --italic-color: rgb(251, 187, 131) !important;
  --light: hsl(232, 8%, 16.66667%) !important;
  --lightgray: hsl(232, 8%, 15.30612%) !important;
  --line-height-customize: 1.5 !important;
  --line-normal-opacity: 0.5 !important;
  --link-color: hsl(229, 40.8%, 69%) !important;
  --link-color-hover: hsl(227, 42%, 77.4%) !important;
  --link-external-color: rgb(137, 189, 244) !important;
  --link-external-color-hover: rgb(137, 189, 244) !important;
  --link-unresolved-color: hsl(229, 40.8%, 69%) !important;
  --link-unresolved-decoration-color: hsla(232,
        40%,
        60%, 0.3) !important;
  --list-bullet-size-alt: 0.15em !important;
  --list-indent: 2em !important;
  --list-marker-color: hsl(232, 9%, 50%) !important;
  --list-marker-color-collapsed: hsl(229, 40.8%, 69%) !important;
  --list-marker-color-hover: hsl(232, 12%, 75%) !important;
  --menu-background: hsl(232, 8%, 15.30612%) !important;
  --menu-border-color: hsla(232, 16%, 54%, 0.25) !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3) !important;
  --metadata-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --metadata-divider-color: hsla(232, 16%, 54%, 0.2) !important;
  --metadata-input-background-active: hsla(232, 12%, 40%, 0.25) !important;
  --metadata-input-text-color: hsl(232, 15%, 85%) !important;
  --metadata-label-background-active: hsla(232, 12%, 40%, 0.25) !important;
  --metadata-label-text-color: hsl(232, 12%, 75%) !important;
  --metadata-label-text-color-hover: hsl(232, 12%, 75%) !important;
  --metadata-property-background-active: hsla(232, 12%, 40%, 0.25) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsla(232, 16%, 54%, 0.3) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(232, 16%, 54%, 0.25) !important;
  --mix-blend-mode-on-border-dark: screen !important;
  --mix-blend-mode-on-border-light: normal !important;
  --modal-background: hsl(232, 8%, 16.66667%) !important;
  --modal-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --nav-collapse-icon-color: hsl(232, 9%, 50%) !important;
  --nav-collapse-icon-color-collapsed: hsl(232, 9%, 50%) !important;
  --nav-heading-color: hsl(232, 15%, 85%) !important;
  --nav-heading-color-collapsed: hsl(232, 9%, 50%) !important;
  --nav-heading-color-collapsed-hover: hsl(232, 12%, 75%) !important;
  --nav-heading-color-hover: hsl(232, 15%, 85%) !important;
  --nav-item-background-active: hsla(232, 12%, 40%, 0.25) !important;
  --nav-item-background-hover: hsla(232, 12%, 40%, 0.25) !important;
  --nav-item-background-selected: hsla(232,
        40%,
        60%, 0.15) !important;
  --nav-item-color: hsl(232, 12%, 75%) !important;
  --nav-item-color-active: hsl(232, 15%, 85%) !important;
  --nav-item-color-highlighted: hsl(229, 40.8%, 69%) !important;
  --nav-item-color-hover: hsl(232, 15%, 85%) !important;
  --nav-item-color-selected: hsl(232, 15%, 85%) !important;
  --nav-tag-color: hsl(232, 9%, 50%) !important;
  --nav-tag-color-active: hsl(232, 12%, 75%) !important;
  --nav-tag-color-hover: hsl(232, 12%, 75%) !important;
  --new-tab-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22none%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23000%22%20fill-opacity%3D%22.26%22%20d%3D%22M51.894%2060.617c-.291%202.162-2.41%203.85-4.515%203.267-3-.825-6.474-2.112-9.6-2.352l-4.79-.362a3.163%203.163%200%200%201-2.042-.95l-8.254-8.483a3.15%203.15%200%200%201-.616-3.49S27.18%2037.053%2027.37%2036.47c.19-.582.886-5.66%201.298-8.388a3.153%203.153%200%200%201%201.011-1.875l9.765-8.767a3.165%203.165%200%200%201%204.597.394l8.202%2010.4c.464.59.702%201.32.706%202.07.009%201.97.172%206.016%201.263%208.621%201.062%202.535%203.01%205.272%204.03%206.619.39.517.45%201.216.12%201.773a138.06%20138.06%200%200%201-4.15%206.54c-1.386%202.063-2.028%204.613-2.318%206.761Z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%230E0E0E%22%20d%3D%22M51.602%2060.187c-.292%202.171-2.417%203.867-4.528%203.282-3.008-.829-6.491-2.122-9.626-2.362l-4.803-.365a3.168%203.168%200%200%201-2.048-.953l-8.277-8.523a3.168%203.168%200%200%201-.618-3.504S26.82%2036.515%2027.01%2035.93c.19-.585.888-5.686%201.301-8.427a3.17%203.17%200%200%201%201.015-1.883l9.79-8.807a3.17%203.17%200%200%201%204.61.396l8.226%2010.448c.465.59.704%201.326.707%202.078.01%201.98.173%206.043%201.268%208.66%201.064%202.547%203.018%205.296%204.04%206.65a1.6%201.6%200%200%201%20.12%201.78%20137.46%20137.46%200%200%201-4.16%206.57c-1.39%202.072-2.034%204.634-2.325%206.792Z%22%2F%3E%3Cpath%20fill%3D%22url(%23b)%22%20d%3D%22M31.489%2060.433c3.844-7.804%203.736-13.395%202.1-17.384-1.505-3.672-4.304-5.988-6.51-7.425-.047.208-.115.41-.202.605l-5.175%2011.532a3.168%203.168%200%200%200%20.618%203.505l8.277%208.523c.26.267.562.484.892.644Z%22%2F%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M47.075%2063.469c2.11.585%204.235-1.11%204.527-3.282.252-1.869.769-4.041%201.806-5.936-2.38-5.121-5.256-7.777-8.41-8.954-3.339-1.246-6.987-.835-10.684.063.826%203.76.331%208.673-2.82%2015.073.358.174.75.28%201.154.309%200%200%202.275.191%204.98.383%202.705.191%206.73%201.59%209.447%202.344Z%22%2F%3E%3Cpath%20fill%3D%22url(%23d)%22%20d%3D%22M41.95%2044.595c1.038.108%202.056.332%203.047.702%203.154%201.177%206.032%203.833%208.411%208.954.16-.292.333-.578.519-.855a138.877%20138.877%200%200%200%204.16-6.57%201.603%201.603%200%200%200-.12-1.78c-1.022-1.354-2.976-4.103-4.04-6.65-1.095-2.617-1.258-6.68-1.267-8.66a3.377%203.377%200%200%200-.708-2.079L43.727%2017.21a3.198%203.198%200%200%200-.136-.162c.603%201.978.562%203.569.19%205.015-.345%201.341-.975%202.558-1.641%203.843-.223.43-.45.87-.672%201.323-.884%201.806-1.68%203.85-1.798%206.592-.118%202.74.444%206.179%202.28%2010.774Z%22%2F%3E%3Cpath%20fill%3D%22url(%23e)%22%20d%3D%22M41.948%2044.594c-1.835-4.595-2.398-8.033-2.28-10.774.118-2.742.915-4.786%201.798-6.592.222-.454.45-.893.673-1.324.665-1.285%201.295-2.501%201.64-3.842.373-1.447.414-3.038-.19-5.017a3.17%203.17%200%200%200-4.472-.232l-9.792%208.807a3.17%203.17%200%200%200-1.014%201.883l-1.192%207.902a3.182%203.182%200%200%201-.04.218c2.206%201.438%205.006%203.754%206.511%207.426.294.717.54%201.486.72%202.31%202.6-.632%205.177-1.022%207.638-.765Z%22%2F%3E%3Cg%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%3E%3Cpath%20fill%3D%22url(%23f)%22%20d%3D%22M39.687%2033.638c-.118%202.72.221%205.839%202.053%2010.424l-.575-.052c-1.643-4.785-2.001-7.238-1.881-9.995.12-2.758%201.01-4.879%201.899-6.688.225-.458.75-1.319.974-1.75.665-1.28%201.108-1.955%201.488-3.124.53-1.633.416-2.406.355-3.176.422%202.783-1.178%205.202-2.388%207.667-.882%201.795-1.807%203.976-1.925%206.694Z%22%2F%3E%3Cpath%20fill%3D%22url(%23g)%22%20d%3D%22M34.131%2043.25c.217.502.422.907.552%201.529l-.48.108c-.2-.726-.354-1.242-.63-1.865-1.654-3.902-4.309-5.91-6.478-7.381%202.62%201.41%205.31%203.616%207.036%207.608Z%22%2F%3E%3Cpath%20fill%3D%22url(%23h)%22%20d%3D%22M34.71%2045.27c.917%204.264-.105%209.683-3.118%2014.95%202.518-5.22%203.74-10.234%202.723-14.866l.396-.085Z%22%2F%3E%3Cpath%20fill%3D%22url(%23i)%22%20d%3D%22M45.11%2044.888c4.94%201.848%206.842%205.908%208.264%209.294-1.756-3.546-4.197-7.462-8.441-8.915-3.23-1.106-5.957-.975-10.619.083l-.104-.462c4.948-1.128%207.535-1.26%2010.9%200Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22b%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-5.44827%20-20.95522%2013.96424%20-3.63065%2031.076%2059.662)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23333%22%20stop-opacity%3D%22.52%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22c%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-9.24927%20-16.1868%2016.18663%20-9.24917%2047.535%2064.623)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23565656%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23151515%22%20stop-opacity%3D%22.71%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22d%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(4.6468%20-35.22462%2026.02364%203.433%2049.53%2050.76)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%237E7E7E%22%20stop-opacity%3D%22.91%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231E1E1E%22%20stop-opacity%3D%22.6%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22e%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(13.14708%20-30.29344%2020.65904%208.96583%2034.531%2046.293)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23D7D7D7%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23414141%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22f%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-3.34584%2015.42817%20-10.40357%20-2.25617%2044.882%2027.895)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.17%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22g%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(8.17858%208.27172%20-17.61805%2017.41967%2026.387%2036.445)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22h%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(80.202%20-7.323%2041.856)%20scale(13.634%2028.9518)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.12%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.35%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22i%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(-152.296%2033.168%2019.977)%20scale(20.7745%2065.377)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.21%22%2F%3E%3Cstop%20offset%3D%22.467%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.19%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.29%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%2239.273%22%20height%3D%2249.867%22%20x%3D%2220.551%22%20y%3D%2215.381%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20mode%3D%22normal%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20result%3D%22effect1_foregroundBlur_3584_482%22%20stdDeviation%3D%22.624%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E") !important;
  --on-border-dark: hsla(232, 16%, 54%) !important;
  --on-border-light: hsla(232, 16%, 54%) !important;
  --pdf-background: hsl(232, 8%, 16.66667%) !important;
  --pdf-page-background: hsl(232, 8%, 16.66667%) !important;
  --pdf-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2) !important;
  --pdf-sidebar-background: hsl(232, 8%, 16.66667%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(232, 16%, 54%, 0.2) !important;
  --pill-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --pill-border-color-hover: hsla(232, 16%, 54%, 0.25) !important;
  --pill-color: hsl(232, 12%, 75%) !important;
  --pill-color-hover: hsl(232, 15%, 85%) !important;
  --pill-color-remove: hsl(232, 9%, 50%) !important;
  --pill-color-remove-hover: hsl(229, 40.8%, 69%) !important;
  --prompt-background: hsl(232, 8%, 16.66667%) !important;
  --prompt-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --raised-background: color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent) linear-gradient(hsl(232,
            5.71429%,
            25%), color-mix(in srgb, hsl(232,
            5.71429%,
            25%) 65%, transparent)) !important;
  --ribbon-background: hsl(232, 8%, 15.30612%) !important;
  --ribbon-background-collapsed: hsl(232, 8%, 16.66667%) !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.15) !important;
  --scrollbar-bg: rgba(255, 255, 255, 0) !important;
  --search-clear-button-color: hsl(232, 12%, 75%) !important;
  --search-icon-color: hsl(232, 12%, 75%) !important;
  --search-result-background: transparent !important;
  --secondary: hsl(229, 40.8%, 69%) !important;
  --setting-group-heading-color: hsl(232, 15%, 85%) !important;
  --setting-items-background: hsl(232, 8%, 19.23077%) !important;
  --setting-items-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --shadow-activated-file-dark: none !important;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 16%, 54%, 0.2), inset 0 2px 4px 0 hsla(232, 16%, 54%, 0.1), inset 0 1px 1px 1px hsla(232, 16%, 54%, 0.2) !important;
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 16%, 54%, 0.2), 0 0 4px hsla(232, 16%, 54%, 0.2), 0px 2px 6px -4px hsla(232, 16%, 54%, 0.1), inset 0 -1px 3px 0 hsl(232,
            7.40741%,
            20.83333%) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
        0px 15px 30px rgba(0, 0, 0, 0.3),
        0 -1px 0 0 hsla(232, 16%, 54%, 0.3) !important;
  --slider-thumb-border-color: hsla(232, 16%, 54%, 0.25) !important;
  --slider-thumb-border-width: 0 !important;
  --slider-track-background: hsla(232, 16%, 54%, 0.2) !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: transparent !important;
  --status-bar-border-width: 0 !important;
  --status-bar-text-color: hsl(232, 12%, 75%) !important;
  --suggestion-background: hsl(232, 8%, 16.66667%) !important;
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
  --tab-divider-color: hsla(232, 16%, 54%, 0.25) !important;
  --tab-outline-color: hsla(232, 16%, 54%, 0.2) !important;
  --tab-switcher-background: hsl(232, 8%, 15.30612%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232, 8%, 15.30612%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 40%, 60%) !important;
  --tab-text-color: hsl(232, 9%, 50%) !important;
  --tab-text-color-active: hsl(232, 12%, 75%) !important;
  --tab-text-color-focused: hsl(232, 12%, 75%) !important;
  --tab-text-color-focused-active: hsl(232, 12%, 75%) !important;
  --tab-text-color-focused-active-current: hsl(232, 15%, 85%) !important;
  --tab-text-color-focused-highlighted: hsl(229, 40.8%, 69%) !important;
  --table-add-button-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --table-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --table-drag-handle-background-active: hsl(232, 40%, 60%) !important;
  --table-drag-handle-color: hsl(232, 9%, 50%) !important;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --table-header-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --table-header-color: hsl(232, 15%, 85%) !important;
  --table-selection: hsla(232,
        40%,
        60%, 0.1) !important;
  --table-selection-border-color: hsl(232, 40%, 60%) !important;
  --table-width: 88cqw !important;
  --tag-background: hsla(232,
        40%,
        60%, 0.1) !important;
  --tag-background-hover: hsla(232,
        40%,
        60%, 0.2) !important;
  --tag-border-color: hsla(232,
        40%,
        60%, 0.15) !important;
  --tag-border-color-hover: hsla(232,
        40%,
        60%, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl(229, 40.8%, 69%) !important;
  --tag-color-hover: hsl(229, 40.8%, 69%) !important;
  --tertiary: hsl(227, 42%, 77.4%) !important;
  --text-accent: hsl(229, 40.8%, 69%) !important;
  --text-accent-hover: hsl(227, 42%, 77.4%) !important;
  --text-error: rgb(255, 120, 129) !important;
  --text-faint: hsl(232, 9%, 50%) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: hsl(232, 12%, 75%) !important;
  --text-normal: hsl(232, 15%, 85%) !important;
  --text-selection: hsla(232,
        40%,
        60%, 0.4) !important;
  --text-success: rgb(124, 211, 124) !important;
  --text-warning: rgb(251, 187, 131) !important;
  --textHighlight: hsla(232, 12%, 40%, 0.25) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: hsla(232, 16%, 54%, 0.2) !important;
  --titlebar-text-color: hsl(232, 12%, 75%) !important;
  --titlebar-text-color-focused: hsl(232, 15%, 85%) !important;
  --toggle-thumb-color-dark: white !important;
  --toggle-thumb-enabled-color: white !important;
  --toggle-thumb-enabled-color-dark: white !important;
  --toggle-thumb-enabled-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(255, 255, 255, 0.3), inset 0px -4px 6px hsla(232,
        40%,
        60%, 0.4), inset 0px 4px 4px rgba(255, 255, 255, 0.4) !important;
  --toggle-thumb-enabled-shadow-dark: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(255, 255, 255, 0.3), inset 0px -4px 6px hsla(232,
        40%,
        60%, 0.4), inset 0px 4px 4px rgba(255, 255, 255, 0.4) !important;
  --toggle-thumb-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.3), inset 0px -4px 6px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(255, 255, 255, 0.4) !important;
  --toggle-thumb-shadow-dark: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.3), inset 0px -4px 6px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(255, 255, 255, 0.4) !important;
  --toggle-track-color: hsla(232, 16%, 54%, 0.25) !important;
  --toggle-track-color-dark: hsla(232, 16%, 54%, 0.25) !important;
  --toggle-track-enabled-color: hsl(232, 40%, 60%) !important;
  --toggle-track-enabled-color-dark: hsl(232, 40%, 60%) !important;
  --toggle-track-hovered-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(232, 16%, 54%, 0.2) !important;
  --toggle-track-hovered-shadow-dark: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(232, 16%, 54%, 0.2) !important;
  --toggle-track-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(232, 16%, 54%, 0.2) !important;
  --toggle-track-shadow-dark: inset 0px -1px 2px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 0px 1px hsla(232, 16%, 54%, 0.2) !important;
  --vault-profile-color: hsl(232, 15%, 85%) !important;
  --vault-profile-color-hover: hsl(232, 15%, 85%) !important;
  --workspace-background-translucent: hsla(232,
            7.40741%,
            20.83333%, 0.6) !important;
  --workspace-divider-color: hsla(232, 16%, 54%, 0.2) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(119, 124, 156, 0.2);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(36, 37, 42);
  border-color: rgb(211, 213, 222);
  box-shadow: rgba(0, 0, 0, 0.32) 0px 4px 8px -4px, rgba(0, 0, 0, 0.32) 0px 1px 2px 0px, rgba(0, 0, 0, 0.32) 0px 0px 0px 1px, rgba(0, 0, 0, 0.12) 0px 0px 1px 1px, rgba(255, 255, 255, 0.24) 0px 1px 0.75px 0px inset, rgba(0, 0, 0, 0.16) 0px -2px 0.75px 0px inset;
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
  background-color: rgba(112, 123, 194, 0.1);
  color: rgb(144, 156, 208);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(119, 124, 156, 0.2);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(119, 124, 156, 0.2);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(49, 50, 57);
  color: rgb(211, 213, 222);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 120, 129);
  outline: rgb(255, 120, 129) none 0px;
  text-decoration-color: rgb(255, 120, 129);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(251, 187, 131);
  outline: rgb(251, 187, 131) none 0px;
  text-decoration-color: rgb(251, 187, 131);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(251, 187, 131);
  outline: rgb(251, 187, 131) none 0px;
  text-decoration-color: rgb(251, 187, 131);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 120, 129);
  outline: rgb(255, 120, 129) none 0px;
  text-decoration-color: rgb(255, 120, 129);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(211, 213, 222);
  outline: rgb(211, 213, 222) none 0px;
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(211, 213, 222);
  outline: rgb(211, 213, 222) none 0px;
  text-decoration-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(116, 119, 139);
  border-radius: 6px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(124, 211, 124);
  border-color: rgb(124, 211, 124);
}

html[saved-theme="dark"] body p {
  color: rgb(184, 186, 199);
  outline: rgb(184, 186, 199) none 0px;
  text-decoration-color: rgb(184, 186, 199);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(137, 189, 244);
  outline: rgb(137, 189, 244) none 0px;
  text-decoration-color: rgb(137, 189, 244);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(144, 156, 208);
  outline: rgb(144, 156, 208) none 0px;
  text-decoration-color: rgb(144, 156, 208);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(144, 156, 208);
  outline: rgb(144, 156, 208) none 0px;
  text-decoration: underline rgba(112, 123, 194, 0.3);
  text-decoration-color: rgba(112, 123, 194, 0.3);
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

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
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
  color: rgb(116, 119, 139);
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
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-left-color: rgba(119, 124, 156, 0.2);
  border-right-color: rgba(119, 124, 156, 0.2);
  border-top-color: rgba(119, 124, 156, 0.2);
  color: rgb(211, 213, 222);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(184, 186, 199);
  border-left-color: rgb(184, 186, 199);
  border-right-color: rgb(184, 186, 199);
  border-top-color: rgb(184, 186, 199);
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
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
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
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
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(255, 232, 139);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 232, 139);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 232, 139);
  border-left-color: rgb(255, 232, 139);
  border-right-color: rgb(255, 232, 139);
  border-top-color: rgb(255, 232, 139);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
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
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
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
  background-color: rgb(45, 46, 53);
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
  background-color: rgb(39, 40, 46);
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
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
  background-color: rgb(39, 40, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(39, 40, 46);
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  border-bottom-color: rgb(137, 189, 244);
  border-left-color: rgb(137, 189, 244);
  border-right-color: rgb(137, 189, 244);
  border-top-color: rgb(137, 189, 244);
  color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(137, 189, 244);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 134, 223, 226;
  background-color: rgba(134, 223, 226, 0.1);
  border-bottom-color: rgba(134, 223, 226, 0.25);
  border-left-color: rgba(134, 223, 226, 0.25);
  border-right-color: rgba(134, 223, 226, 0.25);
  border-top-color: rgba(134, 223, 226, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 255, 120, 129;
  background-color: rgba(255, 120, 129, 0.1);
  border-bottom-color: rgba(255, 120, 129, 0.25);
  border-left-color: rgba(255, 120, 129, 0.25);
  border-right-color: rgba(255, 120, 129, 0.25);
  border-top-color: rgba(255, 120, 129, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 255, 120, 129;
  background-color: rgba(255, 120, 129, 0.1);
  border-bottom-color: rgba(255, 120, 129, 0.25);
  border-left-color: rgba(255, 120, 129, 0.25);
  border-right-color: rgba(255, 120, 129, 0.25);
  border-top-color: rgba(255, 120, 129, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 203, 158, 255;
  background-color: rgba(203, 158, 255, 0.1);
  border-bottom-color: rgba(203, 158, 255, 0.25);
  border-left-color: rgba(203, 158, 255, 0.25);
  border-right-color: rgba(203, 158, 255, 0.25);
  border-top-color: rgba(203, 158, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 255, 120, 129;
  background-color: rgba(255, 120, 129, 0.1);
  border-bottom-color: rgba(255, 120, 129, 0.25);
  border-left-color: rgba(255, 120, 129, 0.25);
  border-right-color: rgba(255, 120, 129, 0.25);
  border-top-color: rgba(255, 120, 129, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 137, 189, 244;
  background-color: rgba(137, 189, 244, 0.1);
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 137, 189, 244;
  background-color: rgba(137, 189, 244, 0.1);
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 251, 187, 131;
  background-color: rgba(251, 187, 131, 0.1);
  border-bottom-color: rgba(251, 187, 131, 0.25);
  border-left-color: rgba(251, 187, 131, 0.25);
  border-right-color: rgba(251, 187, 131, 0.25);
  border-top-color: rgba(251, 187, 131, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 124, 211, 124;
  background-color: rgba(124, 211, 124, 0.1);
  border-bottom-color: rgba(124, 211, 124, 0.25);
  border-left-color: rgba(124, 211, 124, 0.25);
  border-right-color: rgba(124, 211, 124, 0.25);
  border-top-color: rgba(124, 211, 124, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 134, 223, 226;
  background-color: rgba(134, 223, 226, 0.1);
  border-bottom-color: rgba(134, 223, 226, 0.25);
  border-left-color: rgba(134, 223, 226, 0.25);
  border-right-color: rgba(134, 223, 226, 0.25);
  border-top-color: rgba(134, 223, 226, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 137, 189, 244;
  background-color: rgba(137, 189, 244, 0.1);
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 251, 187, 131;
  background-color: rgba(251, 187, 131, 0.1);
  border-bottom-color: rgba(251, 187, 131, 0.25);
  border-left-color: rgba(251, 187, 131, 0.25);
  border-right-color: rgba(251, 187, 131, 0.25);
  border-top-color: rgba(251, 187, 131, 0.25);
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
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgba(49, 50, 57, 0.6);
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-left-color: rgba(119, 124, 156, 0.2);
  border-right-color: rgba(119, 124, 156, 0.2);
  border-top-color: rgba(119, 124, 156, 0.2);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px, rgba(119, 124, 156, 0.3) 0px -1px 0px 0px;
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
  background-color: rgba(90, 93, 114, 0.25);
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
  background-color: rgba(90, 93, 114, 0.25);
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(90, 93, 114, 0.25);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(112, 123, 194, 0.1);
  border-bottom-color: rgba(112, 123, 194, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(112, 123, 194, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(112, 123, 194, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(112, 123, 194, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(144, 156, 208);
}

html[saved-theme="dark"] body h1 {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body h2 {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body h3 {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body h4 {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body h5 {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body h6 {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-left-color: rgba(119, 124, 156, 0.2);
  border-right-color: rgba(119, 124, 156, 0.2);
  border-top-color: rgba(119, 124, 156, 0.2);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 137, 189, 244;
  border-bottom-color: rgba(137, 189, 244, 0.25);
  border-left-color: rgba(137, 189, 244, 0.25);
  border-right-color: rgba(137, 189, 244, 0.25);
  border-top-color: rgba(137, 189, 244, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(49, 50, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 50, 57);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(49, 50, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 50, 57);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(49, 50, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 50, 57);
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(49, 50, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 50, 57);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(49, 50, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 50, 57);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(49, 50, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 50, 57);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(184, 186, 199);
  cursor: pointer;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(184, 186, 199);
  cursor: pointer;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(211, 213, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 186, 199);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(184, 186, 199);
  border-right-color: rgb(184, 186, 199);
  border-top-color: rgb(184, 186, 199);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(184, 186, 199);
  cursor: pointer;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(119, 124, 156);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(119, 124, 156);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 186, 199);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(119, 124, 156);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(119, 124, 156);
  border-right-color: rgb(119, 124, 156);
  border-top-color: rgb(119, 124, 156);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(119, 124, 156);
  cursor: pointer;
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
  color: rgb(116, 119, 139);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(211, 213, 222);
  border-left-color: rgb(211, 213, 222);
  border-right-color: rgb(211, 213, 222);
  border-top-color: rgb(211, 213, 222);
  color: rgb(211, 213, 222);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(119, 124, 156, 0.2);
  border-left-color: rgba(119, 124, 156, 0.2);
  border-right-color: rgba(119, 124, 156, 0.2);
  border-top-color: rgba(119, 124, 156, 0.2);
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(184, 186, 199);
  border-left-color: rgb(184, 186, 199);
  border-right-color: rgb(184, 186, 199);
  border-top-color: rgb(184, 186, 199);
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(211, 213, 222);
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
  color: rgb(184, 186, 199);
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(90, 93, 114, 0.25);
  border-bottom-color: rgb(184, 186, 199);
  border-left-color: rgb(184, 186, 199);
  border-right-color: rgb(184, 186, 199);
  border-top-color: rgb(184, 186, 199);
  color: rgb(184, 186, 199);
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
  background-color: rgba(112, 123, 194, 0.1);
  border-bottom-color: rgba(112, 123, 194, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(112, 123, 194, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(112, 123, 194, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(112, 123, 194, 0.15);
  border-top-width: 1px;
  color: rgb(144, 156, 208);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 232 !important;
  --accent-l: 64% !important;
  --accent-light-h: 232 !important;
  --accent-light-l: 64% !important;
  --accent-light-s: 96% !important;
  --accent-s: 96% !important;
  --anim-duration-fast: 150ms !important;
  --anim-duration-moderate: 300ms !important;
  --anim-duration-slow: 600ms !important;
  --anim-duration-superfast: 75ms !important;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-speed: 1 !important;
  --background-activated-file-light: hsla(232, 6%, 64%, 0.15) !important;
  --background-activated-tab-header-dark: hsla(232,
        96%,
        64%, 0.15) !important;
  --background-activated-tab-header-light: #ffffff !important;
  --background-alt-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --background-alt-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --background-mod-left-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-left-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-left-CSS-blend-mode-dark: normal !important;
  --background-mod-left-CSS-blend-mode-light: normal !important;
  --background-mod-left-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-left-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-left-split: #ffffff !important;
  --background-mod-left-split-dark: #ffffff !important;
  --background-mod-left-split-light: #ffffff !important;
  --background-mod-right-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-right-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-right-CSS-blend-mode-dark: normal !important;
  --background-mod-right-CSS-blend-mode-light: normal !important;
  --background-mod-right-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-right-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-right-split: #ffffff !important;
  --background-mod-right-split-dark: #ffffff !important;
  --background-mod-right-split-light: #ffffff !important;
  --background-mod-root-CSS-backdrop-filter-dark: blur(32px) !important;
  --background-mod-root-CSS-backdrop-filter-light: blur(32px) !important;
  --background-mod-root-CSS-blend-mode-dark: normal !important;
  --background-mod-root-CSS-blend-mode-light: normal !important;
  --background-mod-root-CSS-dark: rgba(0, 0, 0, 0.5) !important;
  --background-mod-root-CSS-light: rgba(255, 255, 255, 0.5) !important;
  --background-mod-root-split: #ffffff !important;
  --background-mod-root-split-dark: #ffffff !important;
  --background-mod-root-split-light: #ffffff !important;
  --background-modifier-active-hover: hsla(232,
        96%,
        64%, 0.15) !important;
  --background-modifier-border: hsla(232, 38.4%, 64%, 0.2) !important;
  --background-modifier-border-focus: hsla(232, 38.4%, 64%, 0.3) !important;
  --background-modifier-border-hover: hsla(232, 38.4%, 64%, 0.25) !important;
  --background-modifier-border-muted: hsla(232, 38.4%, 64%, 0.1) !important;
  --background-modifier-error: rgb(221, 44, 56) !important;
  --background-modifier-error-hover: rgb(221, 44, 56) !important;
  --background-modifier-error-rgb: 221, 44, 56 !important;
  --background-modifier-form-field: transparent !important;
  --background-modifier-form-field-hover: transparent !important;
  --background-modifier-hover: hsla(232, 6%, 64%, 0.15) !important;
  --background-modifier-success: rgb(29, 165, 29) !important;
  --background-modifier-success-rgb: 29, 165, 29 !important;
  --background-secondary: hsl(232,
            16%,
            97.75%) !important;
  --background-tertiary: hsl(232,
            64%,
            96.4%) !important;
  --background-underlying: hsl(232,
            64%,
            96.4%) !important;
  --background-underlying-CSS-blend-mode-dark: soft-light, luminosity, hue, luminosity, hard-light !important;
  --background-underlying-CSS-blend-mode-light: overlay, color-burn !important;
  --background-underlying-CSS-dark: linear-gradient(317deg, rgb(112, 55, 205) 0%, rgb(29, 12, 32) 19%, rgb(101, 31, 113) 19%, rgb(101, 31, 113) 33%), radial-gradient(100% 100% at 90% 9%, rgb(29, 12, 32) 0%, rgb(29, 12, 32) 100%), linear-gradient(109deg, rgb(104, 178, 248) 0%, rgb(80, 110, 229) 15%, rgb(112, 55, 205) 34%, rgb(104, 178, 248) 54%, rgb(104, 178, 248) 65%), radial-gradient(100% 100% at 20% 45%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), radial-gradient(100% 100% at 90% 27%, rgb(80, 110, 229) 0%, rgb(101, 31, 113) 100%), linear-gradient(339deg, rgb(101, 31, 113) 0%, rgb(104, 178, 248) 12%, rgb(101, 31, 113) 14%, rgb(80, 110, 229) 19%, rgb(101, 31, 113) 20%, rgb(29, 12, 32) 30%) !important;
  --background-underlying-CSS-light: radial-gradient(100% 100% at 13% 50%, rgb(90, 109, 237) 0%, rgb(224, 218, 247) 100%), linear-gradient(6deg, rgb(235, 242, 252) 0%, rgb(90, 109, 237) 5%, rgb(166, 126, 241) 7%, rgb(224, 218, 247) 11%, rgb(90, 109, 237) 16%), radial-gradient(100% 100% at 60% 71%, rgb(224, 218, 247) 0%, rgb(219, 244, 255) 100%), linear-gradient(97deg, rgb(90, 109, 237) 0%, rgb(90, 109, 237) 23%, rgb(90, 109, 237) 53%), linear-gradient(351deg, rgb(235, 242, 252) 0%, rgb(219, 244, 255) 1%, rgb(235, 242, 252) 6%, rgb(224, 218, 247) 10%, rgb(166, 126, 241) 13%, rgb(235, 242, 252) 29%), radial-gradient(100% 100% at 10% 32%, rgb(90, 109, 237) 0%, rgb(219, 244, 255) 100%), radial-gradient(100% 100% at 35% 63%, rgb(224, 218, 247) 0%, rgb(224, 218, 247) 100%) !important;
  --background-underlying-dark: hsl(232,
            64%,
            96.4%) !important;
  --background-underlying-light: hsl(232,
            64%,
            96.4%) !important;
  --bases-cards-shadow: 0 0 0 1px hsla(232, 38.4%, 64%, 0.2) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(232, 38.4%, 64%, 0.25) !important;
  --bases-embed-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --bases-group-heading-property-color: hsl(232, 9%, 36%) !important;
  --bases-table-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --bases-table-cell-background-selected: hsla(232,
        96%,
        64%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsla(232, 38.4%, 64%, 0.3) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(231, 96.96%, 68.8%) !important;
  --bases-table-header-background-hover: hsla(232, 6%, 64%, 0.15) !important;
  --bases-table-header-color: hsl(232, 9%, 36%) !important;
  --bases-table-summary-background-hover: hsla(232, 6%, 64%, 0.15) !important;
  --blockquote-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --blockquote-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --blockquote-border-color: hsl(231, 96.96%, 68.8%) !important;
  --blockquote-border-thickness: 3px !important;
  --blockquote-padding: 8px !important;
  --bold-color: rgb(221, 44, 56) !important;
  --bold-weight: 600 !important;
  --border-radius-activated-file-light: 4px !important;
  --border-radius-activated-tab-header-dark: 6px !important;
  --border-radius-activated-tab-header-light: 6px !important;
  --button-radius: 6px !important;
  --callout-bug: 221, 44, 56;
  --callout-content-radius: 0px;
  --callout-default: 23, 117, 217;
  --callout-error: 221, 44, 56;
  --callout-example: 143, 71, 225;
  --callout-fail: 221, 44, 56;
  --callout-important: 22, 166, 171;
  --callout-info: 23, 117, 217;
  --callout-question: 222, 116, 23;
  --callout-success: 29, 165, 29;
  --callout-summary: 22, 166, 171;
  --callout-tip: 22, 166, 171;
  --callout-todo: 23, 117, 217;
  --callout-warning: 222, 116, 23;
  --canvas-background: transparent !important;
  --canvas-card-border-style: solid !important;
  --canvas-card-border-width: 2px !important;
  --canvas-card-label-color: hsl(232, 12%, 64%) !important;
  --canvas-color-1: 221, 44, 56 !important;
  --canvas-color-2: 222, 116, 23 !important;
  --canvas-color-3: 192, 156, 12 !important;
  --canvas-color-4: 29, 165, 29 !important;
  --canvas-color-5: 22, 166, 171 !important;
  --canvas-color-6: 143, 71, 225 !important;
  --card-border-radius-dark: 8px !important;
  --card-border-radius-light: 8px !important;
  --card-shadow-border-radius-dark: 7px !important;
  --card-shadow-border-radius-light: 7px !important;
  --card-shadow-dark: 0 -1px 0 0 hsla(232, 38.4%, 64%, 0.2), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2) !important;
  --card-shadow-light: 0 0 0 1px hsla(232, 38.4%, 64%, 0.1), 0 0 6px hsla(232, 38.4%, 64%, 0.1) !important;
  --caret-color: hsl(232, 6%, 12%) !important;
  --checkbox-border-color: hsl(232, 12%, 64%) !important;
  --checkbox-border-color-hover: hsl(232, 12%, 64%) !important;
  --checkbox-color: rgb(29, 165, 29) !important;
  --checkbox-color-hover: rgb(29, 165, 29) !important;
  --checkbox-radius: 6px !important;
  --checklist-done-color: hsl(232, 12%, 64%) !important;
  --clickable-icon-radius: 6px !important;
  --code-background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --code-border: 1px dashed hsla(232, 38.4%, 64%, 0.2) !important;
  --code-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --code-border-dark: 1px dashed hsla(232, 38.4%, 64%, 0.2) !important;
  --code-border-light: 1px dashed hsla(232, 38.4%, 64%, 0.2) !important;
  --code-bracket-background: hsla(232, 6%, 64%, 0.15) !important;
  --code-comment: hsl(232, 12%, 64%) !important;
  --code-function: rgb(192, 156, 12) !important;
  --code-important: rgb(222, 116, 23) !important;
  --code-keyword: rgb(221, 19, 153) !important;
  --code-normal: hsl(232, 9%, 36%) !important;
  --code-operator: rgb(221, 44, 56) !important;
  --code-property: rgb(22, 166, 171) !important;
  --code-punctuation: hsl(232, 9%, 36%) !important;
  --code-string: rgb(29, 165, 29) !important;
  --code-tag: rgb(221, 44, 56) !important;
  --code-value: rgb(143, 71, 225) !important;
  --collapse-icon-color: hsl(232, 12%, 64%) !important;
  --collapse-icon-color-collapsed: hsl(231, 96.96%, 68.8%) !important;
  --color-accent: hsl(232, 96%, 64%) !important;
  --color-accent-1: hsl(231, 96.96%, 68.8%) !important;
  --color-accent-1-light: hsl(231, 96.96%, 68.8%) !important;
  --color-accent-2: hsl(229, 97.92%, 73.6%) !important;
  --color-accent-2-light: hsl(229, 97.92%, 73.6%) !important;
  --color-accent-3: hsla(232, 38.4%, 64%) !important;
  --color-accent-3-light: hsla(232, 38.4%, 64%) !important;
  --color-accent-hsl: 232,
        96%,
        64% !important;
  --color-accent-hsl-light: 232,
        96%,
        64% !important;
  --color-accent-light: hsl(232, 96%, 64%) !important;
  --color-activated-file-light: hsl(232, 6%, 12%) !important;
  --color-activated-tab-header-dark: hsl(232, 6%, 12%) !important;
  --color-activated-tab-header-light: hsl(232, 6%, 12%) !important;
  --color-base-15: #f7f7f7 !important;
  --color-base-20: #F0F0F0 !important;
  --color-base-70: #5a5a5a !important;
  --color-blue: rgb(23, 117, 217) !important;
  --color-blue-rgb: 23, 117, 217 !important;
  --color-cyan: rgb(22, 166, 171) !important;
  --color-cyan-rgb: 22, 166, 171 !important;
  --color-green: rgb(29, 165, 29) !important;
  --color-green-rgb: 29, 165, 29 !important;
  --color-orange: rgb(222, 116, 23) !important;
  --color-orange-rgb: 222, 116, 23 !important;
  --color-pink: rgb(221, 19, 153) !important;
  --color-pink-rgb: 221, 19, 153 !important;
  --color-purple: rgb(143, 71, 225) !important;
  --color-purple-rgb: 143, 71, 225 !important;
  --color-red: rgb(221, 44, 56) !important;
  --color-red-rgb: 221, 44, 56 !important;
  --color-yellow: rgb(192, 156, 12) !important;
  --color-yellow-rgb: 192, 156, 12 !important;
  --cursor: pointer !important;
  --dark: hsl(232, 6%, 12%) !important;
  --darkgray: hsl(232, 6%, 12%) !important;
  --divider-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --divider-color-hover: hsl(231, 96.96%, 68.8%) !important;
  --dropdown-background: #fcfcfc !important;
  --dropdown-background-hover: #f7f7f7 !important;
  --embed-block-shadow-hover: 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), inset 0 0 0 1px hsla(232, 38.4%, 64%, 0.2) !important;
  --embed-border-radius: 0px !important;
  --embed-border-start: 2px solid hsl(231, 96.96%, 68.8%) !important;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' fill-opacity='.15' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e") !important;
  --flair-background: #fcfcfc !important;
  --flair-color: hsl(232, 6%, 12%) !important;
  --footnote-divider-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --footnote-id-color: hsl(232, 9%, 36%) !important;
  --footnote-id-color-no-occurrences: hsl(232, 12%, 64%) !important;
  --footnote-input-background-active: hsla(232, 6%, 64%, 0.15) !important;
  --frame-right-space: 110px !important;
  --graph-node: hsl(232, 9%, 36%) !important;
  --graph-node-attachment: rgb(192, 156, 12) !important;
  --graph-node-focused: hsl(231, 96.96%, 68.8%) !important;
  --graph-node-tag: rgb(29, 165, 29) !important;
  --graph-node-unresolved: hsl(232, 12%, 64%) !important;
  --graph-text: hsl(232, 6%, 12%) !important;
  --gray: hsl(232, 9%, 36%) !important;
  --grid-background-pattern-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --grid-background-pattern-size: 36px !important;
  --h1-accent-color: rgb(221, 44, 56) !important;
  --h1-size: 1.5em !important;
  --h2-accent-color: rgb(222, 116, 23) !important;
  --h2-size: 1.425em !important;
  --h2-weight: 675 !important;
  --h3-accent-color: rgb(192, 156, 12) !important;
  --h3-size: 1.35em !important;
  --h3-weight: 650 !important;
  --h4-accent-color: rgb(29, 165, 29) !important;
  --h4-size: 1.275em !important;
  --h4-weight: 625 !important;
  --h5-accent-color: rgb(23, 117, 217) !important;
  --h5-size: 1.2em !important;
  --h5-weight: 600 !important;
  --h6-accent-color: rgb(143, 71, 225) !important;
  --h6-size: 1.125em !important;
  --h6-weight: 575 !important;
  --heading-formatting: hsl(232, 12%, 64%) !important;
  --highlight: hsla(232, 6%, 64%, 0.15) !important;
  --hr-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --icon-color: hsl(232, 9%, 36%) !important;
  --icon-color-active: hsl(231, 96.96%, 68.8%) !important;
  --icon-color-focused: hsl(232, 6%, 12%) !important;
  --icon-color-hover: hsl(232, 9%, 36%) !important;
  --inline-code-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --inline-code-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --inline-code-normal: rgb(221, 19, 153) !important;
  --inline-title-size: 1.5em !important;
  --input-date-separator: hsl(232, 12%, 64%) !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsl(232, 12%, 64%) !important;
  --input-radius: 6px !important;
  --input-radius-light: 6px !important;
  --input-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.16), inset 0px -1px 0px rgba(0, 0, 0, 0.04), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12), inset 0px 2px 0.75px rgba(255, 255, 255, 0.4), inset 0px -3px 0.75px rgba(0, 0, 0, 0.04) !important;
  --input-shadow-hover: 0px 4px 8px -4px rgba(0, 0, 0, 0.16), inset 0px -1px 0px rgba(0, 0, 0, 0.04), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12), inset 0px 2px 0.75px rgba(255, 255, 255, 0.4), inset 0px -3px 0.75px rgba(0, 0, 0, 0.04) !important;
  --input-shadow-hover-light: 0px 4px 8px -4px rgba(0, 0, 0, 0.16), inset 0px -1px 0px rgba(0, 0, 0, 0.04), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12), inset 0px 2px 0.75px rgba(255, 255, 255, 0.4), inset 0px -3px 0.75px rgba(0, 0, 0, 0.04) !important;
  --input-shadow-light: 0px 4px 8px -4px rgba(0, 0, 0, 0.16), inset 0px -1px 0px rgba(0, 0, 0, 0.04), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12), inset 0px 2px 0.75px rgba(255, 255, 255, 0.4), inset 0px -3px 0.75px rgba(0, 0, 0, 0.04) !important;
  --interactive-accent: hsl(231, 96.96%, 68.8%) !important;
  --interactive-accent-hover: hsl(229, 97.92%, 73.6%) !important;
  --interactive-accent-hsl: 232,
        96%,
        64% !important;
  --interactive-hover: #f7f7f7 !important;
  --interactive-normal: #fcfcfc !important;
  --italic-color: rgb(222, 116, 23) !important;
  --lightgray: hsl(232,
            16%,
            97.75%) !important;
  --line-height-customize: 1.5 !important;
  --line-normal-opacity: 0.5 !important;
  --link-color: hsl(231, 96.96%, 68.8%) !important;
  --link-color-hover: hsl(229, 97.92%, 73.6%) !important;
  --link-external-color: rgb(23, 117, 217) !important;
  --link-external-color-hover: rgb(23, 117, 217) !important;
  --link-unresolved-color: hsl(231, 96.96%, 68.8%) !important;
  --link-unresolved-decoration-color: hsla(232,
        96%,
        64%, 0.3) !important;
  --list-bullet-size-alt: 0.15em !important;
  --list-indent: 2em !important;
  --list-marker-color: hsl(232, 12%, 64%) !important;
  --list-marker-color-collapsed: hsl(231, 96.96%, 68.8%) !important;
  --list-marker-color-hover: hsl(232, 9%, 36%) !important;
  --menu-background: hsl(232,
            16%,
            97.75%) !important;
  --menu-border-color: hsla(232, 38.4%, 64%, 0.25) !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
        0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --metadata-divider-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --metadata-input-background-active: hsla(232, 6%, 64%, 0.15) !important;
  --metadata-input-text-color: hsl(232, 6%, 12%) !important;
  --metadata-label-background-active: hsla(232, 6%, 64%, 0.15) !important;
  --metadata-label-text-color: hsl(232, 9%, 36%) !important;
  --metadata-label-text-color-hover: hsl(232, 9%, 36%) !important;
  --metadata-property-background-active: hsla(232, 6%, 64%, 0.15) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsla(232, 38.4%, 64%, 0.3) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(232, 38.4%, 64%, 0.25) !important;
  --mix-blend-mode-on-border-dark: screen !important;
  --mix-blend-mode-on-border-light: normal !important;
  --modal-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --nav-collapse-icon-color: hsl(232, 12%, 64%) !important;
  --nav-collapse-icon-color-collapsed: hsl(232, 12%, 64%) !important;
  --nav-heading-color: hsl(232, 6%, 12%) !important;
  --nav-heading-color-collapsed: hsl(232, 12%, 64%) !important;
  --nav-heading-color-collapsed-hover: hsl(232, 9%, 36%) !important;
  --nav-heading-color-hover: hsl(232, 6%, 12%) !important;
  --nav-item-background-active: hsla(232, 6%, 64%, 0.15) !important;
  --nav-item-background-hover: hsla(232, 6%, 64%, 0.15) !important;
  --nav-item-background-selected: hsla(232,
        96%,
        64%, 0.15) !important;
  --nav-item-color: hsl(232, 9%, 36%) !important;
  --nav-item-color-active: hsl(232, 6%, 12%) !important;
  --nav-item-color-highlighted: hsl(231, 96.96%, 68.8%) !important;
  --nav-item-color-hover: hsl(232, 6%, 12%) !important;
  --nav-item-color-selected: hsl(232, 6%, 12%) !important;
  --nav-tag-color: hsl(232, 12%, 64%) !important;
  --nav-tag-color-active: hsl(232, 9%, 36%) !important;
  --nav-tag-color-hover: hsl(232, 9%, 36%) !important;
  --new-tab-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22none%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23000%22%20fill-opacity%3D%22.26%22%20d%3D%22M51.894%2060.617c-.291%202.162-2.41%203.85-4.515%203.267-3-.825-6.474-2.112-9.6-2.352l-4.79-.362a3.163%203.163%200%200%201-2.042-.95l-8.254-8.483a3.15%203.15%200%200%201-.616-3.49S27.18%2037.053%2027.37%2036.47c.19-.582.886-5.66%201.298-8.388a3.153%203.153%200%200%201%201.011-1.875l9.765-8.767a3.165%203.165%200%200%201%204.597.394l8.202%2010.4c.464.59.702%201.32.706%202.07.009%201.97.172%206.016%201.263%208.621%201.062%202.535%203.01%205.272%204.03%206.619.39.517.45%201.216.12%201.773a138.06%20138.06%200%200%201-4.15%206.54c-1.386%202.063-2.028%204.613-2.318%206.761Z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%230E0E0E%22%20d%3D%22M51.602%2060.187c-.292%202.171-2.417%203.867-4.528%203.282-3.008-.829-6.491-2.122-9.626-2.362l-4.803-.365a3.168%203.168%200%200%201-2.048-.953l-8.277-8.523a3.168%203.168%200%200%201-.618-3.504S26.82%2036.515%2027.01%2035.93c.19-.585.888-5.686%201.301-8.427a3.17%203.17%200%200%201%201.015-1.883l9.79-8.807a3.17%203.17%200%200%201%204.61.396l8.226%2010.448c.465.59.704%201.326.707%202.078.01%201.98.173%206.043%201.268%208.66%201.064%202.547%203.018%205.296%204.04%206.65a1.6%201.6%200%200%201%20.12%201.78%20137.46%20137.46%200%200%201-4.16%206.57c-1.39%202.072-2.034%204.634-2.325%206.792Z%22%2F%3E%3Cpath%20fill%3D%22url(%23b)%22%20d%3D%22M31.489%2060.433c3.844-7.804%203.736-13.395%202.1-17.384-1.505-3.672-4.304-5.988-6.51-7.425-.047.208-.115.41-.202.605l-5.175%2011.532a3.168%203.168%200%200%200%20.618%203.505l8.277%208.523c.26.267.562.484.892.644Z%22%2F%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M47.075%2063.469c2.11.585%204.235-1.11%204.527-3.282.252-1.869.769-4.041%201.806-5.936-2.38-5.121-5.256-7.777-8.41-8.954-3.339-1.246-6.987-.835-10.684.063.826%203.76.331%208.673-2.82%2015.073.358.174.75.28%201.154.309%200%200%202.275.191%204.98.383%202.705.191%206.73%201.59%209.447%202.344Z%22%2F%3E%3Cpath%20fill%3D%22url(%23d)%22%20d%3D%22M41.95%2044.595c1.038.108%202.056.332%203.047.702%203.154%201.177%206.032%203.833%208.411%208.954.16-.292.333-.578.519-.855a138.877%20138.877%200%200%200%204.16-6.57%201.603%201.603%200%200%200-.12-1.78c-1.022-1.354-2.976-4.103-4.04-6.65-1.095-2.617-1.258-6.68-1.267-8.66a3.377%203.377%200%200%200-.708-2.079L43.727%2017.21a3.198%203.198%200%200%200-.136-.162c.603%201.978.562%203.569.19%205.015-.345%201.341-.975%202.558-1.641%203.843-.223.43-.45.87-.672%201.323-.884%201.806-1.68%203.85-1.798%206.592-.118%202.74.444%206.179%202.28%2010.774Z%22%2F%3E%3Cpath%20fill%3D%22url(%23e)%22%20d%3D%22M41.948%2044.594c-1.835-4.595-2.398-8.033-2.28-10.774.118-2.742.915-4.786%201.798-6.592.222-.454.45-.893.673-1.324.665-1.285%201.295-2.501%201.64-3.842.373-1.447.414-3.038-.19-5.017a3.17%203.17%200%200%200-4.472-.232l-9.792%208.807a3.17%203.17%200%200%200-1.014%201.883l-1.192%207.902a3.182%203.182%200%200%201-.04.218c2.206%201.438%205.006%203.754%206.511%207.426.294.717.54%201.486.72%202.31%202.6-.632%205.177-1.022%207.638-.765Z%22%2F%3E%3Cg%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%3E%3Cpath%20fill%3D%22url(%23f)%22%20d%3D%22M39.687%2033.638c-.118%202.72.221%205.839%202.053%2010.424l-.575-.052c-1.643-4.785-2.001-7.238-1.881-9.995.12-2.758%201.01-4.879%201.899-6.688.225-.458.75-1.319.974-1.75.665-1.28%201.108-1.955%201.488-3.124.53-1.633.416-2.406.355-3.176.422%202.783-1.178%205.202-2.388%207.667-.882%201.795-1.807%203.976-1.925%206.694Z%22%2F%3E%3Cpath%20fill%3D%22url(%23g)%22%20d%3D%22M34.131%2043.25c.217.502.422.907.552%201.529l-.48.108c-.2-.726-.354-1.242-.63-1.865-1.654-3.902-4.309-5.91-6.478-7.381%202.62%201.41%205.31%203.616%207.036%207.608Z%22%2F%3E%3Cpath%20fill%3D%22url(%23h)%22%20d%3D%22M34.71%2045.27c.917%204.264-.105%209.683-3.118%2014.95%202.518-5.22%203.74-10.234%202.723-14.866l.396-.085Z%22%2F%3E%3Cpath%20fill%3D%22url(%23i)%22%20d%3D%22M45.11%2044.888c4.94%201.848%206.842%205.908%208.264%209.294-1.756-3.546-4.197-7.462-8.441-8.915-3.23-1.106-5.957-.975-10.619.083l-.104-.462c4.948-1.128%207.535-1.26%2010.9%200Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22b%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-5.44827%20-20.95522%2013.96424%20-3.63065%2031.076%2059.662)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23333%22%20stop-opacity%3D%22.52%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22c%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-9.24927%20-16.1868%2016.18663%20-9.24917%2047.535%2064.623)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23565656%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23151515%22%20stop-opacity%3D%22.71%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22d%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(4.6468%20-35.22462%2026.02364%203.433%2049.53%2050.76)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%237E7E7E%22%20stop-opacity%3D%22.91%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231E1E1E%22%20stop-opacity%3D%22.6%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22e%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(13.14708%20-30.29344%2020.65904%208.96583%2034.531%2046.293)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23D7D7D7%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23414141%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22f%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(-3.34584%2015.42817%20-10.40357%20-2.25617%2044.882%2027.895)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.17%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22g%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22matrix(8.17858%208.27172%20-17.61805%2017.41967%2026.387%2036.445)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.44%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22h%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(80.202%20-7.323%2041.856)%20scale(13.634%2028.9518)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.12%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.35%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22i%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientTransform%3D%22rotate(-152.296%2033.168%2019.977)%20scale(20.7745%2065.377)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.21%22%2F%3E%3Cstop%20offset%3D%22.467%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.19%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.29%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%2239.273%22%20height%3D%2249.867%22%20x%3D%2220.551%22%20y%3D%2215.381%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20mode%3D%22normal%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20result%3D%22effect1_foregroundBlur_3584_482%22%20stdDeviation%3D%22.624%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E") !important;
  --on-border-dark: hsla(232, 38.4%, 64%) !important;
  --on-border-light: hsla(232, 38.4%, 64%) !important;
  --pill-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --pill-border-color-hover: hsla(232, 38.4%, 64%, 0.25) !important;
  --pill-color: hsl(232, 9%, 36%) !important;
  --pill-color-hover: hsl(232, 6%, 12%) !important;
  --pill-color-remove: hsl(232, 12%, 64%) !important;
  --pill-color-remove-hover: hsl(231, 96.96%, 68.8%) !important;
  --prompt-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --ribbon-background: hsl(232,
            16%,
            97.75%) !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0) !important;
  --search-clear-button-color: hsl(232, 9%, 36%) !important;
  --search-icon-color: hsl(232, 9%, 36%) !important;
  --search-result-background: transparent !important;
  --secondary: hsl(231, 96.96%, 68.8%) !important;
  --setting-group-heading-color: hsl(232, 6%, 12%) !important;
  --setting-items-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --shadow-activated-file-light: none !important;
  --shadow-activated-tab-header-dark: inset 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), inset 0 2px 4px 0 hsla(232, 38.4%, 64%, 0.1), inset 0 1px 1px 1px hsla(232, 38.4%, 64%, 0.2) !important;
  --shadow-activated-tab-header-light: 0 -1px 0 0 rgba(255, 255, 255, 0.24), 0 0 0 1px hsla(232, 38.4%, 64%, 0.2), 0 0 4px hsla(232, 38.4%, 64%, 0.2), 0px 2px 6px -4px hsla(232, 38.4%, 64%, 0.1), inset 0 -1px 3px 0 hsl(232,
            64%,
            96.4%) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
        0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
        0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --slider-thumb-border-color: hsla(232, 38.4%, 64%, 0.25) !important;
  --slider-thumb-border-width: 0 !important;
  --slider-track-background: hsla(232, 38.4%, 64%, 0.2) !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: transparent !important;
  --status-bar-border-width: 0 !important;
  --status-bar-text-color: hsl(232, 9%, 36%) !important;
  --sync-avatar-color-1: rgb(221, 44, 56) !important;
  --sync-avatar-color-2: rgb(222, 116, 23) !important;
  --sync-avatar-color-3: rgb(192, 156, 12) !important;
  --sync-avatar-color-4: rgb(29, 165, 29) !important;
  --sync-avatar-color-5: rgb(22, 166, 171) !important;
  --sync-avatar-color-6: rgb(23, 117, 217) !important;
  --sync-avatar-color-7: rgb(143, 71, 225) !important;
  --sync-avatar-color-8: rgb(221, 19, 153) !important;
  --tab-background-active: transparent !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: hsla(232, 38.4%, 64%, 0.25) !important;
  --tab-outline-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --tab-switcher-background: hsl(232,
            16%,
            97.75%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(232,
            16%,
            97.75%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(232, 96%, 64%) !important;
  --tab-text-color: hsl(232, 12%, 64%) !important;
  --tab-text-color-active: hsl(232, 9%, 36%) !important;
  --tab-text-color-focused: hsl(232, 9%, 36%) !important;
  --tab-text-color-focused-active: hsl(232, 9%, 36%) !important;
  --tab-text-color-focused-active-current: hsl(232, 6%, 12%) !important;
  --tab-text-color-focused-highlighted: hsl(231, 96.96%, 68.8%) !important;
  --table-add-button-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --table-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --table-drag-handle-background-active: hsl(231, 96.96%, 68.8%) !important;
  --table-drag-handle-color: hsl(232, 12%, 64%) !important;
  --table-header-background-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --table-header-background-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  --table-header-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --table-header-color: hsl(232, 6%, 12%) !important;
  --table-selection: hsla(232,
        96%,
        64%, 0.1) !important;
  --table-selection-border-color: hsl(231, 96.96%, 68.8%) !important;
  --table-width: 88cqw !important;
  --tag-background: hsla(232,
        96%,
        64%, 0.1) !important;
  --tag-background-hover: hsla(232,
        96%,
        64%, 0.2) !important;
  --tag-border-color: hsla(232,
        96%,
        64%, 0.15) !important;
  --tag-border-color-hover: hsla(232,
        96%,
        64%, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl(231, 96.96%, 68.8%) !important;
  --tag-color-hover: hsl(231, 96.96%, 68.8%) !important;
  --tertiary: hsl(229, 97.92%, 73.6%) !important;
  --text-accent: hsl(231, 96.96%, 68.8%) !important;
  --text-accent-hover: hsl(229, 97.92%, 73.6%) !important;
  --text-error: rgb(221, 44, 56) !important;
  --text-faint: hsl(232, 12%, 64%) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: hsl(232, 9%, 36%) !important;
  --text-normal: hsl(232, 6%, 12%) !important;
  --text-selection: hsla(232,
        96%,
        64%, 0.2) !important;
  --text-success: rgb(29, 165, 29) !important;
  --text-warning: rgb(222, 116, 23) !important;
  --textHighlight: hsla(232, 6%, 64%, 0.15) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --titlebar-text-color: hsl(232, 9%, 36%) !important;
  --titlebar-text-color-focused: hsl(232, 6%, 12%) !important;
  --toggle-thumb-color-light: white !important;
  --toggle-thumb-enabled-color: white !important;
  --toggle-thumb-enabled-color-light: white !important;
  --toggle-thumb-enabled-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 4px hsla(232,
        96%,
        64%, 0.15) !important;
  --toggle-thumb-enabled-shadow-light: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 4px hsla(232,
        96%,
        64%, 0.15) !important;
  --toggle-thumb-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 4px rgba(0, 0, 0, 0.05) !important;
  --toggle-thumb-shadow-light: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px -1px 1px rgba(255, 255, 255, 0.4), inset 0px -4px 4px rgba(0, 0, 0, 0.05) !important;
  --toggle-track-color: hsla(232, 38.4%, 64%, 0.25) !important;
  --toggle-track-color-light: hsla(232, 38.4%, 64%, 0.25) !important;
  --toggle-track-enabled-color: hsl(231, 96.96%, 68.8%) !important;
  --toggle-track-enabled-color-light: hsl(231, 96.96%, 68.8%) !important;
  --toggle-track-hovered-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25), 0px 1px 0px #ffffff, 0px 2px 4px rgba(0, 0, 0, 0.04) !important;
  --toggle-track-hovered-shadow-light: inset 0px 1px 2px rgba(0, 0, 0, 0.25), 0px 1px 0px #ffffff, 0px 2px 4px rgba(0, 0, 0, 0.04) !important;
  --toggle-track-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25), 0px 1px 0px #ffffff, 0px 2px 4px rgba(0, 0, 0, 0.04) !important;
  --toggle-track-shadow-light: inset 0px 1px 2px rgba(0, 0, 0, 0.25), 0px 1px 0px #ffffff, 0px 2px 4px rgba(0, 0, 0, 0.04) !important;
  --vault-profile-color: hsl(232, 6%, 12%) !important;
  --vault-profile-color-hover: hsl(232, 6%, 12%) !important;
  --workspace-background-translucent: rgba(246, 246, 246, 0.8) !important;
  --workspace-divider-color: hsla(232, 38.4%, 64%, 0.2) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(128, 137, 198, 0.2);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(29, 29, 32);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 8px -4px, rgba(0, 0, 0, 0.04) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.4) 0px 2px 0.75px 0px inset, rgba(0, 0, 0, 0.04) 0px -3px 0.75px 0px inset;
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
  background-color: rgba(75, 99, 251, 0.1);
  color: rgb(98, 121, 253);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(128, 137, 198, 0.2);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(128, 137, 198, 0.2);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(240, 242, 252);
  color: rgb(29, 29, 32);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(221, 44, 56);
  outline: rgb(221, 44, 56) none 0px;
  text-decoration-color: rgb(221, 44, 56);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(222, 116, 23);
  outline: rgb(222, 116, 23) none 0px;
  text-decoration-color: rgb(222, 116, 23);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(222, 116, 23);
  outline: rgb(222, 116, 23) none 0px;
  text-decoration-color: rgb(222, 116, 23);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(221, 44, 56);
  outline: rgb(221, 44, 56) none 0px;
  text-decoration-color: rgb(221, 44, 56);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(29, 29, 32);
  outline: rgb(29, 29, 32) none 0px;
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body del {
  color: rgb(29, 29, 32);
  outline: rgb(29, 29, 32) none 0px;
  text-decoration-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(152, 155, 174);
  border-radius: 6px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(29, 165, 29);
  border-color: rgb(29, 165, 29);
}

html[saved-theme="light"] body p {
  color: rgb(84, 86, 100);
  outline: rgb(84, 86, 100) none 0px;
  text-decoration-color: rgb(84, 86, 100);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(23, 117, 217);
  outline: rgb(23, 117, 217) none 0px;
  text-decoration-color: rgb(23, 117, 217);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(98, 121, 253);
  outline: rgb(98, 121, 253) none 0px;
  text-decoration-color: rgb(98, 121, 253);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(98, 121, 253);
  outline: rgb(98, 121, 253) none 0px;
  text-decoration: underline rgba(75, 99, 251, 0.3);
  text-decoration-color: rgba(75, 99, 251, 0.3);
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

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
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
  color: rgb(152, 155, 174);
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
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-left-color: rgba(128, 137, 198, 0.2);
  border-right-color: rgba(128, 137, 198, 0.2);
  border-top-color: rgba(128, 137, 198, 0.2);
  color: rgb(29, 29, 32);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(84, 86, 100);
  border-left-color: rgb(84, 86, 100);
  border-right-color: rgb(84, 86, 100);
  border-top-color: rgb(84, 86, 100);
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
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
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
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
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(192, 156, 12);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(192, 156, 12);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(192, 156, 12);
  border-left-color: rgb(192, 156, 12);
  border-right-color: rgb(192, 156, 12);
  border-top-color: rgb(192, 156, 12);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
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
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M15.53 2.41a1.5 1.5 0 0 1 .06 2.12l-8.5 9a1.501 1.501 0 0 1-2.15.03l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12l3.41 3.408 7.44-7.878a1.5 1.5 0 0 1 2.12-.06Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  border-bottom-color: rgb(23, 117, 217);
  border-left-color: rgb(23, 117, 217);
  border-right-color: rgb(23, 117, 217);
  border-top-color: rgb(23, 117, 217);
  color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(23, 117, 217);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 22, 166, 171;
  background-color: rgba(22, 166, 171, 0.1);
  border-bottom-color: rgba(22, 166, 171, 0.25);
  border-left-color: rgba(22, 166, 171, 0.25);
  border-right-color: rgba(22, 166, 171, 0.25);
  border-top-color: rgba(22, 166, 171, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 221, 44, 56;
  background-color: rgba(221, 44, 56, 0.1);
  border-bottom-color: rgba(221, 44, 56, 0.25);
  border-left-color: rgba(221, 44, 56, 0.25);
  border-right-color: rgba(221, 44, 56, 0.25);
  border-top-color: rgba(221, 44, 56, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 221, 44, 56;
  background-color: rgba(221, 44, 56, 0.1);
  border-bottom-color: rgba(221, 44, 56, 0.25);
  border-left-color: rgba(221, 44, 56, 0.25);
  border-right-color: rgba(221, 44, 56, 0.25);
  border-top-color: rgba(221, 44, 56, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 143, 71, 225;
  background-color: rgba(143, 71, 225, 0.1);
  border-bottom-color: rgba(143, 71, 225, 0.25);
  border-left-color: rgba(143, 71, 225, 0.25);
  border-right-color: rgba(143, 71, 225, 0.25);
  border-top-color: rgba(143, 71, 225, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 221, 44, 56;
  background-color: rgba(221, 44, 56, 0.1);
  border-bottom-color: rgba(221, 44, 56, 0.25);
  border-left-color: rgba(221, 44, 56, 0.25);
  border-right-color: rgba(221, 44, 56, 0.25);
  border-top-color: rgba(221, 44, 56, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 23, 117, 217;
  background-color: rgba(23, 117, 217, 0.1);
  border-bottom-color: rgba(23, 117, 217, 0.25);
  border-left-color: rgba(23, 117, 217, 0.25);
  border-right-color: rgba(23, 117, 217, 0.25);
  border-top-color: rgba(23, 117, 217, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 23, 117, 217;
  background-color: rgba(23, 117, 217, 0.1);
  border-bottom-color: rgba(23, 117, 217, 0.25);
  border-left-color: rgba(23, 117, 217, 0.25);
  border-right-color: rgba(23, 117, 217, 0.25);
  border-top-color: rgba(23, 117, 217, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 222, 116, 23;
  background-color: rgba(222, 116, 23, 0.1);
  border-bottom-color: rgba(222, 116, 23, 0.25);
  border-left-color: rgba(222, 116, 23, 0.25);
  border-right-color: rgba(222, 116, 23, 0.25);
  border-top-color: rgba(222, 116, 23, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 29, 165, 29;
  background-color: rgba(29, 165, 29, 0.1);
  border-bottom-color: rgba(29, 165, 29, 0.25);
  border-left-color: rgba(29, 165, 29, 0.25);
  border-right-color: rgba(29, 165, 29, 0.25);
  border-top-color: rgba(29, 165, 29, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 22, 166, 171;
  background-color: rgba(22, 166, 171, 0.1);
  border-bottom-color: rgba(22, 166, 171, 0.25);
  border-left-color: rgba(22, 166, 171, 0.25);
  border-right-color: rgba(22, 166, 171, 0.25);
  border-top-color: rgba(22, 166, 171, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 23, 117, 217;
  background-color: rgba(23, 117, 217, 0.1);
  border-bottom-color: rgba(23, 117, 217, 0.25);
  border-left-color: rgba(23, 117, 217, 0.25);
  border-right-color: rgba(23, 117, 217, 0.25);
  border-top-color: rgba(23, 117, 217, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 222, 116, 23;
  background-color: rgba(222, 116, 23, 0.1);
  border-bottom-color: rgba(222, 116, 23, 0.25);
  border-left-color: rgba(222, 116, 23, 0.25);
  border-right-color: rgba(222, 116, 23, 0.25);
  border-top-color: rgba(222, 116, 23, 0.25);
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
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgba(246, 246, 246, 0.8);
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-left-color: rgba(128, 137, 198, 0.2);
  border-right-color: rgba(128, 137, 198, 0.2);
  border-top-color: rgba(128, 137, 198, 0.2);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
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
  background-color: rgba(158, 159, 169, 0.15);
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
  background-color: rgba(158, 159, 169, 0.15);
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(158, 159, 169, 0.15);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(75, 99, 251, 0.1);
  border-bottom-color: rgba(75, 99, 251, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(75, 99, 251, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(75, 99, 251, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(75, 99, 251, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(98, 121, 253);
}

html[saved-theme="light"] body h1 {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body h2 {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body h3 {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body h4 {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body h5 {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body h6 {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-left-color: rgba(128, 137, 198, 0.2);
  border-right-color: rgba(128, 137, 198, 0.2);
  border-top-color: rgba(128, 137, 198, 0.2);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 23, 117, 217;
  border-bottom-color: rgba(23, 117, 217, 0.25);
  border-left-color: rgba(23, 117, 217, 0.25);
  border-right-color: rgba(23, 117, 217, 0.25);
  border-top-color: rgba(23, 117, 217, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(240, 242, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 242, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(240, 242, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 242, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(240, 242, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 242, 252);
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(240, 242, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 242, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(240, 242, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 242, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(240, 242, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 242, 252);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(84, 86, 100);
  cursor: pointer;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(84, 86, 100);
  cursor: pointer;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(29, 29, 32);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(84, 86, 100);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(84, 86, 100);
  border-right-color: rgb(84, 86, 100);
  border-top-color: rgb(84, 86, 100);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(84, 86, 100);
  cursor: pointer;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(128, 137, 198);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(128, 137, 198);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(84, 86, 100);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(128, 137, 198);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(128, 137, 198);
  border-right-color: rgb(128, 137, 198);
  border-top-color: rgb(128, 137, 198);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(128, 137, 198);
  cursor: pointer;
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
  color: rgb(152, 155, 174);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(29, 29, 32);
  border-left-color: rgb(29, 29, 32);
  border-right-color: rgb(29, 29, 32);
  border-top-color: rgb(29, 29, 32);
  color: rgb(29, 29, 32);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(128, 137, 198, 0.2);
  border-left-color: rgba(128, 137, 198, 0.2);
  border-right-color: rgba(128, 137, 198, 0.2);
  border-top-color: rgba(128, 137, 198, 0.2);
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(84, 86, 100);
  border-left-color: rgb(84, 86, 100);
  border-right-color: rgb(84, 86, 100);
  border-top-color: rgb(84, 86, 100);
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(29, 29, 32);
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
  color: rgb(84, 86, 100);
}

html[saved-theme="light"] body kbd {
  background-color: rgba(158, 159, 169, 0.15);
  border-bottom-color: rgb(84, 86, 100);
  border-left-color: rgb(84, 86, 100);
  border-right-color: rgb(84, 86, 100);
  border-top-color: rgb(84, 86, 100);
  color: rgb(84, 86, 100);
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
  background-color: rgba(75, 99, 251, 0.1);
  border-bottom-color: rgba(75, 99, 251, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(75, 99, 251, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(75, 99, 251, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(75, 99, 251, 0.15);
  border-top-width: 1px;
  color: rgb(98, 121, 253);
}`,
  },
};
