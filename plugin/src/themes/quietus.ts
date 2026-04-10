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
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
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
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
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
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='black' fill-rule='evenodd' d='M10.28.22a.75.75 0 0 1 .073 1.058l-5.5 6.5a.75.75 0 0 1-1.13.02L1.22 5.28a.75.75 0 1 1 1.06-1.06L4.3 6.19l4.95-5.85A.75.75 0 0 1 10.28.22Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
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
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
  },
};
