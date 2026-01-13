const nonThemePages = ["/", "/index"];

const darkOnlyThemes = [
  "80s-neon",
  "absolutegruv",
  "aged-whisky",
  "amoled-serenity",
  "apatheia",
  "arcane",
  "atomus",
  "aura-dark",
  "aurora",
  "avatar",
  "ayu-mirage",
  "base2tone",
  "behave-dark",
  "black",
  "blackbird",
  "blossom",
  "bossidian",
  "brutalism",
  "celestial-night",
  "charcoal",
  "christmas",
  "cobalt-peacock",
  "cocoa",
  "comfort-color-dark",
  "comfort-dark",
  "comfort-smooth",
  "consolas",
  "covert",
  "creature",
  "cybertron",
  "cybertron-shifted",
  "dark-castle",
  "dark-graphite",
  "dark-moss",
  "darkyan",
  "deep-submerge",
  "deeper-work",
  "dekurai",
  "discordian",
  "dracula-for-obsidian",
  "dracula-gemini",
  "dracula-lyt",
  "dracula-official",
  "dracula-plus",
  "dracula-slim",
  "dust",
  "eldritch",
  "evangelion",
  "everblush",
  "evergreen-shadow",
  "evilred",
  "faded",
  "firefly",
  "flatcap",
  "focus",
  "gdct-dark",
  "githubdhc",
  "glass-robo",
  "green-nightmare",
  "hackthebox",
  "halcyon",
  "hipstersmoothie",
  "hojicha",
  "hulk",
  "hydra-pressure",
  "iceberg",
  "ion",
  "its-theme.its-dark",
  "kurokula",
  "lemons-theme",
  "lorens",
  "lyt-mode",
  "mammoth",
  "material-ocean",
  "matrix",
  "micro-mike",
  "midnight",
  "midnight-fjord",
  "minimal-dark-coder",
  "minimal-red",
  "minimal-resources",
  "mono-black-monochrome-charcoal",
  "monokai-ristretto",
  "muted-blue",
  "nebula",
  "neon-synthwave",
  "nier",
  "nightingale",
  "nobb",
  "noctilux",
  "noctis",
  "nostromo",
  "novadust",
  "obsidianite",
  "obsidian_vibrant",
  "old-world",
  "oldsidian-purple",
  "oledblack",
  "omega",
  "oscura",
  "overcast",
  "panic-mode",
  "pisum",
  "playground",
  "poimandres",
  "protocolblue",
  "prussian-blue",
  "purple-aurora",
  "purple-owl",
  "red-shadow",
  "redshift-oled-blue-light-filter",
  "rezin",
  "rift",
  "rmaki",
  "rose-pine-moon",
  "rose-red",
  "sakurajima",
  "sanguine",
  "sea-glass",
  "seamless-view",
  "simple-color",
  "sodalite",
  "solitude",
  "space",
  "spectrum-blue",
  "spectrumplus",
  "strict",
  "synthwave",
  "synthwave-84",
  "terminal",
  "theme-that-shall-not-be-named",
  "tokyo-night-simple",
  "tokyo-night-storm",
  "tomorrow",
  "tomorrow-night-bright",
  "trace-labs",
  "transient",
  "true-black",
  "vanilla-amoled",
  "vanilla-amoled-color",
  "velvet-moon",
  "venom",
  "vibrant",
  "violet-evening",
  "wilcoxone",
  "wombat",
  "zenburn",
];

const lightOnlyThemes = [
  "abate",
  "agate",
  "al-dente",
  "comfort",
  "dashboard",
  "dayspring",
  "gdct",
  "handwriting-kalam",
  "ink",
  "lavender-mist",
  "mint-breeze",
  "neuborder",
  "nordic",
  "northern-sky",
  "nota-limonada-light",
  "obsidian-boom",
  "parfait",
  "perso",
  "sparkling-day",
  "w95",
  "winter-spices",
  "wiselight",
];

function hasTheme() {
  return !nonThemePages.includes(
    window.location.pathname.startsWith("/")
      ? window.location.pathname.slice(1).toLowerCase()
      : window.location.pathname.toLowerCase(),
  );
}

function getStylesheetForCurrentPage() {
  const pathname = window.location.pathname.toLowerCase();
  const theme = pathname.startsWith("/")
    ? pathname.slice(1).toLowerCase()
    : pathname.toLowerCase();
  ensureModeMatchesTheme(theme);
  return `https://cdn.jsdelivr.net/gh/saberzero1/quartz-themes@refs/heads/develop/themes/${theme}/publish.css`;
}

function injectStyleElement(css) {
  const styleTag = document.getElementById("dynamic-theme-style");
  let style = null;
  if (!styleTag) {
    style = document.createElement("style");
    style.id = "dynamic-theme-style";
    style.textContent = css;
    document.head.appendChild(style);
  } else {
    style = styleTag;
    style.textContent = css;
  }
}

function ensureModeMatchesTheme(theme) {
  const toggleElement = document.querySelector(
    "div.site-body-left-column-site-theme-toggle",
  );
  const bodyElement = document.querySelector("body");

  if (!toggleElement || !bodyElement) return;

  const isDark = toggleElement.classList.contains("is-dark");
  const isDarkOnly = darkOnlyThemes.includes(theme);
  const isLightOnly = lightOnlyThemes.includes(theme);
  const isSingleMode = isDarkOnly || isLightOnly;

  if (isSingleMode) {
    toggleElement.style.pointerEvents = "none";
    toggleElement.style.opacity = "0.5";
  } else {
    toggleElement.style.pointerEvents = "";
    toggleElement.style.opacity = "";
  }

  if (isDarkOnly && !isDark) {
    if (window.app && window.app.setTheme) {
      window.app.setTheme("dark");
    }
    bodyElement.classList.remove("theme-light");
    bodyElement.classList.add("theme-dark");
    toggleElement.classList.add("is-dark");
  } else if (isLightOnly && isDark) {
    if (window.app && window.app.setTheme) {
      window.app.setTheme("light");
    }
    bodyElement.classList.remove("theme-dark");
    bodyElement.classList.add("theme-light");
    toggleElement.classList.remove("is-dark");
  }
}

async function fetchStylesheet(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((css) => {
      injectStyleElement(css);
    })
    .catch((error) => {
      console.error("Failed to load CSS:", error);
    });
}

async function applyThemeStylesheet() {
  if (hasTheme()) {
    const stylesheetUrl = getStylesheetForCurrentPage();
    await fetchStylesheet(stylesheetUrl);
  } else {
    injectStyleElement("");
  }
  extendFooter();
}

function extendFooter() {
  const footer = document.querySelector("div.site-footer");
  footer.innerHTML = `<a href="https://publish.obsidian.md" target="_blank">Powered by Obsidian Publish</a> and <a href="https://github.com/saberzero1/quartz-themes" target="_blank">Quartz Themes</a>.`;
}

(function (history) {
  const pushState = history.pushState;
  const replaceState = history.replaceState;

  function onUrlChange() {
    console.log("URL changed to:", location.href);
    applyThemeStylesheet();
  }

  history.pushState = function (state) {
    const result = pushState.apply(history, arguments);
    onUrlChange();
    return result;
  };

  history.replaceState = function (state) {
    const result = replaceState.apply(history, arguments);
    onUrlChange();
    return result;
  };

  window.addEventListener("popstate", onUrlChange);
})(window.history);

applyThemeStylesheet();
