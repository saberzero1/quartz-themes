const nonThemePages = ["/", "/index"];

function hasNoThemeFetchClass() {
  const previewElement = document.querySelector(".markdown-preview-view");
  return previewElement?.classList.contains("no-theme-fetch") ?? false;
}

function hasTheme() {
  if (hasNoThemeFetchClass()) return false;
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
  ensureModeMatchesTheme();
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

let modeObserver = null;

function applyModeIfNeeded() {
  const toggleElement = document.querySelector(
    "div.site-body-left-column-site-theme-toggle",
  );
  const bodyElement = document.querySelector("body");
  const previewElement = document.querySelector(".markdown-preview-view");

  console.log("[QuartzThemes] applyModeIfNeeded called", {
    hasToggle: !!toggleElement,
    hasBody: !!bodyElement,
    hasPreview: !!previewElement,
  });

  if (!toggleElement || !bodyElement) return false;
  if (!previewElement) return false;

  const supportsLight = previewElement.classList.contains(
    "publish-theme-light",
  );
  const supportsDark = previewElement.classList.contains("publish-theme-dark");

  console.log("[QuartzThemes] Theme support detected", {
    supportsLight,
    supportsDark,
    previewClasses: previewElement.className,
  });

  if (!supportsLight && !supportsDark) return false;

  const isDarkOnly = supportsDark && !supportsLight;
  const isLightOnly = supportsLight && !supportsDark;
  const isSingleMode = isDarkOnly || isLightOnly;

  const isViewingDark = bodyElement.classList.contains("theme-dark");
  const isViewingLight = bodyElement.classList.contains("theme-light");

  if (isSingleMode) {
    toggleElement.style.pointerEvents = "none";
    toggleElement.style.opacity = "0.5";
  } else {
    toggleElement.style.pointerEvents = "";
    toggleElement.style.opacity = "";
  }

  const checkboxContainer = toggleElement.querySelector(".checkbox-container");

  if (isDarkOnly && isViewingLight) {
    console.log("[QuartzThemes] Switching to dark mode (theme is dark-only)");
    if (window.app && window.app.setTheme) {
      window.app.setTheme("dark");
    }
    bodyElement.classList.remove("theme-light");
    bodyElement.classList.add("theme-dark");
    toggleElement.classList.add("is-dark");
    if (checkboxContainer) checkboxContainer.classList.add("is-enabled");
  } else if (isLightOnly && isViewingDark) {
    console.log("[QuartzThemes] Switching to light mode (theme is light-only)");
    if (window.app && window.app.setTheme) {
      window.app.setTheme("light");
    }
    bodyElement.classList.remove("theme-dark");
    bodyElement.classList.add("theme-light");
    toggleElement.classList.remove("is-dark");
    if (checkboxContainer) checkboxContainer.classList.remove("is-enabled");
  } else {
    console.log("[QuartzThemes] No mode switch needed", {
      isDarkOnly,
      isLightOnly,
      isViewingDark,
      isViewingLight,
    });
  }

  return true;
}

function ensureModeMatchesTheme() {
  console.log("[QuartzThemes] ensureModeMatchesTheme called");

  if (applyModeIfNeeded()) {
    console.log("[QuartzThemes] Mode applied immediately");
    return;
  }

  if (modeObserver) {
    modeObserver.disconnect();
    console.log("[QuartzThemes] Previous observer disconnected");
  }

  let container = document.querySelector(".publish-renderer");
  if (!container) {
    container = document.body;
    console.log(
      "[QuartzThemes] .publish-renderer not found, observing document.body instead",
    );
  } else {
    console.log("[QuartzThemes] Observing .publish-renderer for changes");
  }

  modeObserver = new MutationObserver((mutations) => {
    console.log("[QuartzThemes] MutationObserver triggered", {
      mutationCount: mutations.length,
    });
    if (applyModeIfNeeded()) {
      console.log("[QuartzThemes] Mode applied via observer, disconnecting");
      modeObserver.disconnect();
      modeObserver = null;
    }
  });

  modeObserver.observe(container, {
    attributes: true,
    attributeFilter: ["class"],
    subtree: true,
    childList: true,
  });
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
