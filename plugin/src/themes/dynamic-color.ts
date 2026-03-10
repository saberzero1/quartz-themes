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
	);
  --background-modifier-border: rgb(0, 0, 0);
  --background-modifier-border-focus: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --background-modifier-border-hover: rgb(0, 0, 0);
  --background-modifier-error: rgb(0, 0, 0);
  --background-modifier-hover: rgb(0, 0, 0);
  --background-primary: rgb(0, 0, 0);
  --background-primary-alt: rgb(0, 0, 0);
  --background-secondary: rgb(0, 0, 0);
  --background-secondary-alt: rgb(0, 0, 0);
  --bases-cards-background: rgb(0, 0, 0);
  --bases-cards-cover-background: rgb(0, 0, 0);
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(0, 0, 0);
  --bases-embed-border-color: rgb(0, 0, 0);
  --bases-group-heading-property-color: rgb(0, 0, 0);
  --bases-table-border-color: rgb(0, 0, 0);
  --bases-table-cell-background-active: rgb(0, 0, 0);
  --bases-table-cell-background-disabled: rgb(0, 0, 0);
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --bases-table-group-background: rgb(0, 0, 0);
  --bases-table-header-background: rgb(0, 0, 0);
  --bases-table-header-background-hover: rgb(0, 0, 0);
  --bases-table-header-color: rgb(0, 0, 0);
  --bases-table-summary-background: rgb(0, 0, 0);
  --bases-table-summary-background-hover: rgb(0, 0, 0);
  --blockquote-background-color: rgb(0, 0, 0);
  --blockquote-border-color: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --blockquote-color: rgb(0, 0, 0);
  --blur-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent));
  --button-radius: 20px;
  --canvas-background: rgb(0, 0, 0);
  --canvas-card-label-color: rgb(0, 0, 0);
  --canvas-dot-pattern: rgb(0, 0, 0);
  --caret-color: rgb(0, 0, 0);
  --checkbox-border-color: rgb(0, 0, 0);
  --checkbox-border-color-hover: rgb(0, 0, 0);
  --checkbox-color: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --checkbox-marker-color: rgb(0, 0, 0);
  --checklist-done-color: rgb(0, 0, 0);
  --code-background: rgb(0, 0, 0);
  --code-border-color: rgb(0, 0, 0);
  --code-bracket-background: rgb(0, 0, 0);
  --code-comment: rgb(0, 0, 0);
  --code-normal: rgb(0, 0, 0);
  --code-punctuation: rgb(0, 0, 0);
  --collapse-icon-color: rgb(0, 0, 0);
  --collapse-icon-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(0, 0, 0);
  --dropdown-background: rgb(0, 0, 0);
  --dropdown-background-hover: hsl(
		258 calc(max(48%, 88%)) 30%
	);
  --embed-background: rgb(0, 0, 0);
  --embed-block-shadow-hover: 0 0 0 1px rgb(0, 0, 0), inset 0 0 0 1px rgb(0, 0, 0);
  --embed-border-start: 2px solid hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --error-hue: 0;
  --error-saturation: 84%;
  --file-header-background: rgb(0, 0, 0);
  --file-header-background-focused: rgb(0, 0, 0);
  --flair-background: rgb(0, 0, 0);
  --flair-color: rgb(0, 0, 0);
  --footnote-divider-color: rgb(0, 0, 0);
  --footnote-id-color: rgb(0, 0, 0);
  --footnote-id-color-no-occurrences: rgb(0, 0, 0);
  --footnote-input-background-active: rgb(0, 0, 0);
  --graph-line: rgb(0, 0, 0);
  --graph-node: rgb(0, 0, 0);
  --graph-node-attachment: rgb(0, 0, 0);
  --graph-node-focused: rgb(0, 0, 0);
  --graph-node-tag: hsl(
		258 calc(max(48%, 88%)) 30%
	);
  --graph-node-unresolved: rgb(0, 0, 0);
  --graph-text: rgb(0, 0, 0);
  --gray: var(--text-muted);
  --h1-color: rgb(0, 0, 0);
  --h2-color: rgb(0, 0, 0);
  --h3-color: rgb(0, 0, 0);
  --h4-color: rgb(0, 0, 0);
  --h5-color: rgb(0, 0, 0);
  --h6-color: rgb(0, 0, 0);
  --heading-formatting: rgb(0, 0, 0);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(0, 0, 0);
  --hue: 258;
  --icon-color: rgb(0, 0, 0);
  --icon-color-active: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --icon-color-focused: rgb(0, 0, 0);
  --icon-color-hover: rgb(0, 0, 0);
  --inline-title-color: rgb(0, 0, 0);
  --input-date-separator: rgb(0, 0, 0);
  --input-placeholder-color: rgb(0, 0, 0);
  --interactive-accent: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --interactive-hover: hsl(
		258 calc(max(48%, 88%)) 30%
	);
  --interactive-normal: rgb(0, 0, 0);
  --interactive-normal-accent: rgb(0, 0, 0);
  --interactive-normal-hover: rgb(0, 0, 0);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --link-color-hover: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --link-external-color: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --link-external-color-hover: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --link-unresolved-color: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --list-marker-color: rgb(0, 0, 0);
  --list-marker-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --list-marker-color-hover: rgb(0, 0, 0);
  --md-ref-palette-error-0: rgb(0, 0, 0);
  --md-ref-palette-error-10: rgb(0, 0, 0);
  --md-ref-palette-error-100: rgb(0, 0, 0);
  --md-ref-palette-error-12: rgb(0, 0, 0);
  --md-ref-palette-error-17: rgb(0, 0, 0);
  --md-ref-palette-error-20: rgb(0, 0, 0);
  --md-ref-palette-error-22: rgb(0, 0, 0);
  --md-ref-palette-error-24: rgb(0, 0, 0);
  --md-ref-palette-error-25: rgb(0, 0, 0);
  --md-ref-palette-error-30: rgb(0, 0, 0);
  --md-ref-palette-error-35: rgb(0, 0, 0);
  --md-ref-palette-error-4: rgb(0, 0, 0);
  --md-ref-palette-error-40: rgb(0, 0, 0);
  --md-ref-palette-error-5: rgb(0, 0, 0);
  --md-ref-palette-error-50: rgb(0, 0, 0);
  --md-ref-palette-error-6: rgb(0, 0, 0);
  --md-ref-palette-error-60: rgb(0, 0, 0);
  --md-ref-palette-error-70: rgb(0, 0, 0);
  --md-ref-palette-error-80: rgb(0, 0, 0);
  --md-ref-palette-error-87: rgb(0, 0, 0);
  --md-ref-palette-error-90: rgb(0, 0, 0);
  --md-ref-palette-error-92: rgb(0, 0, 0);
  --md-ref-palette-error-94: rgb(0, 0, 0);
  --md-ref-palette-error-95: rgb(0, 0, 0);
  --md-ref-palette-error-96: rgb(0, 0, 0);
  --md-ref-palette-error-98: rgb(0, 0, 0);
  --md-ref-palette-error-99: rgb(0, 0, 0);
  --md-ref-palette-neutral-0: rgb(0, 0, 0);
  --md-ref-palette-neutral-10: rgb(0, 0, 0);
  --md-ref-palette-neutral-100: rgb(0, 0, 0);
  --md-ref-palette-neutral-12: rgb(0, 0, 0);
  --md-ref-palette-neutral-17: rgb(0, 0, 0);
  --md-ref-palette-neutral-20: rgb(0, 0, 0);
  --md-ref-palette-neutral-22: rgb(0, 0, 0);
  --md-ref-palette-neutral-24: rgb(0, 0, 0);
  --md-ref-palette-neutral-25: rgb(0, 0, 0);
  --md-ref-palette-neutral-30: rgb(0, 0, 0);
  --md-ref-palette-neutral-35: rgb(0, 0, 0);
  --md-ref-palette-neutral-4: rgb(0, 0, 0);
  --md-ref-palette-neutral-40: rgb(0, 0, 0);
  --md-ref-palette-neutral-5: rgb(0, 0, 0);
  --md-ref-palette-neutral-50: rgb(0, 0, 0);
  --md-ref-palette-neutral-6: rgb(0, 0, 0);
  --md-ref-palette-neutral-60: rgb(0, 0, 0);
  --md-ref-palette-neutral-70: rgb(0, 0, 0);
  --md-ref-palette-neutral-80: rgb(0, 0, 0);
  --md-ref-palette-neutral-87: rgb(0, 0, 0);
  --md-ref-palette-neutral-90: rgb(0, 0, 0);
  --md-ref-palette-neutral-92: rgb(0, 0, 0);
  --md-ref-palette-neutral-94: rgb(0, 0, 0);
  --md-ref-palette-neutral-95: rgb(0, 0, 0);
  --md-ref-palette-neutral-96: rgb(0, 0, 0);
  --md-ref-palette-neutral-98: rgb(0, 0, 0);
  --md-ref-palette-neutral-99: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-0: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-10: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-100: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-12: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-17: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-20: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-22: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-24: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-25: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-30: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-35: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-4: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-40: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-5: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-50: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-6: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-60: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-70: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-80: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-87: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-90: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-92: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-94: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-95: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-96: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-98: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-99: rgb(0, 0, 0);
  --md-ref-palette-primary-0: hsl(
		258 calc(max(48%, 88%)) 0%
	);
  --md-ref-palette-primary-10: hsl(
		258 calc(max(48%, 88%)) 10%
	);
  --md-ref-palette-primary-100: hsl(
		258 calc(max(48%, 88%)) 100%
	);
  --md-ref-palette-primary-12: hsl(
		258 calc(max(48%, 88%)) 12%
	);
  --md-ref-palette-primary-17: hsl(
		258 calc(max(48%, 88%)) 17%
	);
  --md-ref-palette-primary-20: hsl(
		258 calc(max(48%, 88%)) 20%
	);
  --md-ref-palette-primary-22: hsl(
		258 calc(max(48%, 88%)) 22%
	);
  --md-ref-palette-primary-24: hsl(
		258 calc(max(48%, 88%)) 24%
	);
  --md-ref-palette-primary-25: hsl(
		258 calc(max(48%, 88%)) 25%
	);
  --md-ref-palette-primary-30: hsl(
		258 calc(max(48%, 88%)) 30%
	);
  --md-ref-palette-primary-35: hsl(
		258 calc(max(48%, 88%)) 35%
	);
  --md-ref-palette-primary-4: hsl(
		258 calc(max(48%, 88%)) 4%
	);
  --md-ref-palette-primary-40: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --md-ref-palette-primary-5: hsl(
		258 calc(max(48%, 88%)) 5%
	);
  --md-ref-palette-primary-50: hsl(
		258 calc(max(48%, 88%)) 50%
	);
  --md-ref-palette-primary-6: hsl(
		258 calc(max(48%, 88%)) 6%
	);
  --md-ref-palette-primary-60: hsl(
		258 calc(max(48%, 88%)) 60%
	);
  --md-ref-palette-primary-70: hsl(
		258 calc(max(48%, 88%)) 70%
	);
  --md-ref-palette-primary-80: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --md-ref-palette-primary-87: hsl(
		258 calc(max(48%, 88%)) 87%
	);
  --md-ref-palette-primary-90: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --md-ref-palette-primary-92: hsl(
		258 calc(max(48%, 88%)) 92%
	);
  --md-ref-palette-primary-94: hsl(
		258 calc(max(48%, 88%)) 94%
	);
  --md-ref-palette-primary-95: hsl(
		258 calc(max(48%, 88%)) 95%
	);
  --md-ref-palette-primary-96: hsl(
		258 calc(max(48%, 88%)) 96%
	);
  --md-ref-palette-primary-98: hsl(
		258 calc(max(48%, 88%)) 98%
	);
  --md-ref-palette-primary-99: hsl(
		258 calc(max(48%, 88%)) 99%
	);
  --md-ref-palette-secondary-0: rgb(0, 0, 0);
  --md-ref-palette-secondary-10: rgb(0, 0, 0);
  --md-ref-palette-secondary-100: rgb(0, 0, 0);
  --md-ref-palette-secondary-12: rgb(0, 0, 0);
  --md-ref-palette-secondary-17: rgb(0, 0, 0);
  --md-ref-palette-secondary-20: rgb(0, 0, 0);
  --md-ref-palette-secondary-22: rgb(0, 0, 0);
  --md-ref-palette-secondary-24: rgb(0, 0, 0);
  --md-ref-palette-secondary-25: rgb(0, 0, 0);
  --md-ref-palette-secondary-30: rgb(0, 0, 0);
  --md-ref-palette-secondary-35: rgb(0, 0, 0);
  --md-ref-palette-secondary-4: rgb(0, 0, 0);
  --md-ref-palette-secondary-40: rgb(0, 0, 0);
  --md-ref-palette-secondary-5: rgb(0, 0, 0);
  --md-ref-palette-secondary-50: rgb(0, 0, 0);
  --md-ref-palette-secondary-6: rgb(0, 0, 0);
  --md-ref-palette-secondary-60: rgb(0, 0, 0);
  --md-ref-palette-secondary-70: rgb(0, 0, 0);
  --md-ref-palette-secondary-80: rgb(0, 0, 0);
  --md-ref-palette-secondary-87: rgb(0, 0, 0);
  --md-ref-palette-secondary-90: rgb(0, 0, 0);
  --md-ref-palette-secondary-92: rgb(0, 0, 0);
  --md-ref-palette-secondary-94: rgb(0, 0, 0);
  --md-ref-palette-secondary-95: rgb(0, 0, 0);
  --md-ref-palette-secondary-96: rgb(0, 0, 0);
  --md-ref-palette-secondary-98: rgb(0, 0, 0);
  --md-ref-palette-secondary-99: rgb(0, 0, 0);
  --md-ref-palette-tertiary-0: rgb(0, 0, 0);
  --md-ref-palette-tertiary-10: rgb(0, 0, 0);
  --md-ref-palette-tertiary-100: rgb(0, 0, 0);
  --md-ref-palette-tertiary-12: rgb(0, 0, 0);
  --md-ref-palette-tertiary-17: rgb(0, 0, 0);
  --md-ref-palette-tertiary-20: rgb(0, 0, 0);
  --md-ref-palette-tertiary-22: rgb(0, 0, 0);
  --md-ref-palette-tertiary-24: rgb(0, 0, 0);
  --md-ref-palette-tertiary-25: rgb(0, 0, 0);
  --md-ref-palette-tertiary-30: rgb(0, 0, 0);
  --md-ref-palette-tertiary-35: rgb(0, 0, 0);
  --md-ref-palette-tertiary-4: rgb(0, 0, 0);
  --md-ref-palette-tertiary-40: rgb(0, 0, 0);
  --md-ref-palette-tertiary-5: rgb(0, 0, 0);
  --md-ref-palette-tertiary-50: rgb(0, 0, 0);
  --md-ref-palette-tertiary-6: rgb(0, 0, 0);
  --md-ref-palette-tertiary-60: rgb(0, 0, 0);
  --md-ref-palette-tertiary-70: rgb(0, 0, 0);
  --md-ref-palette-tertiary-80: rgb(0, 0, 0);
  --md-ref-palette-tertiary-87: rgb(0, 0, 0);
  --md-ref-palette-tertiary-90: rgb(0, 0, 0);
  --md-ref-palette-tertiary-92: rgb(0, 0, 0);
  --md-ref-palette-tertiary-94: rgb(0, 0, 0);
  --md-ref-palette-tertiary-95: rgb(0, 0, 0);
  --md-ref-palette-tertiary-96: rgb(0, 0, 0);
  --md-ref-palette-tertiary-98: rgb(0, 0, 0);
  --md-ref-palette-tertiary-99: rgb(0, 0, 0);
  --md-sys-color-background: rgb(0, 0, 0);
  --md-sys-color-error: rgb(0, 0, 0);
  --md-sys-color-error-container: rgb(0, 0, 0);
  --md-sys-color-inverse-on-surface: rgb(0, 0, 0);
  --md-sys-color-inverse-primary: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --md-sys-color-inverse-surface: rgb(0, 0, 0);
  --md-sys-color-on-background: rgb(0, 0, 0);
  --md-sys-color-on-error: rgb(0, 0, 0);
  --md-sys-color-on-error-container: rgb(0, 0, 0);
  --md-sys-color-on-primary: hsl(
		258 calc(max(48%, 88%)) 20%
	);
  --md-sys-color-on-primary-container: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --md-sys-color-on-primary-fixed: hsl(
		258 calc(max(48%, 88%)) 10%
	);
  --md-sys-color-on-primary-fixed-dim: hsl(
		258 calc(max(48%, 88%)) 30%
	);
  --md-sys-color-on-secondary: rgb(0, 0, 0);
  --md-sys-color-on-secondary-container: rgb(0, 0, 0);
  --md-sys-color-on-secondary-fixed: rgb(0, 0, 0);
  --md-sys-color-on-secondary-fixed-dim: rgb(0, 0, 0);
  --md-sys-color-on-surface: rgb(0, 0, 0);
  --md-sys-color-on-surface-variant: rgb(0, 0, 0);
  --md-sys-color-on-tertiary: rgb(0, 0, 0);
  --md-sys-color-on-tertiary-container: rgb(0, 0, 0);
  --md-sys-color-on-tertiary-fixed: rgb(0, 0, 0);
  --md-sys-color-on-tertiary-fixed-dim: rgb(0, 0, 0);
  --md-sys-color-outline: rgb(0, 0, 0);
  --md-sys-color-outline-variant: rgb(0, 0, 0);
  --md-sys-color-primary: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --md-sys-color-primary-container: hsl(
		258 calc(max(48%, 88%)) 30%
	);
  --md-sys-color-primary-fixed: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --md-sys-color-primary-fixed-dim: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --md-sys-color-scrim: rgb(0, 0, 0);
  --md-sys-color-secondary: rgb(0, 0, 0);
  --md-sys-color-secondary-container: rgb(0, 0, 0);
  --md-sys-color-secondary-fixed: rgb(0, 0, 0);
  --md-sys-color-secondary-fixed-dim: rgb(0, 0, 0);
  --md-sys-color-shadow: rgb(0, 0, 0);
  --md-sys-color-surface: rgb(0, 0, 0);
  --md-sys-color-surface-bright: rgb(0, 0, 0);
  --md-sys-color-surface-container: rgb(0, 0, 0);
  --md-sys-color-surface-container-high: rgb(0, 0, 0);
  --md-sys-color-surface-container-highest: rgb(0, 0, 0);
  --md-sys-color-surface-container-low: rgb(0, 0, 0);
  --md-sys-color-surface-container-lowest: rgb(0, 0, 0);
  --md-sys-color-surface-dim: rgb(0, 0, 0);
  --md-sys-color-surface-variant: rgb(0, 0, 0);
  --md-sys-color-tertiary: rgb(0, 0, 0);
  --md-sys-color-tertiary-container: rgb(0, 0, 0);
  --md-sys-color-tertiary-fixed: rgb(0, 0, 0);
  --md-sys-color-tertiary-fixed-dim: rgb(0, 0, 0);
  --menu-background: rgb(0, 0, 0);
  --menu-border-color: rgb(0, 0, 0);
  --metadata-border-color: rgb(0, 0, 0);
  --metadata-divider-color: rgb(0, 0, 0);
  --metadata-input-background-active: rgb(0, 0, 0);
  --metadata-input-text-color: rgb(0, 0, 0);
  --metadata-label-background-active: rgb(0, 0, 0);
  --metadata-label-text-color: rgb(0, 0, 0);
  --metadata-label-text-color-hover: rgb(0, 0, 0);
  --metadata-property-background-active: rgb(0, 0, 0);
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(0, 0, 0);
  --modal-background: rgb(0, 0, 0);
  --nav-collapse-icon-color: rgb(0, 0, 0);
  --nav-collapse-icon-color-collapsed: rgb(0, 0, 0);
  --nav-heading-color: rgb(0, 0, 0);
  --nav-heading-color-collapsed: rgb(0, 0, 0);
  --nav-heading-color-collapsed-hover: rgb(0, 0, 0);
  --nav-heading-color-hover: rgb(0, 0, 0);
  --nav-item-background-active: rgb(0, 0, 0);
  --nav-item-background-hover: rgb(0, 0, 0);
  --nav-item-color: rgb(0, 0, 0);
  --nav-item-color-active: rgb(0, 0, 0);
  --nav-item-color-highlighted: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --nav-item-color-hover: rgb(0, 0, 0);
  --nav-item-color-selected: rgb(0, 0, 0);
  --nav-tag-color: rgb(0, 0, 0);
  --nav-tag-color-active: rgb(0, 0, 0);
  --nav-tag-color-hover: rgb(0, 0, 0);
  --neutral-hue: 258;
  --neutral-saturation: 4%;
  --neutral-variant-hue: 258;
  --neutral-variant-saturation: 8%;
  --pdf-background: rgb(0, 0, 0);
  --pdf-page-background: rgb(0, 0, 0);
  --pdf-shadow: 0 0 0 1px rgb(0, 0, 0);
  --pdf-sidebar-background: rgb(0, 0, 0);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(0, 0, 0);
  --pill-border-color: rgb(0, 0, 0);
  --pill-border-color-hover: rgb(0, 0, 0);
  --pill-color: rgb(0, 0, 0);
  --pill-color-hover: rgb(0, 0, 0);
  --pill-color-remove: rgb(0, 0, 0);
  --pill-color-remove-hover: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --primary-hue: 258;
  --primary-saturation: calc(max(48%, 88%));
  --prompt-background: rgb(0, 0, 0);
  --raised-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent));
  --ribbon-background: rgb(0, 0, 0);
  --ribbon-background-collapsed: rgb(0, 0, 0);
  --saturation: 88%;
  --scrollbar-active-thumb-bg: rgb(0, 0, 0);
  --scrollbar-bg: rgb(0, 0, 0);
  --scrollbar-thumb-bg: rgb(0, 0, 0);
  --search-clear-button-color: rgb(0, 0, 0);
  --search-icon-color: rgb(0, 0, 0);
  --search-result-background: rgb(0, 0, 0);
  --secondary: var(--text-accent);
  --secondary-hue: 258;
  --secondary-saturation: 16%;
  --setting-group-heading-color: rgb(0, 0, 0);
  --setting-items-background: rgb(0, 0, 0);
  --setting-items-border-color: rgb(0, 0, 0);
  --slider-thumb-border-color: rgb(0, 0, 0);
  --slider-thumb-radius: 36px;
  --slider-track-background: rgb(0, 0, 0);
  --status-bar-background: hsl(
		258 calc(max(48%, 88%)) 30%
	);
  --status-bar-border-color: rgb(0, 0, 0);
  --status-bar-text-color: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --suggestion-background: rgb(0, 0, 0);
  --tab-background-active: rgb(0, 0, 0);
  --tab-container-background: rgb(0, 0, 0);
  --tab-divider-color: rgb(0, 0, 0);
  --tab-outline-color: rgb(0, 0, 0);
  --tab-switcher-background: rgb(0, 0, 0);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(0, 0, 0), transparent);
  --tab-text-color: rgb(0, 0, 0);
  --tab-text-color-active: rgb(0, 0, 0);
  --tab-text-color-focused: rgb(0, 0, 0);
  --tab-text-color-focused-active: rgb(0, 0, 0);
  --tab-text-color-focused-active-current: rgb(0, 0, 0);
  --tab-text-color-focused-highlighted: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --table-add-button-border-color: rgb(0, 0, 0);
  --table-border-color: rgb(0, 0, 0);
  --table-drag-handle-background-active: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --table-drag-handle-color: rgb(0, 0, 0);
  --table-drag-handle-color-active: hsl(
		258 calc(max(48%, 88%)) 20%
	);
  --table-header-border-color: rgb(0, 0, 0);
  --table-header-color: rgb(0, 0, 0);
  --table-selection-border-color: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --tag-background: hsl(
		258 calc(max(48%, 88%)) 30%
	);
  --tag-background-hover: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --tag-color: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --tag-color-hover: hsl(
		258 calc(max(48%, 88%)) 20%
	);
  --tertiary: var(--text-accent-hover);
  --tertiary-hue: 318;
  --tertiary-saturation: 24%;
  --text-accent: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --text-accent-hover: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --text-faint: rgb(0, 0, 0);
  --text-highlight-bg: rgb(0, 0, 0);
  --text-muted: rgb(0, 0, 0);
  --text-normal: rgb(0, 0, 0);
  --text-on-accent: hsl(
		258 calc(max(48%, 88%)) 20%
	);
  --text-on-accent-inverted: hsl(
		258 calc(max(48%, 88%)) 20%
	);
  --text-selection: rgb(0, 0, 0);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(0, 0, 0);
  --titlebar-background-focused: rgb(0, 0, 0);
  --titlebar-border-color: rgb(0, 0, 0);
  --titlebar-text-color: rgb(0, 0, 0);
  --titlebar-text-color-focused: rgb(0, 0, 0);
  --vault-name-color: rgb(0, 0, 0);
  --vault-profile-color: rgb(0, 0, 0);
  --vault-profile-color-hover: rgb(0, 0, 0);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(43, 42, 45);
  color: rgb(229, 228, 231);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(10, 10, 11);
  color: rgb(229, 228, 231);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(43, 42, 45);
  color: rgb(229, 228, 231);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(74, 70, 83);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(43, 42, 45);
  border-left-color: rgb(74, 70, 83);
  color: rgb(229, 228, 231);
}

body div#quartz-root {
  background-color: rgb(10, 10, 11);
  color: rgb(229, 228, 231);
}`,
    typography: `body .page article p > b, b {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body .page article p > em, em {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body .page article p > i, i {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body .page article p > strong, strong {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body .text-highlight {
  background-color: rgb(95, 58, 84);
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body del {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: line-through rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body p {
  color: rgb(150, 145, 161);
  outline: rgb(150, 145, 161) none 0px;
  text-decoration: rgb(150, 145, 161);
  text-decoration-color: rgb(150, 145, 161);
}`,
    links: `body a.external, footer a {
  color: rgb(186, 159, 249);
  outline: rgb(186, 159, 249) none 0px;
  text-decoration: underline rgb(186, 159, 249);
  text-decoration-color: rgb(186, 159, 249);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 159, 249);
  outline: rgb(186, 159, 249) none 0px;
  text-decoration: underline rgb(186, 159, 249);
  text-decoration-color: rgb(186, 159, 249);
}

body a.internal.broken {
  color: rgb(186, 159, 249);
  outline: rgb(186, 159, 249) none 0px;
}`,
    lists: `body dd {
  color: rgb(229, 228, 231);
}

body dt {
  color: rgb(229, 228, 231);
}

body ol > li {
  color: rgb(229, 228, 231);
}

body ol.overflow {
  background-color: rgb(10, 10, 11);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body ul > li {
  color: rgb(229, 228, 231);
}

body ul.overflow {
  background-color: rgb(10, 10, 11);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(74, 70, 83);
  text-decoration: rgb(74, 70, 83);
}

body blockquote {
  background-color: rgb(43, 42, 45);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body table {
  color: rgb(229, 228, 231);
}

body td {
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(229, 228, 231);
}

body th {
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(229, 228, 231);
}`,
    code: `body code {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(229, 228, 231);
}

body pre > code, pre:has(> code) {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
}

body pre:has(> code) {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
}`,
    images: `body audio {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body figcaption {
  color: rgb(229, 228, 231);
}

body figure {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body img {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body video {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}`,
    embeds: `body .file-embed {
  background-color: rgb(25, 24, 27);
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
}

body .footnotes {
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

body .transclude {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(186, 159, 249);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body .transclude-inner {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(186, 159, 249);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(150, 145, 161);
  text-decoration: line-through rgb(150, 145, 161);
  text-decoration-color: rgb(150, 145, 161);
}

body input[type=checkbox] {
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
}

body li.task-list-item[data-task='!'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='*'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='-'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='/'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='>'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='?'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='I'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='S'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='b'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='c'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='d'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='f'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='i'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='k'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='l'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='p'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='u'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body li.task-list-item[data-task='w'] {
  color: rgb(229, 228, 231);
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(229, 228, 231);
}

body .search > .search-container > .search-space {
  background-color: rgb(10, 10, 11);
}

body .search > .search-container > .search-space > * {
  color: rgb(229, 228, 231);
  outline: rgb(229, 228, 231) none 0px;
  text-decoration: rgb(229, 228, 231);
  text-decoration-color: rgb(229, 228, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(229, 228, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(229, 228, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(30, 29, 32);
  color: rgb(229, 228, 231);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(43, 42, 45);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(30, 29, 32);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(30, 29, 32);
  color: rgb(229, 228, 231);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(50, 9, 144);
}

body a.internal.tag-link::before {
  color: rgb(221, 207, 252);
}

body h1 {
  color: rgb(229, 228, 231);
}

body h2 {
  color: rgb(229, 228, 231);
}

body h2.page-title, h2.page-title a {
  color: rgb(229, 228, 231);
}

body h3 {
  color: rgb(229, 228, 231);
}

body h4 {
  color: rgb(229, 228, 231);
}

body h5 {
  color: rgb(229, 228, 231);
}

body h6 {
  color: rgb(229, 228, 231);
}

body hr {
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
}

body ::-webkit-scrollbar-corner {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
}

body ::-webkit-scrollbar-track {
  background: rgb(10, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 11);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(150, 145, 161);
  text-decoration: rgb(150, 145, 161);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(150, 145, 161);
  text-decoration: rgb(150, 145, 161);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(150, 145, 161);
  text-decoration: rgb(150, 145, 161);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(30, 29, 32);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
  color: rgb(150, 145, 161);
}`,
    footer: `body footer {
  background-color: rgb(50, 9, 144);
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(221, 207, 252);
}

body footer ul li a {
  color: rgb(221, 207, 252);
  text-decoration: rgb(221, 207, 252);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(229, 228, 231);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(150, 145, 161);
  text-decoration: rgb(150, 145, 161);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(150, 145, 161);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body li.section-li > .section .meta {
  color: rgb(150, 145, 161);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(150, 145, 161);
  text-decoration: rgb(150, 145, 161);
}

body ul.section-ul {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
  color: rgb(150, 145, 161);
}

body .darkmode svg {
  color: rgb(150, 145, 161);
  stroke: rgb(150, 145, 161);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
  color: rgb(150, 145, 161);
}

body .breadcrumb-element p {
  color: rgb(74, 70, 83);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

body .metadata {
  border-bottom-color: rgb(74, 70, 83);
  border-left-color: rgb(74, 70, 83);
  border-right-color: rgb(74, 70, 83);
  border-top-color: rgb(74, 70, 83);
  color: rgb(150, 145, 161);
}

body .metadata-properties {
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
  color: rgb(150, 145, 161);
}

body .navigation-progress {
  background-color: rgb(50, 9, 144);
}

body .page-header h2.page-title {
  color: rgb(229, 228, 231);
}

body abbr {
  color: rgb(229, 228, 231);
  text-decoration: underline dotted rgb(229, 228, 231);
}

body details {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body input[type=text] {
  border-bottom-color: rgb(150, 145, 161);
  border-left-color: rgb(150, 145, 161);
  border-right-color: rgb(150, 145, 161);
  border-top-color: rgb(150, 145, 161);
  color: rgb(150, 145, 161);
}

body kbd {
  background-color: rgb(15, 15, 16);
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
  color: rgb(229, 228, 231);
}

body progress {
  border-bottom-color: rgb(229, 228, 231);
  border-left-color: rgb(229, 228, 231);
  border-right-color: rgb(229, 228, 231);
  border-top-color: rgb(229, 228, 231);
}

body sub {
  color: rgb(229, 228, 231);
}

body summary {
  color: rgb(229, 228, 231);
}

body sup {
  color: rgb(229, 228, 231);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --background-modifier-border: rgb(0, 0, 0);
  --background-modifier-border-focus: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --background-modifier-border-hover: rgb(0, 0, 0);
  --background-modifier-error: rgb(0, 0, 0);
  --background-modifier-hover: rgb(0, 0, 0);
  --background-primary: rgb(0, 0, 0);
  --background-primary-alt: rgb(0, 0, 0);
  --background-secondary: rgb(0, 0, 0);
  --background-secondary-alt: rgb(0, 0, 0);
  --bases-cards-background: rgb(0, 0, 0);
  --bases-cards-cover-background: rgb(0, 0, 0);
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(0, 0, 0);
  --bases-embed-border-color: rgb(0, 0, 0);
  --bases-group-heading-property-color: rgb(0, 0, 0);
  --bases-table-border-color: rgb(0, 0, 0);
  --bases-table-cell-background-active: rgb(0, 0, 0);
  --bases-table-cell-background-disabled: rgb(0, 0, 0);
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --bases-table-group-background: rgb(0, 0, 0);
  --bases-table-header-background: rgb(0, 0, 0);
  --bases-table-header-background-hover: rgb(0, 0, 0);
  --bases-table-header-color: rgb(0, 0, 0);
  --bases-table-summary-background: rgb(0, 0, 0);
  --bases-table-summary-background-hover: rgb(0, 0, 0);
  --blockquote-background-color: rgb(0, 0, 0);
  --blockquote-border-color: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --blockquote-color: rgb(0, 0, 0);
  --blur-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent));
  --button-radius: 20px;
  --canvas-background: rgb(0, 0, 0);
  --canvas-card-label-color: rgb(0, 0, 0);
  --canvas-dot-pattern: rgb(0, 0, 0);
  --caret-color: rgb(0, 0, 0);
  --checkbox-border-color: rgb(0, 0, 0);
  --checkbox-border-color-hover: rgb(0, 0, 0);
  --checkbox-color: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --checkbox-marker-color: rgb(0, 0, 0);
  --checklist-done-color: rgb(0, 0, 0);
  --code-background: rgb(0, 0, 0);
  --code-border-color: rgb(0, 0, 0);
  --code-bracket-background: rgb(0, 0, 0);
  --code-comment: rgb(0, 0, 0);
  --code-normal: rgb(0, 0, 0);
  --code-punctuation: rgb(0, 0, 0);
  --collapse-icon-color: rgb(0, 0, 0);
  --collapse-icon-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(0, 0, 0);
  --dropdown-background: rgb(0, 0, 0);
  --dropdown-background-hover: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --embed-background: rgb(0, 0, 0);
  --embed-block-shadow-hover: 0 0 0 1px rgb(0, 0, 0), inset 0 0 0 1px rgb(0, 0, 0);
  --embed-border-start: 2px solid hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --error-hue: 0;
  --error-saturation: 84%;
  --file-header-background: rgb(0, 0, 0);
  --file-header-background-focused: rgb(0, 0, 0);
  --flair-background: rgb(0, 0, 0);
  --flair-color: rgb(0, 0, 0);
  --footnote-divider-color: rgb(0, 0, 0);
  --footnote-id-color: rgb(0, 0, 0);
  --footnote-id-color-no-occurrences: rgb(0, 0, 0);
  --footnote-input-background-active: rgb(0, 0, 0);
  --graph-line: rgb(0, 0, 0);
  --graph-node: rgb(0, 0, 0);
  --graph-node-attachment: rgb(0, 0, 0);
  --graph-node-focused: rgb(0, 0, 0);
  --graph-node-tag: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --graph-node-unresolved: rgb(0, 0, 0);
  --graph-text: rgb(0, 0, 0);
  --gray: var(--text-muted);
  --h1-color: rgb(0, 0, 0);
  --h2-color: rgb(0, 0, 0);
  --h3-color: rgb(0, 0, 0);
  --h4-color: rgb(0, 0, 0);
  --h5-color: rgb(0, 0, 0);
  --h6-color: rgb(0, 0, 0);
  --heading-formatting: rgb(0, 0, 0);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(0, 0, 0);
  --hue: 258;
  --icon-color: rgb(0, 0, 0);
  --icon-color-active: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --icon-color-focused: rgb(0, 0, 0);
  --icon-color-hover: rgb(0, 0, 0);
  --inline-title-color: rgb(0, 0, 0);
  --input-date-separator: rgb(0, 0, 0);
  --input-placeholder-color: rgb(0, 0, 0);
  --interactive-accent: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --interactive-hover: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --interactive-normal: rgb(0, 0, 0);
  --interactive-normal-accent: rgb(0, 0, 0);
  --interactive-normal-hover: rgb(0, 0, 0);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --link-color-hover: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --link-external-color: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --link-external-color-hover: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --link-unresolved-color: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --list-marker-color: rgb(0, 0, 0);
  --list-marker-color-collapsed: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --list-marker-color-hover: rgb(0, 0, 0);
  --md-ref-palette-error-0: rgb(0, 0, 0);
  --md-ref-palette-error-10: rgb(0, 0, 0);
  --md-ref-palette-error-100: rgb(0, 0, 0);
  --md-ref-palette-error-12: rgb(0, 0, 0);
  --md-ref-palette-error-17: rgb(0, 0, 0);
  --md-ref-palette-error-20: rgb(0, 0, 0);
  --md-ref-palette-error-22: rgb(0, 0, 0);
  --md-ref-palette-error-24: rgb(0, 0, 0);
  --md-ref-palette-error-25: rgb(0, 0, 0);
  --md-ref-palette-error-30: rgb(0, 0, 0);
  --md-ref-palette-error-35: rgb(0, 0, 0);
  --md-ref-palette-error-4: rgb(0, 0, 0);
  --md-ref-palette-error-40: rgb(0, 0, 0);
  --md-ref-palette-error-5: rgb(0, 0, 0);
  --md-ref-palette-error-50: rgb(0, 0, 0);
  --md-ref-palette-error-6: rgb(0, 0, 0);
  --md-ref-palette-error-60: rgb(0, 0, 0);
  --md-ref-palette-error-70: rgb(0, 0, 0);
  --md-ref-palette-error-80: rgb(0, 0, 0);
  --md-ref-palette-error-87: rgb(0, 0, 0);
  --md-ref-palette-error-90: rgb(0, 0, 0);
  --md-ref-palette-error-92: rgb(0, 0, 0);
  --md-ref-palette-error-94: rgb(0, 0, 0);
  --md-ref-palette-error-95: rgb(0, 0, 0);
  --md-ref-palette-error-96: rgb(0, 0, 0);
  --md-ref-palette-error-98: rgb(0, 0, 0);
  --md-ref-palette-error-99: rgb(0, 0, 0);
  --md-ref-palette-neutral-0: rgb(0, 0, 0);
  --md-ref-palette-neutral-10: rgb(0, 0, 0);
  --md-ref-palette-neutral-100: rgb(0, 0, 0);
  --md-ref-palette-neutral-12: rgb(0, 0, 0);
  --md-ref-palette-neutral-17: rgb(0, 0, 0);
  --md-ref-palette-neutral-20: rgb(0, 0, 0);
  --md-ref-palette-neutral-22: rgb(0, 0, 0);
  --md-ref-palette-neutral-24: rgb(0, 0, 0);
  --md-ref-palette-neutral-25: rgb(0, 0, 0);
  --md-ref-palette-neutral-30: rgb(0, 0, 0);
  --md-ref-palette-neutral-35: rgb(0, 0, 0);
  --md-ref-palette-neutral-4: rgb(0, 0, 0);
  --md-ref-palette-neutral-40: rgb(0, 0, 0);
  --md-ref-palette-neutral-5: rgb(0, 0, 0);
  --md-ref-palette-neutral-50: rgb(0, 0, 0);
  --md-ref-palette-neutral-6: rgb(0, 0, 0);
  --md-ref-palette-neutral-60: rgb(0, 0, 0);
  --md-ref-palette-neutral-70: rgb(0, 0, 0);
  --md-ref-palette-neutral-80: rgb(0, 0, 0);
  --md-ref-palette-neutral-87: rgb(0, 0, 0);
  --md-ref-palette-neutral-90: rgb(0, 0, 0);
  --md-ref-palette-neutral-92: rgb(0, 0, 0);
  --md-ref-palette-neutral-94: rgb(0, 0, 0);
  --md-ref-palette-neutral-95: rgb(0, 0, 0);
  --md-ref-palette-neutral-96: rgb(0, 0, 0);
  --md-ref-palette-neutral-98: rgb(0, 0, 0);
  --md-ref-palette-neutral-99: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-0: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-10: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-100: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-12: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-17: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-20: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-22: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-24: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-25: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-30: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-35: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-4: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-40: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-5: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-50: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-6: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-60: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-70: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-80: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-87: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-90: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-92: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-94: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-95: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-96: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-98: rgb(0, 0, 0);
  --md-ref-palette-neutral-variant-99: rgb(0, 0, 0);
  --md-ref-palette-primary-0: hsl(
		258 calc(max(48%, 88%)) 0%
	);
  --md-ref-palette-primary-10: hsl(
		258 calc(max(48%, 88%)) 10%
	);
  --md-ref-palette-primary-100: hsl(
		258 calc(max(48%, 88%)) 100%
	);
  --md-ref-palette-primary-12: hsl(
		258 calc(max(48%, 88%)) 12%
	);
  --md-ref-palette-primary-17: hsl(
		258 calc(max(48%, 88%)) 17%
	);
  --md-ref-palette-primary-20: hsl(
		258 calc(max(48%, 88%)) 20%
	);
  --md-ref-palette-primary-22: hsl(
		258 calc(max(48%, 88%)) 22%
	);
  --md-ref-palette-primary-24: hsl(
		258 calc(max(48%, 88%)) 24%
	);
  --md-ref-palette-primary-25: hsl(
		258 calc(max(48%, 88%)) 25%
	);
  --md-ref-palette-primary-30: hsl(
		258 calc(max(48%, 88%)) 30%
	);
  --md-ref-palette-primary-35: hsl(
		258 calc(max(48%, 88%)) 35%
	);
  --md-ref-palette-primary-4: hsl(
		258 calc(max(48%, 88%)) 4%
	);
  --md-ref-palette-primary-40: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --md-ref-palette-primary-5: hsl(
		258 calc(max(48%, 88%)) 5%
	);
  --md-ref-palette-primary-50: hsl(
		258 calc(max(48%, 88%)) 50%
	);
  --md-ref-palette-primary-6: hsl(
		258 calc(max(48%, 88%)) 6%
	);
  --md-ref-palette-primary-60: hsl(
		258 calc(max(48%, 88%)) 60%
	);
  --md-ref-palette-primary-70: hsl(
		258 calc(max(48%, 88%)) 70%
	);
  --md-ref-palette-primary-80: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --md-ref-palette-primary-87: hsl(
		258 calc(max(48%, 88%)) 87%
	);
  --md-ref-palette-primary-90: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --md-ref-palette-primary-92: hsl(
		258 calc(max(48%, 88%)) 92%
	);
  --md-ref-palette-primary-94: hsl(
		258 calc(max(48%, 88%)) 94%
	);
  --md-ref-palette-primary-95: hsl(
		258 calc(max(48%, 88%)) 95%
	);
  --md-ref-palette-primary-96: hsl(
		258 calc(max(48%, 88%)) 96%
	);
  --md-ref-palette-primary-98: hsl(
		258 calc(max(48%, 88%)) 98%
	);
  --md-ref-palette-primary-99: hsl(
		258 calc(max(48%, 88%)) 99%
	);
  --md-ref-palette-secondary-0: rgb(0, 0, 0);
  --md-ref-palette-secondary-10: rgb(0, 0, 0);
  --md-ref-palette-secondary-100: rgb(0, 0, 0);
  --md-ref-palette-secondary-12: rgb(0, 0, 0);
  --md-ref-palette-secondary-17: rgb(0, 0, 0);
  --md-ref-palette-secondary-20: rgb(0, 0, 0);
  --md-ref-palette-secondary-22: rgb(0, 0, 0);
  --md-ref-palette-secondary-24: rgb(0, 0, 0);
  --md-ref-palette-secondary-25: rgb(0, 0, 0);
  --md-ref-palette-secondary-30: rgb(0, 0, 0);
  --md-ref-palette-secondary-35: rgb(0, 0, 0);
  --md-ref-palette-secondary-4: rgb(0, 0, 0);
  --md-ref-palette-secondary-40: rgb(0, 0, 0);
  --md-ref-palette-secondary-5: rgb(0, 0, 0);
  --md-ref-palette-secondary-50: rgb(0, 0, 0);
  --md-ref-palette-secondary-6: rgb(0, 0, 0);
  --md-ref-palette-secondary-60: rgb(0, 0, 0);
  --md-ref-palette-secondary-70: rgb(0, 0, 0);
  --md-ref-palette-secondary-80: rgb(0, 0, 0);
  --md-ref-palette-secondary-87: rgb(0, 0, 0);
  --md-ref-palette-secondary-90: rgb(0, 0, 0);
  --md-ref-palette-secondary-92: rgb(0, 0, 0);
  --md-ref-palette-secondary-94: rgb(0, 0, 0);
  --md-ref-palette-secondary-95: rgb(0, 0, 0);
  --md-ref-palette-secondary-96: rgb(0, 0, 0);
  --md-ref-palette-secondary-98: rgb(0, 0, 0);
  --md-ref-palette-secondary-99: rgb(0, 0, 0);
  --md-ref-palette-tertiary-0: rgb(0, 0, 0);
  --md-ref-palette-tertiary-10: rgb(0, 0, 0);
  --md-ref-palette-tertiary-100: rgb(0, 0, 0);
  --md-ref-palette-tertiary-12: rgb(0, 0, 0);
  --md-ref-palette-tertiary-17: rgb(0, 0, 0);
  --md-ref-palette-tertiary-20: rgb(0, 0, 0);
  --md-ref-palette-tertiary-22: rgb(0, 0, 0);
  --md-ref-palette-tertiary-24: rgb(0, 0, 0);
  --md-ref-palette-tertiary-25: rgb(0, 0, 0);
  --md-ref-palette-tertiary-30: rgb(0, 0, 0);
  --md-ref-palette-tertiary-35: rgb(0, 0, 0);
  --md-ref-palette-tertiary-4: rgb(0, 0, 0);
  --md-ref-palette-tertiary-40: rgb(0, 0, 0);
  --md-ref-palette-tertiary-5: rgb(0, 0, 0);
  --md-ref-palette-tertiary-50: rgb(0, 0, 0);
  --md-ref-palette-tertiary-6: rgb(0, 0, 0);
  --md-ref-palette-tertiary-60: rgb(0, 0, 0);
  --md-ref-palette-tertiary-70: rgb(0, 0, 0);
  --md-ref-palette-tertiary-80: rgb(0, 0, 0);
  --md-ref-palette-tertiary-87: rgb(0, 0, 0);
  --md-ref-palette-tertiary-90: rgb(0, 0, 0);
  --md-ref-palette-tertiary-92: rgb(0, 0, 0);
  --md-ref-palette-tertiary-94: rgb(0, 0, 0);
  --md-ref-palette-tertiary-95: rgb(0, 0, 0);
  --md-ref-palette-tertiary-96: rgb(0, 0, 0);
  --md-ref-palette-tertiary-98: rgb(0, 0, 0);
  --md-ref-palette-tertiary-99: rgb(0, 0, 0);
  --md-sys-color-background: rgb(0, 0, 0);
  --md-sys-color-error: rgb(0, 0, 0);
  --md-sys-color-error-container: rgb(0, 0, 0);
  --md-sys-color-inverse-on-surface: rgb(0, 0, 0);
  --md-sys-color-inverse-primary: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --md-sys-color-inverse-surface: rgb(0, 0, 0);
  --md-sys-color-on-background: rgb(0, 0, 0);
  --md-sys-color-on-error: rgb(0, 0, 0);
  --md-sys-color-on-error-container: rgb(0, 0, 0);
  --md-sys-color-on-primary: hsl(
		258 calc(max(48%, 88%)) 100%
	);
  --md-sys-color-on-primary-container: hsl(
		258 calc(max(48%, 88%)) 10%
	);
  --md-sys-color-on-primary-fixed: hsl(
		258 calc(max(48%, 88%)) 10%
	);
  --md-sys-color-on-primary-fixed-dim: hsl(
		258 calc(max(48%, 88%)) 30%
	);
  --md-sys-color-on-secondary: rgb(0, 0, 0);
  --md-sys-color-on-secondary-container: rgb(0, 0, 0);
  --md-sys-color-on-secondary-fixed: rgb(0, 0, 0);
  --md-sys-color-on-secondary-fixed-dim: rgb(0, 0, 0);
  --md-sys-color-on-surface: rgb(0, 0, 0);
  --md-sys-color-on-surface-variant: rgb(0, 0, 0);
  --md-sys-color-on-tertiary: rgb(0, 0, 0);
  --md-sys-color-on-tertiary-container: rgb(0, 0, 0);
  --md-sys-color-on-tertiary-fixed: rgb(0, 0, 0);
  --md-sys-color-on-tertiary-fixed-dim: rgb(0, 0, 0);
  --md-sys-color-outline: rgb(0, 0, 0);
  --md-sys-color-outline-variant: rgb(0, 0, 0);
  --md-sys-color-primary: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --md-sys-color-primary-container: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --md-sys-color-primary-fixed: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --md-sys-color-primary-fixed-dim: hsl(
		258 calc(max(48%, 88%)) 80%
	);
  --md-sys-color-scrim: rgb(0, 0, 0);
  --md-sys-color-secondary: rgb(0, 0, 0);
  --md-sys-color-secondary-container: rgb(0, 0, 0);
  --md-sys-color-secondary-fixed: rgb(0, 0, 0);
  --md-sys-color-secondary-fixed-dim: rgb(0, 0, 0);
  --md-sys-color-shadow: rgb(0, 0, 0);
  --md-sys-color-surface: rgb(0, 0, 0);
  --md-sys-color-surface-bright: rgb(0, 0, 0);
  --md-sys-color-surface-container: rgb(0, 0, 0);
  --md-sys-color-surface-container-high: rgb(0, 0, 0);
  --md-sys-color-surface-container-highest: rgb(0, 0, 0);
  --md-sys-color-surface-container-low: rgb(0, 0, 0);
  --md-sys-color-surface-container-lowest: rgb(0, 0, 0);
  --md-sys-color-surface-dim: rgb(0, 0, 0);
  --md-sys-color-surface-variant: rgb(0, 0, 0);
  --md-sys-color-tertiary: rgb(0, 0, 0);
  --md-sys-color-tertiary-container: rgb(0, 0, 0);
  --md-sys-color-tertiary-fixed: rgb(0, 0, 0);
  --md-sys-color-tertiary-fixed-dim: rgb(0, 0, 0);
  --menu-background: rgb(0, 0, 0);
  --menu-border-color: rgb(0, 0, 0);
  --metadata-border-color: rgb(0, 0, 0);
  --metadata-divider-color: rgb(0, 0, 0);
  --metadata-input-background-active: rgb(0, 0, 0);
  --metadata-input-text-color: rgb(0, 0, 0);
  --metadata-label-background-active: rgb(0, 0, 0);
  --metadata-label-text-color: rgb(0, 0, 0);
  --metadata-label-text-color-hover: rgb(0, 0, 0);
  --metadata-property-background-active: rgb(0, 0, 0);
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(0, 0, 0);
  --modal-background: rgb(0, 0, 0);
  --nav-collapse-icon-color: rgb(0, 0, 0);
  --nav-collapse-icon-color-collapsed: rgb(0, 0, 0);
  --nav-heading-color: rgb(0, 0, 0);
  --nav-heading-color-collapsed: rgb(0, 0, 0);
  --nav-heading-color-collapsed-hover: rgb(0, 0, 0);
  --nav-heading-color-hover: rgb(0, 0, 0);
  --nav-item-background-active: rgb(0, 0, 0);
  --nav-item-background-hover: rgb(0, 0, 0);
  --nav-item-color: rgb(0, 0, 0);
  --nav-item-color-active: rgb(0, 0, 0);
  --nav-item-color-highlighted: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --nav-item-color-hover: rgb(0, 0, 0);
  --nav-item-color-selected: rgb(0, 0, 0);
  --nav-tag-color: rgb(0, 0, 0);
  --nav-tag-color-active: rgb(0, 0, 0);
  --nav-tag-color-hover: rgb(0, 0, 0);
  --neutral-hue: 258;
  --neutral-saturation: 4%;
  --neutral-variant-hue: 258;
  --neutral-variant-saturation: 8%;
  --pdf-background: rgb(0, 0, 0);
  --pdf-page-background: rgb(0, 0, 0);
  --pdf-sidebar-background: rgb(0, 0, 0);
  --pill-border-color: rgb(0, 0, 0);
  --pill-border-color-hover: rgb(0, 0, 0);
  --pill-color: rgb(0, 0, 0);
  --pill-color-hover: rgb(0, 0, 0);
  --pill-color-remove: rgb(0, 0, 0);
  --pill-color-remove-hover: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --primary-hue: 258;
  --primary-saturation: calc(max(48%, 88%));
  --prompt-background: rgb(0, 0, 0);
  --raised-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent));
  --ribbon-background: rgb(0, 0, 0);
  --ribbon-background-collapsed: rgb(0, 0, 0);
  --saturation: 88%;
  --scrollbar-active-thumb-bg: rgb(0, 0, 0);
  --scrollbar-bg: rgb(0, 0, 0);
  --scrollbar-thumb-bg: rgb(0, 0, 0);
  --search-clear-button-color: rgb(0, 0, 0);
  --search-icon-color: rgb(0, 0, 0);
  --search-result-background: rgb(0, 0, 0);
  --secondary: var(--text-accent);
  --secondary-hue: 258;
  --secondary-saturation: 16%;
  --setting-group-heading-color: rgb(0, 0, 0);
  --setting-items-background: rgb(0, 0, 0);
  --setting-items-border-color: rgb(0, 0, 0);
  --slider-thumb-border-color: rgb(0, 0, 0);
  --slider-thumb-radius: 36px;
  --slider-track-background: rgb(0, 0, 0);
  --status-bar-background: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --status-bar-border-color: rgb(0, 0, 0);
  --status-bar-text-color: hsl(
		258 calc(max(48%, 88%)) 10%
	);
  --suggestion-background: rgb(0, 0, 0);
  --tab-background-active: rgb(0, 0, 0);
  --tab-container-background: rgb(0, 0, 0);
  --tab-divider-color: rgb(0, 0, 0);
  --tab-outline-color: rgb(0, 0, 0);
  --tab-switcher-background: rgb(0, 0, 0);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(0, 0, 0), transparent);
  --tab-text-color: rgb(0, 0, 0);
  --tab-text-color-active: rgb(0, 0, 0);
  --tab-text-color-focused: rgb(0, 0, 0);
  --tab-text-color-focused-active: rgb(0, 0, 0);
  --tab-text-color-focused-active-current: rgb(0, 0, 0);
  --tab-text-color-focused-highlighted: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --table-add-button-border-color: rgb(0, 0, 0);
  --table-border-color: rgb(0, 0, 0);
  --table-drag-handle-background-active: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --table-drag-handle-color: rgb(0, 0, 0);
  --table-drag-handle-color-active: hsl(
		258 calc(max(48%, 88%)) 100%
	);
  --table-header-border-color: rgb(0, 0, 0);
  --table-header-color: rgb(0, 0, 0);
  --table-selection-border-color: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --tag-background: hsl(
		258 calc(max(48%, 88%)) 90%
	);
  --tag-background-hover: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --tag-color: hsl(
		258 calc(max(48%, 88%)) 10%
	);
  --tag-color-hover: hsl(
		258 calc(max(48%, 88%)) 100%
	);
  --tertiary: var(--text-accent-hover);
  --tertiary-hue: 318;
  --tertiary-saturation: 24%;
  --text-accent: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --text-accent-hover: hsl(
		258 calc(max(48%, 88%)) 40%
	);
  --text-faint: rgb(0, 0, 0);
  --text-highlight-bg: rgb(0, 0, 0);
  --text-muted: rgb(0, 0, 0);
  --text-normal: rgb(0, 0, 0);
  --text-on-accent: hsl(
		258 calc(max(48%, 88%)) 100%
	);
  --text-on-accent-inverted: hsl(
		258 calc(max(48%, 88%)) 100%
	);
  --text-selection: rgb(0, 0, 0);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(0, 0, 0);
  --titlebar-background-focused: rgb(0, 0, 0);
  --titlebar-border-color: rgb(0, 0, 0);
  --titlebar-text-color: rgb(0, 0, 0);
  --titlebar-text-color-focused: rgb(0, 0, 0);
  --vault-name-color: rgb(0, 0, 0);
  --vault-profile-color: rgb(0, 0, 0);
  --vault-profile-color-hover: rgb(0, 0, 0);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(234, 234, 235);
  color: rgb(25, 24, 27);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(25, 24, 27);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(234, 234, 235);
  color: rgb(25, 24, 27);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(202, 200, 208);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(234, 234, 235);
  border-left-color: rgb(202, 200, 208);
  color: rgb(25, 24, 27);
}

body div#quartz-root {
  color: rgb(25, 24, 27);
}`,
    typography: `body .page article p > b, b {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body .page article p > em, em {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body .page article p > i, i {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body .page article p > strong, strong {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body .text-highlight {
  background-color: rgb(236, 223, 232);
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body del {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: line-through rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body p {
  color: rgb(123, 117, 138);
  outline: rgb(123, 117, 138) none 0px;
  text-decoration: rgb(123, 117, 138);
  text-decoration-color: rgb(123, 117, 138);
}`,
    links: `body a.external, footer a {
  color: rgb(66, 12, 192);
  outline: rgb(66, 12, 192) none 0px;
  text-decoration: underline rgb(66, 12, 192);
  text-decoration-color: rgb(66, 12, 192);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(66, 12, 192);
  outline: rgb(66, 12, 192) none 0px;
  text-decoration: underline rgb(66, 12, 192);
  text-decoration-color: rgb(66, 12, 192);
}

body a.internal.broken {
  color: rgb(66, 12, 192);
  outline: rgb(66, 12, 192) none 0px;
}`,
    lists: `body dd {
  color: rgb(25, 24, 27);
}

body dt {
  color: rgb(25, 24, 27);
}

body ol > li {
  color: rgb(25, 24, 27);
}

body ol.overflow {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

body ul > li {
  color: rgb(25, 24, 27);
}

body ul.overflow {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(202, 200, 208);
  text-decoration: rgb(202, 200, 208);
}

body blockquote {
  background-color: rgb(234, 234, 235);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

body table {
  color: rgb(25, 24, 27);
}

body td {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(25, 24, 27);
}

body th {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(25, 24, 27);
}`,
    code: `body code {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(25, 24, 27);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
}

body pre:has(> code) {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
}`,
    images: `body audio {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

body figcaption {
  color: rgb(25, 24, 27);
}

body figure {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

body img {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

body video {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    embeds: `body .file-embed {
  background-color: rgb(245, 244, 245);
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
}

body .footnotes {
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

body .transclude {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(66, 12, 192);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

body .transclude-inner {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(66, 12, 192);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(123, 117, 138);
  text-decoration: line-through rgb(123, 117, 138);
  text-decoration-color: rgb(123, 117, 138);
}

body input[type=checkbox] {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
}

body li.task-list-item[data-task='!'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='*'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='-'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='/'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='>'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='?'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='I'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='S'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='b'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='c'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='d'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='f'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='i'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='k'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='l'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='p'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='u'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body li.task-list-item[data-task='w'] {
  color: rgb(25, 24, 27);
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(25, 24, 27);
}

body .search > .search-container > .search-space > * {
  color: rgb(25, 24, 27);
  outline: rgb(25, 24, 27) none 0px;
  text-decoration: rgb(25, 24, 27);
  text-decoration-color: rgb(25, 24, 27);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(25, 24, 27);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(25, 24, 27);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(239, 239, 240);
  color: rgb(25, 24, 27);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(234, 234, 235);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(239, 239, 240);
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(239, 239, 240);
  color: rgb(25, 24, 27);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(221, 207, 252);
}

body a.internal.tag-link::before {
  color: rgb(17, 3, 48);
}

body h1 {
  color: rgb(25, 24, 27);
}

body h2 {
  color: rgb(25, 24, 27);
}

body h2.page-title, h2.page-title a {
  color: rgb(25, 24, 27);
}

body h3 {
  color: rgb(25, 24, 27);
}

body h4 {
  color: rgb(25, 24, 27);
}

body h5 {
  color: rgb(25, 24, 27);
}

body h6 {
  color: rgb(25, 24, 27);
}

body hr {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(123, 117, 138);
  text-decoration: rgb(123, 117, 138);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(123, 117, 138);
  text-decoration: rgb(123, 117, 138);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(123, 117, 138);
  text-decoration: rgb(123, 117, 138);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(239, 239, 240);
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
  color: rgb(123, 117, 138);
}`,
    footer: `body footer {
  background-color: rgb(221, 207, 252);
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(17, 3, 48);
}

body footer ul li a {
  color: rgb(17, 3, 48);
  text-decoration: rgb(17, 3, 48);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(25, 24, 27);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(123, 117, 138);
  text-decoration: rgb(123, 117, 138);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(123, 117, 138);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

body li.section-li > .section .meta {
  color: rgb(123, 117, 138);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(123, 117, 138);
  text-decoration: rgb(123, 117, 138);
}

body ul.section-ul {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
  color: rgb(123, 117, 138);
}

body .darkmode svg {
  color: rgb(123, 117, 138);
  stroke: rgb(123, 117, 138);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
  color: rgb(123, 117, 138);
}

body .breadcrumb-element p {
  color: rgb(202, 200, 208);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

body .metadata {
  border-bottom-color: rgb(202, 200, 208);
  border-left-color: rgb(202, 200, 208);
  border-right-color: rgb(202, 200, 208);
  border-top-color: rgb(202, 200, 208);
  color: rgb(123, 117, 138);
}

body .metadata-properties {
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
  color: rgb(123, 117, 138);
}

body .navigation-progress {
  background-color: rgb(221, 207, 252);
}

body .page-header h2.page-title {
  color: rgb(25, 24, 27);
}

body abbr {
  color: rgb(25, 24, 27);
  text-decoration: underline dotted rgb(25, 24, 27);
}

body details {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

body input[type=text] {
  border-bottom-color: rgb(123, 117, 138);
  border-left-color: rgb(123, 117, 138);
  border-right-color: rgb(123, 117, 138);
  border-top-color: rgb(123, 117, 138);
  color: rgb(123, 117, 138);
}

body kbd {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
  color: rgb(25, 24, 27);
}

body progress {
  border-bottom-color: rgb(25, 24, 27);
  border-left-color: rgb(25, 24, 27);
  border-right-color: rgb(25, 24, 27);
  border-top-color: rgb(25, 24, 27);
}

body sub {
  color: rgb(25, 24, 27);
}

body summary {
  color: rgb(25, 24, 27);
}

body sup {
  color: rgb(25, 24, 27);
}`,
  },
};
