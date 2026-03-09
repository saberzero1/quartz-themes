import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "neumorphism",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background: light-dark(#ffffff, #1c1c1c);
  --border-radius: 10px;
  --box-shadow: 0.5rem 0.5rem 2rem light-dark(#949494, #0a0a0a),
    -0.5rem -0.5rem 2rem light-dark(#ffffff, #111111);
  --dark-background: #1c1c1c;
  --dark-shadow-first: #0a0a0a;
  --dark-shadow-second: #111111;
  --floating-background: light-dark(#ffffff, #1c1c1c);
  --gap: 1rem;
  --header-padding: 5px;
  --light-background: #ffffff;
  --light-shadow-first: #949494;
  --light-shadow-second: #ffffff;
  --scroll-button-offset: 50px;
  --titlebar-background: #171717;
  --titlebar-border-color: transparent;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 28, 28);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 28, 28);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 28, 28);
}`,
    lists: `body ol.overflow {
  background-color: rgb(28, 28, 28);
}

body ul.overflow {
  background-color: rgb(28, 28, 28);
}`,
    images: `body img {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    footer: `body footer {
  background-color: rgb(28, 28, 28);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    misc: `body .navigation-progress {
  background-color: rgb(28, 28, 28);
}`,
  },
  light: {
    base: `:root:root {
  --background: light-dark(#ffffff, #1c1c1c);
  --border-radius: 10px;
  --box-shadow: 0.5rem 0.5rem 2rem light-dark(#949494, #0a0a0a),
    -0.5rem -0.5rem 2rem light-dark(#ffffff, #111111);
  --dark-background: #1c1c1c;
  --dark-shadow-first: #0a0a0a;
  --dark-shadow-second: #111111;
  --floating-background: light-dark(#ffffff, #1c1c1c);
  --gap: 1rem;
  --header-padding: 5px;
  --light-background: #ffffff;
  --light-shadow-first: #949494;
  --light-shadow-second: #ffffff;
  --scroll-button-offset: 50px;
  --titlebar-background: #171717;
  --titlebar-border-color: transparent;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
}`,
    images: `body img {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    misc: `body .navigation-progress {
  background-color: rgb(255, 255, 255);
}`,
  },
};
