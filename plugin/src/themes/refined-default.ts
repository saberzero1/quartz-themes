import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "refined-default",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --bases-table-border-color: #dadada !important;
  --bases-table-row-background-hover: #1e1e1e !important;
  --bold-color: #a68af9 !important;
  --h4-color: #a68af9 !important;
  --link-color: #5980f7 !important;
  --link-color-hover: #8aa5f9 !important;
  --link-external-color: #5980f7 !important;
  --link-external-color-hover: #8aa5f9 !important;
  --link-unresolved-color: #5980f7 !important;
  --table-background: #1e1e1e !important;
  --table-border-color: #dadada !important;
  --table-column-alt-background: #1e1e1e !important;
  --table-header-background: #1e1e1e !important;
  --table-header-border-color: #dadada !important;
  --table-row-alt-background: #1e1e1e !important;
  --table-row-alt-background-hover: #1e1e1e !important;
  --table-row-background-hover: #1e1e1e !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(89, 128, 247);
  outline: rgb(89, 128, 247) none 0px;
  text-decoration: underline rgb(89, 128, 247);
  text-decoration-color: rgb(89, 128, 247);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 128, 247);
  outline: rgb(89, 128, 247) none 0px;
  text-decoration: underline rgb(89, 128, 247);
  text-decoration-color: rgb(89, 128, 247);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(89, 128, 247);
  outline: rgb(89, 128, 247) none 0px;
}`,
    tables: `html[saved-theme="dark"] body table {
  margin-left: 218.391px;
  margin-right: 218.391px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(30, 30, 30);
}`,
    search: `html[saved-theme="dark"] body h4 {
  color: rgb(166, 138, 249);
}`,
  },
  light: {
    base: `:root:root {
  --background-secondary: #fafafa !important;
  --bases-table-border-color: #222222 !important;
  --bases-table-row-background-hover: #ffffff !important;
  --bold-color: #8a5cf5 !important;
  --h4-color: #8a5cf5 !important;
  --lightgray: #fafafa !important;
  --link-color: #2C54F2 !important;
  --link-color-hover: #5C7BF5 !important;
  --link-external-color: #2C54F2 !important;
  --link-external-color-hover: #5C7BF5 !important;
  --link-unresolved-color: #2C54F2 !important;
  --menu-background: #fafafa !important;
  --ribbon-background: #fafafa !important;
  --status-bar-background: #fafafa !important;
  --tab-container-background: #fafafa !important;
  --tab-switcher-background: #fafafa !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fafafa, transparent) !important;
  --table-background: #ffffff !important;
  --table-border-color: #222222 !important;
  --table-column-alt-background: #ffffff !important;
  --table-header-background: #ffffff !important;
  --table-header-border-color: #222222 !important;
  --table-row-alt-background: #ffffff !important;
  --table-row-alt-background-hover: #ffffff !important;
  --table-row-background-hover: #ffffff !important;
  --titlebar-background: #fafafa !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(250, 250, 250);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(44, 84, 242);
  outline: rgb(44, 84, 242) none 0px;
  text-decoration: underline rgb(44, 84, 242);
  text-decoration-color: rgb(44, 84, 242);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(44, 84, 242);
  outline: rgb(44, 84, 242) none 0px;
  text-decoration: underline rgb(44, 84, 242);
  text-decoration-color: rgb(44, 84, 242);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(44, 84, 242);
  outline: rgb(44, 84, 242) none 0px;
}`,
    tables: `html[saved-theme="light"] body table {
  margin-left: 218.391px;
  margin-right: 218.391px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body tr {
  background-color: rgb(255, 255, 255);
}`,
    search: `html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body h4 {
  color: rgb(138, 92, 245);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(250, 250, 250);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(250, 250, 250);
}`,
  },
};
