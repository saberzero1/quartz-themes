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
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(138, 92, 245);
  filter: brightness(1.2);
  outline: rgb(138, 92, 245) none 0px;
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(218, 218, 218);
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
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10'><path fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/></svg>");
  background-color: rgb(34, 34, 34);
}`,
  },
};
