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
  --background-modifier-border: rgb(0, 0, 0) !important;
  --background-modifier-border-focus: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --background-modifier-border-hover: rgb(0, 0, 0) !important;
  --background-modifier-error: rgb(0, 0, 0) !important;
  --background-modifier-hover: rgb(0, 0, 0) !important;
  --background-primary: rgb(0, 0, 0) !important;
  --background-primary-alt: rgb(0, 0, 0) !important;
  --background-secondary: rgb(0, 0, 0) !important;
  --background-secondary-alt: rgb(0, 0, 0) !important;
  --bases-cards-background: rgb(0, 0, 0) !important;
  --bases-cards-cover-background: rgb(0, 0, 0) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(0, 0, 0) !important;
  --bases-embed-border-color: rgb(0, 0, 0) !important;
  --bases-group-heading-property-color: rgb(0, 0, 0) !important;
  --bases-table-border-color: rgb(0, 0, 0) !important;
  --bases-table-cell-background-active: rgb(0, 0, 0) !important;
  --bases-table-cell-background-disabled: rgb(0, 0, 0) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --bases-table-group-background: rgb(0, 0, 0) !important;
  --bases-table-header-background: rgb(0, 0, 0) !important;
  --bases-table-header-background-hover: rgb(0, 0, 0) !important;
  --bases-table-header-color: rgb(0, 0, 0) !important;
  --bases-table-summary-background: rgb(0, 0, 0) !important;
  --bases-table-summary-background-hover: rgb(0, 0, 0) !important;
  --blockquote-background-color: rgb(0, 0, 0) !important;
  --blockquote-border-color: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --blockquote-color: rgb(0, 0, 0) !important;
  --blur-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent)) !important;
  --button-radius: 20px !important;
  --canvas-background: rgb(0, 0, 0) !important;
  --canvas-card-label-color: rgb(0, 0, 0) !important;
  --canvas-dot-pattern: rgb(0, 0, 0) !important;
  --caret-color: rgb(0, 0, 0) !important;
  --checkbox-border-color: rgb(0, 0, 0) !important;
  --checkbox-border-color-hover: rgb(0, 0, 0) !important;
  --checkbox-color: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --checkbox-marker-color: rgb(0, 0, 0) !important;
  --checklist-done-color: rgb(0, 0, 0) !important;
  --code-background: rgb(0, 0, 0) !important;
  --code-border-color: rgb(0, 0, 0) !important;
  --code-bracket-background: rgb(0, 0, 0) !important;
  --code-comment: rgb(0, 0, 0) !important;
  --code-normal: rgb(0, 0, 0) !important;
  --code-punctuation: rgb(0, 0, 0) !important;
  --collapse-icon-color: rgb(0, 0, 0) !important;
  --collapse-icon-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --dark: rgb(0, 0, 0) !important;
  --darkgray: rgb(0, 0, 0) !important;
  --divider-color: rgb(0, 0, 0) !important;
  --divider-color-hover: rgb(0, 0, 0) !important;
  --dropdown-background: rgb(0, 0, 0) !important;
  --dropdown-background-hover: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --embed-background: rgb(0, 0, 0) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(0, 0, 0), inset 0 0 0 1px rgb(0, 0, 0) !important;
  --embed-border-start: 2px solid hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --error-hue: 0 !important;
  --error-saturation: 84% !important;
  --file-header-background: rgb(0, 0, 0) !important;
  --file-header-background-focused: rgb(0, 0, 0) !important;
  --flair-background: rgb(0, 0, 0) !important;
  --flair-color: rgb(0, 0, 0) !important;
  --footnote-divider-color: rgb(0, 0, 0) !important;
  --footnote-id-color: rgb(0, 0, 0) !important;
  --footnote-id-color-no-occurrences: rgb(0, 0, 0) !important;
  --footnote-input-background-active: rgb(0, 0, 0) !important;
  --graph-line: rgb(0, 0, 0) !important;
  --graph-node: rgb(0, 0, 0) !important;
  --graph-node-attachment: rgb(0, 0, 0) !important;
  --graph-node-focused: rgb(0, 0, 0) !important;
  --graph-node-tag: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --graph-node-unresolved: rgb(0, 0, 0) !important;
  --graph-text: rgb(0, 0, 0) !important;
  --gray: rgb(0, 0, 0) !important;
  --h1-color: rgb(0, 0, 0) !important;
  --h2-color: rgb(0, 0, 0) !important;
  --h3-color: rgb(0, 0, 0) !important;
  --h4-color: rgb(0, 0, 0) !important;
  --h5-color: rgb(0, 0, 0) !important;
  --h6-color: rgb(0, 0, 0) !important;
  --heading-formatting: rgb(0, 0, 0) !important;
  --highlight: rgb(0, 0, 0) !important;
  --hr-color: rgb(0, 0, 0) !important;
  --hue: 258 !important;
  --icon-color: rgb(0, 0, 0) !important;
  --icon-color-active: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --icon-color-focused: rgb(0, 0, 0) !important;
  --icon-color-hover: rgb(0, 0, 0) !important;
  --inline-title-color: rgb(0, 0, 0) !important;
  --input-date-separator: rgb(0, 0, 0) !important;
  --input-placeholder-color: rgb(0, 0, 0) !important;
  --interactive-accent: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --interactive-hover: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --interactive-normal: rgb(0, 0, 0) !important;
  --interactive-normal-accent: rgb(0, 0, 0) !important;
  --interactive-normal-hover: rgb(0, 0, 0) !important;
  --light: rgb(0, 0, 0) !important;
  --lightgray: rgb(0, 0, 0) !important;
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
  --list-marker-color: rgb(0, 0, 0) !important;
  --list-marker-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --list-marker-color-hover: rgb(0, 0, 0) !important;
  --md-ref-palette-error-0: rgb(0, 0, 0) !important;
  --md-ref-palette-error-10: rgb(0, 0, 0) !important;
  --md-ref-palette-error-100: rgb(0, 0, 0) !important;
  --md-ref-palette-error-12: rgb(0, 0, 0) !important;
  --md-ref-palette-error-17: rgb(0, 0, 0) !important;
  --md-ref-palette-error-20: rgb(0, 0, 0) !important;
  --md-ref-palette-error-22: rgb(0, 0, 0) !important;
  --md-ref-palette-error-24: rgb(0, 0, 0) !important;
  --md-ref-palette-error-25: rgb(0, 0, 0) !important;
  --md-ref-palette-error-30: rgb(0, 0, 0) !important;
  --md-ref-palette-error-35: rgb(0, 0, 0) !important;
  --md-ref-palette-error-4: rgb(0, 0, 0) !important;
  --md-ref-palette-error-40: rgb(0, 0, 0) !important;
  --md-ref-palette-error-5: rgb(0, 0, 0) !important;
  --md-ref-palette-error-50: rgb(0, 0, 0) !important;
  --md-ref-palette-error-6: rgb(0, 0, 0) !important;
  --md-ref-palette-error-60: rgb(0, 0, 0) !important;
  --md-ref-palette-error-70: rgb(0, 0, 0) !important;
  --md-ref-palette-error-80: rgb(0, 0, 0) !important;
  --md-ref-palette-error-87: rgb(0, 0, 0) !important;
  --md-ref-palette-error-90: rgb(0, 0, 0) !important;
  --md-ref-palette-error-92: rgb(0, 0, 0) !important;
  --md-ref-palette-error-94: rgb(0, 0, 0) !important;
  --md-ref-palette-error-95: rgb(0, 0, 0) !important;
  --md-ref-palette-error-96: rgb(0, 0, 0) !important;
  --md-ref-palette-error-98: rgb(0, 0, 0) !important;
  --md-ref-palette-error-99: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-0: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-10: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-100: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-12: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-17: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-20: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-22: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-24: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-25: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-30: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-35: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-4: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-40: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-5: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-50: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-6: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-60: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-70: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-80: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-87: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-90: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-92: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-94: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-95: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-96: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-98: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-99: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-0: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-10: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-100: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-12: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-17: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-20: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-22: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-24: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-25: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-30: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-35: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-4: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-40: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-5: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-50: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-6: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-60: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-70: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-80: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-87: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-90: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-92: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-94: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-95: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-96: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-98: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-99: rgb(0, 0, 0) !important;
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
  --md-ref-palette-secondary-0: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-10: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-100: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-12: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-17: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-20: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-22: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-24: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-25: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-30: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-35: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-4: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-40: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-5: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-50: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-6: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-60: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-70: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-80: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-87: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-90: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-92: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-94: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-95: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-96: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-98: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-99: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-0: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-10: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-100: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-12: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-17: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-20: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-22: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-24: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-25: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-30: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-35: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-4: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-40: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-5: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-50: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-6: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-60: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-70: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-80: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-87: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-90: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-92: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-94: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-95: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-96: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-98: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-99: rgb(0, 0, 0) !important;
  --md-sys-color-background: rgb(0, 0, 0) !important;
  --md-sys-color-error: rgb(0, 0, 0) !important;
  --md-sys-color-error-container: rgb(0, 0, 0) !important;
  --md-sys-color-inverse-on-surface: rgb(0, 0, 0) !important;
  --md-sys-color-inverse-primary: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --md-sys-color-inverse-surface: rgb(0, 0, 0) !important;
  --md-sys-color-on-background: rgb(0, 0, 0) !important;
  --md-sys-color-on-error: rgb(0, 0, 0) !important;
  --md-sys-color-on-error-container: rgb(0, 0, 0) !important;
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
  --md-sys-color-on-secondary: rgb(0, 0, 0) !important;
  --md-sys-color-on-secondary-container: rgb(0, 0, 0) !important;
  --md-sys-color-on-secondary-fixed: rgb(0, 0, 0) !important;
  --md-sys-color-on-secondary-fixed-dim: rgb(0, 0, 0) !important;
  --md-sys-color-on-surface: rgb(0, 0, 0) !important;
  --md-sys-color-on-surface-variant: rgb(0, 0, 0) !important;
  --md-sys-color-on-tertiary: rgb(0, 0, 0) !important;
  --md-sys-color-on-tertiary-container: rgb(0, 0, 0) !important;
  --md-sys-color-on-tertiary-fixed: rgb(0, 0, 0) !important;
  --md-sys-color-on-tertiary-fixed-dim: rgb(0, 0, 0) !important;
  --md-sys-color-outline: rgb(0, 0, 0) !important;
  --md-sys-color-outline-variant: rgb(0, 0, 0) !important;
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
  --md-sys-color-scrim: rgb(0, 0, 0) !important;
  --md-sys-color-secondary: rgb(0, 0, 0) !important;
  --md-sys-color-secondary-container: rgb(0, 0, 0) !important;
  --md-sys-color-secondary-fixed: rgb(0, 0, 0) !important;
  --md-sys-color-secondary-fixed-dim: rgb(0, 0, 0) !important;
  --md-sys-color-shadow: rgb(0, 0, 0) !important;
  --md-sys-color-surface: rgb(0, 0, 0) !important;
  --md-sys-color-surface-bright: rgb(0, 0, 0) !important;
  --md-sys-color-surface-container: rgb(0, 0, 0) !important;
  --md-sys-color-surface-container-high: rgb(0, 0, 0) !important;
  --md-sys-color-surface-container-highest: rgb(0, 0, 0) !important;
  --md-sys-color-surface-container-low: rgb(0, 0, 0) !important;
  --md-sys-color-surface-container-lowest: rgb(0, 0, 0) !important;
  --md-sys-color-surface-dim: rgb(0, 0, 0) !important;
  --md-sys-color-surface-variant: rgb(0, 0, 0) !important;
  --md-sys-color-tertiary: rgb(0, 0, 0) !important;
  --md-sys-color-tertiary-container: rgb(0, 0, 0) !important;
  --md-sys-color-tertiary-fixed: rgb(0, 0, 0) !important;
  --md-sys-color-tertiary-fixed-dim: rgb(0, 0, 0) !important;
  --menu-background: rgb(0, 0, 0) !important;
  --menu-border-color: rgb(0, 0, 0) !important;
  --metadata-border-color: rgb(0, 0, 0) !important;
  --metadata-divider-color: rgb(0, 0, 0) !important;
  --metadata-input-background-active: rgb(0, 0, 0) !important;
  --metadata-input-text-color: rgb(0, 0, 0) !important;
  --metadata-label-background-active: rgb(0, 0, 0) !important;
  --metadata-label-text-color: rgb(0, 0, 0) !important;
  --metadata-label-text-color-hover: rgb(0, 0, 0) !important;
  --metadata-property-background-active: rgb(0, 0, 0) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(0, 0, 0) !important;
  --modal-background: rgb(0, 0, 0) !important;
  --nav-collapse-icon-color: rgb(0, 0, 0) !important;
  --nav-collapse-icon-color-collapsed: rgb(0, 0, 0) !important;
  --nav-heading-color: rgb(0, 0, 0) !important;
  --nav-heading-color-collapsed: rgb(0, 0, 0) !important;
  --nav-heading-color-collapsed-hover: rgb(0, 0, 0) !important;
  --nav-heading-color-hover: rgb(0, 0, 0) !important;
  --nav-item-background-active: rgb(0, 0, 0) !important;
  --nav-item-background-hover: rgb(0, 0, 0) !important;
  --nav-item-color: rgb(0, 0, 0) !important;
  --nav-item-color-active: rgb(0, 0, 0) !important;
  --nav-item-color-highlighted: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --nav-item-color-hover: rgb(0, 0, 0) !important;
  --nav-item-color-selected: rgb(0, 0, 0) !important;
  --nav-tag-color: rgb(0, 0, 0) !important;
  --nav-tag-color-active: rgb(0, 0, 0) !important;
  --nav-tag-color-hover: rgb(0, 0, 0) !important;
  --neutral-hue: 258 !important;
  --neutral-saturation: 4% !important;
  --neutral-variant-hue: 258 !important;
  --neutral-variant-saturation: 8% !important;
  --pdf-background: rgb(0, 0, 0) !important;
  --pdf-page-background: rgb(0, 0, 0) !important;
  --pdf-shadow: 0 0 0 1px rgb(0, 0, 0) !important;
  --pdf-sidebar-background: rgb(0, 0, 0) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(0, 0, 0) !important;
  --pill-border-color: rgb(0, 0, 0) !important;
  --pill-border-color-hover: rgb(0, 0, 0) !important;
  --pill-color: rgb(0, 0, 0) !important;
  --pill-color-hover: rgb(0, 0, 0) !important;
  --pill-color-remove: rgb(0, 0, 0) !important;
  --pill-color-remove-hover: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --primary-hue: 258 !important;
  --primary-saturation: calc(max(48%, 88%)) !important;
  --prompt-background: rgb(0, 0, 0) !important;
  --raised-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent)) !important;
  --ribbon-background: rgb(0, 0, 0) !important;
  --ribbon-background-collapsed: rgb(0, 0, 0) !important;
  --saturation: 88% !important;
  --scrollbar-active-thumb-bg: rgb(0, 0, 0) !important;
  --scrollbar-bg: rgb(0, 0, 0) !important;
  --scrollbar-thumb-bg: rgb(0, 0, 0) !important;
  --search-clear-button-color: rgb(0, 0, 0) !important;
  --search-icon-color: rgb(0, 0, 0) !important;
  --search-result-background: rgb(0, 0, 0) !important;
  --secondary: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --secondary-hue: 258 !important;
  --secondary-saturation: 16% !important;
  --setting-group-heading-color: rgb(0, 0, 0) !important;
  --setting-items-background: rgb(0, 0, 0) !important;
  --setting-items-border-color: rgb(0, 0, 0) !important;
  --slider-thumb-border-color: rgb(0, 0, 0) !important;
  --slider-thumb-radius: 36px !important;
  --slider-track-background: rgb(0, 0, 0) !important;
  --status-bar-background: hsl(
		258 calc(max(48%, 88%)) 30%
	) !important;
  --status-bar-border-color: rgb(0, 0, 0) !important;
  --status-bar-text-color: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --suggestion-background: rgb(0, 0, 0) !important;
  --tab-background-active: rgb(0, 0, 0) !important;
  --tab-container-background: rgb(0, 0, 0) !important;
  --tab-divider-color: rgb(0, 0, 0) !important;
  --tab-outline-color: rgb(0, 0, 0) !important;
  --tab-switcher-background: rgb(0, 0, 0) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(0, 0, 0), transparent) !important;
  --tab-text-color: rgb(0, 0, 0) !important;
  --tab-text-color-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active-current: rgb(0, 0, 0) !important;
  --tab-text-color-focused-highlighted: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --table-add-button-border-color: rgb(0, 0, 0) !important;
  --table-border-color: rgb(0, 0, 0) !important;
  --table-drag-handle-background-active: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --table-drag-handle-color: rgb(0, 0, 0) !important;
  --table-drag-handle-color-active: hsl(
		258 calc(max(48%, 88%)) 20%
	) !important;
  --table-header-border-color: rgb(0, 0, 0) !important;
  --table-header-color: rgb(0, 0, 0) !important;
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
  --text-faint: rgb(0, 0, 0) !important;
  --text-highlight-bg: rgb(0, 0, 0) !important;
  --text-muted: rgb(0, 0, 0) !important;
  --text-normal: rgb(0, 0, 0) !important;
  --text-on-accent: hsl(
		258 calc(max(48%, 88%)) 20%
	) !important;
  --text-on-accent-inverted: hsl(
		258 calc(max(48%, 88%)) 20%
	) !important;
  --text-selection: rgb(0, 0, 0) !important;
  --textHighlight: rgb(0, 0, 0) !important;
  --titlebar-background: rgb(0, 0, 0) !important;
  --titlebar-background-focused: rgb(0, 0, 0) !important;
  --titlebar-border-color: rgb(0, 0, 0) !important;
  --titlebar-text-color: rgb(0, 0, 0) !important;
  --titlebar-text-color-focused: rgb(0, 0, 0) !important;
  --vault-name-color: rgb(0, 0, 0) !important;
  --vault-profile-color: rgb(0, 0, 0) !important;
  --vault-profile-color-hover: rgb(0, 0, 0) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(43, 42, 45);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(10, 10, 11);
  color: rgb(229, 228, 231);
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
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(95, 58, 84);
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body del {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: line-through rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body p {
  color: rgb(150, 145, 161);
  outline: rgb(150, 145, 161) none 0px;
  text-decoration: rgb(150, 145, 161);
  text-decoration-color: rgb(150, 145, 161);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(186, 159, 249);
  outline: rgb(186, 159, 249) none 0px;
  text-decoration: underline rgb(186, 159, 249);
  text-decoration-color: rgb(186, 159, 249);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 159, 249);
  outline: rgb(186, 159, 249) none 0px;
  text-decoration: underline rgb(186, 159, 249);
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
  background-color: rgb(10, 10, 11);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(10, 10, 11);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(74, 70, 83);
  text-decoration: rgb(74, 70, 83);
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

html[saved-theme="dark"] body pre > code, pre:has(> code) {
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
  border-left-color: rgb(186, 159, 249);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(150, 145, 161);
  text-decoration: line-through rgb(150, 145, 161);
  text-decoration-color: rgb(150, 145, 161);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
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
  text-decoration: rgb(229, 228, 231);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(30, 29, 32);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(43, 42, 45);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(30, 29, 32);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(30, 29, 32);
  color: rgb(229, 228, 231);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
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
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
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
  text-decoration: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(150, 145, 161);
  text-decoration: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(150, 145, 161);
  text-decoration: rgb(150, 145, 161);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(30, 29, 32);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
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
  text-decoration: rgb(221, 207, 252);
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
  text-decoration: rgb(150, 145, 161);
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
  text-decoration: rgb(150, 145, 161);
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
  text-decoration: underline dotted rgb(229, 228, 231);
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
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --background-modifier-border: rgb(0, 0, 0) !important;
  --background-modifier-border-focus: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --background-modifier-border-hover: rgb(0, 0, 0) !important;
  --background-modifier-error: rgb(0, 0, 0) !important;
  --background-modifier-hover: rgb(0, 0, 0) !important;
  --background-primary: rgb(0, 0, 0) !important;
  --background-primary-alt: rgb(0, 0, 0) !important;
  --background-secondary: rgb(0, 0, 0) !important;
  --background-secondary-alt: rgb(0, 0, 0) !important;
  --bases-cards-background: rgb(0, 0, 0) !important;
  --bases-cards-cover-background: rgb(0, 0, 0) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(0, 0, 0) !important;
  --bases-embed-border-color: rgb(0, 0, 0) !important;
  --bases-group-heading-property-color: rgb(0, 0, 0) !important;
  --bases-table-border-color: rgb(0, 0, 0) !important;
  --bases-table-cell-background-active: rgb(0, 0, 0) !important;
  --bases-table-cell-background-disabled: rgb(0, 0, 0) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --bases-table-group-background: rgb(0, 0, 0) !important;
  --bases-table-header-background: rgb(0, 0, 0) !important;
  --bases-table-header-background-hover: rgb(0, 0, 0) !important;
  --bases-table-header-color: rgb(0, 0, 0) !important;
  --bases-table-summary-background: rgb(0, 0, 0) !important;
  --bases-table-summary-background-hover: rgb(0, 0, 0) !important;
  --blockquote-background-color: rgb(0, 0, 0) !important;
  --blockquote-border-color: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --blockquote-color: rgb(0, 0, 0) !important;
  --blur-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent)) !important;
  --button-radius: 20px !important;
  --canvas-background: rgb(0, 0, 0) !important;
  --canvas-card-label-color: rgb(0, 0, 0) !important;
  --canvas-dot-pattern: rgb(0, 0, 0) !important;
  --caret-color: rgb(0, 0, 0) !important;
  --checkbox-border-color: rgb(0, 0, 0) !important;
  --checkbox-border-color-hover: rgb(0, 0, 0) !important;
  --checkbox-color: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --checkbox-marker-color: rgb(0, 0, 0) !important;
  --checklist-done-color: rgb(0, 0, 0) !important;
  --code-background: rgb(0, 0, 0) !important;
  --code-border-color: rgb(0, 0, 0) !important;
  --code-bracket-background: rgb(0, 0, 0) !important;
  --code-comment: rgb(0, 0, 0) !important;
  --code-normal: rgb(0, 0, 0) !important;
  --code-punctuation: rgb(0, 0, 0) !important;
  --collapse-icon-color: rgb(0, 0, 0) !important;
  --collapse-icon-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --dark: rgb(0, 0, 0) !important;
  --darkgray: rgb(0, 0, 0) !important;
  --divider-color: rgb(0, 0, 0) !important;
  --divider-color-hover: rgb(0, 0, 0) !important;
  --dropdown-background: rgb(0, 0, 0) !important;
  --dropdown-background-hover: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --embed-background: rgb(0, 0, 0) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(0, 0, 0), inset 0 0 0 1px rgb(0, 0, 0) !important;
  --embed-border-start: 2px solid hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --error-hue: 0 !important;
  --error-saturation: 84% !important;
  --file-header-background: rgb(0, 0, 0) !important;
  --file-header-background-focused: rgb(0, 0, 0) !important;
  --flair-background: rgb(0, 0, 0) !important;
  --flair-color: rgb(0, 0, 0) !important;
  --footnote-divider-color: rgb(0, 0, 0) !important;
  --footnote-id-color: rgb(0, 0, 0) !important;
  --footnote-id-color-no-occurrences: rgb(0, 0, 0) !important;
  --footnote-input-background-active: rgb(0, 0, 0) !important;
  --graph-line: rgb(0, 0, 0) !important;
  --graph-node: rgb(0, 0, 0) !important;
  --graph-node-attachment: rgb(0, 0, 0) !important;
  --graph-node-focused: rgb(0, 0, 0) !important;
  --graph-node-tag: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --graph-node-unresolved: rgb(0, 0, 0) !important;
  --graph-text: rgb(0, 0, 0) !important;
  --gray: rgb(0, 0, 0) !important;
  --h1-color: rgb(0, 0, 0) !important;
  --h2-color: rgb(0, 0, 0) !important;
  --h3-color: rgb(0, 0, 0) !important;
  --h4-color: rgb(0, 0, 0) !important;
  --h5-color: rgb(0, 0, 0) !important;
  --h6-color: rgb(0, 0, 0) !important;
  --heading-formatting: rgb(0, 0, 0) !important;
  --highlight: rgb(0, 0, 0) !important;
  --hr-color: rgb(0, 0, 0) !important;
  --hue: 258 !important;
  --icon-color: rgb(0, 0, 0) !important;
  --icon-color-active: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --icon-color-focused: rgb(0, 0, 0) !important;
  --icon-color-hover: rgb(0, 0, 0) !important;
  --inline-title-color: rgb(0, 0, 0) !important;
  --input-date-separator: rgb(0, 0, 0) !important;
  --input-placeholder-color: rgb(0, 0, 0) !important;
  --interactive-accent: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --interactive-hover: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --interactive-normal: rgb(0, 0, 0) !important;
  --interactive-normal-accent: rgb(0, 0, 0) !important;
  --interactive-normal-hover: rgb(0, 0, 0) !important;
  --light: rgb(0, 0, 0) !important;
  --lightgray: rgb(0, 0, 0) !important;
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
  --list-marker-color: rgb(0, 0, 0) !important;
  --list-marker-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --list-marker-color-hover: rgb(0, 0, 0) !important;
  --md-ref-palette-error-0: rgb(0, 0, 0) !important;
  --md-ref-palette-error-10: rgb(0, 0, 0) !important;
  --md-ref-palette-error-100: rgb(0, 0, 0) !important;
  --md-ref-palette-error-12: rgb(0, 0, 0) !important;
  --md-ref-palette-error-17: rgb(0, 0, 0) !important;
  --md-ref-palette-error-20: rgb(0, 0, 0) !important;
  --md-ref-palette-error-22: rgb(0, 0, 0) !important;
  --md-ref-palette-error-24: rgb(0, 0, 0) !important;
  --md-ref-palette-error-25: rgb(0, 0, 0) !important;
  --md-ref-palette-error-30: rgb(0, 0, 0) !important;
  --md-ref-palette-error-35: rgb(0, 0, 0) !important;
  --md-ref-palette-error-4: rgb(0, 0, 0) !important;
  --md-ref-palette-error-40: rgb(0, 0, 0) !important;
  --md-ref-palette-error-5: rgb(0, 0, 0) !important;
  --md-ref-palette-error-50: rgb(0, 0, 0) !important;
  --md-ref-palette-error-6: rgb(0, 0, 0) !important;
  --md-ref-palette-error-60: rgb(0, 0, 0) !important;
  --md-ref-palette-error-70: rgb(0, 0, 0) !important;
  --md-ref-palette-error-80: rgb(0, 0, 0) !important;
  --md-ref-palette-error-87: rgb(0, 0, 0) !important;
  --md-ref-palette-error-90: rgb(0, 0, 0) !important;
  --md-ref-palette-error-92: rgb(0, 0, 0) !important;
  --md-ref-palette-error-94: rgb(0, 0, 0) !important;
  --md-ref-palette-error-95: rgb(0, 0, 0) !important;
  --md-ref-palette-error-96: rgb(0, 0, 0) !important;
  --md-ref-palette-error-98: rgb(0, 0, 0) !important;
  --md-ref-palette-error-99: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-0: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-10: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-100: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-12: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-17: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-20: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-22: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-24: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-25: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-30: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-35: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-4: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-40: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-5: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-50: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-6: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-60: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-70: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-80: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-87: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-90: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-92: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-94: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-95: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-96: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-98: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-99: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-0: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-10: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-100: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-12: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-17: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-20: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-22: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-24: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-25: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-30: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-35: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-4: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-40: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-5: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-50: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-6: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-60: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-70: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-80: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-87: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-90: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-92: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-94: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-95: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-96: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-98: rgb(0, 0, 0) !important;
  --md-ref-palette-neutral-variant-99: rgb(0, 0, 0) !important;
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
  --md-ref-palette-secondary-0: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-10: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-100: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-12: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-17: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-20: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-22: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-24: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-25: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-30: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-35: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-4: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-40: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-5: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-50: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-6: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-60: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-70: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-80: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-87: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-90: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-92: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-94: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-95: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-96: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-98: rgb(0, 0, 0) !important;
  --md-ref-palette-secondary-99: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-0: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-10: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-100: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-12: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-17: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-20: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-22: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-24: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-25: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-30: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-35: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-4: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-40: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-5: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-50: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-6: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-60: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-70: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-80: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-87: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-90: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-92: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-94: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-95: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-96: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-98: rgb(0, 0, 0) !important;
  --md-ref-palette-tertiary-99: rgb(0, 0, 0) !important;
  --md-sys-color-background: rgb(0, 0, 0) !important;
  --md-sys-color-error: rgb(0, 0, 0) !important;
  --md-sys-color-error-container: rgb(0, 0, 0) !important;
  --md-sys-color-inverse-on-surface: rgb(0, 0, 0) !important;
  --md-sys-color-inverse-primary: hsl(
		258 calc(max(48%, 88%)) 80%
	) !important;
  --md-sys-color-inverse-surface: rgb(0, 0, 0) !important;
  --md-sys-color-on-background: rgb(0, 0, 0) !important;
  --md-sys-color-on-error: rgb(0, 0, 0) !important;
  --md-sys-color-on-error-container: rgb(0, 0, 0) !important;
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
  --md-sys-color-on-secondary: rgb(0, 0, 0) !important;
  --md-sys-color-on-secondary-container: rgb(0, 0, 0) !important;
  --md-sys-color-on-secondary-fixed: rgb(0, 0, 0) !important;
  --md-sys-color-on-secondary-fixed-dim: rgb(0, 0, 0) !important;
  --md-sys-color-on-surface: rgb(0, 0, 0) !important;
  --md-sys-color-on-surface-variant: rgb(0, 0, 0) !important;
  --md-sys-color-on-tertiary: rgb(0, 0, 0) !important;
  --md-sys-color-on-tertiary-container: rgb(0, 0, 0) !important;
  --md-sys-color-on-tertiary-fixed: rgb(0, 0, 0) !important;
  --md-sys-color-on-tertiary-fixed-dim: rgb(0, 0, 0) !important;
  --md-sys-color-outline: rgb(0, 0, 0) !important;
  --md-sys-color-outline-variant: rgb(0, 0, 0) !important;
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
  --md-sys-color-scrim: rgb(0, 0, 0) !important;
  --md-sys-color-secondary: rgb(0, 0, 0) !important;
  --md-sys-color-secondary-container: rgb(0, 0, 0) !important;
  --md-sys-color-secondary-fixed: rgb(0, 0, 0) !important;
  --md-sys-color-secondary-fixed-dim: rgb(0, 0, 0) !important;
  --md-sys-color-shadow: rgb(0, 0, 0) !important;
  --md-sys-color-surface: rgb(0, 0, 0) !important;
  --md-sys-color-surface-bright: rgb(0, 0, 0) !important;
  --md-sys-color-surface-container: rgb(0, 0, 0) !important;
  --md-sys-color-surface-container-high: rgb(0, 0, 0) !important;
  --md-sys-color-surface-container-highest: rgb(0, 0, 0) !important;
  --md-sys-color-surface-container-low: rgb(0, 0, 0) !important;
  --md-sys-color-surface-container-lowest: rgb(0, 0, 0) !important;
  --md-sys-color-surface-dim: rgb(0, 0, 0) !important;
  --md-sys-color-surface-variant: rgb(0, 0, 0) !important;
  --md-sys-color-tertiary: rgb(0, 0, 0) !important;
  --md-sys-color-tertiary-container: rgb(0, 0, 0) !important;
  --md-sys-color-tertiary-fixed: rgb(0, 0, 0) !important;
  --md-sys-color-tertiary-fixed-dim: rgb(0, 0, 0) !important;
  --menu-background: rgb(0, 0, 0) !important;
  --menu-border-color: rgb(0, 0, 0) !important;
  --metadata-border-color: rgb(0, 0, 0) !important;
  --metadata-divider-color: rgb(0, 0, 0) !important;
  --metadata-input-background-active: rgb(0, 0, 0) !important;
  --metadata-input-text-color: rgb(0, 0, 0) !important;
  --metadata-label-background-active: rgb(0, 0, 0) !important;
  --metadata-label-text-color: rgb(0, 0, 0) !important;
  --metadata-label-text-color-hover: rgb(0, 0, 0) !important;
  --metadata-property-background-active: rgb(0, 0, 0) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(0, 0, 0) !important;
  --modal-background: rgb(0, 0, 0) !important;
  --nav-collapse-icon-color: rgb(0, 0, 0) !important;
  --nav-collapse-icon-color-collapsed: rgb(0, 0, 0) !important;
  --nav-heading-color: rgb(0, 0, 0) !important;
  --nav-heading-color-collapsed: rgb(0, 0, 0) !important;
  --nav-heading-color-collapsed-hover: rgb(0, 0, 0) !important;
  --nav-heading-color-hover: rgb(0, 0, 0) !important;
  --nav-item-background-active: rgb(0, 0, 0) !important;
  --nav-item-background-hover: rgb(0, 0, 0) !important;
  --nav-item-color: rgb(0, 0, 0) !important;
  --nav-item-color-active: rgb(0, 0, 0) !important;
  --nav-item-color-highlighted: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --nav-item-color-hover: rgb(0, 0, 0) !important;
  --nav-item-color-selected: rgb(0, 0, 0) !important;
  --nav-tag-color: rgb(0, 0, 0) !important;
  --nav-tag-color-active: rgb(0, 0, 0) !important;
  --nav-tag-color-hover: rgb(0, 0, 0) !important;
  --neutral-hue: 258 !important;
  --neutral-saturation: 4% !important;
  --neutral-variant-hue: 258 !important;
  --neutral-variant-saturation: 8% !important;
  --pdf-background: rgb(0, 0, 0) !important;
  --pdf-page-background: rgb(0, 0, 0) !important;
  --pdf-sidebar-background: rgb(0, 0, 0) !important;
  --pill-border-color: rgb(0, 0, 0) !important;
  --pill-border-color-hover: rgb(0, 0, 0) !important;
  --pill-color: rgb(0, 0, 0) !important;
  --pill-color-hover: rgb(0, 0, 0) !important;
  --pill-color-remove: rgb(0, 0, 0) !important;
  --pill-color-remove-hover: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --primary-hue: 258 !important;
  --primary-saturation: calc(max(48%, 88%)) !important;
  --prompt-background: rgb(0, 0, 0) !important;
  --raised-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent)) !important;
  --ribbon-background: rgb(0, 0, 0) !important;
  --ribbon-background-collapsed: rgb(0, 0, 0) !important;
  --saturation: 88% !important;
  --scrollbar-active-thumb-bg: rgb(0, 0, 0) !important;
  --scrollbar-bg: rgb(0, 0, 0) !important;
  --scrollbar-thumb-bg: rgb(0, 0, 0) !important;
  --search-clear-button-color: rgb(0, 0, 0) !important;
  --search-icon-color: rgb(0, 0, 0) !important;
  --search-result-background: rgb(0, 0, 0) !important;
  --secondary: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --secondary-hue: 258 !important;
  --secondary-saturation: 16% !important;
  --setting-group-heading-color: rgb(0, 0, 0) !important;
  --setting-items-background: rgb(0, 0, 0) !important;
  --setting-items-border-color: rgb(0, 0, 0) !important;
  --slider-thumb-border-color: rgb(0, 0, 0) !important;
  --slider-thumb-radius: 36px !important;
  --slider-track-background: rgb(0, 0, 0) !important;
  --status-bar-background: hsl(
		258 calc(max(48%, 88%)) 90%
	) !important;
  --status-bar-border-color: rgb(0, 0, 0) !important;
  --status-bar-text-color: hsl(
		258 calc(max(48%, 88%)) 10%
	) !important;
  --suggestion-background: rgb(0, 0, 0) !important;
  --tab-background-active: rgb(0, 0, 0) !important;
  --tab-container-background: rgb(0, 0, 0) !important;
  --tab-divider-color: rgb(0, 0, 0) !important;
  --tab-outline-color: rgb(0, 0, 0) !important;
  --tab-switcher-background: rgb(0, 0, 0) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(0, 0, 0), transparent) !important;
  --tab-text-color: rgb(0, 0, 0) !important;
  --tab-text-color-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active-current: rgb(0, 0, 0) !important;
  --tab-text-color-focused-highlighted: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --table-add-button-border-color: rgb(0, 0, 0) !important;
  --table-border-color: rgb(0, 0, 0) !important;
  --table-drag-handle-background-active: hsl(
		258 calc(max(48%, 88%)) 40%
	) !important;
  --table-drag-handle-color: rgb(0, 0, 0) !important;
  --table-drag-handle-color-active: hsl(
		258 calc(max(48%, 88%)) 100%
	) !important;
  --table-header-border-color: rgb(0, 0, 0) !important;
  --table-header-color: rgb(0, 0, 0) !important;
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
  --text-faint: rgb(0, 0, 0) !important;
  --text-highlight-bg: rgb(0, 0, 0) !important;
  --text-muted: rgb(0, 0, 0) !important;
  --text-normal: rgb(0, 0, 0) !important;
  --text-on-accent: hsl(
		258 calc(max(48%, 88%)) 100%
	) !important;
  --text-on-accent-inverted: hsl(
		258 calc(max(48%, 88%)) 100%
	) !important;
  --text-selection: rgb(0, 0, 0) !important;
  --textHighlight: rgb(0, 0, 0) !important;
  --titlebar-background: rgb(0, 0, 0) !important;
  --titlebar-background-focused: rgb(0, 0, 0) !important;
  --titlebar-border-color: rgb(0, 0, 0) !important;
  --titlebar-text-color: rgb(0, 0, 0) !important;
  --titlebar-text-color-focused: rgb(0, 0, 0) !important;
  --vault-name-color: rgb(0, 0, 0) !important;
  --vault-profile-color: rgb(0, 0, 0) !important;
  --vault-profile-color-hover: rgb(0, 0, 0) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(234, 234, 235);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(25, 24, 27);
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
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(236, 223, 232);
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body del {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: line-through rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body p {
  color: rgb(123, 117, 138);
  outline: rgb(123, 117, 138) none 0px;
  text-decoration: rgb(123, 117, 138);
  text-decoration-color: rgb(123, 117, 138);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(66, 12, 192);
  outline: rgb(66, 12, 192) none 0px;
  text-decoration: underline rgb(66, 12, 192);
  text-decoration-color: rgb(66, 12, 192);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(66, 12, 192);
  outline: rgb(66, 12, 192) none 0px;
  text-decoration: underline rgb(66, 12, 192);
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
  text-decoration: rgb(202, 200, 208);
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

html[saved-theme="light"] body pre > code, pre:has(> code) {
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
  border-left-color: rgb(66, 12, 192);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(123, 117, 138);
  text-decoration: line-through rgb(123, 117, 138);
  text-decoration-color: rgb(123, 117, 138);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
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
  text-decoration: rgb(25, 24, 27);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(239, 239, 240);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(234, 234, 235);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(239, 239, 240);
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(239, 239, 240);
  color: rgb(25, 24, 27);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body h2.page-title, h2.page-title a {
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
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(123, 117, 138);
  text-decoration: rgb(123, 117, 138);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(123, 117, 138);
  text-decoration: rgb(123, 117, 138);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(123, 117, 138);
  text-decoration: rgb(123, 117, 138);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(239, 239, 240);
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
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
  text-decoration: rgb(17, 3, 48);
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
  text-decoration: rgb(123, 117, 138);
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
  text-decoration: rgb(123, 117, 138);
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
  text-decoration: underline dotted rgb(25, 24, 27);
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
}`,
  },
};
