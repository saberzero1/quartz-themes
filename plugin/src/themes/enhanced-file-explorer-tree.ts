import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "enhanced-file-explorer-tree",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --bg-clr-opacity: 0.12 !important;
  --bg-color: light-dark(rgba(0, 0, 0, 0.12), rgba(255, 255, 255, 0.12)) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
  },
  light: {
    base: `:root:root {
  --bg-clr-opacity: 0.12 !important;
  --bg-color: light-dark(rgba(0, 0, 0, 0.12), rgba(255, 255, 255, 0.12)) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
  },
};
