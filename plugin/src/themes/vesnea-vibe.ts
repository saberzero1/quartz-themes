import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vesnea-vibe",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["josefin-sans", "work-sans"],
    fontFiles: [
      {
        family: "Josefin Sans",
        style: "normal",
        weight: "350",
        file: "josefin-sans.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Work Sans",
        style: "normal",
        weight: "400",
        file: "work-sans.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --C-Arna_Pink: #ec6f97 !important;
  --C-Arna_Red: #d62d64 !important;
  --C-Deimev_Gray: #7c787e !important;
  --C-Deimev_Violet: #70488c !important;
  --C-Deimev_Void_Purple: #382f3c !important;
  --C-Korazu_Light_Yellow: #f5eeda !important;
  --C-Korazu_Orange: #fcba9f !important;
  --C-Korazu_White: #fbf8ee !important;
  --C-Korazu_Yellow: #ebd6a5 !important;
  --C-MythSeavalanche_Blue: #e6f3f8 !important;
  --C-MythSeavalanche_Dark_Green: #9ebb98 !important;
  --C-MythSeavalanche_Dark_Yellow: #d8b86d !important;
  --C-MythSeavalanche_Green: #c1cc83 !important;
  --C-MythSeavalanche_Light_Green: #e0e98b !important;
  --C-MythSeavalanche_Light_Yellow: #fbefa1 !important;
  --C-MythSeavalanche_Peach: #f4cebd !important;
  --C-MythSeavalanche_Yellow: #f4df7e !important;
  --C-Sarchie_Cyan: #9be2c9 !important;
  --C-Sarchie_Light_Cyan: #cef1e5 !important;
  --C-Sarchie_Sky_Blue: #87d1f3 !important;
  --C-Sarchie_Teal: #4e7f91 !important;
  --C-Sarchie_Yellow: #f9e9ad !important;
  --C-SeaWeb_Dark_Purple: #181621 !important;
  --C-SeaWeb_Purple: #2c233d !important;
  --C-Seava_Blue: #4c77ae !important;
  --C-Seava_Dark_Blue: #3e4f7b !important;
  --C-Seava_Light_Blue: #9bd0e2 !important;
  --C-Seava_Lighter_Dark_Blue: #536e9d !important;
  --C-Seava_Yellow: #fcf3d9 !important;
  --C-Seavalanche_Light_Blue: #bbe2f0 !important;
  --C-Uzakon_Light_Purple: #c6b0cf !important;
  --C-Uzakon_Lighter_Light_Purple: #d8d3e5 !important;
  --C-Uzakon_Purple: #958abf !important;
  --C-Uzakon_White: #eeecf4 !important;
  --C-Vesnea_Light_Pink: #fdc4d3 !important;
  --C-Vesnea_Pink: #f29cc2 !important;
  --C-Vesnea_Purple: #4c2c57 !important;
  --C-Vesnea_white: #fefcfc !important;
  --C-Zumiko_Light_Red: #f2cbd4 !important;
  --C-Zumiko_Pink: #f8bed5 !important;
  --C-Zumiko_Red: #e28094 !important;
  --C-Zumiko_White: #f9e8ec !important;
  --accent-h: 333 !important;
  --accent-l: 78% !important;
  --accent-s: 77% !important;
  --attribute-aether: #f4df7e !important;
  --attribute-darkness: #382f3c !important;
  --attribute-electric: #ffe941 !important;
  --attribute-fire: #e1294d !important;
  --attribute-light: #ffffff !important;
  --attribute-magical: #fdc4d3 !important;
  --attribute-metal: #5a6775 !important;
  --attribute-nature: #70bb74 !important;
  --attribute-psionic: #ce36be !important;
  --attribute-sound: #ec6f97 !important;
  --attribute-spirit: #70488c !important;
  --attribute-text-seawebdarkpurple: #181621 !important;
  --attribute-text-vesneawhite: #fefcfc !important;
  --attribute-void: #1c1b1d !important;
  --attribute-water: #3e4f7b !important;
  --attribute-wind: #9be2c9 !important;
  --background-modifier-active-hover: hsla(333, 77%, 78%, 0.1) !important;
  --background-modifier-border: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --background-modifier-border-focus: #f29cc2 !important;
  --background-modifier-border-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --background-modifier-form-field: hsl(from #181621 h s calc(l - 3)) !important;
  --background-modifier-form-field-hover: hsl(from #181621 h s calc(l - 3)) !important;
  --background-primary: #2c233d !important;
  --background-primary-alt: hsl(from #2c233d h s calc(l - 10)) !important;
  --background-secondary: #181621 !important;
  --background-secondary-alt: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --bases-cards-background: #2c233d !important;
  --bases-cards-cover-background: hsl(from #2c233d h s calc(l - 10)) !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --bases-embed-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --bases-group-heading-property-color: #fdc4d3 !important;
  --bases-table-border-color: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 40%,
		transparent
	) !important;
  --bases-table-cell-background-active: #2c233d !important;
  --bases-table-cell-background-disabled: hsl(from #2c233d h s calc(l - 10)) !important;
  --bases-table-cell-background-selected: hsla(333, 77%, 78%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #f29cc2 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(333, 77%, 78%) !important;
  --bases-table-group-background: hsl(from #2c233d h s calc(l - 10)) !important;
  --bases-table-header-background: #2c233d !important;
  --bases-table-header-color: #fdc4d3 !important;
  --bases-table-summary-background: #2c233d !important;
  --blockquote-border-color: hsl(333, 77%, 78%) !important;
  --blur-background: color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent) linear-gradient(hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	), color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent)) !important;
  --bodyFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #f29cc2 !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --button-radius: 4px !important;
  --callout-title-weight: 700;
  --canvas-background: #2c233d !important;
  --canvas-card-label-color: #c6b0cf !important;
  --canvas-dot-pattern: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --caret-color: hsl(344, 93%, 88%) !important;
  --checkbox-border-color: #ce36be !important;
  --checkbox-border-color-hover: #70bb74 !important;
  --checkbox-color: #70bb74 !important;
  --checkbox-color-hover: #ce36be !important;
  --checkbox-marker-color: #2c233d !important;
  --checklist-done-color: #70bb74 !important;
  --code-background: hsl(from #2c233d h s calc(l - 10)) !important;
  --code-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --code-comment: #c6b0cf !important;
  --code-normal: #f9e8ec !important;
  --code-punctuation: #fdc4d3 !important;
  --codeFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #c6b0cf !important;
  --collapse-icon-color-collapsed: hsl(330, 78.54%, 89.7%) !important;
  --color-accent: hsl(333, 77%, 78%) !important;
  --color-accent-1: hsl(330, 78.54%, 89.7%) !important;
  --color-accent-2: hsl(328, 80.85%, 100.62%) !important;
  --color-accent-hsl: 333, 77%, 78% !important;
  --color-base-00: #2c233d !important;
  --color-base-05: hsl(from #2c233d h s calc(l - 5)) !important;
  --color-base-10: hsl(from #2c233d h s calc(l - 10)) !important;
  --color-base-100: #f9e8ec !important;
  --color-base-20: #181621 !important;
  --color-base-25: hsl(from #181621 h s calc(l - 3)) !important;
  --color-base-30: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --color-base-35: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --color-base-40: #f29cc2 !important;
  --color-base-50: #c6b0cf !important;
  --color-base-60: color-mix(
		in srgb,
		#c6b0cf 50%,
		#fdc4d3 50%
	) !important;
  --color-base-70: #fdc4d3 !important;
  --cutepink: #ff69b4 !important;
  --cutepink2: #d63384 !important;
  --dark: #f9e8ec !important;
  --darkgray: #f9e8ec !important;
  --divider-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --divider-color-hover: hsl(333, 77%, 78%) !important;
  --dropdown-background: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --dropdown-background-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	), inset 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --embed-border-start: 2px solid hsl(333, 77%, 78%) !important;
  --file-header-background: #2c233d !important;
  --file-header-background-focused: #2c233d !important;
  --file-header-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --flair-color: #f9e8ec !important;
  --font-interface: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Work Sans, sans-serif !important;
  --font-mermaid: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Josefin Sans, sans-serif, Arial' !important;
  --font-text: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Josefin Sans, sans-serif !important;
  --footnote-divider-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --footnote-id-color: #fdc4d3 !important;
  --footnote-id-color-no-occurrences: #c6b0cf !important;
  --graph-line: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --graph-node: #fdc4d3 !important;
  --graph-node-focused: hsl(330, 78.54%, 89.7%) !important;
  --graph-node-unresolved: #c6b0cf !important;
  --graph-text: #f9e8ec !important;
  --gray: #fdc4d3 !important;
  --headerFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #c6b0cf !important;
  --highlight: hsl(
		from #ce36be calc(h + 20) calc(s - 10) l / 0.85
	) !important;
  --hr-color: #f4df7e !important;
  --icon-color: #fdc4d3 !important;
  --icon-color-active: hsl(330, 78.54%, 89.7%) !important;
  --icon-color-focused: #f9e8ec !important;
  --icon-color-hover: #fdc4d3 !important;
  --input-date-separator: #c6b0cf !important;
  --input-placeholder-color: #c6b0cf !important;
  --input-radius: 4px !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
		0 4px 6px color-mix(in srgb, hsl(333, 77%, 78%) 50%, transparent) !important;
  --interactive-accent: hsl(333, 77%, 78%) !important;
  --interactive-accent-hover: hsl(330, 78.54%, 89.7%) !important;
  --interactive-accent-hsl: 333, 77%, 78% !important;
  --interactive-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --interactive-normal: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --italic-color: #fdc4d3 !important;
  --light: #2c233d !important;
  --lightgray: #181621 !important;
  --link-color: hsl(330, 78.54%, 89.7%) !important;
  --link-color-hover: hsl(328, 80.85%, 100.62%) !important;
  --link-external-color: hsl(330, 78.54%, 89.7%) !important;
  --link-external-color-hover: hsl(328, 80.85%, 100.62%) !important;
  --link-unresolved-color: hsl(330, 78.54%, 89.7%) !important;
  --link-unresolved-decoration-color: hsla(333, 77%, 78%, 0.3) !important;
  --list-marker-color: #f4df7e !important;
  --list-marker-color-collapsed: hsl(330, 78.54%, 89.7%) !important;
  --list-marker-color-hover: #fdc4d3 !important;
  --list-spacing: 2px !important;
  --menu-background: #181621 !important;
  --menu-border-color: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --menu-radius: 6px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 0px 60px color-mix(in srgb, hsl(333, 77%, 78%) 50%, transparent) !important;
  --metadata-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --metadata-divider-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --metadata-input-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #f9e8ec !important;
  --metadata-label-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #fdc4d3 !important;
  --metadata-label-text-color-hover: #fdc4d3 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #f29cc2 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --modal-background: #2c233d !important;
  --modal-border-color: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 20%,
		transparent
	) !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: #c6b0cf !important;
  --nav-collapse-icon-color-collapsed: #c6b0cf !important;
  --nav-heading-color: #f9e8ec !important;
  --nav-heading-color-collapsed: #c6b0cf !important;
  --nav-heading-color-collapsed-hover: #fdc4d3 !important;
  --nav-heading-color-hover: #f9e8ec !important;
  --nav-item-background-selected: hsla(333, 77%, 78%, 0.15) !important;
  --nav-item-color: #fdc4d3 !important;
  --nav-item-color-active: #f9e8ec !important;
  --nav-item-color-highlighted: hsl(330, 78.54%, 89.7%) !important;
  --nav-item-color-hover: #f9e8ec !important;
  --nav-item-color-selected: #f9e8ec !important;
  --nav-tag-color: #c6b0cf !important;
  --nav-tag-color-active: #fdc4d3 !important;
  --nav-tag-color-hover: #fdc4d3 !important;
  --pdf-background: #2c233d !important;
  --pdf-page-background: #2c233d !important;
  --pdf-shadow: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --pdf-sidebar-background: #2c233d !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --pill-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --pill-border-color-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --pill-color: #fdc4d3 !important;
  --pill-color-hover: #f9e8ec !important;
  --pill-color-remove: #c6b0cf !important;
  --pill-color-remove-hover: hsl(330, 78.54%, 89.7%) !important;
  --prompt-background: #2c233d !important;
  --prompt-border-color: #f29cc2 !important;
  --radius-l: 8px !important;
  --radius-m: 6px !important;
  --raised-background: color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent) linear-gradient(hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	), color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent)) !important;
  --ribbon-background: #181621 !important;
  --ribbon-background-collapsed: #2c233d !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #fdc4d3 !important;
  --search-icon-color: #fdc4d3 !important;
  --search-result-background: #2c233d !important;
  --secondary: hsl(330, 78.54%, 89.7%) !important;
  --setting-group-heading-color: #f9e8ec !important;
  --setting-items-background: hsl(from #2c233d h s calc(l - 10)) !important;
  --setting-items-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --setting-items-radius: 8px !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
		0px 30px 90px color-mix(in srgb, hsl(333, 77%, 78%) 50%, transparent) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 0px 60px color-mix(in srgb, hsl(333, 77%, 78%) 50%, transparent) !important;
  --shiki-active-tab-border-color: #fdc4d3 !important;
  --shiki-code-background: hsl(from #2c233d h s calc(l - 10)) !important;
  --shiki-code-comment: #c6b0cf !important;
  --shiki-code-normal: #fdc4d3 !important;
  --shiki-code-punctuation: #fdc4d3 !important;
  --shiki-gutter-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --shiki-gutter-text-color: #c6b0cf !important;
  --shiki-gutter-text-color-highlight: #fdc4d3 !important;
  --shiki-highlight-neutral: #fdc4d3 !important;
  --shiki-terminal-dots-color: #c6b0cf !important;
  --slider-thumb-border-color: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --slider-thumb-radius: 4px !important;
  --slider-track-background: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --status-bar-background: #181621 !important;
  --status-bar-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-text-color: #fdc4d3 !important;
  --suggestion-background: #2c233d !important;
  --tab-background-active: #2c233d !important;
  --tab-container-background: #181621 !important;
  --tab-divider-color: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --tab-outline-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #181621 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181621, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(333, 77%, 78%) !important;
  --tab-text-color: #c6b0cf !important;
  --tab-text-color-active: #fdc4d3 !important;
  --tab-text-color-focused: #fdc4d3 !important;
  --tab-text-color-focused-active: #fdc4d3 !important;
  --tab-text-color-focused-active-current: #f9e8ec !important;
  --tab-text-color-focused-highlighted: hsl(330, 78.54%, 89.7%) !important;
  --table-add-button-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --table-border-color: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 40%,
		transparent
	) !important;
  --table-drag-handle-background-active: hsl(333, 77%, 78%) !important;
  --table-drag-handle-color: #c6b0cf !important;
  --table-drag-handle-color-active: #2c233d !important;
  --table-header-background: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 20%,
		transparent
	) !important;
  --table-header-background-hover: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 60%,
		transparent
	) !important;
  --table-header-border-color: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 40%,
		transparent
	) !important;
  --table-header-color: #f9e8ec !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(333, 77%, 78%, 0.1) !important;
  --table-selection-border-color: hsl(333, 77%, 78%) !important;
  --tag-background: hsla(333, 77%, 78%, 0.1) !important;
  --tag-background-hover: hsla(333, 77%, 78%, 0.2) !important;
  --tag-border-color: hsla(333, 77%, 78%, 0.15) !important;
  --tag-border-color-hover: hsla(333, 77%, 78%, 0.15) !important;
  --tag-color: hsl(330, 78.54%, 89.7%) !important;
  --tag-color-hover: hsl(330, 78.54%, 89.7%) !important;
  --tertiary: hsl(328, 80.85%, 100.62%) !important;
  --text-accent: hsl(330, 78.54%, 89.7%) !important;
  --text-accent-hover: hsl(328, 80.85%, 100.62%) !important;
  --text-faint: #c6b0cf !important;
  --text-highlight-bg: hsl(
		from #ce36be calc(h + 20) calc(s - 10) l / 0.85
	) !important;
  --text-muted: #fdc4d3 !important;
  --text-normal: #f9e8ec !important;
  --text-on-accent: #2c233d !important;
  --text-selection: hsla(333, 77%, 78%, 0.33) !important;
  --textHighlight: hsl(
		from #ce36be calc(h + 20) calc(s - 10) l / 0.85
	) !important;
  --titleFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #181621 !important;
  --titlebar-background-focused: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --titlebar-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --titlebar-text-color: #fdc4d3 !important;
  --titlebar-text-color-focused: #f9e8ec !important;
  --toggle-radius: 6px !important;
  --toggle-thumb-radius: 4px !important;
  --vault-profile-color: #f9e8ec !important;
  --vault-profile-color-hover: #f9e8ec !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 22, 33);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(44, 35, 61);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 22, 33);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 22, 33);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body html {
  --C-Arna_Pink: #ec6f97;
  --C-Arna_Red: #d62d64;
  --C-Deimev_Gray: #7c787e;
  --C-Deimev_Violet: #70488c;
  --C-Deimev_Void_Purple: #382f3c;
  --C-Korazu_Light_Yellow: #f5eeda;
  --C-Korazu_Orange: #fcba9f;
  --C-Korazu_White: #fbf8ee;
  --C-Korazu_Yellow: #ebd6a5;
  --C-MythSeavalanche_Blue: #e6f3f8;
  --C-MythSeavalanche_Dark_Green: #9ebb98;
  --C-MythSeavalanche_Dark_Yellow: #d8b86d;
  --C-MythSeavalanche_Green: #c1cc83;
  --C-MythSeavalanche_Light_Green: #e0e98b;
  --C-MythSeavalanche_Light_Yellow: #fbefa1;
  --C-MythSeavalanche_Peach: #f4cebd;
  --C-MythSeavalanche_Yellow: #f4df7e;
  --C-Sarchie_Cyan: #9be2c9;
  --C-Sarchie_Light_Cyan: #cef1e5;
  --C-Sarchie_Sky_Blue: #87d1f3;
  --C-Sarchie_Teal: #4e7f91;
  --C-Sarchie_Yellow: #f9e9ad;
  --C-SeaWeb_Dark_Purple: #181621;
  --C-SeaWeb_Purple: #2c233d;
  --C-Seava_Blue: #4c77ae;
  --C-Seava_Dark_Blue: #3e4f7b;
  --C-Seava_Light_Blue: #9bd0e2;
  --C-Seava_Lighter_Dark_Blue: #536e9d;
  --C-Seava_Yellow: #fcf3d9;
  --C-Seavalanche_Light_Blue: #bbe2f0;
  --C-Uzakon_Light_Purple: #c6b0cf;
  --C-Uzakon_Lighter_Light_Purple: #d8d3e5;
  --C-Uzakon_Purple: #958abf;
  --C-Uzakon_White: #eeecf4;
  --C-Vesnea_Light_Pink: #fdc4d3;
  --C-Vesnea_Pink: #f29cc2;
  --C-Vesnea_Purple: #4c2c57;
  --C-Vesnea_white: #fefcfc;
  --C-Zumiko_Light_Red: #f2cbd4;
  --C-Zumiko_Pink: #f8bed5;
  --C-Zumiko_Red: #e28094;
  --C-Zumiko_White: #f9e8ec;
  --attribute-aether: #f4df7e;
  --attribute-darkness: #382f3c;
  --attribute-electric: #ffe941;
  --attribute-fire: #e1294d;
  --attribute-light: #ffffff;
  --attribute-magical: #fdc4d3;
  --attribute-metal: #5a6775;
  --attribute-nature: #70bb74;
  --attribute-psionic: #ce36be;
  --attribute-sound: #ec6f97;
  --attribute-spirit: #70488c;
  --attribute-text-seawebdarkpurple: #181621;
  --attribute-text-vesneawhite: #fefcfc;
  --attribute-void: #1c1b1d;
  --attribute-water: #3e4f7b;
  --attribute-wind: #9be2c9;
  --cutepink: #ff69b4;
  --cutepink2: #d63384;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(242, 156, 194);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(242, 156, 194) none 0px;
  text-decoration-color: rgb(242, 156, 194);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration-color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration-color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(242, 156, 194);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(242, 156, 194) none 0px;
  text-decoration-color: rgb(242, 156, 194);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.758824 0.260784 0.540385 / 0.85);
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 232, 236) none 0px;
  text-decoration-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.992157 0.768627 0.827451 / 0.6);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.992157 0.768627 0.827451 / 0.6) none 0px;
  text-decoration: line-through rgb(214, 51, 132);
  text-decoration-color: rgb(214, 51, 132);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(206, 54, 190);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(112, 187, 116);
  border-color: rgb(112, 187, 116);
}

html[saved-theme="dark"] body p {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration-color: rgb(253, 196, 211);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration-color: rgb(249, 208, 229);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration-color: rgb(249, 208, 229);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration: underline rgba(242, 156, 195, 0.3);
  text-decoration-color: rgba(242, 156, 195, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body dt {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(198, 176, 207);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body table {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 183.156px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-left-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-right-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-top-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-left-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-right-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-top-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: rgb(249, 232, 236);
  font-weight: 700;
}

html[saved-theme="dark"] body tr {
  background-color: color(srgb 0.9494 0.6106 0.76306 / 0.2);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: rgb(253, 196, 211);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(242, 156, 195);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(206, 54, 190);
  border-left-color: rgb(206, 54, 190);
  border-right-color: rgb(206, 54, 190);
  border-top-color: rgb(206, 54, 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(112, 187, 116);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(112, 187, 116);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(44, 35, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(44, 35, 61);
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
  background-color: rgb(198, 176, 207);
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

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(249, 232, 236);
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
  background-color: color(srgb 0.0679358 0.0622745 0.0934118);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(44, 35, 61);
  border-bottom-color: rgb(242, 156, 194);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(242, 156, 194);
  border-right-color: rgb(242, 156, 194);
  border-top-color: rgb(242, 156, 194);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, color(srgb 0.9494 0.6106 0.76306 / 0.5) 0px 30px 90px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 232, 236) none 0px;
  text-decoration-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(242, 156, 194);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(242, 156, 194);
  border-right-color: rgb(242, 156, 194);
  border-top-color: rgb(242, 156, 194);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 22, 33);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(249, 208, 229);
}

html[saved-theme="dark"] body h1 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body h2 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(249, 232, 236);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 22, 33);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-left-radius: 6px;
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(253, 196, 211);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(253, 196, 211);
  stroke: rgb(253, 196, 211);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(198, 176, 207);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 22, 33);
  border-color: rgb(249, 232, 236);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: rgb(249, 232, 236);
  font-weight: 700;
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: color(srgb 0.126204 0.113839 0.181847);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(242, 156, 195, 0.1);
  color: rgb(249, 208, 229);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(44, 35, 61);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(24, 22, 33);
  border-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: color(srgb 0.126204 0.113839 0.181847);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(249, 232, 236);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 22, 33);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body sub {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body summary {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body sup {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  color: rgb(249, 208, 229);
}`,
  },
  light: {
    base: `:root:root {
  --C-Arna_Pink: #ec6f97 !important;
  --C-Arna_Red: #d62d64 !important;
  --C-Deimev_Gray: #7c787e !important;
  --C-Deimev_Violet: #70488c !important;
  --C-Deimev_Void_Purple: #382f3c !important;
  --C-Korazu_Light_Yellow: #f5eeda !important;
  --C-Korazu_Orange: #fcba9f !important;
  --C-Korazu_White: #fbf8ee !important;
  --C-Korazu_Yellow: #ebd6a5 !important;
  --C-MythSeavalanche_Blue: #e6f3f8 !important;
  --C-MythSeavalanche_Dark_Green: #9ebb98 !important;
  --C-MythSeavalanche_Dark_Yellow: #d8b86d !important;
  --C-MythSeavalanche_Green: #c1cc83 !important;
  --C-MythSeavalanche_Light_Green: #e0e98b !important;
  --C-MythSeavalanche_Light_Yellow: #fbefa1 !important;
  --C-MythSeavalanche_Peach: #f4cebd !important;
  --C-MythSeavalanche_Yellow: #f4df7e !important;
  --C-Sarchie_Cyan: #9be2c9 !important;
  --C-Sarchie_Light_Cyan: #cef1e5 !important;
  --C-Sarchie_Sky_Blue: #87d1f3 !important;
  --C-Sarchie_Teal: #4e7f91 !important;
  --C-Sarchie_Yellow: #f9e9ad !important;
  --C-SeaWeb_Dark_Purple: #181621 !important;
  --C-SeaWeb_Purple: #2c233d !important;
  --C-Seava_Blue: #4c77ae !important;
  --C-Seava_Dark_Blue: #3e4f7b !important;
  --C-Seava_Light_Blue: #9bd0e2 !important;
  --C-Seava_Lighter_Dark_Blue: #536e9d !important;
  --C-Seava_Yellow: #fcf3d9 !important;
  --C-Seavalanche_Light_Blue: #bbe2f0 !important;
  --C-Uzakon_Light_Purple: #c6b0cf !important;
  --C-Uzakon_Lighter_Light_Purple: #d8d3e5 !important;
  --C-Uzakon_Purple: #958abf !important;
  --C-Uzakon_White: #eeecf4 !important;
  --C-Vesnea_Light_Pink: #fdc4d3 !important;
  --C-Vesnea_Pink: #f29cc2 !important;
  --C-Vesnea_Purple: #4c2c57 !important;
  --C-Vesnea_white: #fefcfc !important;
  --C-Zumiko_Light_Red: #f2cbd4 !important;
  --C-Zumiko_Pink: #f8bed5 !important;
  --C-Zumiko_Red: #e28094 !important;
  --C-Zumiko_White: #f9e8ec !important;
  --accent-h: 333 !important;
  --accent-l: 78% !important;
  --accent-s: 77% !important;
  --attribute-aether: #f4df7e !important;
  --attribute-darkness: #382f3c !important;
  --attribute-electric: #ffe941 !important;
  --attribute-fire: #e1294d !important;
  --attribute-light: #ffffff !important;
  --attribute-magical: #fdc4d3 !important;
  --attribute-metal: #5a6775 !important;
  --attribute-nature: #70bb74 !important;
  --attribute-psionic: #ce36be !important;
  --attribute-sound: #ec6f97 !important;
  --attribute-spirit: #70488c !important;
  --attribute-text-seawebdarkpurple: #181621 !important;
  --attribute-text-vesneawhite: #fefcfc !important;
  --attribute-void: #1c1b1d !important;
  --attribute-water: #3e4f7b !important;
  --attribute-wind: #9be2c9 !important;
  --background-modifier-active-hover: hsla(333, 77%, 78%, 0.1) !important;
  --background-modifier-border: #c6b0cf !important;
  --background-modifier-border-focus: hsl(281, 24%, 60%) !important;
  --background-modifier-border-hover: hsl(281, 24%, 70%) !important;
  --background-modifier-form-field: hsl(0, 50%, 99%) !important;
  --background-modifier-form-field-hover: hsl(0, 50%, 99%) !important;
  --background-primary: hsl(0, 60%, 99%) !important;
  --background-primary-alt: hsl(281, 24%, 95%) !important;
  --background-secondary: hsl(252, 38%, 95%) !important;
  --background-secondary-alt: hsl(280, 23%, 97%) !important;
  --bases-cards-background: hsl(0, 60%, 99%) !important;
  --bases-cards-cover-background: hsl(281, 24%, 95%) !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px #c6b0cf !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(281, 24%, 70%) !important;
  --bases-embed-border-color: #c6b0cf !important;
  --bases-group-heading-property-color: hsl(251, 29%, 55%) !important;
  --bases-table-border-color: #c6b0cf !important;
  --bases-table-cell-background-active: hsl(0, 60%, 99%) !important;
  --bases-table-cell-background-disabled: hsl(281, 24%, 95%) !important;
  --bases-table-cell-background-selected: hsla(333, 77%, 78%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(281, 24%, 60%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(332, 77.77%, 83.85%) !important;
  --bases-table-group-background: hsl(281, 24%, 95%) !important;
  --bases-table-header-background: hsl(0, 60%, 99%) !important;
  --bases-table-header-color: hsl(251, 29%, 55%) !important;
  --bases-table-summary-background: hsl(0, 60%, 99%) !important;
  --blockquote-border-color: hsl(332, 77.77%, 83.85%) !important;
  --blur-background: color-mix(in srgb, hsl(0, 60%, 99%) 65%, transparent) linear-gradient(hsl(0, 60%, 99%), color-mix(in srgb, hsl(0, 60%, 99%) 65%, transparent)) !important;
  --bodyFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #d62d64 !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --button-radius: 4px !important;
  --callout-title-weight: 700;
  --canvas-background: hsl(0, 60%, 99%) !important;
  --canvas-card-label-color: hsl(275, 24%, 55%) !important;
  --canvas-dot-pattern: #c6b0cf !important;
  --caret-color: #87d1f3 !important;
  --checkbox-border-color: #ce36be !important;
  --checkbox-border-color-hover: #70bb74 !important;
  --checkbox-color: #70bb74 !important;
  --checkbox-color-hover: #ce36be !important;
  --checkbox-marker-color: hsl(0, 60%, 99%) !important;
  --checklist-done-color: #70bb74 !important;
  --code-background: hsl(281, 24%, 95%) !important;
  --code-border-color: #c6b0cf !important;
  --code-comment: hsl(275, 24%, 55%) !important;
  --code-normal: hsl(248, 31%, 20%) !important;
  --code-punctuation: hsl(251, 29%, 55%) !important;
  --codeFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(275, 24%, 55%) !important;
  --collapse-icon-color-collapsed: hsl(333, 77%, 78%) !important;
  --color-accent: hsl(333, 77%, 78%) !important;
  --color-accent-1: hsl(332, 77.77%, 83.85%) !important;
  --color-accent-2: hsl(330, 78.54%, 89.7%) !important;
  --color-accent-hsl: 333, 77%, 78% !important;
  --color-base-00: hsl(0, 50%, 99%) !important;
  --color-base-05: hsl(280, 23%, 97%) !important;
  --color-base-10: hsl(281, 24%, 95%) !important;
  --color-base-100: hsl(248, 31%, 20%) !important;
  --color-base-20: hsl(281, 24%, 85%) !important;
  --color-base-25: hsl(281, 24%, 80%) !important;
  --color-base-30: #c6b0cf !important;
  --color-base-35: hsl(281, 24%, 70%) !important;
  --color-base-40: hsl(281, 24%, 60%) !important;
  --color-base-50: hsl(275, 24%, 55%) !important;
  --color-base-60: hsl(265, 27%, 55%) !important;
  --color-base-70: hsl(251, 29%, 55%) !important;
  --cutepink: #ff69b4 !important;
  --cutepink2: #d63384 !important;
  --dark: hsl(248, 31%, 20%) !important;
  --darkgray: hsl(248, 31%, 20%) !important;
  --divider-color: #c6b0cf !important;
  --divider-color-hover: hsl(332, 77.77%, 83.85%) !important;
  --dropdown-background: hsl(0, 50%, 99%) !important;
  --dropdown-background-hover: hsl(281, 24%, 95%) !important;
  --embed-block-shadow-hover: 0 0 0 1px #c6b0cf, inset 0 0 0 1px #c6b0cf !important;
  --embed-border-start: 2px solid hsl(332, 77.77%, 83.85%) !important;
  --file-header-background: hsl(0, 60%, 99%) !important;
  --file-header-background-focused: hsl(0, 60%, 99%) !important;
  --file-header-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(0, 50%, 99%) !important;
  --flair-color: hsl(248, 31%, 20%) !important;
  --font-interface: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Work Sans, sans-serif !important;
  --font-mermaid: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Josefin Sans, sans-serif, Arial' !important;
  --font-text: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Josefin Sans, sans-serif !important;
  --footnote-divider-color: #c6b0cf !important;
  --footnote-id-color: hsl(251, 29%, 55%) !important;
  --footnote-id-color-no-occurrences: hsl(275, 24%, 55%) !important;
  --graph-line: hsl(281, 24%, 70%) !important;
  --graph-node: hsl(251, 29%, 55%) !important;
  --graph-node-focused: hsl(333, 77%, 78%) !important;
  --graph-node-unresolved: hsl(275, 24%, 55%) !important;
  --graph-text: hsl(248, 31%, 20%) !important;
  --gray: hsl(251, 29%, 55%) !important;
  --headerFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(275, 24%, 55%) !important;
  --highlight: #fdc4d3 !important;
  --hr-color: #c6b0cf !important;
  --icon-color: hsl(251, 29%, 55%) !important;
  --icon-color-active: hsl(333, 77%, 78%) !important;
  --icon-color-focused: hsl(248, 31%, 20%) !important;
  --icon-color-hover: hsl(251, 29%, 55%) !important;
  --input-date-separator: hsl(275, 24%, 55%) !important;
  --input-placeholder-color: hsl(275, 24%, 55%) !important;
  --input-radius: 4px !important;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
		0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 0 0 0 transparent,
		0 4px 6px
			color-mix(in srgb, #c6b0cf 50%, transparent) !important;
  --interactive-accent: hsl(332, 77.77%, 83.85%) !important;
  --interactive-accent-hover: hsl(330, 78.54%, 89.7%) !important;
  --interactive-accent-hsl: 333, 77%, 78% !important;
  --interactive-hover: hsl(281, 24%, 95%) !important;
  --interactive-normal: hsl(0, 50%, 99%) !important;
  --italic-color: hsl(from #87d1f3 h s calc(l - 20)) !important;
  --light: hsl(0, 60%, 99%) !important;
  --lightgray: hsl(252, 38%, 95%) !important;
  --link-color: hsl(333, 77%, 78%) !important;
  --link-color-hover: hsl(330, 78.54%, 89.7%) !important;
  --link-external-color: hsl(333, 77%, 78%) !important;
  --link-external-color-hover: hsl(330, 78.54%, 89.7%) !important;
  --link-unresolved-color: hsl(333, 77%, 78%) !important;
  --link-unresolved-decoration-color: hsla(333, 77%, 78%, 0.3) !important;
  --list-marker-color: hsl(275, 24%, 55%) !important;
  --list-marker-color-collapsed: hsl(333, 77%, 78%) !important;
  --list-marker-color-hover: hsl(251, 29%, 55%) !important;
  --list-spacing: 2px !important;
  --menu-background: hsl(252, 38%, 95%) !important;
  --menu-border-color: hsl(281, 24%, 70%) !important;
  --menu-radius: 6px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 30px 90px
			color-mix(in srgb, #c6b0cf 50%, transparent) !important;
  --metadata-border-color: #c6b0cf !important;
  --metadata-divider-color: #c6b0cf !important;
  --metadata-input-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(248, 31%, 20%) !important;
  --metadata-label-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(251, 29%, 55%) !important;
  --metadata-label-text-color-hover: hsl(251, 29%, 55%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(281, 24%, 60%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(281, 24%, 70%) !important;
  --modal-background: hsl(0, 60%, 99%) !important;
  --modal-border-color: transparent !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: hsl(275, 24%, 55%) !important;
  --nav-collapse-icon-color-collapsed: hsl(275, 24%, 55%) !important;
  --nav-heading-color: hsl(248, 31%, 20%) !important;
  --nav-heading-color-collapsed: hsl(275, 24%, 55%) !important;
  --nav-heading-color-collapsed-hover: hsl(251, 29%, 55%) !important;
  --nav-heading-color-hover: hsl(248, 31%, 20%) !important;
  --nav-item-background-selected: hsla(333, 77%, 78%, 0.15) !important;
  --nav-item-color: hsl(251, 29%, 55%) !important;
  --nav-item-color-active: hsl(248, 31%, 20%) !important;
  --nav-item-color-highlighted: hsl(333, 77%, 78%) !important;
  --nav-item-color-hover: hsl(248, 31%, 20%) !important;
  --nav-item-color-selected: hsl(248, 31%, 20%) !important;
  --nav-tag-color: hsl(275, 24%, 55%) !important;
  --nav-tag-color-active: hsl(251, 29%, 55%) !important;
  --nav-tag-color-hover: hsl(251, 29%, 55%) !important;
  --pdf-background: hsl(0, 60%, 99%) !important;
  --pdf-page-background: hsl(0, 60%, 99%) !important;
  --pdf-sidebar-background: hsl(0, 60%, 99%) !important;
  --pill-border-color: #c6b0cf !important;
  --pill-border-color-hover: hsl(281, 24%, 70%) !important;
  --pill-color: hsl(251, 29%, 55%) !important;
  --pill-color-hover: hsl(248, 31%, 20%) !important;
  --pill-color-remove: hsl(275, 24%, 55%) !important;
  --pill-color-remove-hover: hsl(333, 77%, 78%) !important;
  --prompt-background: hsl(0, 60%, 99%) !important;
  --prompt-border-color: hsl(281, 24%, 60%) !important;
  --radius-l: 8px !important;
  --radius-m: 6px !important;
  --raised-background: color-mix(in srgb, hsl(0, 60%, 99%) 65%, transparent) linear-gradient(hsl(0, 60%, 99%), color-mix(in srgb, hsl(0, 60%, 99%) 65%, transparent)) !important;
  --ribbon-background: hsl(252, 38%, 95%) !important;
  --ribbon-background-collapsed: hsl(0, 60%, 99%) !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: hsl(251, 29%, 55%) !important;
  --search-icon-color: hsl(251, 29%, 55%) !important;
  --search-result-background: hsl(0, 60%, 99%) !important;
  --secondary: hsl(333, 77%, 78%) !important;
  --setting-group-heading-color: hsl(248, 31%, 20%) !important;
  --setting-items-background: hsl(281, 24%, 95%) !important;
  --setting-items-border-color: #c6b0cf !important;
  --setting-items-radius: 8px !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
		0px 30px 90px
			color-mix(in srgb, #c6b0cf 50%, transparent) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 30px 90px
			color-mix(in srgb, #c6b0cf 50%, transparent) !important;
  --shiki-active-tab-border-color: hsl(251, 29%, 55%) !important;
  --shiki-code-background: hsl(281, 24%, 95%) !important;
  --shiki-code-comment: hsl(275, 24%, 55%) !important;
  --shiki-code-normal: hsl(251, 29%, 55%) !important;
  --shiki-code-punctuation: hsl(251, 29%, 55%) !important;
  --shiki-gutter-border-color: #c6b0cf !important;
  --shiki-gutter-text-color: hsl(275, 24%, 55%) !important;
  --shiki-gutter-text-color-highlight: hsl(251, 29%, 55%) !important;
  --shiki-highlight-neutral: hsl(251, 29%, 55%) !important;
  --shiki-terminal-dots-color: hsl(275, 24%, 55%) !important;
  --slider-thumb-border-color: hsl(281, 24%, 70%) !important;
  --slider-thumb-radius: 4px !important;
  --slider-track-background: #c6b0cf !important;
  --status-bar-background: hsl(252, 38%, 95%) !important;
  --status-bar-border-color: #c6b0cf !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-text-color: hsl(251, 29%, 55%) !important;
  --suggestion-background: hsl(0, 60%, 99%) !important;
  --tab-background-active: hsl(0, 60%, 99%) !important;
  --tab-container-background: hsl(252, 38%, 95%) !important;
  --tab-divider-color: hsl(281, 24%, 70%) !important;
  --tab-outline-color: #c6b0cf !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: hsl(252, 38%, 95%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(252, 38%, 95%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(333, 77%, 78%) !important;
  --tab-text-color: hsl(275, 24%, 55%) !important;
  --tab-text-color-active: hsl(251, 29%, 55%) !important;
  --tab-text-color-focused: hsl(251, 29%, 55%) !important;
  --tab-text-color-focused-active: hsl(251, 29%, 55%) !important;
  --tab-text-color-focused-active-current: hsl(248, 31%, 20%) !important;
  --tab-text-color-focused-highlighted: hsl(333, 77%, 78%) !important;
  --table-add-button-border-color: #c6b0cf !important;
  --table-border-color: #c6b0cf !important;
  --table-drag-handle-background-active: hsl(332, 77.77%, 83.85%) !important;
  --table-drag-handle-color: hsl(275, 24%, 55%) !important;
  --table-drag-handle-color-active: #2c233d !important;
  --table-header-background: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 20%,
		transparent
	) !important;
  --table-header-background-hover: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 60%,
		transparent
	) !important;
  --table-header-border-color: #c6b0cf !important;
  --table-header-color: hsl(248, 31%, 20%) !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(333, 77%, 78%, 0.1) !important;
  --table-selection-border-color: hsl(332, 77.77%, 83.85%) !important;
  --tag-background: hsla(333, 77%, 78%, 0.1) !important;
  --tag-background-hover: hsla(333, 77%, 78%, 0.2) !important;
  --tag-border-color: hsla(333, 77%, 78%, 0.15) !important;
  --tag-border-color-hover: hsla(333, 77%, 78%, 0.15) !important;
  --tag-color: hsl(333, 77%, 78%) !important;
  --tag-color-hover: hsl(333, 77%, 78%) !important;
  --tertiary: hsl(330, 78.54%, 89.7%) !important;
  --text-accent: hsl(333, 77%, 78%) !important;
  --text-accent-hover: hsl(330, 78.54%, 89.7%) !important;
  --text-faint: hsl(275, 24%, 55%) !important;
  --text-highlight-bg: #fdc4d3 !important;
  --text-muted: hsl(251, 29%, 55%) !important;
  --text-normal: hsl(248, 31%, 20%) !important;
  --text-on-accent: #2c233d !important;
  --text-selection: hsla(333, 77%, 78%, 0.2) !important;
  --textHighlight: #fdc4d3 !important;
  --titleFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(252, 38%, 95%) !important;
  --titlebar-background-focused: hsl(280, 23%, 97%) !important;
  --titlebar-border-color: #c6b0cf !important;
  --titlebar-text-color: hsl(251, 29%, 55%) !important;
  --titlebar-text-color-focused: hsl(248, 31%, 20%) !important;
  --toggle-radius: 6px !important;
  --toggle-thumb-radius: 4px !important;
  --vault-profile-color: hsl(248, 31%, 20%) !important;
  --vault-profile-color-hover: hsl(248, 31%, 20%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 237, 247);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(254, 251, 251);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 237, 247);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(198, 176, 207);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 237, 247);
  border-left-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body html {
  --C-Arna_Pink: #ec6f97;
  --C-Arna_Red: #d62d64;
  --C-Deimev_Gray: #7c787e;
  --C-Deimev_Violet: #70488c;
  --C-Deimev_Void_Purple: #382f3c;
  --C-Korazu_Light_Yellow: #f5eeda;
  --C-Korazu_Orange: #fcba9f;
  --C-Korazu_White: #fbf8ee;
  --C-Korazu_Yellow: #ebd6a5;
  --C-MythSeavalanche_Blue: #e6f3f8;
  --C-MythSeavalanche_Dark_Green: #9ebb98;
  --C-MythSeavalanche_Dark_Yellow: #d8b86d;
  --C-MythSeavalanche_Green: #c1cc83;
  --C-MythSeavalanche_Light_Green: #e0e98b;
  --C-MythSeavalanche_Light_Yellow: #fbefa1;
  --C-MythSeavalanche_Peach: #f4cebd;
  --C-MythSeavalanche_Yellow: #f4df7e;
  --C-Sarchie_Cyan: #9be2c9;
  --C-Sarchie_Light_Cyan: #cef1e5;
  --C-Sarchie_Sky_Blue: #87d1f3;
  --C-Sarchie_Teal: #4e7f91;
  --C-Sarchie_Yellow: #f9e9ad;
  --C-SeaWeb_Dark_Purple: #181621;
  --C-SeaWeb_Purple: #2c233d;
  --C-Seava_Blue: #4c77ae;
  --C-Seava_Dark_Blue: #3e4f7b;
  --C-Seava_Light_Blue: #9bd0e2;
  --C-Seava_Lighter_Dark_Blue: #536e9d;
  --C-Seava_Yellow: #fcf3d9;
  --C-Seavalanche_Light_Blue: #bbe2f0;
  --C-Uzakon_Light_Purple: #c6b0cf;
  --C-Uzakon_Lighter_Light_Purple: #d8d3e5;
  --C-Uzakon_Purple: #958abf;
  --C-Uzakon_White: #eeecf4;
  --C-Vesnea_Light_Pink: #fdc4d3;
  --C-Vesnea_Pink: #f29cc2;
  --C-Vesnea_Purple: #4c2c57;
  --C-Vesnea_white: #fefcfc;
  --C-Zumiko_Light_Red: #f2cbd4;
  --C-Zumiko_Pink: #f8bed5;
  --C-Zumiko_Red: #e28094;
  --C-Zumiko_White: #f9e8ec;
  --attribute-aether: #f4df7e;
  --attribute-darkness: #382f3c;
  --attribute-electric: #ffe941;
  --attribute-fire: #e1294d;
  --attribute-light: #ffffff;
  --attribute-magical: #fdc4d3;
  --attribute-metal: #5a6775;
  --attribute-nature: #70bb74;
  --attribute-psionic: #ce36be;
  --attribute-sound: #ec6f97;
  --attribute-spirit: #70488c;
  --attribute-text-seawebdarkpurple: #181621;
  --attribute-text-vesneawhite: #fefcfc;
  --attribute-void: #1c1b1d;
  --attribute-water: #3e4f7b;
  --attribute-wind: #9be2c9;
  --cutepink: #ff69b4;
  --cutepink2: #d63384;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(214, 45, 100);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(214, 45, 100) none 0px;
  text-decoration-color: rgb(214, 45, 100);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: color(srgb 0.165775 0.680214 0.916578);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.165775 0.680214 0.916578) none 0px;
  text-decoration-color: color(srgb 0.165775 0.680214 0.916578);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: color(srgb 0.165775 0.680214 0.916578);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.165775 0.680214 0.916578) none 0px;
  text-decoration-color: color(srgb 0.165775 0.680214 0.916578);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(214, 45, 100);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(214, 45, 100) none 0px;
  text-decoration-color: rgb(214, 45, 100);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(253, 196, 211);
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 35, 67) none 0px;
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body del {
  color: color(srgb 0.46735 0.4195 0.6805 / 0.6);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.46735 0.4195 0.6805 / 0.6) none 0px;
  text-decoration: line-through rgb(214, 51, 132);
  text-decoration-color: rgb(214, 51, 132);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(206, 54, 190);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(112, 187, 116);
  border-color: rgb(112, 187, 116);
}

html[saved-theme="light"] body p {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(119, 107, 174) none 0px;
  text-decoration-color: rgb(119, 107, 174);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration-color: rgb(242, 156, 195);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration-color: rgb(242, 156, 195);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration: underline rgba(242, 156, 195, 0.3);
  text-decoration-color: rgba(242, 156, 195, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body dt {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body ol > li {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body ul > li {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(145, 113, 168);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body table {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 183.156px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
  font-weight: 700;
}

html[saved-theme="light"] body tr {
  background-color: color(srgb 0.9494 0.6106 0.76306 / 0.2);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body figcaption {
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(119, 107, 174);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(246, 182, 212);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(206, 54, 190);
  border-left-color: rgb(206, 54, 190);
  border-right-color: rgb(206, 54, 190);
  border-top-color: rgb(206, 54, 190);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(112, 187, 116);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(112, 187, 116);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 251, 251);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 251, 251);
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
  background-color: rgb(145, 113, 168);
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

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(39, 35, 67);
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
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(198, 176, 207);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(162, 129, 177);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(162, 129, 177);
  border-right-color: rgb(162, 129, 177);
  border-top-color: rgb(162, 129, 177);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, color(srgb 0.776471 0.690196 0.811765 / 0.5) 0px 30px 90px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 35, 67) none 0px;
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(162, 129, 177);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(162, 129, 177);
  border-right-color: rgb(162, 129, 177);
  border-top-color: rgb(162, 129, 177);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 237, 247);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(242, 156, 195);
}

html[saved-theme="light"] body h1 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body h2 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(39, 35, 67);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(239, 237, 247);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  border-top-left-radius: 6px;
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(119, 107, 174);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(119, 107, 174);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(119, 107, 174);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(119, 107, 174);
  stroke: rgb(119, 107, 174);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(145, 113, 168);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(254, 251, 251);
  border-color: rgb(39, 35, 67);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
  font-weight: 700;
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(119, 107, 174);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(198, 176, 207);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(119, 107, 174);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(119, 107, 174);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(242, 156, 195, 0.1);
  color: rgb(242, 156, 195);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(119, 107, 174);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(254, 251, 251);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(239, 237, 247);
  border-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(248, 246, 249);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(39, 35, 67);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(239, 237, 247);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body sub {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body summary {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body sup {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  color: rgb(242, 156, 195);
}`,
  },
};
