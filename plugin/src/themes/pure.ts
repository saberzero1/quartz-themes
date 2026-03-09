import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pure", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --collapse-icon-color: #b3b3b3;
  --collapse-icon-color-collapsed: #b3b3b3;
  --list-bullet-size: 4px;
  --list-marker-color: #b3b3b3;
  --list-marker-color-hover: #666666;
  --nav-collapse-icon-color: #b3b3b3;
  --quartz-icon-color: currentColor;
}`,
    typography: `body .text-highlight {
  background-color: rgba(172, 232, 255, 0.39);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    tables: `body table {
  margin-left: 218.391px;
  margin-right: 218.391px;
}`,
    checkboxes: `body input[type=checkbox] {
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
  --collapse-icon-color: #5c5c5c;
  --collapse-icon-color-collapsed: #5c5c5c;
  --list-bullet-size: 4px;
  --list-marker-color: #5c5c5c;
  --list-marker-color-hover: #ababab;
  --nav-collapse-icon-color: #5c5c5c;
  --quartz-icon-color: currentColor;
}`,
    typography: `body .text-highlight {
  background-color: rgba(172, 232, 255, 0.39);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    tables: `body table {
  margin-left: 218.391px;
  margin-right: 218.391px;
}`,
    checkboxes: `body input[type=checkbox] {
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
