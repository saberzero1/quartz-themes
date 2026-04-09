import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dynamic-color",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --background-modifier-border: hsl(
		258 8% 30%
	) !important;
  --background-modifier-border-focus: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --background-modifier-border-hover: hsl(
		258 8% 60%
	) !important;
  --background-modifier-error: hsl(
		0 84% 30%
	) !important;
  --background-modifier-hover: hsl(
		258 4% 12%
	) !important;
  --background-primary: hsl(
		258 4% 4%
	) !important;
  --background-primary-alt: hsl(
		258 4% 10%
	) !important;
  --background-secondary: hsl(
		258 4% 17%
	) !important;
  --background-secondary-alt: hsl(
		258 4% 22%
	) !important;
  --bases-cards-background: hsl(
		258 4% 4%
	) !important;
  --bases-cards-cover-background: hsl(
		258 4% 10%
	) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(
		258 8% 30%
	) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(
		258 8% 60%
	) !important;
  --bases-embed-border-color: hsl(
		258 8% 30%
	) !important;
  --bases-group-heading-property-color: hsl(
		258 8% 60%
	) !important;
  --bases-table-border-color: hsl(
		258 8% 30%
	) !important;
  --bases-table-cell-background-active: hsl(
		258 4% 4%
	) !important;
  --bases-table-cell-background-disabled: hsl(
		258 4% 10%
	) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --bases-table-group-background: hsl(
		258 4% 10%
	) !important;
  --bases-table-header-background: hsl(
		258 4% 4%
	) !important;
  --bases-table-header-background-hover: hsl(
		258 4% 12%
	) !important;
  --bases-table-header-color: hsl(
		258 8% 60%
	) !important;
  --bases-table-summary-background: hsl(
		258 4% 4%
	) !important;
  --bases-table-summary-background-hover: hsl(
		258 4% 12%
	) !important;
  --blockquote-background-color: hsl(
		258 4% 17%
	) !important;
  --blockquote-border-color: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --blockquote-color: hsl(
		258 4% 90%
	) !important;
  --blur-background: color-mix(in srgb, hsl(
		258 4% 12%
	) 65%, transparent) linear-gradient(hsl(
		258 4% 12%
	), color-mix(in srgb, hsl(
		258 4% 12%
	) 65%, transparent)) !important;
  --button-radius: 20px !important;
  --canvas-background: hsl(
		258 4% 10%
	) !important;
  --canvas-card-label-color: hsl(
		258 4% 90%
	) !important;
  --canvas-dot-pattern: hsl(
		258 8% 30%
	) !important;
  --caret-color: hsl(
		258 4% 90%
	) !important;
  --checkbox-border-color: hsl(
		258 8% 30%
	) !important;
  --checkbox-border-color-hover: hsl(
		258 8% 60%
	) !important;
  --checkbox-color: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --checkbox-marker-color: hsl(
		258 4% 4%
	) !important;
  --checklist-done-color: hsl(
		258 8% 60%
	) !important;
  --code-background: hsl(
		258 4% 6%
	) !important;
  --code-border-color: hsl(
		258 8% 30%
	) !important;
  --code-bracket-background: hsl(
		258 4% 12%
	) !important;
  --code-comment: hsl(
		258 8% 30%
	) !important;
  --code-normal: hsl(
		258 4% 90%
	) !important;
  --code-punctuation: hsl(
		258 8% 60%
	) !important;
  --collapse-icon-color: hsl(
		258 8% 30%
	) !important;
  --collapse-icon-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --dark: hsl(
		258 4% 90%
	) !important;
  --darkgray: hsl(
		258 4% 90%
	) !important;
  --divider-color: hsl(
		258 8% 30%
	) !important;
  --divider-color-hover: hsl(
		258 8% 60%
	) !important;
  --dropdown-background: hsl(
		258 4% 12%
	) !important;
  --dropdown-background-hover: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --embed-background: hsl(
		258 4% 6%
	) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(
		258 8% 30%
	), inset 0 0 0 1px hsl(
		258 8% 30%
	) !important;
  --embed-border-start: 2px solid hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --error-hue: 0 !important;
  --error-saturation: 84% !important;
  --file-header-background: hsl(
		258 4% 4%
	) !important;
  --file-header-background-focused: hsl(
		258 4% 4%
	) !important;
  --flair-background: hsl(
		258 4% 12%
	) !important;
  --flair-color: hsl(
		258 4% 90%
	) !important;
  --footnote-divider-color: hsl(
		258 8% 30%
	) !important;
  --footnote-id-color: hsl(
		258 8% 60%
	) !important;
  --footnote-id-color-no-occurrences: hsl(
		258 8% 30%
	) !important;
  --footnote-input-background-active: hsl(
		258 4% 12%
	) !important;
  --graph-line: hsl(
		258 8% 60%
	) !important;
  --graph-node: hsl(
		258 4% 12%
	) !important;
  --graph-node-attachment: hsl(
		318 24% 30%
	) !important;
  --graph-node-focused: hsl(
		258 4% 24%
	) !important;
  --graph-node-tag: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --graph-node-unresolved: hsl(
		258 4% 10%
	) !important;
  --graph-text: hsl(
		258 4% 90%
	) !important;
  --gray: hsl(
		258 8% 60%
	) !important;
  --h1-color: hsl(
		258 4% 90%
	) !important;
  --h2-color: hsl(
		258 4% 90%
	) !important;
  --h3-color: hsl(
		258 4% 90%
	) !important;
  --h4-color: hsl(
		258 4% 90%
	) !important;
  --h5-color: hsl(
		258 4% 90%
	) !important;
  --h6-color: hsl(
		258 4% 90%
	) !important;
  --heading-formatting: hsl(
		258 8% 30%
	) !important;
  --highlight: hsl(
		318 24% 30%
	) !important;
  --hr-color: hsl(
		258 8% 30%
	) !important;
  --hue: 258 !important;
  --icon-color: hsl(
		258 8% 60%
	) !important;
  --icon-color-active: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --icon-color-focused: hsl(
		258 4% 90%
	) !important;
  --icon-color-hover: hsl(
		258 8% 60%
	) !important;
  --inline-title-color: hsl(
		258 4% 90%
	) !important;
  --input-date-separator: hsl(
		258 8% 30%
	) !important;
  --input-placeholder-color: hsl(
		258 8% 30%
	) !important;
  --interactive-accent: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --interactive-hover: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --interactive-normal: hsl(
		258 4% 12%
	) !important;
  --interactive-normal-accent: hsl(
		258 4% 24%
	) !important;
  --interactive-normal-hover: hsl(
		258 4% 6%
	) !important;
  --light: hsl(
		258 4% 4%
	) !important;
  --lightgray: hsl(
		258 4% 17%
	) !important;
  --link-color: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --link-color-hover: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --link-external-color: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --link-external-color-hover: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --link-unresolved-color: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --list-marker-color: hsl(
		258 8% 30%
	) !important;
  --list-marker-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --list-marker-color-hover: hsl(
		258 8% 60%
	) !important;
  --md-ref-palette-error-0: hsl(0 84% 0%) !important;
  --md-ref-palette-error-10: hsl(
		0 84% 10%
	) !important;
  --md-ref-palette-error-100: hsl(
		0 84% 100%
	) !important;
  --md-ref-palette-error-12: hsl(
		0 84% 12%
	) !important;
  --md-ref-palette-error-17: hsl(
		0 84% 17%
	) !important;
  --md-ref-palette-error-20: hsl(
		0 84% 20%
	) !important;
  --md-ref-palette-error-22: hsl(
		0 84% 22%
	) !important;
  --md-ref-palette-error-24: hsl(
		0 84% 24%
	) !important;
  --md-ref-palette-error-25: hsl(
		0 84% 25%
	) !important;
  --md-ref-palette-error-30: hsl(
		0 84% 30%
	) !important;
  --md-ref-palette-error-35: hsl(
		0 84% 35%
	) !important;
  --md-ref-palette-error-4: hsl(0 84% 4%) !important;
  --md-ref-palette-error-40: hsl(
		0 84% 40%
	) !important;
  --md-ref-palette-error-5: hsl(0 84% 5%) !important;
  --md-ref-palette-error-50: hsl(
		0 84% 50%
	) !important;
  --md-ref-palette-error-6: hsl(0 84% 6%) !important;
  --md-ref-palette-error-60: hsl(
		0 84% 60%
	) !important;
  --md-ref-palette-error-70: hsl(
		0 84% 70%
	) !important;
  --md-ref-palette-error-80: hsl(
		0 84% 80%
	) !important;
  --md-ref-palette-error-87: hsl(
		0 84% 87%
	) !important;
  --md-ref-palette-error-90: hsl(
		0 84% 90%
	) !important;
  --md-ref-palette-error-92: hsl(
		0 84% 92%
	) !important;
  --md-ref-palette-error-94: hsl(
		0 84% 94%
	) !important;
  --md-ref-palette-error-95: hsl(
		0 84% 95%
	) !important;
  --md-ref-palette-error-96: hsl(
		0 84% 96%
	) !important;
  --md-ref-palette-error-98: hsl(
		0 84% 98%
	) !important;
  --md-ref-palette-error-99: hsl(
		0 84% 99%
	) !important;
  --md-ref-palette-neutral-0: hsl(
		258 4% 0%
	) !important;
  --md-ref-palette-neutral-10: hsl(
		258 4% 10%
	) !important;
  --md-ref-palette-neutral-100: hsl(
		258 4% 100%
	) !important;
  --md-ref-palette-neutral-12: hsl(
		258 4% 12%
	) !important;
  --md-ref-palette-neutral-17: hsl(
		258 4% 17%
	) !important;
  --md-ref-palette-neutral-20: hsl(
		258 4% 20%
	) !important;
  --md-ref-palette-neutral-22: hsl(
		258 4% 22%
	) !important;
  --md-ref-palette-neutral-24: hsl(
		258 4% 24%
	) !important;
  --md-ref-palette-neutral-25: hsl(
		258 4% 25%
	) !important;
  --md-ref-palette-neutral-30: hsl(
		258 4% 30%
	) !important;
  --md-ref-palette-neutral-35: hsl(
		258 4% 35%
	) !important;
  --md-ref-palette-neutral-4: hsl(
		258 4% 4%
	) !important;
  --md-ref-palette-neutral-40: hsl(
		258 4% 40%
	) !important;
  --md-ref-palette-neutral-5: hsl(
		258 4% 5%
	) !important;
  --md-ref-palette-neutral-50: hsl(
		258 4% 50%
	) !important;
  --md-ref-palette-neutral-6: hsl(
		258 4% 6%
	) !important;
  --md-ref-palette-neutral-60: hsl(
		258 4% 60%
	) !important;
  --md-ref-palette-neutral-70: hsl(
		258 4% 70%
	) !important;
  --md-ref-palette-neutral-80: hsl(
		258 4% 80%
	) !important;
  --md-ref-palette-neutral-87: hsl(
		258 4% 87%
	) !important;
  --md-ref-palette-neutral-90: hsl(
		258 4% 90%
	) !important;
  --md-ref-palette-neutral-92: hsl(
		258 4% 92%
	) !important;
  --md-ref-palette-neutral-94: hsl(
		258 4% 94%
	) !important;
  --md-ref-palette-neutral-95: hsl(
		258 4% 95%
	) !important;
  --md-ref-palette-neutral-96: hsl(
		258 4% 96%
	) !important;
  --md-ref-palette-neutral-98: hsl(
		258 4% 98%
	) !important;
  --md-ref-palette-neutral-99: hsl(
		258 4% 99%
	) !important;
  --md-ref-palette-neutral-variant-0: hsl(
		258 8% 0%
	) !important;
  --md-ref-palette-neutral-variant-10: hsl(
		258 8% 10%
	) !important;
  --md-ref-palette-neutral-variant-100: hsl(
		258 8% 100%
	) !important;
  --md-ref-palette-neutral-variant-12: hsl(
		258 8% 12%
	) !important;
  --md-ref-palette-neutral-variant-17: hsl(
		258 8% 17%
	) !important;
  --md-ref-palette-neutral-variant-20: hsl(
		258 8% 20%
	) !important;
  --md-ref-palette-neutral-variant-22: hsl(
		258 8% 22%
	) !important;
  --md-ref-palette-neutral-variant-24: hsl(
		258 8% 24%
	) !important;
  --md-ref-palette-neutral-variant-25: hsl(
		258 8% 25%
	) !important;
  --md-ref-palette-neutral-variant-30: hsl(
		258 8% 30%
	) !important;
  --md-ref-palette-neutral-variant-35: hsl(
		258 8% 35%
	) !important;
  --md-ref-palette-neutral-variant-4: hsl(
		258 8% 4%
	) !important;
  --md-ref-palette-neutral-variant-40: hsl(
		258 8% 40%
	) !important;
  --md-ref-palette-neutral-variant-5: hsl(
		258 8% 5%
	) !important;
  --md-ref-palette-neutral-variant-50: hsl(
		258 8% 50%
	) !important;
  --md-ref-palette-neutral-variant-6: hsl(
		258 8% 6%
	) !important;
  --md-ref-palette-neutral-variant-60: hsl(
		258 8% 60%
	) !important;
  --md-ref-palette-neutral-variant-70: hsl(
		258 8% 70%
	) !important;
  --md-ref-palette-neutral-variant-80: hsl(
		258 8% 80%
	) !important;
  --md-ref-palette-neutral-variant-87: hsl(
		258 8% 87%
	) !important;
  --md-ref-palette-neutral-variant-90: hsl(
		258 8% 90%
	) !important;
  --md-ref-palette-neutral-variant-92: hsl(
		258 8% 92%
	) !important;
  --md-ref-palette-neutral-variant-94: hsl(
		258 8% 94%
	) !important;
  --md-ref-palette-neutral-variant-95: hsl(
		258 8% 95%
	) !important;
  --md-ref-palette-neutral-variant-96: hsl(
		258 8% 96%
	) !important;
  --md-ref-palette-neutral-variant-98: hsl(
		258 8% 98%
	) !important;
  --md-ref-palette-neutral-variant-99: hsl(
		258 8% 99%
	) !important;
  --md-ref-palette-primary-0: hsl(
		258 calc(max(48%, 88%)) 0%
	) !important;
  --md-ref-palette-primary-10: hsl(
		258 calc(max(48%, 88%)) 10%
	) !important;
  --md-ref-palette-primary-100: hsl(
		258 calc(max(48%, 88%)) 100%
	) !important;
  --md-ref-palette-primary-12: hsl(
		258 calc(max(48%, 88%)) 12%
	) !important;
  --md-ref-palette-primary-17: hsl(
		258 calc(max(48%, 88%)) 17%
	) !important;
  --md-ref-palette-primary-20: hsl(
		258 calc(max(48%, 88%)) 20%
	) !important;
  --md-ref-palette-primary-22: hsl(
		258 calc(max(48%, 88%)) 22%
	) !important;
  --md-ref-palette-primary-24: hsl(
		258 calc(max(48%, 88%)) 24%
	) !important;
  --md-ref-palette-primary-25: hsl(
		258 calc(max(48%, 88%)) 25%
	) !important;
  --md-ref-palette-primary-30: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --md-ref-palette-primary-35: hsl(
		258 calc(max(48%, 88%)) 35%
	) !important;
  --md-ref-palette-primary-4: hsl(
		258 calc(max(48%, 88%)) 4%
	) !important;
  --md-ref-palette-primary-40: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --md-ref-palette-primary-5: hsl(
		258 calc(max(48%, 88%)) 5%
	) !important;
  --md-ref-palette-primary-50: hsl(
		258 calc(max(48%, 88%)) 50%
	) !important;
  --md-ref-palette-primary-6: hsl(
		258 calc(max(48%, 88%)) 6%
	) !important;
  --md-ref-palette-primary-60: hsl(
		258 calc(max(48%, 88%)) 60%
	) !important;
  --md-ref-palette-primary-70: hsl(
		258 calc(max(48%, 88%)) 70%
	) !important;
  --md-ref-palette-primary-80: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --md-ref-palette-primary-87: hsl(
		258 calc(max(48%, 88%)) 87%
	) !important;
  --md-ref-palette-primary-90: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --md-ref-palette-primary-92: hsl(
		258 calc(max(48%, 88%)) 92%
	) !important;
  --md-ref-palette-primary-94: hsl(
		258 calc(max(48%, 88%)) 94%
	) !important;
  --md-ref-palette-primary-95: hsl(
		258 calc(max(48%, 88%)) 95%
	) !important;
  --md-ref-palette-primary-96: hsl(
		258 calc(max(48%, 88%)) 96%
	) !important;
  --md-ref-palette-primary-98: hsl(
		258 calc(max(48%, 88%)) 98%
	) !important;
  --md-ref-palette-primary-99: hsl(
		258 calc(max(48%, 88%)) 99%
	) !important;
  --md-ref-palette-secondary-0: hsl(
		258 16% 0%
	) !important;
  --md-ref-palette-secondary-10: hsl(
		258 16% 10%
	) !important;
  --md-ref-palette-secondary-100: hsl(
		258 16% 100%
	) !important;
  --md-ref-palette-secondary-12: hsl(
		258 16% 12%
	) !important;
  --md-ref-palette-secondary-17: hsl(
		258 16% 17%
	) !important;
  --md-ref-palette-secondary-20: hsl(
		258 16% 20%
	) !important;
  --md-ref-palette-secondary-22: hsl(
		258 16% 22%
	) !important;
  --md-ref-palette-secondary-24: hsl(
		258 16% 24%
	) !important;
  --md-ref-palette-secondary-25: hsl(
		258 16% 25%
	) !important;
  --md-ref-palette-secondary-30: hsl(
		258 16% 30%
	) !important;
  --md-ref-palette-secondary-35: hsl(
		258 16% 35%
	) !important;
  --md-ref-palette-secondary-4: hsl(
		258 16% 4%
	) !important;
  --md-ref-palette-secondary-40: hsl(
		258 16% 40%
	) !important;
  --md-ref-palette-secondary-5: hsl(
		258 16% 5%
	) !important;
  --md-ref-palette-secondary-50: hsl(
		258 16% 50%
	) !important;
  --md-ref-palette-secondary-6: hsl(
		258 16% 6%
	) !important;
  --md-ref-palette-secondary-60: hsl(
		258 16% 60%
	) !important;
  --md-ref-palette-secondary-70: hsl(
		258 16% 70%
	) !important;
  --md-ref-palette-secondary-80: hsl(
		258 16% 80%
	) !important;
  --md-ref-palette-secondary-87: hsl(
		258 16% 87%
	) !important;
  --md-ref-palette-secondary-90: hsl(
		258 16% 90%
	) !important;
  --md-ref-palette-secondary-92: hsl(
		258 16% 92%
	) !important;
  --md-ref-palette-secondary-94: hsl(
		258 16% 94%
	) !important;
  --md-ref-palette-secondary-95: hsl(
		258 16% 95%
	) !important;
  --md-ref-palette-secondary-96: hsl(
		258 16% 96%
	) !important;
  --md-ref-palette-secondary-98: hsl(
		258 16% 98%
	) !important;
  --md-ref-palette-secondary-99: hsl(
		258 16% 99%
	) !important;
  --md-ref-palette-tertiary-0: hsl(
		318 24% 0%
	) !important;
  --md-ref-palette-tertiary-10: hsl(
		318 24% 10%
	) !important;
  --md-ref-palette-tertiary-100: hsl(
		318 24% 100%
	) !important;
  --md-ref-palette-tertiary-12: hsl(
		318 24% 12%
	) !important;
  --md-ref-palette-tertiary-17: hsl(
		318 24% 17%
	) !important;
  --md-ref-palette-tertiary-20: hsl(
		318 24% 20%
	) !important;
  --md-ref-palette-tertiary-22: hsl(
		318 24% 22%
	) !important;
  --md-ref-palette-tertiary-24: hsl(
		318 24% 24%
	) !important;
  --md-ref-palette-tertiary-25: hsl(
		318 24% 25%
	) !important;
  --md-ref-palette-tertiary-30: hsl(
		318 24% 30%
	) !important;
  --md-ref-palette-tertiary-35: hsl(
		318 24% 35%
	) !important;
  --md-ref-palette-tertiary-4: hsl(
		318 24% 4%
	) !important;
  --md-ref-palette-tertiary-40: hsl(
		318 24% 40%
	) !important;
  --md-ref-palette-tertiary-5: hsl(
		318 24% 5%
	) !important;
  --md-ref-palette-tertiary-50: hsl(
		318 24% 50%
	) !important;
  --md-ref-palette-tertiary-6: hsl(
		318 24% 6%
	) !important;
  --md-ref-palette-tertiary-60: hsl(
		318 24% 60%
	) !important;
  --md-ref-palette-tertiary-70: hsl(
		318 24% 70%
	) !important;
  --md-ref-palette-tertiary-80: hsl(
		318 24% 80%
	) !important;
  --md-ref-palette-tertiary-87: hsl(
		318 24% 87%
	) !important;
  --md-ref-palette-tertiary-90: hsl(
		318 24% 90%
	) !important;
  --md-ref-palette-tertiary-92: hsl(
		318 24% 92%
	) !important;
  --md-ref-palette-tertiary-94: hsl(
		318 24% 94%
	) !important;
  --md-ref-palette-tertiary-95: hsl(
		318 24% 95%
	) !important;
  --md-ref-palette-tertiary-96: hsl(
		318 24% 96%
	) !important;
  --md-ref-palette-tertiary-98: hsl(
		318 24% 98%
	) !important;
  --md-ref-palette-tertiary-99: hsl(
		318 24% 99%
	) !important;
  --md-sys-color-background: hsl(
		258 4% 10%
	) !important;
  --md-sys-color-error: hsl(
		0 84% 80%
	) !important;
  --md-sys-color-error-container: hsl(
		0 84% 30%
	) !important;
  --md-sys-color-inverse-on-surface: hsl(
		258 4% 20%
	) !important;
  --md-sys-color-inverse-primary: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --md-sys-color-inverse-surface: hsl(
		258 4% 90%
	) !important;
  --md-sys-color-on-background: hsl(
		258 4% 90%
	) !important;
  --md-sys-color-on-error: hsl(
		0 84% 20%
	) !important;
  --md-sys-color-on-error-container: hsl(
		0 84% 90%
	) !important;
  --md-sys-color-on-primary: hsl(
		258 calc(max(48%, 88%)) 20%
	) !important;
  --md-sys-color-on-primary-container: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --md-sys-color-on-primary-fixed: hsl(
		258 calc(max(48%, 88%)) 10%
	) !important;
  --md-sys-color-on-primary-fixed-dim: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --md-sys-color-on-secondary: hsl(
		258 16% 20%
	) !important;
  --md-sys-color-on-secondary-container: hsl(
		258 16% 90%
	) !important;
  --md-sys-color-on-secondary-fixed: hsl(
		258 16% 10%
	) !important;
  --md-sys-color-on-secondary-fixed-dim: hsl(
		258 16% 30%
	) !important;
  --md-sys-color-on-surface: hsl(
		258 4% 90%
	) !important;
  --md-sys-color-on-surface-variant: hsl(
		258 8% 80%
	) !important;
  --md-sys-color-on-tertiary: hsl(
		318 24% 20%
	) !important;
  --md-sys-color-on-tertiary-container: hsl(
		318 24% 90%
	) !important;
  --md-sys-color-on-tertiary-fixed: hsl(
		318 24% 10%
	) !important;
  --md-sys-color-on-tertiary-fixed-dim: hsl(
		318 24% 30%
	) !important;
  --md-sys-color-outline: hsl(
		258 8% 60%
	) !important;
  --md-sys-color-outline-variant: hsl(
		258 8% 30%
	) !important;
  --md-sys-color-primary: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --md-sys-color-primary-container: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --md-sys-color-primary-fixed: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --md-sys-color-primary-fixed-dim: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --md-sys-color-scrim: hsl(
		258 4% 0%
	) !important;
  --md-sys-color-secondary: hsl(
		258 16% 80%
	) !important;
  --md-sys-color-secondary-container: hsl(
		258 16% 30%
	) !important;
  --md-sys-color-secondary-fixed: hsl(
		258 16% 90%
	) !important;
  --md-sys-color-secondary-fixed-dim: hsl(
		258 16% 80%
	) !important;
  --md-sys-color-shadow: hsl(
		258 4% 0%
	) !important;
  --md-sys-color-surface: hsl(
		258 4% 6%
	) !important;
  --md-sys-color-surface-bright: hsl(
		258 4% 24%
	) !important;
  --md-sys-color-surface-container: hsl(
		258 4% 12%
	) !important;
  --md-sys-color-surface-container-high: hsl(
		258 4% 17%
	) !important;
  --md-sys-color-surface-container-highest: hsl(
		258 4% 22%
	) !important;
  --md-sys-color-surface-container-low: hsl(
		258 4% 10%
	) !important;
  --md-sys-color-surface-container-lowest: hsl(
		258 4% 4%
	) !important;
  --md-sys-color-surface-dim: hsl(
		258 4% 6%
	) !important;
  --md-sys-color-surface-variant: hsl(
		258 8% 30%
	) !important;
  --md-sys-color-tertiary: hsl(
		318 24% 80%
	) !important;
  --md-sys-color-tertiary-container: hsl(
		318 24% 30%
	) !important;
  --md-sys-color-tertiary-fixed: hsl(
		318 24% 90%
	) !important;
  --md-sys-color-tertiary-fixed-dim: hsl(
		318 24% 80%
	) !important;
  --menu-background: hsl(
		258 4% 17%
	) !important;
  --menu-border-color: hsl(
		258 8% 60%
	) !important;
  --metadata-border-color: hsl(
		258 8% 30%
	) !important;
  --metadata-divider-color: hsl(
		258 8% 30%
	) !important;
  --metadata-input-background-active: hsl(
		258 4% 12%
	) !important;
  --metadata-input-text-color: hsl(
		258 4% 90%
	) !important;
  --metadata-label-background-active: hsl(
		258 4% 12%
	) !important;
  --metadata-label-text-color: hsl(
		258 8% 60%
	) !important;
  --metadata-label-text-color-hover: hsl(
		258 8% 60%
	) !important;
  --metadata-property-background-active: hsl(
		258 4% 12%
	) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(
		258 8% 60%
	) !important;
  --modal-background: hsl(
		258 4% 4%
	) !important;
  --nav-collapse-icon-color: hsl(
		258 8% 30%
	) !important;
  --nav-collapse-icon-color-collapsed: hsl(
		258 8% 30%
	) !important;
  --nav-heading-color: hsl(
		258 4% 90%
	) !important;
  --nav-heading-color-collapsed: hsl(
		258 8% 30%
	) !important;
  --nav-heading-color-collapsed-hover: hsl(
		258 8% 60%
	) !important;
  --nav-heading-color-hover: hsl(
		258 4% 90%
	) !important;
  --nav-item-background-active: hsl(
		258 4% 12%
	) !important;
  --nav-item-background-hover: hsl(
		258 4% 12%
	) !important;
  --nav-item-color: hsl(
		258 8% 60%
	) !important;
  --nav-item-color-active: hsl(
		258 4% 90%
	) !important;
  --nav-item-color-highlighted: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --nav-item-color-hover: hsl(
		258 4% 90%
	) !important;
  --nav-item-color-selected: hsl(
		258 4% 90%
	) !important;
  --nav-tag-color: hsl(
		258 8% 30%
	) !important;
  --nav-tag-color-active: hsl(
		258 8% 60%
	) !important;
  --nav-tag-color-hover: hsl(
		258 8% 60%
	) !important;
  --neutral-hue: 258 !important;
  --neutral-saturation: 4% !important;
  --neutral-variant-hue: 258 !important;
  --neutral-variant-saturation: 8% !important;
  --pdf-background: hsl(
		258 4% 4%
	) !important;
  --pdf-page-background: hsl(
		258 4% 4%
	) !important;
  --pdf-shadow: 0 0 0 1px hsl(
		258 8% 30%
	) !important;
  --pdf-sidebar-background: hsl(
		258 4% 4%
	) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(
		258 8% 30%
	) !important;
  --pill-border-color: hsl(
		258 8% 30%
	) !important;
  --pill-border-color-hover: hsl(
		258 8% 60%
	) !important;
  --pill-color: hsl(
		258 8% 60%
	) !important;
  --pill-color-hover: hsl(
		258 4% 90%
	) !important;
  --pill-color-remove: hsl(
		258 8% 30%
	) !important;
  --pill-color-remove-hover: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --primary-hue: 258 !important;
  --primary-saturation: calc(max(48%, 88%)) !important;
  --prompt-background: hsl(
		258 4% 4%
	) !important;
  --raised-background: color-mix(in srgb, hsl(
		258 4% 12%
	) 65%, transparent) linear-gradient(hsl(
		258 4% 12%
	), color-mix(in srgb, hsl(
		258 4% 12%
	) 65%, transparent)) !important;
  --ribbon-background: hsl(
		258 4% 12%
	) !important;
  --ribbon-background-collapsed: hsl(
		258 4% 6%
	) !important;
  --saturation: 88% !important;
  --scrollbar-active-thumb-bg: hsl(
		258 4% 90%
	) !important;
  --scrollbar-bg: hsl(
		258 4% 6%
	) !important;
  --scrollbar-thumb-bg: hsl(
		258 8% 60%
	) !important;
  --search-clear-button-color: hsl(
		258 4% 90%
	) !important;
  --search-icon-color: hsl(
		258 4% 90%
	) !important;
  --search-result-background: hsl(
		258 4% 12%
	) !important;
  --secondary: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --secondary-hue: 258 !important;
  --secondary-saturation: 16% !important;
  --setting-group-heading-color: hsl(
		258 4% 90%
	) !important;
  --setting-items-background: hsl(
		258 4% 10%
	) !important;
  --setting-items-border-color: hsl(
		258 8% 30%
	) !important;
  --slider-thumb-border-color: hsl(
		258 8% 60%
	) !important;
  --slider-thumb-radius: 36px !important;
  --slider-track-background: hsl(
		258 8% 30%
	) !important;
  --status-bar-background: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --status-bar-border-color: hsl(
		258 8% 30%
	) !important;
  --status-bar-text-color: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --suggestion-background: hsl(
		258 4% 4%
	) !important;
  --tab-background-active: hsl(
		258 4% 4%
	) !important;
  --tab-container-background: hsl(
		258 4% 17%
	) !important;
  --tab-divider-color: hsl(
		258 8% 60%
	) !important;
  --tab-outline-color: hsl(
		258 8% 30%
	) !important;
  --tab-switcher-background: hsl(
		258 4% 17%
	) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(
		258 4% 17%
	), transparent) !important;
  --tab-text-color: hsl(
		258 8% 30%
	) !important;
  --tab-text-color-active: hsl(
		258 8% 60%
	) !important;
  --tab-text-color-focused: hsl(
		258 8% 60%
	) !important;
  --tab-text-color-focused-active: hsl(
		258 8% 60%
	) !important;
  --tab-text-color-focused-active-current: hsl(
		258 4% 90%
	) !important;
  --tab-text-color-focused-highlighted: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --table-add-button-border-color: hsl(
		258 8% 30%
	) !important;
  --table-border-color: hsl(
		258 8% 30%
	) !important;
  --table-drag-handle-background-active: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --table-drag-handle-color: hsl(
		258 8% 30%
	) !important;
  --table-drag-handle-color-active: hsl(
		258 calc(max(48%, 88%)) 20%
	) !important;
  --table-header-border-color: hsl(
		258 8% 30%
	) !important;
  --table-header-color: hsl(
		258 4% 90%
	) !important;
  --table-selection-border-color: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --tag-background: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --tag-background-hover: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --tag-color: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --tag-color-hover: hsl(
		258 calc(max(48%, 88%)) 20%
	) !important;
  --tertiary: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --tertiary-hue: 318 !important;
  --tertiary-saturation: 24% !important;
  --text-accent: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --text-accent-hover: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --text-faint: hsl(
		258 8% 30%
	) !important;
  --text-highlight-bg: hsl(
		318 24% 30%
	) !important;
  --text-muted: hsl(
		258 8% 60%
	) !important;
  --text-normal: hsl(
		258 4% 90%
	) !important;
  --text-on-accent: hsl(
		258 calc(max(48%, 88%)) 20%
	) !important;
  --text-on-accent-inverted: hsl(
		258 calc(max(48%, 88%)) 20%
	) !important;
  --text-selection: hsl(
		258 16% 30%
	) !important;
  --textHighlight: hsl(
		318 24% 30%
	) !important;
  --titlebar-background: hsl(
		258 4% 6%
	) !important;
  --titlebar-background-focused: hsl(
		258 4% 12%
	) !important;
  --titlebar-border-color: hsl(
		258 8% 30%
	) !important;
  --titlebar-text-color: hsl(
		258 4% 90%
	) !important;
  --titlebar-text-color-focused: hsl(
		258 4% 90%
	) !important;
  --vault-name-color: hsl(
		258 4% 90%
	) !important;
  --vault-profile-color: hsl(
		258 4% 90%
	) !important;
  --vault-profile-color-hover: hsl(
		258 4% 90%
	) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(43, 42, 45);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(10, 10, 11);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(74, 70, 83);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(43, 42, 45);
  border-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(74, 70, 83);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(50, 9, 144);
  color: rgb(221, 207, 252);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(43, 42, 45);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(74, 70, 83);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(43, 42, 45);
  border-left-color: rgb(74, 70, 83);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(10, 10, 11);
  color: rgb(229, 228, 231);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(95, 58, 84);
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body del {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(74, 70, 83);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(186, 159, 249);
  border-color: rgb(186, 159, 249);
}

html[saved-theme="dark"] body p {
  color: rgb(150, 145, 161);
  outline: rgb(150, 145, 161) none 0px;
  text-decoration-color: rgb(150, 145, 161);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(186, 159, 249);
  outline: rgb(186, 159, 249) none 0px;
  text-decoration-color: rgb(186, 159, 249);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 159, 249);
  outline: rgb(186, 159, 249) none 0px;
  text-decoration-color: rgb(186, 159, 249);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(186, 159, 249);
  outline: rgb(186, 159, 249) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body dt {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(74, 70, 83);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(43, 42, 45);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body table {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(229, 228, 231);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(25, 24, 27);
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(186, 159, 249);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(10, 10, 11);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(30, 29, 32);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(43, 42, 45);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(30, 29, 32);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(30, 29, 32);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(50, 9, 144);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(221, 207, 252);
}

html[saved-theme="dark"] body h1 {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body h2 {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body h3 {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body h4 {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body h5 {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body h6 {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(150, 145, 161);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(229, 228, 231);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
  color: rgb(150, 145, 161);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(50, 9, 144);
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(221, 207, 252);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(221, 207, 252);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(150, 145, 161);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
  color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(150, 145, 161);
  stroke: rgb(150, 145, 161);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
  color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(74, 70, 83);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
  color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(50, 9, 144);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body abbr {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
  color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body sub {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body summary {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body sup {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(50, 9, 144);
  color: rgb(221, 207, 252);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --background-modifier-border: hsl(
		258 8% 80%
	) !important;
  --background-modifier-border-focus: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --background-modifier-border-hover: hsl(
		258 8% 50%
	) !important;
  --background-modifier-error: hsl(
		0 84% 90%
	) !important;
  --background-modifier-hover: hsl(
		258 4% 94%
	) !important;
  --background-primary: hsl(
		258 4% 100%
	) !important;
  --background-primary-alt: hsl(
		258 4% 96%
	) !important;
  --background-secondary: hsl(
		258 4% 92%
	) !important;
  --background-secondary-alt: hsl(
		258 4% 90%
	) !important;
  --bases-cards-background: hsl(
		258 4% 100%
	) !important;
  --bases-cards-cover-background: hsl(
		258 4% 96%
	) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(
		258 8% 80%
	) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(
		258 8% 50%
	) !important;
  --bases-embed-border-color: hsl(
		258 8% 80%
	) !important;
  --bases-group-heading-property-color: hsl(
		258 8% 50%
	) !important;
  --bases-table-border-color: hsl(
		258 8% 80%
	) !important;
  --bases-table-cell-background-active: hsl(
		258 4% 100%
	) !important;
  --bases-table-cell-background-disabled: hsl(
		258 4% 96%
	) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --bases-table-group-background: hsl(
		258 4% 96%
	) !important;
  --bases-table-header-background: hsl(
		258 4% 100%
	) !important;
  --bases-table-header-background-hover: hsl(
		258 4% 94%
	) !important;
  --bases-table-header-color: hsl(
		258 8% 50%
	) !important;
  --bases-table-summary-background: hsl(
		258 4% 100%
	) !important;
  --bases-table-summary-background-hover: hsl(
		258 4% 94%
	) !important;
  --blockquote-background-color: hsl(
		258 4% 92%
	) !important;
  --blockquote-border-color: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --blockquote-color: hsl(
		258 4% 10%
	) !important;
  --blur-background: color-mix(in srgb, hsl(
		258 4% 100%
	) 65%, transparent) linear-gradient(hsl(
		258 4% 100%
	), color-mix(in srgb, hsl(
		258 4% 100%
	) 65%, transparent)) !important;
  --button-radius: 20px !important;
  --canvas-background: hsl(
		258 4% 99%
	) !important;
  --canvas-card-label-color: hsl(
		258 4% 10%
	) !important;
  --canvas-dot-pattern: hsl(
		258 8% 80%
	) !important;
  --caret-color: hsl(
		258 4% 10%
	) !important;
  --checkbox-border-color: hsl(
		258 8% 80%
	) !important;
  --checkbox-border-color-hover: hsl(
		258 8% 50%
	) !important;
  --checkbox-color: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --checkbox-marker-color: hsl(
		258 4% 100%
	) !important;
  --checklist-done-color: hsl(
		258 8% 50%
	) !important;
  --code-background: hsl(
		258 4% 98%
	) !important;
  --code-border-color: hsl(
		258 8% 80%
	) !important;
  --code-bracket-background: hsl(
		258 4% 94%
	) !important;
  --code-comment: hsl(
		258 8% 80%
	) !important;
  --code-normal: hsl(
		258 4% 10%
	) !important;
  --code-punctuation: hsl(
		258 8% 50%
	) !important;
  --collapse-icon-color: hsl(
		258 8% 80%
	) !important;
  --collapse-icon-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --dark: hsl(
		258 4% 10%
	) !important;
  --darkgray: hsl(
		258 4% 10%
	) !important;
  --divider-color: hsl(
		258 8% 80%
	) !important;
  --divider-color-hover: hsl(
		258 8% 50%
	) !important;
  --dropdown-background: hsl(
		258 4% 94%
	) !important;
  --dropdown-background-hover: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --embed-background: hsl(
		258 4% 98%
	) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(
		258 8% 80%
	), inset 0 0 0 1px hsl(
		258 8% 80%
	) !important;
  --embed-border-start: 2px solid hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --error-hue: 0 !important;
  --error-saturation: 84% !important;
  --file-header-background: hsl(
		258 4% 100%
	) !important;
  --file-header-background-focused: hsl(
		258 4% 100%
	) !important;
  --flair-background: hsl(
		258 4% 94%
	) !important;
  --flair-color: hsl(
		258 4% 10%
	) !important;
  --footnote-divider-color: hsl(
		258 8% 80%
	) !important;
  --footnote-id-color: hsl(
		258 8% 50%
	) !important;
  --footnote-id-color-no-occurrences: hsl(
		258 8% 80%
	) !important;
  --footnote-input-background-active: hsl(
		258 4% 94%
	) !important;
  --graph-line: hsl(
		258 8% 50%
	) !important;
  --graph-node: hsl(
		258 4% 94%
	) !important;
  --graph-node-attachment: hsl(
		318 24% 90%
	) !important;
  --graph-node-focused: hsl(
		258 4% 98%
	) !important;
  --graph-node-tag: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --graph-node-unresolved: hsl(
		258 4% 96%
	) !important;
  --graph-text: hsl(
		258 4% 10%
	) !important;
  --gray: hsl(
		258 8% 50%
	) !important;
  --h1-color: hsl(
		258 4% 10%
	) !important;
  --h2-color: hsl(
		258 4% 10%
	) !important;
  --h3-color: hsl(
		258 4% 10%
	) !important;
  --h4-color: hsl(
		258 4% 10%
	) !important;
  --h5-color: hsl(
		258 4% 10%
	) !important;
  --h6-color: hsl(
		258 4% 10%
	) !important;
  --heading-formatting: hsl(
		258 8% 80%
	) !important;
  --highlight: hsl(
		318 24% 90%
	) !important;
  --hr-color: hsl(
		258 8% 80%
	) !important;
  --hue: 258 !important;
  --icon-color: hsl(
		258 8% 50%
	) !important;
  --icon-color-active: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --icon-color-focused: hsl(
		258 4% 10%
	) !important;
  --icon-color-hover: hsl(
		258 8% 50%
	) !important;
  --inline-title-color: hsl(
		258 4% 10%
	) !important;
  --input-date-separator: hsl(
		258 8% 80%
	) !important;
  --input-placeholder-color: hsl(
		258 8% 80%
	) !important;
  --interactive-accent: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --interactive-hover: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --interactive-normal: hsl(
		258 4% 94%
	) !important;
  --interactive-normal-accent: hsl(
		258 4% 98%
	) !important;
  --interactive-normal-hover: hsl(
		258 4% 87%
	) !important;
  --light: hsl(
		258 4% 100%
	) !important;
  --lightgray: hsl(
		258 4% 92%
	) !important;
  --link-color: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --link-color-hover: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --link-external-color: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --link-external-color-hover: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --link-unresolved-color: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --list-marker-color: hsl(
		258 8% 80%
	) !important;
  --list-marker-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --list-marker-color-hover: hsl(
		258 8% 50%
	) !important;
  --md-ref-palette-error-0: hsl(0 84% 0%) !important;
  --md-ref-palette-error-10: hsl(
		0 84% 10%
	) !important;
  --md-ref-palette-error-100: hsl(
		0 84% 100%
	) !important;
  --md-ref-palette-error-12: hsl(
		0 84% 12%
	) !important;
  --md-ref-palette-error-17: hsl(
		0 84% 17%
	) !important;
  --md-ref-palette-error-20: hsl(
		0 84% 20%
	) !important;
  --md-ref-palette-error-22: hsl(
		0 84% 22%
	) !important;
  --md-ref-palette-error-24: hsl(
		0 84% 24%
	) !important;
  --md-ref-palette-error-25: hsl(
		0 84% 25%
	) !important;
  --md-ref-palette-error-30: hsl(
		0 84% 30%
	) !important;
  --md-ref-palette-error-35: hsl(
		0 84% 35%
	) !important;
  --md-ref-palette-error-4: hsl(0 84% 4%) !important;
  --md-ref-palette-error-40: hsl(
		0 84% 40%
	) !important;
  --md-ref-palette-error-5: hsl(0 84% 5%) !important;
  --md-ref-palette-error-50: hsl(
		0 84% 50%
	) !important;
  --md-ref-palette-error-6: hsl(0 84% 6%) !important;
  --md-ref-palette-error-60: hsl(
		0 84% 60%
	) !important;
  --md-ref-palette-error-70: hsl(
		0 84% 70%
	) !important;
  --md-ref-palette-error-80: hsl(
		0 84% 80%
	) !important;
  --md-ref-palette-error-87: hsl(
		0 84% 87%
	) !important;
  --md-ref-palette-error-90: hsl(
		0 84% 90%
	) !important;
  --md-ref-palette-error-92: hsl(
		0 84% 92%
	) !important;
  --md-ref-palette-error-94: hsl(
		0 84% 94%
	) !important;
  --md-ref-palette-error-95: hsl(
		0 84% 95%
	) !important;
  --md-ref-palette-error-96: hsl(
		0 84% 96%
	) !important;
  --md-ref-palette-error-98: hsl(
		0 84% 98%
	) !important;
  --md-ref-palette-error-99: hsl(
		0 84% 99%
	) !important;
  --md-ref-palette-neutral-0: hsl(
		258 4% 0%
	) !important;
  --md-ref-palette-neutral-10: hsl(
		258 4% 10%
	) !important;
  --md-ref-palette-neutral-100: hsl(
		258 4% 100%
	) !important;
  --md-ref-palette-neutral-12: hsl(
		258 4% 12%
	) !important;
  --md-ref-palette-neutral-17: hsl(
		258 4% 17%
	) !important;
  --md-ref-palette-neutral-20: hsl(
		258 4% 20%
	) !important;
  --md-ref-palette-neutral-22: hsl(
		258 4% 22%
	) !important;
  --md-ref-palette-neutral-24: hsl(
		258 4% 24%
	) !important;
  --md-ref-palette-neutral-25: hsl(
		258 4% 25%
	) !important;
  --md-ref-palette-neutral-30: hsl(
		258 4% 30%
	) !important;
  --md-ref-palette-neutral-35: hsl(
		258 4% 35%
	) !important;
  --md-ref-palette-neutral-4: hsl(
		258 4% 4%
	) !important;
  --md-ref-palette-neutral-40: hsl(
		258 4% 40%
	) !important;
  --md-ref-palette-neutral-5: hsl(
		258 4% 5%
	) !important;
  --md-ref-palette-neutral-50: hsl(
		258 4% 50%
	) !important;
  --md-ref-palette-neutral-6: hsl(
		258 4% 6%
	) !important;
  --md-ref-palette-neutral-60: hsl(
		258 4% 60%
	) !important;
  --md-ref-palette-neutral-70: hsl(
		258 4% 70%
	) !important;
  --md-ref-palette-neutral-80: hsl(
		258 4% 80%
	) !important;
  --md-ref-palette-neutral-87: hsl(
		258 4% 87%
	) !important;
  --md-ref-palette-neutral-90: hsl(
		258 4% 90%
	) !important;
  --md-ref-palette-neutral-92: hsl(
		258 4% 92%
	) !important;
  --md-ref-palette-neutral-94: hsl(
		258 4% 94%
	) !important;
  --md-ref-palette-neutral-95: hsl(
		258 4% 95%
	) !important;
  --md-ref-palette-neutral-96: hsl(
		258 4% 96%
	) !important;
  --md-ref-palette-neutral-98: hsl(
		258 4% 98%
	) !important;
  --md-ref-palette-neutral-99: hsl(
		258 4% 99%
	) !important;
  --md-ref-palette-neutral-variant-0: hsl(
		258 8% 0%
	) !important;
  --md-ref-palette-neutral-variant-10: hsl(
		258 8% 10%
	) !important;
  --md-ref-palette-neutral-variant-100: hsl(
		258 8% 100%
	) !important;
  --md-ref-palette-neutral-variant-12: hsl(
		258 8% 12%
	) !important;
  --md-ref-palette-neutral-variant-17: hsl(
		258 8% 17%
	) !important;
  --md-ref-palette-neutral-variant-20: hsl(
		258 8% 20%
	) !important;
  --md-ref-palette-neutral-variant-22: hsl(
		258 8% 22%
	) !important;
  --md-ref-palette-neutral-variant-24: hsl(
		258 8% 24%
	) !important;
  --md-ref-palette-neutral-variant-25: hsl(
		258 8% 25%
	) !important;
  --md-ref-palette-neutral-variant-30: hsl(
		258 8% 30%
	) !important;
  --md-ref-palette-neutral-variant-35: hsl(
		258 8% 35%
	) !important;
  --md-ref-palette-neutral-variant-4: hsl(
		258 8% 4%
	) !important;
  --md-ref-palette-neutral-variant-40: hsl(
		258 8% 40%
	) !important;
  --md-ref-palette-neutral-variant-5: hsl(
		258 8% 5%
	) !important;
  --md-ref-palette-neutral-variant-50: hsl(
		258 8% 50%
	) !important;
  --md-ref-palette-neutral-variant-6: hsl(
		258 8% 6%
	) !important;
  --md-ref-palette-neutral-variant-60: hsl(
		258 8% 60%
	) !important;
  --md-ref-palette-neutral-variant-70: hsl(
		258 8% 70%
	) !important;
  --md-ref-palette-neutral-variant-80: hsl(
		258 8% 80%
	) !important;
  --md-ref-palette-neutral-variant-87: hsl(
		258 8% 87%
	) !important;
  --md-ref-palette-neutral-variant-90: hsl(
		258 8% 90%
	) !important;
  --md-ref-palette-neutral-variant-92: hsl(
		258 8% 92%
	) !important;
  --md-ref-palette-neutral-variant-94: hsl(
		258 8% 94%
	) !important;
  --md-ref-palette-neutral-variant-95: hsl(
		258 8% 95%
	) !important;
  --md-ref-palette-neutral-variant-96: hsl(
		258 8% 96%
	) !important;
  --md-ref-palette-neutral-variant-98: hsl(
		258 8% 98%
	) !important;
  --md-ref-palette-neutral-variant-99: hsl(
		258 8% 99%
	) !important;
  --md-ref-palette-primary-0: hsl(
		258 calc(max(48%, 88%)) 0%
	) !important;
  --md-ref-palette-primary-10: hsl(
		258 calc(max(48%, 88%)) 10%
	) !important;
  --md-ref-palette-primary-100: hsl(
		258 calc(max(48%, 88%)) 100%
	) !important;
  --md-ref-palette-primary-12: hsl(
		258 calc(max(48%, 88%)) 12%
	) !important;
  --md-ref-palette-primary-17: hsl(
		258 calc(max(48%, 88%)) 17%
	) !important;
  --md-ref-palette-primary-20: hsl(
		258 calc(max(48%, 88%)) 20%
	) !important;
  --md-ref-palette-primary-22: hsl(
		258 calc(max(48%, 88%)) 22%
	) !important;
  --md-ref-palette-primary-24: hsl(
		258 calc(max(48%, 88%)) 24%
	) !important;
  --md-ref-palette-primary-25: hsl(
		258 calc(max(48%, 88%)) 25%
	) !important;
  --md-ref-palette-primary-30: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --md-ref-palette-primary-35: hsl(
		258 calc(max(48%, 88%)) 35%
	) !important;
  --md-ref-palette-primary-4: hsl(
		258 calc(max(48%, 88%)) 4%
	) !important;
  --md-ref-palette-primary-40: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --md-ref-palette-primary-5: hsl(
		258 calc(max(48%, 88%)) 5%
	) !important;
  --md-ref-palette-primary-50: hsl(
		258 calc(max(48%, 88%)) 50%
	) !important;
  --md-ref-palette-primary-6: hsl(
		258 calc(max(48%, 88%)) 6%
	) !important;
  --md-ref-palette-primary-60: hsl(
		258 calc(max(48%, 88%)) 60%
	) !important;
  --md-ref-palette-primary-70: hsl(
		258 calc(max(48%, 88%)) 70%
	) !important;
  --md-ref-palette-primary-80: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --md-ref-palette-primary-87: hsl(
		258 calc(max(48%, 88%)) 87%
	) !important;
  --md-ref-palette-primary-90: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --md-ref-palette-primary-92: hsl(
		258 calc(max(48%, 88%)) 92%
	) !important;
  --md-ref-palette-primary-94: hsl(
		258 calc(max(48%, 88%)) 94%
	) !important;
  --md-ref-palette-primary-95: hsl(
		258 calc(max(48%, 88%)) 95%
	) !important;
  --md-ref-palette-primary-96: hsl(
		258 calc(max(48%, 88%)) 96%
	) !important;
  --md-ref-palette-primary-98: hsl(
		258 calc(max(48%, 88%)) 98%
	) !important;
  --md-ref-palette-primary-99: hsl(
		258 calc(max(48%, 88%)) 99%
	) !important;
  --md-ref-palette-secondary-0: hsl(
		258 16% 0%
	) !important;
  --md-ref-palette-secondary-10: hsl(
		258 16% 10%
	) !important;
  --md-ref-palette-secondary-100: hsl(
		258 16% 100%
	) !important;
  --md-ref-palette-secondary-12: hsl(
		258 16% 12%
	) !important;
  --md-ref-palette-secondary-17: hsl(
		258 16% 17%
	) !important;
  --md-ref-palette-secondary-20: hsl(
		258 16% 20%
	) !important;
  --md-ref-palette-secondary-22: hsl(
		258 16% 22%
	) !important;
  --md-ref-palette-secondary-24: hsl(
		258 16% 24%
	) !important;
  --md-ref-palette-secondary-25: hsl(
		258 16% 25%
	) !important;
  --md-ref-palette-secondary-30: hsl(
		258 16% 30%
	) !important;
  --md-ref-palette-secondary-35: hsl(
		258 16% 35%
	) !important;
  --md-ref-palette-secondary-4: hsl(
		258 16% 4%
	) !important;
  --md-ref-palette-secondary-40: hsl(
		258 16% 40%
	) !important;
  --md-ref-palette-secondary-5: hsl(
		258 16% 5%
	) !important;
  --md-ref-palette-secondary-50: hsl(
		258 16% 50%
	) !important;
  --md-ref-palette-secondary-6: hsl(
		258 16% 6%
	) !important;
  --md-ref-palette-secondary-60: hsl(
		258 16% 60%
	) !important;
  --md-ref-palette-secondary-70: hsl(
		258 16% 70%
	) !important;
  --md-ref-palette-secondary-80: hsl(
		258 16% 80%
	) !important;
  --md-ref-palette-secondary-87: hsl(
		258 16% 87%
	) !important;
  --md-ref-palette-secondary-90: hsl(
		258 16% 90%
	) !important;
  --md-ref-palette-secondary-92: hsl(
		258 16% 92%
	) !important;
  --md-ref-palette-secondary-94: hsl(
		258 16% 94%
	) !important;
  --md-ref-palette-secondary-95: hsl(
		258 16% 95%
	) !important;
  --md-ref-palette-secondary-96: hsl(
		258 16% 96%
	) !important;
  --md-ref-palette-secondary-98: hsl(
		258 16% 98%
	) !important;
  --md-ref-palette-secondary-99: hsl(
		258 16% 99%
	) !important;
  --md-ref-palette-tertiary-0: hsl(
		318 24% 0%
	) !important;
  --md-ref-palette-tertiary-10: hsl(
		318 24% 10%
	) !important;
  --md-ref-palette-tertiary-100: hsl(
		318 24% 100%
	) !important;
  --md-ref-palette-tertiary-12: hsl(
		318 24% 12%
	) !important;
  --md-ref-palette-tertiary-17: hsl(
		318 24% 17%
	) !important;
  --md-ref-palette-tertiary-20: hsl(
		318 24% 20%
	) !important;
  --md-ref-palette-tertiary-22: hsl(
		318 24% 22%
	) !important;
  --md-ref-palette-tertiary-24: hsl(
		318 24% 24%
	) !important;
  --md-ref-palette-tertiary-25: hsl(
		318 24% 25%
	) !important;
  --md-ref-palette-tertiary-30: hsl(
		318 24% 30%
	) !important;
  --md-ref-palette-tertiary-35: hsl(
		318 24% 35%
	) !important;
  --md-ref-palette-tertiary-4: hsl(
		318 24% 4%
	) !important;
  --md-ref-palette-tertiary-40: hsl(
		318 24% 40%
	) !important;
  --md-ref-palette-tertiary-5: hsl(
		318 24% 5%
	) !important;
  --md-ref-palette-tertiary-50: hsl(
		318 24% 50%
	) !important;
  --md-ref-palette-tertiary-6: hsl(
		318 24% 6%
	) !important;
  --md-ref-palette-tertiary-60: hsl(
		318 24% 60%
	) !important;
  --md-ref-palette-tertiary-70: hsl(
		318 24% 70%
	) !important;
  --md-ref-palette-tertiary-80: hsl(
		318 24% 80%
	) !important;
  --md-ref-palette-tertiary-87: hsl(
		318 24% 87%
	) !important;
  --md-ref-palette-tertiary-90: hsl(
		318 24% 90%
	) !important;
  --md-ref-palette-tertiary-92: hsl(
		318 24% 92%
	) !important;
  --md-ref-palette-tertiary-94: hsl(
		318 24% 94%
	) !important;
  --md-ref-palette-tertiary-95: hsl(
		318 24% 95%
	) !important;
  --md-ref-palette-tertiary-96: hsl(
		318 24% 96%
	) !important;
  --md-ref-palette-tertiary-98: hsl(
		318 24% 98%
	) !important;
  --md-ref-palette-tertiary-99: hsl(
		318 24% 99%
	) !important;
  --md-sys-color-background: hsl(
		258 4% 99%
	) !important;
  --md-sys-color-error: hsl(
		0 84% 40%
	) !important;
  --md-sys-color-error-container: hsl(
		0 84% 90%
	) !important;
  --md-sys-color-inverse-on-surface: hsl(
		258 4% 95%
	) !important;
  --md-sys-color-inverse-primary: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --md-sys-color-inverse-surface: hsl(
		258 4% 20%
	) !important;
  --md-sys-color-on-background: hsl(
		258 4% 10%
	) !important;
  --md-sys-color-on-error: hsl(
		0 84% 100%
	) !important;
  --md-sys-color-on-error-container: hsl(
		0 84% 10%
	) !important;
  --md-sys-color-on-primary: hsl(
		258 calc(max(48%, 88%)) 100%
	) !important;
  --md-sys-color-on-primary-container: hsl(
		258 calc(max(48%, 88%)) 10%
	) !important;
  --md-sys-color-on-primary-fixed: hsl(
		258 calc(max(48%, 88%)) 10%
	) !important;
  --md-sys-color-on-primary-fixed-dim: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --md-sys-color-on-secondary: hsl(
		258 16% 100%
	) !important;
  --md-sys-color-on-secondary-container: hsl(
		258 16% 10%
	) !important;
  --md-sys-color-on-secondary-fixed: hsl(
		258 16% 10%
	) !important;
  --md-sys-color-on-secondary-fixed-dim: hsl(
		258 16% 30%
	) !important;
  --md-sys-color-on-surface: hsl(
		258 4% 10%
	) !important;
  --md-sys-color-on-surface-variant: hsl(
		258 8% 30%
	) !important;
  --md-sys-color-on-tertiary: hsl(
		318 24% 100%
	) !important;
  --md-sys-color-on-tertiary-container: hsl(
		318 24% 10%
	) !important;
  --md-sys-color-on-tertiary-fixed: hsl(
		318 24% 10%
	) !important;
  --md-sys-color-on-tertiary-fixed-dim: hsl(
		318 24% 30%
	) !important;
  --md-sys-color-outline: hsl(
		258 8% 50%
	) !important;
  --md-sys-color-outline-variant: hsl(
		258 8% 80%
	) !important;
  --md-sys-color-primary: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --md-sys-color-primary-container: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --md-sys-color-primary-fixed: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --md-sys-color-primary-fixed-dim: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --md-sys-color-scrim: hsl(
		258 4% 0%
	) !important;
  --md-sys-color-secondary: hsl(
		258 16% 40%
	) !important;
  --md-sys-color-secondary-container: hsl(
		258 16% 90%
	) !important;
  --md-sys-color-secondary-fixed: hsl(
		258 16% 90%
	) !important;
  --md-sys-color-secondary-fixed-dim: hsl(
		258 16% 80%
	) !important;
  --md-sys-color-shadow: hsl(
		258 4% 0%
	) !important;
  --md-sys-color-surface: hsl(
		258 4% 98%
	) !important;
  --md-sys-color-surface-bright: hsl(
		258 4% 98%
	) !important;
  --md-sys-color-surface-container: hsl(
		258 4% 94%
	) !important;
  --md-sys-color-surface-container-high: hsl(
		258 4% 92%
	) !important;
  --md-sys-color-surface-container-highest: hsl(
		258 4% 90%
	) !important;
  --md-sys-color-surface-container-low: hsl(
		258 4% 96%
	) !important;
  --md-sys-color-surface-container-lowest: hsl(
		258 4% 100%
	) !important;
  --md-sys-color-surface-dim: hsl(
		258 4% 87%
	) !important;
  --md-sys-color-surface-variant: hsl(
		258 8% 90%
	) !important;
  --md-sys-color-tertiary: hsl(
		318 24% 40%
	) !important;
  --md-sys-color-tertiary-container: hsl(
		318 24% 90%
	) !important;
  --md-sys-color-tertiary-fixed: hsl(
		318 24% 90%
	) !important;
  --md-sys-color-tertiary-fixed-dim: hsl(
		318 24% 80%
	) !important;
  --menu-background: hsl(
		258 4% 92%
	) !important;
  --menu-border-color: hsl(
		258 8% 50%
	) !important;
  --metadata-border-color: hsl(
		258 8% 80%
	) !important;
  --metadata-divider-color: hsl(
		258 8% 80%
	) !important;
  --metadata-input-background-active: hsl(
		258 4% 94%
	) !important;
  --metadata-input-text-color: hsl(
		258 4% 10%
	) !important;
  --metadata-label-background-active: hsl(
		258 4% 94%
	) !important;
  --metadata-label-text-color: hsl(
		258 8% 50%
	) !important;
  --metadata-label-text-color-hover: hsl(
		258 8% 50%
	) !important;
  --metadata-property-background-active: hsl(
		258 4% 94%
	) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(
		258 8% 50%
	) !important;
  --modal-background: hsl(
		258 4% 100%
	) !important;
  --nav-collapse-icon-color: hsl(
		258 8% 80%
	) !important;
  --nav-collapse-icon-color-collapsed: hsl(
		258 8% 80%
	) !important;
  --nav-heading-color: hsl(
		258 4% 10%
	) !important;
  --nav-heading-color-collapsed: hsl(
		258 8% 80%
	) !important;
  --nav-heading-color-collapsed-hover: hsl(
		258 8% 50%
	) !important;
  --nav-heading-color-hover: hsl(
		258 4% 10%
	) !important;
  --nav-item-background-active: hsl(
		258 4% 94%
	) !important;
  --nav-item-background-hover: hsl(
		258 4% 94%
	) !important;
  --nav-item-color: hsl(
		258 8% 50%
	) !important;
  --nav-item-color-active: hsl(
		258 4% 10%
	) !important;
  --nav-item-color-highlighted: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --nav-item-color-hover: hsl(
		258 4% 10%
	) !important;
  --nav-item-color-selected: hsl(
		258 4% 10%
	) !important;
  --nav-tag-color: hsl(
		258 8% 80%
	) !important;
  --nav-tag-color-active: hsl(
		258 8% 50%
	) !important;
  --nav-tag-color-hover: hsl(
		258 8% 50%
	) !important;
  --neutral-hue: 258 !important;
  --neutral-saturation: 4% !important;
  --neutral-variant-hue: 258 !important;
  --neutral-variant-saturation: 8% !important;
  --pdf-background: hsl(
		258 4% 100%
	) !important;
  --pdf-page-background: hsl(
		258 4% 100%
	) !important;
  --pdf-sidebar-background: hsl(
		258 4% 100%
	) !important;
  --pill-border-color: hsl(
		258 8% 80%
	) !important;
  --pill-border-color-hover: hsl(
		258 8% 50%
	) !important;
  --pill-color: hsl(
		258 8% 50%
	) !important;
  --pill-color-hover: hsl(
		258 4% 10%
	) !important;
  --pill-color-remove: hsl(
		258 8% 80%
	) !important;
  --pill-color-remove-hover: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --primary-hue: 258 !important;
  --primary-saturation: calc(max(48%, 88%)) !important;
  --prompt-background: hsl(
		258 4% 100%
	) !important;
  --raised-background: color-mix(in srgb, hsl(
		258 4% 100%
	) 65%, transparent) linear-gradient(hsl(
		258 4% 100%
	), color-mix(in srgb, hsl(
		258 4% 100%
	) 65%, transparent)) !important;
  --ribbon-background: hsl(
		258 4% 94%
	) !important;
  --ribbon-background-collapsed: hsl(
		258 4% 87%
	) !important;
  --saturation: 88% !important;
  --scrollbar-active-thumb-bg: hsl(
		258 4% 10%
	) !important;
  --scrollbar-bg: hsl(
		258 4% 87%
	) !important;
  --scrollbar-thumb-bg: hsl(
		258 8% 50%
	) !important;
  --search-clear-button-color: hsl(
		258 4% 10%
	) !important;
  --search-icon-color: hsl(
		258 4% 10%
	) !important;
  --search-result-background: hsl(
		258 4% 94%
	) !important;
  --secondary: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --secondary-hue: 258 !important;
  --secondary-saturation: 16% !important;
  --setting-group-heading-color: hsl(
		258 4% 10%
	) !important;
  --setting-items-background: hsl(
		258 4% 96%
	) !important;
  --setting-items-border-color: hsl(
		258 8% 80%
	) !important;
  --slider-thumb-border-color: hsl(
		258 8% 50%
	) !important;
  --slider-thumb-radius: 36px !important;
  --slider-track-background: hsl(
		258 8% 80%
	) !important;
  --status-bar-background: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --status-bar-border-color: hsl(
		258 8% 80%
	) !important;
  --status-bar-text-color: hsl(
		258 calc(max(48%, 88%)) 10%
	) !important;
  --suggestion-background: hsl(
		258 4% 100%
	) !important;
  --tab-background-active: hsl(
		258 4% 100%
	) !important;
  --tab-container-background: hsl(
		258 4% 92%
	) !important;
  --tab-divider-color: hsl(
		258 8% 50%
	) !important;
  --tab-outline-color: hsl(
		258 8% 80%
	) !important;
  --tab-switcher-background: hsl(
		258 4% 92%
	) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(
		258 4% 92%
	), transparent) !important;
  --tab-text-color: hsl(
		258 8% 80%
	) !important;
  --tab-text-color-active: hsl(
		258 8% 50%
	) !important;
  --tab-text-color-focused: hsl(
		258 8% 50%
	) !important;
  --tab-text-color-focused-active: hsl(
		258 8% 50%
	) !important;
  --tab-text-color-focused-active-current: hsl(
		258 4% 10%
	) !important;
  --tab-text-color-focused-highlighted: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --table-add-button-border-color: hsl(
		258 8% 80%
	) !important;
  --table-border-color: hsl(
		258 8% 80%
	) !important;
  --table-drag-handle-background-active: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --table-drag-handle-color: hsl(
		258 8% 80%
	) !important;
  --table-drag-handle-color-active: hsl(
		258 calc(max(48%, 88%)) 100%
	) !important;
  --table-header-border-color: hsl(
		258 8% 80%
	) !important;
  --table-header-color: hsl(
		258 4% 10%
	) !important;
  --table-selection-border-color: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --tag-background: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --tag-background-hover: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --tag-color: hsl(
		258 calc(max(48%, 88%)) 10%
	) !important;
  --tag-color-hover: hsl(
		258 calc(max(48%, 88%)) 100%
	) !important;
  --tertiary: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --tertiary-hue: 318 !important;
  --tertiary-saturation: 24% !important;
  --text-accent: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --text-accent-hover: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --text-faint: hsl(
		258 8% 80%
	) !important;
  --text-highlight-bg: hsl(
		318 24% 90%
	) !important;
  --text-muted: hsl(
		258 8% 50%
	) !important;
  --text-normal: hsl(
		258 4% 10%
	) !important;
  --text-on-accent: hsl(
		258 calc(max(48%, 88%)) 100%
	) !important;
  --text-on-accent-inverted: hsl(
		258 calc(max(48%, 88%)) 100%
	) !important;
  --text-selection: hsl(
		258 16% 90%
	) !important;
  --textHighlight: hsl(
		318 24% 90%
	) !important;
  --titlebar-background: hsl(
		258 4% 87%
	) !important;
  --titlebar-background-focused: hsl(
		258 4% 94%
	) !important;
  --titlebar-border-color: hsl(
		258 8% 80%
	) !important;
  --titlebar-text-color: hsl(
		258 4% 10%
	) !important;
  --titlebar-text-color-focused: hsl(
		258 4% 10%
	) !important;
  --vault-name-color: hsl(
		258 4% 10%
	) !important;
  --vault-profile-color: hsl(
		258 4% 10%
	) !important;
  --vault-profile-color-hover: hsl(
		258 4% 10%
	) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(234, 234, 235);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(202, 200, 208);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(202, 200, 208);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(123, 117, 138);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(123, 117, 138);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(221, 207, 252);
  color: rgb(17, 3, 48);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(123, 117, 138);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(234, 234, 235);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(202, 200, 208);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(234, 234, 235);
  border-left-color: rgb(202, 200, 208);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(25, 24, 27);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(236, 223, 232);
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body del {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(202, 200, 208);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(66, 12, 192);
  border-color: rgb(66, 12, 192);
}

html[saved-theme="light"] body p {
  color: rgb(123, 117, 138);
  outline: rgb(123, 117, 138) none 0px;
  text-decoration-color: rgb(123, 117, 138);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(66, 12, 192);
  outline: rgb(66, 12, 192) none 0px;
  text-decoration-color: rgb(66, 12, 192);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(66, 12, 192);
  outline: rgb(66, 12, 192) none 0px;
  text-decoration-color: rgb(66, 12, 192);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(66, 12, 192);
  outline: rgb(66, 12, 192) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body dt {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body ol > li {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body ul > li {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(202, 200, 208);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(234, 234, 235);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body table {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(25, 24, 27);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body figcaption {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 244, 245);
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(66, 12, 192);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(239, 239, 240);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(234, 234, 235);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(239, 239, 240);
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(239, 239, 240);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(221, 207, 252);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(17, 3, 48);
}

html[saved-theme="light"] body h1 {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body h2 {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body h3 {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body h4 {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body h5 {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body h6 {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(123, 117, 138);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(123, 117, 138);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(25, 24, 27);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
  color: rgb(123, 117, 138);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(221, 207, 252);
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(17, 3, 48);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(17, 3, 48);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(123, 117, 138);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(123, 117, 138);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(123, 117, 138);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(123, 117, 138);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
  color: rgb(123, 117, 138);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(123, 117, 138);
  stroke: rgb(123, 117, 138);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
  color: rgb(123, 117, 138);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(202, 200, 208);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(123, 117, 138);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
  color: rgb(123, 117, 138);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(221, 207, 252);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body abbr {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
  color: rgb(123, 117, 138);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body sub {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body summary {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body sup {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(221, 207, 252);
  color: rgb(17, 3, 48);
}`,
  },
};
