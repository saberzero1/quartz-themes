import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pure", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --collapse-icon-color: #b3b3b3 !important;
  --collapse-icon-color-collapsed: #b3b3b3 !important;
  --list-bullet-size: 4px !important;
  --list-marker-color: #b3b3b3 !important;
  --list-marker-color-hover: #666666 !important;
  --nav-collapse-icon-color: #b3b3b3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(172, 232, 255, 0.39);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    tables: `html[saved-theme="dark"] body table {
  margin-left: 218.391px;
  margin-right: 218.391px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}`,
  },
  light: {
    base: `:root:root {
  --collapse-icon-color: #5c5c5c !important;
  --collapse-icon-color-collapsed: #5c5c5c !important;
  --list-bullet-size: 4px !important;
  --list-marker-color: #5c5c5c !important;
  --list-marker-color-hover: #ababab !important;
  --nav-collapse-icon-color: #5c5c5c !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgba(172, 232, 255, 0.39);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    tables: `html[saved-theme="light"] body table {
  margin-left: 218.391px;
  margin-right: 218.391px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}`,
  },
};
