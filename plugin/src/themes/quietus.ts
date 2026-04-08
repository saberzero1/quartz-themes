import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "quietus",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color: #8a5cf5 !important;
  --highlight: color-mix(
		in srgb,
		#8a5cf5 45%,
		transparent
	) !important;
  --link-color: #dadada !important;
  --link-color-hover: #dadada !important;
  --link-external-color: #dadada !important;
  --link-external-color-hover: #dadada !important;
  --link-unresolved-color: #8a5cf5 !important;
  --link-unresolved-filter: brightness(120%) !important;
  --link-unresolved-opacity: 1 !important;
  --quietus-checkbox-checked-border-color: #b3b3b3 !important;
  --quietus-checkbox-checked-hover-border-color: #dadada !important;
  --quietus-checkbox-checked-svg-bg-color: #dadada !important;
  --quietus-inline-code-background: color-mix(
		in srgb,
		#8a5cf5 45%,
		transparent
	) !important;
  --tertiary: #dadada !important;
  --text-accent-hover: #dadada !important;
  --text-highlight-bg: color-mix(
		in srgb,
		#8a5cf5 45%,
		transparent
	) !important;
  --text-selection: color-mix(in srgb, #dadada 10%, transparent) !important;
  --textHighlight: color-mix(
		in srgb,
		#8a5cf5 45%,
		transparent
	) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.541176 0.360784 0.960784 / 0.45);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(179, 179, 179);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(138, 92, 245);
  filter: brightness(1.2);
  outline: rgb(138, 92, 245) none 0px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: #8a5cf5 !important;
  --highlight: color-mix(
		in srgb,
		#8a5cf5 25%,
		transparent
	) !important;
  --link-unresolved-color: #8a5cf5 !important;
  --link-unresolved-opacity: 1 !important;
  --quietus-checkbox-checked-border-color: #5c5c5c !important;
  --quietus-checkbox-checked-hover-border-color: hsl(255, 89.76%, 75.9%) !important;
  --quietus-checkbox-checked-svg-bg-color: #222222 !important;
  --quietus-inline-code-background: color-mix(
		in srgb,
		#8a5cf5 25%,
		transparent
	) !important;
  --quietus-text-strong-color: #1a1a1a !important;
  --text-highlight-bg: color-mix(
		in srgb,
		#8a5cf5 25%,
		transparent
	) !important;
  --textHighlight: color-mix(
		in srgb,
		#8a5cf5 25%,
		transparent
	) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 0.541176 0.360784 0.960784 / 0.25);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(92, 92, 92);
}`,
  },
};
