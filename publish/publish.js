const nonThemePages = ["/", "/index"];

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
  const isDark = document
    .querySelector("body")
    .classList.value.includes("theme-dark");
  const themeSupportsDark = themeListDark.includes(theme);
  const themeSupportsLight = themeListLight.includes(theme);

  if (isDark && !themeSupportsDark) {
    this.app.setTheme("light");
  } else if (!isDark && !themeSupportsLight) {
    this.app.setTheme("dark");
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

  window.addEventListener("popstate", onUrlChange); // Back/forward buttons
})(window.history);

applyThemeStylesheet();
