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
  --bases-table-border-color: #dadada;
  --bases-table-row-background-hover: #1e1e1e;
  --bold-color: #a68af9;
  --h4-color: #a68af9;
  --link-color: #5980f7;
  --link-color-hover: #8aa5f9;
  --link-external-color: #5980f7;
  --link-external-color-hover: #8aa5f9;
  --link-unresolved-color: #5980f7;
  --table-background: #1e1e1e;
  --table-border-color: #dadada;
  --table-column-alt-background: #1e1e1e;
  --table-header-background: #1e1e1e;
  --table-header-border-color: #dadada;
  --table-row-alt-background: #1e1e1e;
  --table-row-alt-background-hover: #1e1e1e;
  --table-row-background-hover: #1e1e1e;
  --quartz-icon-color: currentColor;
}`,
    typography: `body .page article p > b, b {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}

body .page article p > strong, strong {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}`,
    links: `body a.external, footer a {
  color: rgb(89, 128, 247);
  outline: rgb(89, 128, 247) none 0px;
  text-decoration: underline rgb(89, 128, 247);
  text-decoration-color: rgb(89, 128, 247);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 128, 247);
  outline: rgb(89, 128, 247) none 0px;
  text-decoration: underline rgb(89, 128, 247);
  text-decoration-color: rgb(89, 128, 247);
}

body a.internal.broken {
  color: rgb(89, 128, 247);
  outline: rgb(89, 128, 247) none 0px;
}`,
    tables: `body table {
  margin-left: 218.391px;
  margin-right: 218.391px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(30, 30, 30);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(30, 30, 30);
}

body td {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

body th {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

body tr {
  background-color: rgb(30, 30, 30);
}`,
    search: `body h4 {
  color: rgb(166, 138, 249);
}`,
  },
  light: {
    base: `:root:root {
  --background-secondary: #fafafa;
  --bases-table-border-color: #222222;
  --bases-table-row-background-hover: #ffffff;
  --bold-color: #8a5cf5;
  --h4-color: #8a5cf5;
  --lightgray: var(--background-secondary);
  --link-color: #2C54F2;
  --link-color-hover: #5C7BF5;
  --link-external-color: #2C54F2;
  --link-external-color-hover: #5C7BF5;
  --link-unresolved-color: #2C54F2;
  --menu-background: #fafafa;
  --ribbon-background: #fafafa;
  --status-bar-background: #fafafa;
  --tab-container-background: #fafafa;
  --tab-switcher-background: #fafafa;
  --tab-switcher-menubar-background: linear-gradient(to top, #fafafa, transparent);
  --table-background: #ffffff;
  --table-border-color: #222222;
  --table-column-alt-background: #ffffff;
  --table-header-background: #ffffff;
  --table-header-border-color: #222222;
  --table-row-alt-background: #ffffff;
  --table-row-alt-background-hover: #ffffff;
  --table-row-background-hover: #ffffff;
  --titlebar-background: #fafafa;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 250, 250);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(250, 250, 250);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(250, 250, 250);
}`,
    typography: `body .page article p > b, b {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body .page article p > strong, strong {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}`,
    links: `body a.external, footer a {
  color: rgb(44, 84, 242);
  outline: rgb(44, 84, 242) none 0px;
  text-decoration: underline rgb(44, 84, 242);
  text-decoration-color: rgb(44, 84, 242);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(44, 84, 242);
  outline: rgb(44, 84, 242) none 0px;
  text-decoration: underline rgb(44, 84, 242);
  text-decoration-color: rgb(44, 84, 242);
}

body a.internal.broken {
  color: rgb(44, 84, 242);
  outline: rgb(44, 84, 242) none 0px;
}`,
    tables: `body table {
  margin-left: 218.391px;
  margin-right: 218.391px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(255, 255, 255);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(255, 255, 255);
}

body td {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

body th {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

body tr {
  background-color: rgb(255, 255, 255);
}`,
    search: `body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 250, 250);
}

body h4 {
  color: rgb(138, 92, 245);
}`,
    footer: `body footer {
  background-color: rgb(250, 250, 250);
}`,
    misc: `body .navigation-progress {
  background-color: rgb(250, 250, 250);
}`,
  },
};
