import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vesnea-vibe",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["josefin-sans", "work-sans"],
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
  --background-modifier-active-hover: rgba(242, 156, 195, 0.1) !important;
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
		rgb(242, 156, 195) 40%,
		transparent
	) !important;
  --bases-table-cell-background-active: #2c233d !important;
  --bases-table-cell-background-disabled: hsl(from #2c233d h s calc(l - 10)) !important;
  --bases-table-cell-background-selected: rgba(242, 156, 195, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #f29cc2 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(242, 156, 195) !important;
  --bases-table-group-background: hsl(from #2c233d h s calc(l - 10)) !important;
  --bases-table-header-background: #2c233d !important;
  --bases-table-header-color: #fdc4d3 !important;
  --bases-table-summary-background: #2c233d !important;
  --blockquote-border-color: rgb(242, 156, 195) !important;
  --blur-background: color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent) linear-gradient(hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	), color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent)) !important;
  --bodyFont: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --caret-color: rgb(253, 196, 211) !important;
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
  --codeFont: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #c6b0cf !important;
  --collapse-icon-color-collapsed: rgb(250, 209, 230) !important;
  --color-accent: rgb(242, 156, 195) !important;
  --color-accent-1: rgb(250, 209, 230) !important;
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
  --divider-color-hover: rgb(242, 156, 195) !important;
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
  --embed-border-start: 2px solid rgb(242, 156, 195) !important;
  --file-header-background: #2c233d !important;
  --file-header-background-focused: #2c233d !important;
  --file-header-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --flair-color: #f9e8ec !important;
  --font-interface: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Work Sans, sans-serif !important;
  --font-mermaid: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', Josefin Sans, sans-serif, 'Arial' !important;
  --font-text: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --graph-node-focused: rgb(250, 209, 230) !important;
  --graph-node-unresolved: #c6b0cf !important;
  --graph-text: #f9e8ec !important;
  --gray: #fdc4d3 !important;
  --headerFont: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #c6b0cf !important;
  --highlight: hsl(
		from #ce36be calc(h + 20) calc(s - 10) l / 0.85
	) !important;
  --hr-color: #f4df7e !important;
  --icon-color: #fdc4d3 !important;
  --icon-color-active: rgb(250, 209, 230) !important;
  --icon-color-focused: #f9e8ec !important;
  --icon-color-hover: #fdc4d3 !important;
  --input-date-separator: #c6b0cf !important;
  --input-placeholder-color: #c6b0cf !important;
  --input-radius: 4px !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
		0 4px 6px color-mix(in srgb, rgb(242, 156, 195) 50%, transparent) !important;
  --interactive-accent: rgb(242, 156, 195) !important;
  --interactive-accent-hover: rgb(250, 209, 230) !important;
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
  --link-color: rgb(250, 209, 230) !important;
  --link-color-hover: hsl(328, 80.85%, 100.62%) !important;
  --link-external-color: rgb(250, 209, 230) !important;
  --link-external-color-hover: hsl(328, 80.85%, 100.62%) !important;
  --link-unresolved-color: rgb(250, 209, 230) !important;
  --link-unresolved-decoration-color: rgba(242, 156, 195, 0.3) !important;
  --list-marker-color: #f4df7e !important;
  --list-marker-color-collapsed: rgb(250, 209, 230) !important;
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
		0px 0px 60px color-mix(in srgb, rgb(242, 156, 195) 50%, transparent) !important;
  --metadata-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --metadata-divider-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --metadata-input-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #f9e8ec !important;
  --metadata-label-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
		rgb(242, 156, 195) 20%,
		transparent
	) !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: #c6b0cf !important;
  --nav-collapse-icon-color-collapsed: #c6b0cf !important;
  --nav-heading-color: #f9e8ec !important;
  --nav-heading-color-collapsed: #c6b0cf !important;
  --nav-heading-color-collapsed-hover: #fdc4d3 !important;
  --nav-heading-color-hover: #f9e8ec !important;
  --nav-item-background-selected: rgba(242, 156, 195, 0.15) !important;
  --nav-item-color: #fdc4d3 !important;
  --nav-item-color-active: #f9e8ec !important;
  --nav-item-color-highlighted: rgb(250, 209, 230) !important;
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
  --pill-color-remove-hover: rgb(250, 209, 230) !important;
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
  --secondary: rgb(250, 209, 230) !important;
  --setting-group-heading-color: #f9e8ec !important;
  --setting-items-background: hsl(from #2c233d h s calc(l - 10)) !important;
  --setting-items-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --setting-items-radius: 8px !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
		0px 30px 90px color-mix(in srgb, rgb(242, 156, 195) 50%, transparent) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 0px 60px color-mix(in srgb, rgb(242, 156, 195) 50%, transparent) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(242, 156, 195) !important;
  --tab-text-color: #c6b0cf !important;
  --tab-text-color-active: #fdc4d3 !important;
  --tab-text-color-focused: #fdc4d3 !important;
  --tab-text-color-focused-active: #fdc4d3 !important;
  --tab-text-color-focused-active-current: #f9e8ec !important;
  --tab-text-color-focused-highlighted: rgb(250, 209, 230) !important;
  --table-add-button-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --table-border-color: color-mix(
		in srgb,
		rgb(242, 156, 195) 40%,
		transparent
	) !important;
  --table-drag-handle-background-active: rgb(242, 156, 195) !important;
  --table-drag-handle-color: #c6b0cf !important;
  --table-drag-handle-color-active: #2c233d !important;
  --table-header-background: color-mix(
		in srgb,
		rgb(242, 156, 195) 20%,
		transparent
	) !important;
  --table-header-background-hover: color-mix(
		in srgb,
		rgb(242, 156, 195) 60%,
		transparent
	) !important;
  --table-header-border-color: color-mix(
		in srgb,
		rgb(242, 156, 195) 40%,
		transparent
	) !important;
  --table-header-color: #f9e8ec !important;
  --table-header-weight: 700 !important;
  --table-selection: rgba(242, 156, 195, 0.1) !important;
  --table-selection-border-color: rgb(242, 156, 195) !important;
  --tag-background: rgba(242, 156, 195, 0.1) !important;
  --tag-background-hover: rgba(242, 156, 195, 0.2) !important;
  --tag-border-color: rgba(242, 156, 195, 0.15) !important;
  --tag-border-color-hover: rgba(242, 156, 195, 0.15) !important;
  --tag-color: rgb(250, 209, 230) !important;
  --tag-color-hover: rgb(250, 209, 230) !important;
  --tertiary: hsl(328, 80.85%, 100.62%) !important;
  --text-accent: rgb(250, 209, 230) !important;
  --text-accent-hover: hsl(328, 80.85%, 100.62%) !important;
  --text-faint: #c6b0cf !important;
  --text-highlight-bg: hsl(
		from #ce36be calc(h + 20) calc(s - 10) l / 0.85
	) !important;
  --text-muted: #fdc4d3 !important;
  --text-normal: #f9e8ec !important;
  --text-on-accent: #2c233d !important;
  --text-selection: rgba(242, 156, 195, 0.33) !important;
  --textHighlight: hsl(
		from #ce36be calc(h + 20) calc(s - 10) l / 0.85
	) !important;
  --titleFont: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 22, 33);
  color: rgb(249, 232, 236);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(44, 35, 61);
  color: rgb(249, 232, 236);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 22, 33);
  color: rgb(249, 232, 236);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 22, 33);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(249, 232, 236);
}

body div#quartz-root {
  background-color: rgb(44, 35, 61);
  color: rgb(249, 232, 236);
}`,
    typography: `body .page article p > b, b {
  color: rgb(242, 156, 194);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(242, 156, 194) none 0px;
  text-decoration: rgb(242, 156, 194);
  text-decoration-color: rgb(242, 156, 194);
}

body .page article p > em, em {
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration: rgb(253, 196, 211);
  text-decoration-color: rgb(253, 196, 211);
}

body .page article p > i, i {
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration: rgb(253, 196, 211);
  text-decoration-color: rgb(253, 196, 211);
}

body .page article p > strong, strong {
  color: rgb(242, 156, 194);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(242, 156, 194) none 0px;
  text-decoration: rgb(242, 156, 194);
  text-decoration-color: rgb(242, 156, 194);
}

body .text-highlight {
  background-color: color(srgb 0.758824 0.260784 0.540385 / 0.85);
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 232, 236) none 0px;
  text-decoration: rgb(249, 232, 236);
  text-decoration-color: rgb(249, 232, 236);
}

body del {
  color: color(srgb 0.992157 0.768627 0.827451 / 0.6);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.992157 0.768627 0.827451 / 0.6) none 0px;
  text-decoration: line-through rgb(214, 51, 132);
  text-decoration-color: rgb(214, 51, 132);
}

body p {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration: rgb(253, 196, 211);
  text-decoration-color: rgb(253, 196, 211);
}`,
    links: `body a.external, footer a {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration: underline rgb(249, 208, 229);
  text-decoration-color: rgb(249, 208, 229);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration: underline rgb(249, 208, 229);
  text-decoration-color: rgb(249, 208, 229);
}

body a.internal.broken {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration: underline rgba(242, 156, 195, 0.3);
  text-decoration-color: rgba(242, 156, 195, 0.3);
}`,
    lists: `body dd {
  color: rgb(249, 232, 236);
}

body dt {
  color: rgb(249, 232, 236);
}

body ol > li {
  color: color(srgb 0.944282 0.475326 0.894918);
}

body ol.overflow {
  background-color: rgb(44, 35, 61);
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body ul > li {
  color: color(srgb 0.944282 0.475326 0.894918);
}

body ul.overflow {
  background-color: rgb(44, 35, 61);
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(198, 176, 207);
  text-decoration: rgb(198, 176, 207);
}

body blockquote {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body table {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 183.156px;
}

body td {
  border-bottom-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-left-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-right-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-top-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: rgb(249, 232, 236);
}

body th {
  border-bottom-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-left-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-right-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-top-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: rgb(249, 232, 236);
  font-weight: 700;
}

body tr {
  background-color: color(srgb 0.9494 0.6106 0.76306 / 0.2);
}`,
    code: `body code {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(249, 232, 236);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
}

body pre:has(> code) {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
}`,
    images: `body audio {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body figcaption {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body img {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body video {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body .transclude {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(242, 156, 195);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body .transclude-inner {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(242, 156, 195);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 187, 116);
  text-decoration: line-through rgb(112, 187, 116);
  text-decoration-color: rgb(112, 187, 116);
}

body input[type=checkbox] {
  border-bottom-color: rgb(206, 54, 190);
  border-left-color: rgb(206, 54, 190);
  border-right-color: rgb(206, 54, 190);
  border-top-color: rgb(206, 54, 190);
}

body li.task-list-item[data-task='!'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='*'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='/'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='>'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='?'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='I'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='S'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='b'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='c'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='d'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='f'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='i'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='k'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='l'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='p'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='u'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='w'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 232, 236) none 0px;
  text-decoration: rgb(249, 232, 236);
  text-decoration-color: rgb(249, 232, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(249, 232, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(249, 232, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(249, 232, 236);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(242, 156, 194);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(242, 156, 194);
  border-right-color: rgb(242, 156, 194);
  border-top-color: rgb(242, 156, 194);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 22, 33);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(249, 232, 236);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(249, 208, 229);
}

body h1 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

body ::-webkit-scrollbar-corner {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

body ::-webkit-scrollbar-track {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(253, 196, 211);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(253, 196, 211);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(253, 196, 211);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
}`,
    footer: `body footer {
  background-color: rgb(24, 22, 33);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-left-radius: 6px;
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(253, 196, 211);
  text-decoration: rgb(253, 196, 211);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(253, 196, 211);
  text-decoration: rgb(253, 196, 211);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body li.section-li > .section .meta {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(253, 196, 211);
  text-decoration: rgb(253, 196, 211);
}

body ul.section-ul {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
}

body .darkmode svg {
  color: rgb(253, 196, 211);
  stroke: rgb(253, 196, 211);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
}

body .breadcrumb-element p {
  color: rgb(198, 176, 207);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body .metadata {
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(24, 22, 33);
}

body .page-header h2.page-title {
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(249, 232, 236);
  text-decoration: underline dotted rgb(249, 232, 236);
}

body details {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body input[type=text] {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body progress {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body sub {
  color: rgb(249, 232, 236);
}

body summary {
  color: rgb(249, 232, 236);
}

body sup {
  color: rgb(249, 232, 236);
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
  --background-modifier-active-hover: rgba(242, 156, 195, 0.1) !important;
  --background-modifier-border: #c6b0cf !important;
  --background-modifier-border-focus: rgb(162, 129, 177) !important;
  --background-modifier-border-hover: rgb(185, 160, 197) !important;
  --background-modifier-form-field: rgb(254, 251, 251) !important;
  --background-modifier-form-field-hover: rgb(254, 251, 251) !important;
  --background-primary: rgb(254, 251, 251) !important;
  --background-primary-alt: rgb(243, 239, 245) !important;
  --background-secondary: rgb(239, 237, 247) !important;
  --background-secondary-alt: rgb(248, 246, 249) !important;
  --bases-cards-background: rgb(254, 251, 251) !important;
  --bases-cards-cover-background: rgb(243, 239, 245) !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px #c6b0cf !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(185, 160, 197) !important;
  --bases-embed-border-color: #c6b0cf !important;
  --bases-group-heading-property-color: rgb(119, 107, 174) !important;
  --bases-table-border-color: #c6b0cf !important;
  --bases-table-cell-background-active: rgb(254, 251, 251) !important;
  --bases-table-cell-background-disabled: rgb(243, 239, 245) !important;
  --bases-table-cell-background-selected: rgba(242, 156, 195, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(162, 129, 177) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(246, 182, 212) !important;
  --bases-table-group-background: rgb(243, 239, 245) !important;
  --bases-table-header-background: rgb(254, 251, 251) !important;
  --bases-table-header-color: rgb(119, 107, 174) !important;
  --bases-table-summary-background: rgb(254, 251, 251) !important;
  --blockquote-border-color: rgb(246, 182, 212) !important;
  --blur-background: color-mix(in srgb, rgb(254, 251, 251) 65%, transparent) linear-gradient(rgb(254, 251, 251), color-mix(in srgb, rgb(254, 251, 251) 65%, transparent)) !important;
  --bodyFont: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #d62d64 !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --button-radius: 4px !important;
  --callout-title-weight: 700;
  --canvas-background: rgb(254, 251, 251) !important;
  --canvas-card-label-color: rgb(145, 113, 168) !important;
  --canvas-dot-pattern: #c6b0cf !important;
  --caret-color: #87d1f3 !important;
  --checkbox-border-color: #ce36be !important;
  --checkbox-border-color-hover: #70bb74 !important;
  --checkbox-color: #70bb74 !important;
  --checkbox-color-hover: #ce36be !important;
  --checkbox-marker-color: rgb(254, 251, 251) !important;
  --checklist-done-color: #70bb74 !important;
  --code-background: rgb(243, 239, 245) !important;
  --code-border-color: #c6b0cf !important;
  --code-comment: rgb(145, 113, 168) !important;
  --code-normal: rgb(39, 35, 67) !important;
  --code-punctuation: rgb(119, 107, 174) !important;
  --codeFont: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(145, 113, 168) !important;
  --collapse-icon-color-collapsed: rgb(242, 156, 195) !important;
  --color-accent: rgb(242, 156, 195) !important;
  --color-accent-1: rgb(246, 182, 212) !important;
  --color-accent-2: rgb(250, 209, 230) !important;
  --color-accent-hsl: 333, 77%, 78% !important;
  --color-base-00: rgb(254, 251, 251) !important;
  --color-base-05: rgb(248, 246, 249) !important;
  --color-base-10: rgb(243, 239, 245) !important;
  --color-base-100: rgb(39, 35, 67) !important;
  --color-base-20: rgb(220, 208, 226) !important;
  --color-base-25: rgb(208, 192, 216) !important;
  --color-base-30: #c6b0cf !important;
  --color-base-35: rgb(185, 160, 197) !important;
  --color-base-40: rgb(162, 129, 177) !important;
  --color-base-50: rgb(145, 113, 168) !important;
  --color-base-60: rgb(135, 109, 171) !important;
  --color-base-70: rgb(119, 107, 174) !important;
  --cutepink: #ff69b4 !important;
  --cutepink2: #d63384 !important;
  --dark: rgb(39, 35, 67) !important;
  --darkgray: rgb(39, 35, 67) !important;
  --divider-color: #c6b0cf !important;
  --divider-color-hover: rgb(246, 182, 212) !important;
  --dropdown-background: rgb(254, 251, 251) !important;
  --dropdown-background-hover: rgb(243, 239, 245) !important;
  --embed-block-shadow-hover: 0 0 0 1px #c6b0cf, inset 0 0 0 1px #c6b0cf !important;
  --embed-border-start: 2px solid rgb(246, 182, 212) !important;
  --file-header-background: rgb(254, 251, 251) !important;
  --file-header-background-focused: rgb(254, 251, 251) !important;
  --file-header-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(254, 251, 251) !important;
  --flair-color: rgb(39, 35, 67) !important;
  --font-interface: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Work Sans, sans-serif !important;
  --font-mermaid: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', Josefin Sans, sans-serif, 'Arial' !important;
  --font-text: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Josefin Sans, sans-serif !important;
  --footnote-divider-color: #c6b0cf !important;
  --footnote-id-color: rgb(119, 107, 174) !important;
  --footnote-id-color-no-occurrences: rgb(145, 113, 168) !important;
  --graph-line: rgb(185, 160, 197) !important;
  --graph-node: rgb(119, 107, 174) !important;
  --graph-node-focused: rgb(242, 156, 195) !important;
  --graph-node-unresolved: rgb(145, 113, 168) !important;
  --graph-text: rgb(39, 35, 67) !important;
  --gray: rgb(119, 107, 174) !important;
  --headerFont: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(145, 113, 168) !important;
  --highlight: #fdc4d3 !important;
  --hr-color: #c6b0cf !important;
  --icon-color: rgb(119, 107, 174) !important;
  --icon-color-active: rgb(242, 156, 195) !important;
  --icon-color-focused: rgb(39, 35, 67) !important;
  --icon-color-hover: rgb(119, 107, 174) !important;
  --input-date-separator: rgb(145, 113, 168) !important;
  --input-placeholder-color: rgb(145, 113, 168) !important;
  --input-radius: 4px !important;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
		0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 0 0 0 transparent,
		0 4px 6px
			color-mix(in srgb, #c6b0cf 50%, transparent) !important;
  --interactive-accent: rgb(246, 182, 212) !important;
  --interactive-accent-hover: rgb(250, 209, 230) !important;
  --interactive-accent-hsl: 333, 77%, 78% !important;
  --interactive-hover: rgb(243, 239, 245) !important;
  --interactive-normal: rgb(254, 251, 251) !important;
  --italic-color: hsl(from #87d1f3 h s calc(l - 20)) !important;
  --light: rgb(254, 251, 251) !important;
  --lightgray: rgb(239, 237, 247) !important;
  --link-color: rgb(242, 156, 195) !important;
  --link-color-hover: rgb(250, 209, 230) !important;
  --link-external-color: rgb(242, 156, 195) !important;
  --link-external-color-hover: rgb(250, 209, 230) !important;
  --link-unresolved-color: rgb(242, 156, 195) !important;
  --link-unresolved-decoration-color: rgba(242, 156, 195, 0.3) !important;
  --list-marker-color: rgb(145, 113, 168) !important;
  --list-marker-color-collapsed: rgb(242, 156, 195) !important;
  --list-marker-color-hover: rgb(119, 107, 174) !important;
  --list-spacing: 2px !important;
  --menu-background: rgb(239, 237, 247) !important;
  --menu-border-color: rgb(185, 160, 197) !important;
  --menu-radius: 6px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 30px 90px
			color-mix(in srgb, #c6b0cf 50%, transparent) !important;
  --metadata-border-color: #c6b0cf !important;
  --metadata-divider-color: #c6b0cf !important;
  --metadata-input-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(39, 35, 67) !important;
  --metadata-label-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(119, 107, 174) !important;
  --metadata-label-text-color-hover: rgb(119, 107, 174) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(162, 129, 177) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(185, 160, 197) !important;
  --modal-background: rgb(254, 251, 251) !important;
  --modal-border-color: transparent !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: rgb(145, 113, 168) !important;
  --nav-collapse-icon-color-collapsed: rgb(145, 113, 168) !important;
  --nav-heading-color: rgb(39, 35, 67) !important;
  --nav-heading-color-collapsed: rgb(145, 113, 168) !important;
  --nav-heading-color-collapsed-hover: rgb(119, 107, 174) !important;
  --nav-heading-color-hover: rgb(39, 35, 67) !important;
  --nav-item-background-selected: rgba(242, 156, 195, 0.15) !important;
  --nav-item-color: rgb(119, 107, 174) !important;
  --nav-item-color-active: rgb(39, 35, 67) !important;
  --nav-item-color-highlighted: rgb(242, 156, 195) !important;
  --nav-item-color-hover: rgb(39, 35, 67) !important;
  --nav-item-color-selected: rgb(39, 35, 67) !important;
  --nav-tag-color: rgb(145, 113, 168) !important;
  --nav-tag-color-active: rgb(119, 107, 174) !important;
  --nav-tag-color-hover: rgb(119, 107, 174) !important;
  --pdf-background: rgb(254, 251, 251) !important;
  --pdf-page-background: rgb(254, 251, 251) !important;
  --pdf-sidebar-background: rgb(254, 251, 251) !important;
  --pill-border-color: #c6b0cf !important;
  --pill-border-color-hover: rgb(185, 160, 197) !important;
  --pill-color: rgb(119, 107, 174) !important;
  --pill-color-hover: rgb(39, 35, 67) !important;
  --pill-color-remove: rgb(145, 113, 168) !important;
  --pill-color-remove-hover: rgb(242, 156, 195) !important;
  --prompt-background: rgb(254, 251, 251) !important;
  --prompt-border-color: rgb(162, 129, 177) !important;
  --radius-l: 8px !important;
  --radius-m: 6px !important;
  --raised-background: color-mix(in srgb, rgb(254, 251, 251) 65%, transparent) linear-gradient(rgb(254, 251, 251), color-mix(in srgb, rgb(254, 251, 251) 65%, transparent)) !important;
  --ribbon-background: rgb(239, 237, 247) !important;
  --ribbon-background-collapsed: rgb(254, 251, 251) !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: rgb(119, 107, 174) !important;
  --search-icon-color: rgb(119, 107, 174) !important;
  --search-result-background: rgb(254, 251, 251) !important;
  --secondary: rgb(242, 156, 195) !important;
  --setting-group-heading-color: rgb(39, 35, 67) !important;
  --setting-items-background: rgb(243, 239, 245) !important;
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
  --slider-thumb-border-color: rgb(185, 160, 197) !important;
  --slider-thumb-radius: 4px !important;
  --slider-track-background: #c6b0cf !important;
  --status-bar-background: rgb(239, 237, 247) !important;
  --status-bar-border-color: #c6b0cf !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-text-color: rgb(119, 107, 174) !important;
  --suggestion-background: rgb(254, 251, 251) !important;
  --tab-background-active: rgb(254, 251, 251) !important;
  --tab-container-background: rgb(239, 237, 247) !important;
  --tab-divider-color: rgb(185, 160, 197) !important;
  --tab-outline-color: #c6b0cf !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: rgb(239, 237, 247) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(239, 237, 247), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(242, 156, 195) !important;
  --tab-text-color: rgb(145, 113, 168) !important;
  --tab-text-color-active: rgb(119, 107, 174) !important;
  --tab-text-color-focused: rgb(119, 107, 174) !important;
  --tab-text-color-focused-active: rgb(119, 107, 174) !important;
  --tab-text-color-focused-active-current: rgb(39, 35, 67) !important;
  --tab-text-color-focused-highlighted: rgb(242, 156, 195) !important;
  --table-add-button-border-color: #c6b0cf !important;
  --table-border-color: #c6b0cf !important;
  --table-drag-handle-background-active: rgb(246, 182, 212) !important;
  --table-drag-handle-color: rgb(145, 113, 168) !important;
  --table-drag-handle-color-active: #2c233d !important;
  --table-header-background: color-mix(
		in srgb,
		rgb(242, 156, 195) 20%,
		transparent
	) !important;
  --table-header-background-hover: color-mix(
		in srgb,
		rgb(242, 156, 195) 60%,
		transparent
	) !important;
  --table-header-border-color: #c6b0cf !important;
  --table-header-color: rgb(39, 35, 67) !important;
  --table-header-weight: 700 !important;
  --table-selection: rgba(242, 156, 195, 0.1) !important;
  --table-selection-border-color: rgb(246, 182, 212) !important;
  --tag-background: rgba(242, 156, 195, 0.1) !important;
  --tag-background-hover: rgba(242, 156, 195, 0.2) !important;
  --tag-border-color: rgba(242, 156, 195, 0.15) !important;
  --tag-border-color-hover: rgba(242, 156, 195, 0.15) !important;
  --tag-color: rgb(242, 156, 195) !important;
  --tag-color-hover: rgb(242, 156, 195) !important;
  --tertiary: rgb(250, 209, 230) !important;
  --text-accent: rgb(242, 156, 195) !important;
  --text-accent-hover: rgb(250, 209, 230) !important;
  --text-faint: rgb(145, 113, 168) !important;
  --text-highlight-bg: #fdc4d3 !important;
  --text-muted: rgb(119, 107, 174) !important;
  --text-normal: rgb(39, 35, 67) !important;
  --text-on-accent: #2c233d !important;
  --text-selection: rgba(242, 156, 195, 0.2) !important;
  --textHighlight: #fdc4d3 !important;
  --titleFont: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(239, 237, 247) !important;
  --titlebar-background-focused: rgb(248, 246, 249) !important;
  --titlebar-border-color: #c6b0cf !important;
  --titlebar-text-color: rgb(119, 107, 174) !important;
  --titlebar-text-color-focused: rgb(39, 35, 67) !important;
  --toggle-radius: 6px !important;
  --toggle-thumb-radius: 4px !important;
  --vault-profile-color: rgb(39, 35, 67) !important;
  --vault-profile-color-hover: rgb(39, 35, 67) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 237, 247);
  color: rgb(39, 35, 67);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(254, 251, 251);
  color: rgb(39, 35, 67);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 237, 247);
  color: rgb(39, 35, 67);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(198, 176, 207);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 237, 247);
  border-left-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

body div#quartz-root {
  background-color: rgb(254, 251, 251);
  color: rgb(39, 35, 67);
}`,
    typography: `body .page article p > b, b {
  color: rgb(214, 45, 100);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(214, 45, 100) none 0px;
  text-decoration: rgb(214, 45, 100);
  text-decoration-color: rgb(214, 45, 100);
}

body .page article p > em, em {
  color: color(srgb 0.165775 0.680214 0.916578);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.165775 0.680214 0.916578) none 0px;
  text-decoration: color(srgb 0.165775 0.680214 0.916578);
  text-decoration-color: color(srgb 0.165775 0.680214 0.916578);
}

body .page article p > i, i {
  color: color(srgb 0.165775 0.680214 0.916578);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.165775 0.680214 0.916578) none 0px;
  text-decoration: color(srgb 0.165775 0.680214 0.916578);
  text-decoration-color: color(srgb 0.165775 0.680214 0.916578);
}

body .page article p > strong, strong {
  color: rgb(214, 45, 100);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(214, 45, 100) none 0px;
  text-decoration: rgb(214, 45, 100);
  text-decoration-color: rgb(214, 45, 100);
}

body .text-highlight {
  background-color: rgb(253, 196, 211);
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 35, 67) none 0px;
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body del {
  color: color(srgb 0.46735 0.4195 0.6805 / 0.6);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.46735 0.4195 0.6805 / 0.6) none 0px;
  text-decoration: line-through rgb(214, 51, 132);
  text-decoration-color: rgb(214, 51, 132);
}

body p {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(119, 107, 174) none 0px;
  text-decoration: rgb(119, 107, 174);
  text-decoration-color: rgb(119, 107, 174);
}`,
    links: `body a.external, footer a {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration: underline rgb(242, 156, 195);
  text-decoration-color: rgb(242, 156, 195);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration: underline rgb(242, 156, 195);
  text-decoration-color: rgb(242, 156, 195);
}

body a.internal.broken {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration: underline rgba(242, 156, 195, 0.3);
  text-decoration-color: rgba(242, 156, 195, 0.3);
}`,
    lists: `body dd {
  color: rgb(39, 35, 67);
}

body dt {
  color: rgb(39, 35, 67);
}

body ol > li {
  color: rgb(39, 35, 67);
}

body ol.overflow {
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body ul > li {
  color: rgb(39, 35, 67);
}

body ul.overflow {
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(145, 113, 168);
  text-decoration: rgb(145, 113, 168);
}

body blockquote {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body table {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 183.156px;
}

body td {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

body th {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
  font-weight: 700;
}

body tr {
  background-color: color(srgb 0.9494 0.6106 0.76306 / 0.2);
}`,
    code: `body code {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

body pre > code, pre:has(> code) {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
}

body pre:has(> code) {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
}`,
    images: `body audio {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body figcaption {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body img {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body video {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body .transclude {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(246, 182, 212);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body .transclude-inner {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(246, 182, 212);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 187, 116);
  text-decoration: line-through rgb(112, 187, 116);
  text-decoration-color: rgb(112, 187, 116);
}

body input[type=checkbox] {
  border-bottom-color: rgb(206, 54, 190);
  border-left-color: rgb(206, 54, 190);
  border-right-color: rgb(206, 54, 190);
  border-top-color: rgb(206, 54, 190);
}

body li.task-list-item[data-task='!'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='*'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='-'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='/'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='>'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='?'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='I'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='S'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='b'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='c'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='d'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='f'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='i'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='k'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='l'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='p'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='u'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='w'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 35, 67) none 0px;
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(39, 35, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(39, 35, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(39, 35, 67);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(162, 129, 177);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(162, 129, 177);
  border-right-color: rgb(162, 129, 177);
  border-top-color: rgb(162, 129, 177);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 237, 247);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(39, 35, 67);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(242, 156, 195);
}

body h1 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

body ::-webkit-scrollbar-corner {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

body ::-webkit-scrollbar-track {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(119, 107, 174);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(119, 107, 174);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(119, 107, 174);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
}`,
    footer: `body footer {
  background-color: rgb(239, 237, 247);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  border-top-left-radius: 6px;
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(119, 107, 174);
  text-decoration: rgb(119, 107, 174);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(119, 107, 174);
  text-decoration: rgb(119, 107, 174);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body li.section-li > .section .meta {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(119, 107, 174);
  text-decoration: rgb(119, 107, 174);
}

body ul.section-ul {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
}

body .darkmode svg {
  color: rgb(119, 107, 174);
  stroke: rgb(119, 107, 174);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
}

body .breadcrumb-element p {
  color: rgb(145, 113, 168);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body .metadata {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(119, 107, 174);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(239, 237, 247);
}

body .page-header h2.page-title {
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(39, 35, 67);
  text-decoration: underline dotted rgb(39, 35, 67);
}

body details {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body input[type=text] {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body progress {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body sub {
  color: rgb(39, 35, 67);
}

body summary {
  color: rgb(39, 35, 67);
}

body sup {
  color: rgb(39, 35, 67);
}`,
  },
};
