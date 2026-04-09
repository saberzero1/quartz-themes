import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "faded", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --Blue-Accent-1: #2799ad !important;
  --Blue-Accent-1-Lite: #16bfe0 !important;
  --Blue-Accent-2: #2f61ac !important;
  --Blue-Accent-2-Dark: #2255a1 !important;
  --Blue-Grey-Accent-1: #8292a2 !important;
  --FA6Regular: 'Font Awesome 6 Free Regular' !important;
  --FA6Solid: 'Font Awesome 6 Free Solid' !important;
  --Gold-Accent-1: #d6ba7c !important;
  --Gold-Accent-1-Lite: #ddc48e !important;
  --Gold-Accent-1-Liter: #e4d1aa !important;
  --Gold-Accent-1-Litest: #f1e4c8 !important;
  --Grey-Accent-1: #1a1e24 !important;
  --Grey-Accent-1-Dark: #14171b !important;
  --Grey-Accent-1-Darken: #171a1f !important;
  --Grey-Accent-1-Darker: #0b0f13 !important;
  --Grey-Accent-1-Darker-Darken: #090c0f !important;
  --Grey-Accent-1-Darkest: #050708 !important;
  --Grey-Accent-1-Lighten: #232830 !important;
  --Grey-Accent-1-Lite: #252b33 !important;
  --Grey-Accent-1-Lite-Lighten: #2f3641 !important;
  --Grey-Accent-2: #919191 !important;
  --Grey-Accent-3: #2a2c2d !important;
  --Grey-Accent-3-Dark: #121415 !important;
  --Grey-Accent-3-Lite: #414344 !important;
  --Minimum-Page-Width: 700px !important;
  --Purple-Accent-1: #797fd8 !important;
  --Purple-Accent-2: #ae81ff !important;
  --Red-Accent-1: #ad3939 !important;
  --Red-Accent-1-Dark: #963232 !important;
  --Red-Accent-1-Darker: #752727 !important;
  --Red-Accent-1-Darkest: #461818 !important;
  --Red-Accent-1-Darkest-Lighten: #521c1c !important;
  --Red-Accent-1-Lighten: #b34141 !important;
  --Red-Accent-1-Lite: #b94a4a !important;
  --Red-Accent-2: #aa3c5d !important;
  --White-00: #dcddde !important;
  --White-Accent-2: #aab3ca !important;
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --amber-100: #fef3c7 !important;
  --amber-200: #fde68a !important;
  --amber-300: #fcd34d !important;
  --amber-400: #fbbf24 !important;
  --amber-50: #fffbeb !important;
  --amber-500: #f59e0b !important;
  --amber-600: #d97706 !important;
  --amber-700: #b45309 !important;
  --amber-800: #92400e !important;
  --amber-900: #78350f !important;
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15) !important;
  --background-modifier-border-focus: #555 !important;
  --background-modifier-border-hover: #3F3F3F !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-modifier-success: #44CF6E !important;
  --background-primary: #1a1e24 !important;
  --background-primary-active: #232830 !important;
  --background-primary-alt: #14171b !important;
  --background-secondary: #14171b !important;
  --background-secondary-alt: #050708 !important;
  --bases-cards-background: #1a1e24 !important;
  --bases-cards-cover-background: #14171b !important;
  --bases-cards-shadow-hover: 0 0 0 1px #3F3F3F !important;
  --bases-group-heading-property-color: #bababa !important;
  --bases-table-cell-background-active: #1a1e24 !important;
  --bases-table-cell-background-disabled: #14171b !important;
  --bases-table-cell-background-selected: hsla(254,
                80%,
                68%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #555 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #d6ba7c !important;
  --bases-table-group-background: #14171b !important;
  --bases-table-header-background: #1a1e24 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #bababa !important;
  --bases-table-summary-background: #1a1e24 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --black: #000000 !important;
  --blockquote-background-color: #171a1f !important;
  --blockquote-border-color: #000000 !important;
  --blue-100: #dbeafe !important;
  --blue-200: #bfdbfe !important;
  --blue-300: #93c5fd !important;
  --blue-400: #60a5fa !important;
  --blue-50: #eff6ff !important;
  --blue-500: #3b82f6 !important;
  --blue-600: #2563eb !important;
  --blue-700: #1d4ed8 !important;
  --blue-800: #1e40af !important;
  --blue-900: #1e3a8a !important;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent)) !important;
  --bold-weight: 600 !important;
  --callout-blend-mode: normal;
  --callout-gap: 0.5rem;
  --callout-margin: 5px;
  --callout-min-width: 200px;
  --canvas-background: #1a1e24 !important;
  --canvas-card-label-color: #666 !important;
  --checkbox-border-color: #666 !important;
  --checkbox-border-color-hover: #bababa !important;
  --checkbox-color: #d6ba7c !important;
  --checkbox-color-hover: rgba(255, 255, 255, 0) !important;
  --checkbox-marker-color: #d6ba7c !important;
  --checkbox-size: 15px !important;
  --checklist-done-color: #666 !important;
  --checklist-done-decoration: none !important;
  --code-background: #14171b !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: #666 !important;
  --code-function: #E0DE71 !important;
  --code-important: #E9973F !important;
  --code-keyword: #FA99CD !important;
  --code-normal: #d6ba7c !important;
  --code-property: #53DFDD !important;
  --code-punctuation: #bababa !important;
  --code-string: #44CF6E !important;
  --col-rule-color: #363636 !important;
  --col-rule-width: 1px !important;
  --collapse-icon-color: #dadada !important;
  --collapse-icon-color-collapsed: #ffffff !important;
  --color-accent: #d6ba7c !important;
  --color-accent-1: #d6ba7c !important;
  --color-accent-2: #ffdd93 !important;
  --color-accent-hsl: 254,
                80%,
                68% !important;
  --color-base-35: #3F3F3F !important;
  --color-base-40: #555 !important;
  --color-base-50: #666 !important;
  --color-base-60: #999 !important;
  --color-base-70: #bababa !important;
  --color-cyan: #53DFDD !important;
  --color-green: #44CF6E !important;
  --color-orange: #E9973F !important;
  --color-pink: #FA99CD !important;
  --color-yellow: #E0DE71 !important;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11 !important;
  --custom-admonition-border-color: #050708 !important;
  --custom-background-tertiary: #0c0f11 !important;
  --custom-black-100: #58606d !important;
  --custom-black-200: #4a525f !important;
  --custom-black-300: #2f3641 !important;
  --custom-black-400: #252b33 !important;
  --custom-black-500: #232830 !important;
  --custom-black-600: #1a1e24 !important;
  --custom-black-700: #171a1f !important;
  --custom-black-800: #14171b !important;
  --custom-black-850: #0c0f11 !important;
  --custom-black-900: #090c0f !important;
  --custom-black-950: #050708 !important;
  --custom-blockquote-border-accent-color: #963232 !important;
  --custom-callout-background-color: #171a1f !important;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff !important;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c !important;
  --custom-checkbox-background-gradient-degree-checked: 45deg !important;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0) !important;
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0) !important;
  --custom-checkbox-border-image-gradient-color-2-checked: #963232 !important;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232 !important;
  --custom-checkbox-border-image-gradient-degree-checked: 45deg !important;
  --custom-checkbox-border-image-gradient-degree-unchecked: 45deg !important;
  --custom-code-border-color: #000000 !important;
  --custom-file-icon: #aab3ca !important;
  --custom-file-icon-hover: #dcddde !important;
  --custom-folder-file-icon-rename: #ffffff !important;
  --custom-folder-icon-closed: #963232 !important;
  --custom-folder-icon-hover: #b94a4a !important;
  --custom-folder-icon-open: #ad3939 !important;
  --custom-font-size: 0.95em !important;
  --custom-formatting-link-edit-color: #752727 !important;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b) !important;
  --custom-gold-2-500: #d6ba7c !important;
  --custom-gold-2-750: #f3d28c !important;
  --custom-gold-2-950: #ffdd93 !important;
  --custom-gold-250: #f1e4c8 !important;
  --custom-gold-500: #e4d1aa !important;
  --custom-gold-750: #ddc48e !important;
  --custom-gold-950: #d6ba7c !important;
  --custom-gradientDegree: 135deg !important;
  --custom-grey-100: #d6deea !important;
  --custom-grey-250: #919191 !important;
  --custom-grey-500: #414344 !important;
  --custom-grey-750: #2a2c2d !important;
  --custom-grey-950: #121415 !important;
  --custom-h1-gradiant-1: #ffdd93 !important;
  --custom-h1-gradiant-1-percent: 0 !important;
  --custom-h1-gradiant-2: #f87171 !important;
  --custom-h1-gradiant-2-percent: 30% !important;
  --custom-h1-gradiant-inline-1-percent: 0 !important;
  --custom-h1-gradiant-inline-2-percent: 100% !important;
  --custom-h2-gradiant-1: #fca5a5 !important;
  --custom-h2-gradiant-1-percent: 0 !important;
  --custom-h2-gradiant-2: #ec4899 !important;
  --custom-h2-gradiant-2-percent: 30% !important;
  --custom-h2-gradiant-inline-1-percent: 0 !important;
  --custom-h2-gradiant-inline-2-percent: 100% !important;
  --custom-h3-gradiant-1: #f472b6 !important;
  --custom-h3-gradiant-1-percent: 0 !important;
  --custom-h3-gradiant-2: #d946ef !important;
  --custom-h3-gradiant-2-percent: 30% !important;
  --custom-h3-gradiant-inline-1-percent: 0 !important;
  --custom-h3-gradiant-inline-2-percent: 100% !important;
  --custom-h4-gradiant-1: #e879f9 !important;
  --custom-h4-gradiant-1-percent: 0 !important;
  --custom-h4-gradiant-2: #3b82f6 !important;
  --custom-h4-gradiant-2-percent: 30% !important;
  --custom-h4-gradiant-inline-1-percent: 0 !important;
  --custom-h4-gradiant-inline-2-percent: 100% !important;
  --custom-h5-gradiant-1: #60a5fa !important;
  --custom-h5-gradiant-1-percent: 0 !important;
  --custom-h5-gradiant-2: #67e8f9 !important;
  --custom-h5-gradiant-2-percent: 30% !important;
  --custom-h5-gradiant-inline-1-percent: 0 !important;
  --custom-h5-gradiant-inline-2-percent: 100% !important;
  --custom-h6-gradiant-1: #a5f3fc !important;
  --custom-h6-gradiant-1-percent: 0 !important;
  --custom-h6-gradiant-2: #4ade80 !important;
  --custom-h6-gradiant-2-percent: 30% !important;
  --custom-h6-gradiant-inline-1-percent: 0 !important;
  --custom-h6-gradiant-inline-2-percent: 100% !important;
  --custom-heading-filter-brightness: .9 !important;
  --custom-heading-filter-contrast: 1.25 !important;
  --custom-heading-filter-drop-shadow-blur: 6px !important;
  --custom-heading-filter-drop-shadow-color: black !important;
  --custom-heading-filter-saturate: 1.15 !important;
  --custom-highlight-bg-color: #461818 !important;
  --custom-inline-heading-border-color: #050708 !important;
  --custom-inline-heading-border-style: solid !important;
  --custom-inline-heading-border-width: 1px !important;
  --custom-inline-heading-box-shadow-inset-blur: 0px !important;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca !important;
  --custom-inline-heading-box-shadow-inset-width: 1px !important;
  --custom-inline-heading-box-shadow-outer-blur: 0px !important;
  --custom-inline-heading-box-shadow-outer-color: #050708 !important;
  --custom-inline-heading-box-shadow-outer-width: 0px !important;
  --custom-inline-heading-color: #14171b !important;
  --custom-interactive-accent-active: #ffdd93 !important;
  --custom-link-background-color: #461818 !important;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde !important;
  --custom-link-edit-color: #ffdd93 !important;
  --custom-link-hover-animation-color-1: #ffffff !important;
  --custom-link-hover-animation-color-2: #aab3ca !important;
  --custom-link-hover-animation-color-3: #d6ba7c !important;
  --custom-link-radius: 4px !important;
  --custom-list-bullet-color: #963232 !important;
  --custom-list-bullet-color-even: #919191 !important;
  --custom-list-bullet-content: "\\e802" !important;
  --custom-list-bullet-family: 'its' !important;
  --custom-list-bullet-font-size: 16px !important;
  --custom-list-line-color-even: #919191 !important;
  --custom-list-line-color-odd: #963232 !important;
  --custom-list-line-width: 2px !important;
  --custom-match-found-indicator-color: #ffffff !important;
  --custom-no-match-found-input-color: #963232 !important;
  --custom-no-match-found-input-color-hover: #521c1c !important;
  --custom-ol-list-font-weight: 500 !important;
  --custom-ordered-list-bullet-color: #d6ba7c !important;
  --custom-outliner-indent-lines-color: #ad3939 !important;
  --custom-outliner-indent-lines-color-hover: #d6ba7c !important;
  --custom-outliner-indent-lines-width: 1px !important;
  --custom-red-2-500: #aa3c5d !important;
  --custom-red-300: #b94a4a !important;
  --custom-red-300-hsl: 0, 44%, 51% !important;
  --custom-red-400: #b34141 !important;
  --custom-red-400-hsl: 0, 47%, 48% !important;
  --custom-red-500: #ad3939 !important;
  --custom-red-500-hsl: 0, 50%, 45% !important;
  --custom-red-600: #963232 !important;
  --custom-red-600-hsl: 0, 50%, 39% !important;
  --custom-red-700: #752727 !important;
  --custom-red-700-hsl: 0, 50%, 31% !important;
  --custom-red-800: #521c1c !important;
  --custom-red-800-hsl: 0, 49%, 22% !important;
  --custom-red-900: #461818 !important;
  --custom-red-900-hsl: 0, 49%, 18% !important;
  --custom-scrollbar-acive-track: #121415 !important;
  --custom-scrollbar-height: 12px !important;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c !important;
  --custom-scrollbar-thumb-bg-window-inactive: #414344 !important;
  --custom-scrollbar-track-bg-hover: #121415 !important;
  --custom-scrollbar-track-bg-window-inactive: #121415 !important;
  --custom-scrollbar-width: 12px !important;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f) !important;
  --custom-tag-box-shadow-color: #dcddde !important;
  --custom-tag-hover-animation-color-1: #ffffff !important;
  --custom-tag-hover-animation-color-2: #aab3ca !important;
  --custom-tag-hover-animation-color-3: #d6ba7c !important;
  --custom-text-highlight-bg: rgba(168, 60, 60, 0.4) !important;
  --custom-text-highlight-bg-active: rgba(253, 115, 115, 0.4) !important;
  --custom-text-highlight-box-shadow-active: #ffdd93 !important;
  --custom-titlebar-drop-shadow: drop-shadow(0px 2px 3px black) drop-shadow(0px 2px 6px black) !important;
  --custom-white-100: #dcddde !important;
  --custom-white-2-100: #f2f3f3 !important;
  --custom-white-2-200: #e8eaeb !important;
  --custom-white-2-300: #dcddde !important;
  --custom-white-2-400: #cccfd1 !important;
  --custom-white-2-500: #bfc2c4 !important;
  --custom-white-2-600: #adb0b3 !important;
  --custom-white-2-700: #9a9c9e !important;
  --custom-white-2-800: #87898b !important;
  --custom-white-2-900: #777b7e !important;
  --custom-white-200: #aab3ca !important;
  --cyan-100: #cffafe !important;
  --cyan-200: #a5f3fc !important;
  --cyan-300: #67e8f9 !important;
  --cyan-400: #22d3ee !important;
  --cyan-50: #ecfeff !important;
  --cyan-500: #06b6d4 !important;
  --cyan-600: #0891b2 !important;
  --cyan-700: #0e7490 !important;
  --cyan-800: #155e75 !important;
  --cyan-900: #164e63 !important;
  --dark: #bababa !important;
  --darkgray: #bababa !important;
  --divider-color-hover: #d6ba7c !important;
  --dropdown-background: #1e1e1e !important;
  --dropdown-background-hover: #242424 !important;
  --embed-block-shadow-hover: 0 0 0 1px #363636,
      inset 0 0 0 1px #363636 !important;
  --embed-border-left: 2px solid #d6ba7c !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid #d6ba7c !important;
  --emerald-100: #d1fae5 !important;
  --emerald-200: #a7f3d0 !important;
  --emerald-300: #6ee7b7 !important;
  --emerald-400: #34d399 !important;
  --emerald-50: #ecfdf5 !important;
  --emerald-500: #10b981 !important;
  --emerald-600: #059669 !important;
  --emerald-700: #047857 !important;
  --emerald-800: #065f46 !important;
  --emerald-900: #064e3b !important;
  --file-header-background: #1a1e24 !important;
  --file-header-background-focused: #1a1e24 !important;
  --file-margins: 32px !important;
  --flair-background: #1e1e1e !important;
  --float-large-width: 600px !important;
  --float-medium-width: 400px !important;
  --float-small-width: 300px !important;
  --font: "Cuprum" !important;
  --footnote-id-color: #bababa !important;
  --footnote-id-color-no-occurrences: #666 !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --fuchsia-100: #fae8ff !important;
  --fuchsia-200: #f5d0fe !important;
  --fuchsia-300: #f0abfc !important;
  --fuchsia-400: #e879f9 !important;
  --fuchsia-50: #fdf4ff !important;
  --fuchsia-500: #d946ef !important;
  --fuchsia-600: #c026d3 !important;
  --fuchsia-700: #a21caf !important;
  --fuchsia-800: #86198f !important;
  --fuchsia-900: #701a75 !important;
  --graph-line: #3F3F3F !important;
  --graph-node: #bababa !important;
  --graph-node-attachment: #E0DE71 !important;
  --graph-node-focused: #d6ba7c !important;
  --graph-node-tag: #44CF6E !important;
  --graph-node-unresolved: #666 !important;
  --gray: #bababa !important;
  --gray-100: #f3f4f6 !important;
  --gray-200: #e5e7eb !important;
  --gray-300: #d1d5db !important;
  --gray-400: #9ca3af !important;
  --gray-50: #f9fafb !important;
  --gray-500: #6b7280 !important;
  --gray-600: #4b5563 !important;
  --gray-700: #374151 !important;
  --gray-800: #1f2937 !important;
  --gray-900: #111827 !important;
  --green-100: #dcfce7 !important;
  --green-200: #bbf7d0 !important;
  --green-300: #86efac !important;
  --green-400: #4ade80 !important;
  --green-50: #f0fdf4 !important;
  --green-500: #22c55e !important;
  --green-600: #16a34a !important;
  --green-700: #15803d !important;
  --green-800: #166534 !important;
  --green-900: #14532d !important;
  --h1-size: 2em !important;
  --h2-size: 1.6em !important;
  --h2-weight: 700 !important;
  --h3-size: 1.37em !important;
  --h3-weight: 700 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 700 !important;
  --h5-size: 1.12em !important;
  --h5-weight: 700 !important;
  --h6-size: 1.12em !important;
  --h6-weight: 700 !important;
  --heading-formatting: #666 !important;
  --highlight: rgba(255, 255, 255, 0.075) !important;
  --highlight-mix-blend-mode: normal !important;
  --hr-color: #d6ba7c !important;
  --icon-color: #bababa !important;
  --icon-color-active: #d6ba7c !important;
  --icon-color-hover: #d6ba7c !important;
  --indigo-100: #e0e7ff !important;
  --indigo-200: #c7d2fe !important;
  --indigo-300: #a5b4fc !important;
  --indigo-400: #818cf8 !important;
  --indigo-50: #eef2ff !important;
  --indigo-500: #6366f1 !important;
  --indigo-600: #4f46e5 !important;
  --indigo-700: #4338ca !important;
  --indigo-800: #3730a3 !important;
  --indigo-900: #312e81 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #666 !important;
  --input-placeholder-color: #666 !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
            0 2px 4px 0 rgba(0, 0, 0, 0.15),
            0 1px 1.5px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.2),
            0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
            0 2px 3px 0 rgba(0, 0, 0, 0.3),
            0 1px 1.5px 0 rgba(0, 0, 0, 0.2),
            0 1px 2px 0 rgba(0, 0, 0, 0.4),
            0 0 0 0 transparent !important;
  --interactive-accent: #d6ba7c !important;
  --interactive-accent-hover: #e4d1aa !important;
  --interactive-accent-hsl: 254,
                80%,
                68% !important;
  --interactive-hover: #242424 !important;
  --interactive-normal: #1e1e1e !important;
  --its: 'its' !important;
  --light: #1a1e24 !important;
  --lightgray: #14171b !important;
  --lime-100: #ecfccb !important;
  --lime-200: #d9f99d !important;
  --lime-300: #bef264 !important;
  --lime-400: #a3e635 !important;
  --lime-50: #f7fee7 !important;
  --lime-500: #84cc16 !important;
  --lime-600: #65a30d !important;
  --lime-700: #4d7c0f !important;
  --lime-800: #3f6212 !important;
  --lime-900: #365314 !important;
  --link-color: #dcddde !important;
  --link-color-hover: rgb(255, 255, 255) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #d6ba7c !important;
  --link-external-color-hover: #ffdd93 !important;
  --link-unresolved-color: #666 !important;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3) !important;
  --list-bullet-size: 5px !important;
  --list-grid-min-width: 250px !important;
  --list-indent: 2em !important;
  --list-marker-color: transparent !important;
  --list-marker-color-collapsed: #d6ba7c !important;
  --list-marker-color-hover: #bababa !important;
  --list-min-width: 200px !important;
  --mcl-card-bg-color: #14171b !important;
  --mcl-card-border-color: #363636 !important;
  --mcl-card-border-width: 1px !important;
  --mcl-card-gap: 0.2em !important;
  --mcl-card-header-border-width: 1px !important;
  --menu-background: #14171b !important;
  --menu-border-color: #3F3F3F !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-text-color: #bababa !important;
  --metadata-label-text-color-hover: #bababa !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #555 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3F3F3F !important;
  --modal-background: #1a1e24 !important;
  --modal-border-color: #555 !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: #dadada !important;
  --nav-collapse-icon-color-collapsed: #666 !important;
  --nav-heading-color-collapsed: #666 !important;
  --nav-heading-color-collapsed-hover: #bababa !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: hsla(254,
                80%,
                68%, 0.2) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #bababa !important;
  --nav-item-color-highlighted: #ffdd93 !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #666 !important;
  --nav-tag-color-active: #bababa !important;
  --nav-tag-color-hover: #bababa !important;
  --neutral-100: #f5f5f5 !important;
  --neutral-200: #e5e5e5 !important;
  --neutral-300: #d4d4d4 !important;
  --neutral-400: #a3a3a3 !important;
  --neutral-50: #fafafa !important;
  --neutral-500: #737373 !important;
  --neutral-600: #525252 !important;
  --neutral-700: #404040 !important;
  --neutral-800: #262626 !important;
  --neutral-900: #171717 !important;
  --orange-100: #ffedd5 !important;
  --orange-200: #fed7aa !important;
  --orange-300: #fdba74 !important;
  --orange-400: #fb923c !important;
  --orange-50: #fff7ed !important;
  --orange-500: #f97316 !important;
  --orange-600: #ea580c !important;
  --orange-700: #c2410c !important;
  --orange-800: #9a3412 !important;
  --orange-900: #7c2d12 !important;
  --pdf-background: #1a1e24 !important;
  --pdf-page-background: #1a1e24 !important;
  --pdf-sidebar-background: #1a1e24 !important;
  --pill-border-color-hover: #3F3F3F !important;
  --pill-color: #bababa !important;
  --pill-color-remove: #666 !important;
  --pill-color-remove-hover: #d6ba7c !important;
  --pink-100: #fce7f3 !important;
  --pink-200: #fbcfe8 !important;
  --pink-300: #f9a8d4 !important;
  --pink-400: #f472b6 !important;
  --pink-50: #fdf2f8 !important;
  --pink-500: #ec4899 !important;
  --pink-600: #db2777 !important;
  --pink-700: #be185d !important;
  --pink-800: #9d174d !important;
  --pink-900: #831843 !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #1a1e24 !important;
  --prompt-border-color: #555 !important;
  --pure-black: rgb(0, 0, 0) !important;
  --pure-white: rgb(255, 255, 255) !important;
  --purple-100: #f3e8ff !important;
  --purple-200: #e9d5ff !important;
  --purple-300: #d8b4fe !important;
  --purple-400: #c084fc !important;
  --purple-50: #faf5ff !important;
  --purple-500: #a855f7 !important;
  --purple-600: #9333ea !important;
  --purple-700: #7e22ce !important;
  --purple-800: #6b21a8 !important;
  --purple-900: #581c87 !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent)) !important;
  --red-100: #fee2e2 !important;
  --red-200: #fecaca !important;
  --red-300: #fca5a5 !important;
  --red-400: #f87171 !important;
  --red-50: #fef2f2 !important;
  --red-500: #ef4444 !important;
  --red-600: #dc2626 !important;
  --red-700: #b91c1c !important;
  --red-800: #991b1b !important;
  --red-900: #7f1d1d !important;
  --ribbon-background: #0c0f11 !important;
  --ribbon-background-collapsed: #1a1e24 !important;
  --rose-100: #ffe4e6 !important;
  --rose-200: #fecdd3 !important;
  --rose-300: #fda4af !important;
  --rose-400: #fb7185 !important;
  --rose-50: #fff1f2 !important;
  --rose-500: #f43f5e !important;
  --rose-600: #e11d48 !important;
  --rose-700: #be123c !important;
  --rose-800: #9f1239 !important;
  --rose-900: #881337 !important;
  --scrollbar-active-thumb-bg: #d6ba7c !important;
  --scrollbar-bg: #121415 !important;
  --scrollbar-radius: 10px !important;
  --scrollbar-thumb-bg: #414344 !important;
  --search-clear-button-color: #bababa !important;
  --search-icon-color: #bababa !important;
  --search-result-background: #1a1e24 !important;
  --secondary: #d6ba7c !important;
  --setting-items-background: #14171b !important;
  --setting-items-radius: 10px !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
            0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
            0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --sky-100: #e0f2fe !important;
  --sky-200: #bae6fd !important;
  --sky-300: #7dd3fc !important;
  --sky-400: #38bdf8 !important;
  --sky-50: #f0f9ff !important;
  --sky-500: #0ea5e9 !important;
  --sky-600: #0284c7 !important;
  --sky-700: #0369a1 !important;
  --sky-800: #075985 !important;
  --sky-900: #0c4a6e !important;
  --slate-100: #f1f5f9 !important;
  --slate-200: #e2e8f0 !important;
  --slate-300: #cbd5e1 !important;
  --slate-400: #94a3b8 !important;
  --slate-50: #f8fafc !important;
  --slate-500: #64748b !important;
  --slate-600: #475569 !important;
  --slate-700: #334155 !important;
  --slate-800: #1e293b !important;
  --slate-900: #0f172a !important;
  --slider-thumb-border-color: #3F3F3F !important;
  --slider-thumb-radius: 50% !important;
  --status-bar-background: #0c0f11 !important;
  --status-bar-border-width: 1px 0 1px 0px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #bababa !important;
  --stone-100: #f5f5f4 !important;
  --stone-200: #e7e5e4 !important;
  --stone-300: #d6d3d1 !important;
  --stone-400: #a8a29e !important;
  --stone-50: #fafaf9 !important;
  --stone-500: #78716c !important;
  --stone-600: #57534e !important;
  --stone-700: #44403c !important;
  --stone-800: #292524 !important;
  --stone-900: #1c1917 !important;
  --suggestion-background: #1a1e24 !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-2: #E9973F !important;
  --sync-avatar-color-3: #E0DE71 !important;
  --sync-avatar-color-4: #44CF6E !important;
  --sync-avatar-color-5: #53DFDD !important;
  --sync-avatar-color-8: #FA99CD !important;
  --tab-background-active: #1a1e24 !important;
  --tab-container-background: #14171b !important;
  --tab-divider-color: #3F3F3F !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #14171b !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c !important;
  --tab-text-color: #bababa !important;
  --tab-text-color-active: #bababa !important;
  --tab-text-color-focused: #bababa !important;
  --tab-text-color-focused-active: #dadada !important;
  --tab-text-color-focused-highlighted: #d6ba7c !important;
  --table-drag-handle-background-active: #d6ba7c !important;
  --table-drag-handle-color: #666 !important;
  --table-drag-handle-color-active: #232830 !important;
  --table-header-color: #ffffff !important;
  --table-header-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 400 !important;
  --table-selection: hsla(254,
                80%,
                68%, 0.1) !important;
  --table-selection-blend-mode: normal !important;
  --table-selection-border-color: #d6ba7c !important;
  --table-white-space: normal !important;
  --tag-background: #14171b !important;
  --tag-background-hover: #14171b !important;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15) !important;
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15) !important;
  --tag-color: #ad3939 !important;
  --tag-color-hover: #ffffff !important;
  --tag-padding-x: 4px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 4px !important;
  --tag-size: 0.95em !important;
  --teal-100: #ccfbf1 !important;
  --teal-200: #99f6e4 !important;
  --teal-300: #5eead4 !important;
  --teal-400: #2dd4bf !important;
  --teal-50: #f0fdfa !important;
  --teal-500: #14b8a6 !important;
  --teal-600: #0d9488 !important;
  --teal-700: #0f766e !important;
  --teal-800: #115e59 !important;
  --teal-900: #134e4a !important;
  --tertiary: #ffdd93 !important;
  --text-accent: #d6ba7c !important;
  --text-accent-hover: #ffdd93 !important;
  --text-faint: #666 !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #bababa !important;
  --text-on-accent: #232830 !important;
  --text-selection: hsla(0, 50%, 45%, 0.25) !important;
  --text-success: #44CF6E !important;
  --text-warning: #E9973F !important;
  --textHighlight: rgba(255, 255, 255, 0.075) !important;
  --titlebar-background: #0c0f11 !important;
  --titlebar-background-focused: #050708 !important;
  --titlebar-text-color: #bababa !important;
  --titlebar-text-color-highlighted: #ffdd93 !important;
  --transparent: rgba(255, 255, 255, 0) !important;
  --vault-name-color: #dadada !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --violet-100: #ede9fe !important;
  --violet-200: #ddd6fe !important;
  --violet-300: #c4b5fd !important;
  --violet-400: #a78bfa !important;
  --violet-50: #f5f3ff !important;
  --violet-500: #8b5cf6 !important;
  --violet-600: #7c3aed !important;
  --violet-700: #6d28d9 !important;
  --violet-800: #5b21b6 !important;
  --violet-900: #4c1d95 !important;
  --white: #ffffff !important;
  --yellow-100: #fef9c3 !important;
  --yellow-200: #fef08a !important;
  --yellow-300: #fde047 !important;
  --yellow-400: #facc15 !important;
  --yellow-50: #fefce8 !important;
  --yellow-500: #eab308 !important;
  --yellow-600: #ca8a04 !important;
  --yellow-700: #a16207 !important;
  --yellow-800: #854d0e !important;
  --yellow-900: #713f12 !important;
  --zinc-100: #f4f4f5 !important;
  --zinc-200: #e4e4e7 !important;
  --zinc-300: #d4d4d8 !important;
  --zinc-400: #a1a1aa !important;
  --zinc-50: #fafafa !important;
  --zinc-500: #71717a !important;
  --zinc-600: #52525b !important;
  --zinc-700: #3f3f46 !important;
  --zinc-800: #27272a !important;
  --zinc-850: #1d1d20 !important;
  --zinc-900: #18181b !important;
  --zinc-950: #0f0f11 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 23, 27);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(26, 30, 36);
}

html body .bases-table thead th {
  color: rgb(255, 255, 255);
  font-weight: 400;
}

html body .canvas-sidebar {
  background-color: rgb(20, 23, 27);
}

html body .note-properties-key {
  color: rgb(186, 186, 186);
}

html body .note-properties-row {
  border-color: rgb(186, 186, 186);
}

html body .note-properties-tags {
  background-color: rgb(20, 23, 27);
  border-radius: 4px;
  color: rgb(173, 57, 57);
}

html body .note-properties-value {
  color: rgb(186, 186, 186);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 23, 27);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 23, 27);
}

html body div#quartz-root {
  background-color: rgb(26, 30, 36);
}`,
    typography: `html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html body p {
  color: rgb(186, 186, 186);
  font-family: Cuprum;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}`,
    links: `html body a.external, html footer a {
  color: rgb(214, 186, 124);
  outline: rgb(214, 186, 124) none 0px;
  text-decoration-color: rgb(214, 186, 124);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  background-color: rgb(70, 24, 24);
  box-shadow: rgb(220, 221, 222) 0px 0px 0px 1px inset;
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body a.internal.broken {
  background-color: rgb(70, 24, 24);
  box-shadow: rgb(220, 221, 222) 0px 0px 0px 1px inset;
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgba(139, 108, 239, 0.3);
  text-decoration-color: rgba(139, 108, 239, 0.3);
}`,
    lists: `html body ol.overflow {
  border-bottom-color: rgb(214, 186, 124);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-top-color: rgb(214, 186, 124);
  border-top-style: solid;
  border-top-width: 2px;
}

html body ul.overflow {
  border-bottom-color: rgb(214, 186, 124);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-top-color: rgb(214, 186, 124);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    blockquotes: `html body blockquote {
  background-color: rgb(23, 26, 31);
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html body table {
  width: 181.953px;
}

html body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.15);
}

html body td {
  background-color: rgba(0, 0, 0, 0.15);
}

html body th {
  color: rgb(255, 255, 255);
  font-weight: 400;
}`,
    code: `html body code {
  border-bottom-color: rgb(214, 186, 124);
  border-left-color: rgb(214, 186, 124);
  border-right-color: rgb(214, 186, 124);
  border-top-color: rgb(214, 186, 124);
  color: rgb(214, 186, 124);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body pre:has(> code) {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}`,
    embeds: `html body .file-embed {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html body .transclude {
  border-left-color: rgb(214, 186, 124);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
  border-top-width: 3px;
  margin-bottom: 1px;
  margin-right: 1px;
  margin-top: 1px;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
  transition: transform 0.3s ease-in-out;
  width: 18px;
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
}

html body .callout[data-callout="abstract"] {
  --callout-color: #00b0ff;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 176, 255);
  border-left-width: 1px;
  border-right-color: rgb(0, 176, 255);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="bug"] {
  --callout-color: #f50057;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(245, 0, 87);
  border-left-width: 1px;
  border-right-color: rgb(245, 0, 87);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="danger"] {
  --callout-color: #ff1744;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(255, 23, 68);
  border-left-width: 1px;
  border-right-color: rgb(255, 23, 68);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="example"] {
  --callout-color: #7c4dff;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(124, 77, 255);
  border-left-width: 1px;
  border-right-color: rgb(124, 77, 255);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="failure"] {
  --callout-color: #ff5252;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(255, 82, 82);
  border-left-width: 1px;
  border-right-color: rgb(255, 82, 82);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="info"] {
  --callout-color: #00b8d4;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 1px;
  border-right-color: rgb(0, 184, 212);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="note"] {
  --callout-color: #d6ba7c;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(214, 186, 124);
  border-left-width: 1px;
  border-right-color: rgb(214, 186, 124);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="question"] {
  --callout-color: #64dd17;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(100, 221, 23);
  border-left-width: 1px;
  border-right-color: rgb(100, 221, 23);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="quote"] {
  --callout-color: #9e9e9e;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="success"] {
  --callout-color: #00c853;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 200, 83);
  border-left-width: 1px;
  border-right-color: rgb(0, 200, 83);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="tip"] {
  --callout-color: #00bfa5;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 1px;
  border-right-color: rgb(0, 191, 165);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="todo"] {
  --callout-color: #00b8d4;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 1px;
  border-right-color: rgb(0, 184, 212);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="warning"] {
  --callout-color: #ff9100;
  background-color: rgb(23, 26, 31);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(255, 145, 0);
  border-left-width: 1px;
  border-right-color: rgb(255, 145, 0);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
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

html body .callout[data-callout="multi-column-flex-height"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgb(20, 23, 27);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: Inter, sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(26, 30, 36);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgb(54, 54, 54);
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-style: solid;
  border-top-width: 1px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body a.internal.tag-link::before {
  color: rgb(173, 57, 57);
}`,
    scrollbars: `html body .callout {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(214, 186, 124);
  border-left-width: 1px;
  border-right-color: rgb(214, 186, 124);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body ::-webkit-scrollbar {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

html body ::-webkit-scrollbar-track {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 186, 186);
  font-family: Cuprum;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 186, 186);
  font-family: Cuprum;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    footer: `html body footer {
  background-color: rgb(12, 15, 17);
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-top-left-radius: 0px;
  color: rgb(186, 186, 186);
  font-family: Cuprum;
}

html body footer ul li a {
  color: rgb(186, 186, 186);
}`,
    recentNotes: `html body .recent-notes > h3 {
  font-family: Cuprum;
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 186, 186);
  font-family: Cuprum;
}`,
    listPage: `html body li.section-li > .section .meta {
  color: rgb(186, 186, 186);
  font-family: Cuprum;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body .darkmode svg {
  color: rgb(186, 186, 186);
  stroke: rgb(186, 186, 186);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    misc: `html body .metadata {
  color: rgb(186, 186, 186);
}

html body .metadata-properties {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body .navigation-progress {
  background-color: rgb(12, 15, 17);
}

html body input[type=text] {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-width: 1px;
  color: rgb(186, 186, 186);
  font-family: Inter, sans-serif;
}

html body kbd {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgb(214, 186, 124);
  border-left-color: rgb(214, 186, 124);
  border-right-color: rgb(214, 186, 124);
  border-top-color: rgb(214, 186, 124);
  color: rgb(214, 186, 124);
}

html body ul.tags > li {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(173, 57, 57);
}`,
  },
  light: {},
};
