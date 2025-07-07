import {
  getTheme,
  replaceInFile,
  isDarkTheme,
  isLightTheme,
  getExtras,
  getFonts,
  getFixes,
  getValueFromDictionary,
} from "../../util/util.mjs";

export default function replaceBefore(manifestCollection) {
  manifestCollection.forEach((manifest) => {
    const theme = getTheme(manifest);
    const mapping = [
      {
        file: `./themes/${theme}/README.md`,
        target: "%OBSIDIAN_THEME_NAME%",
        replacement: manifest.name,
      },
      {
        file: `./themes/${theme}/README.md`,
        target: "%OBSIDIAN_THEME_NAME_SANITIZED%",
        replacement: theme,
      },
      {
        file: `./themes/${theme}/README.md`,
        target: "%OBSIDIAN_THEME_AUTHOR%",
        replacement: getAuthorString(manifest),
      },
      {
        file: `./themes/${theme}/README.md`,
        target: "%OBSIDIAN_THEME_AUTHOR_DONATE_URL%",
        replacement: getFundingLinksString(manifest),
      },
      {
        file: `./themes/${theme}/_index.scss`,
        target: `//%%EXTRAS%%`,
        replacement: getExtrasString(manifest),
      },
      {
        file: `./themes/${theme}/_index.scss`,
        target: `//%%FIXES%%`,
        replacement: getFixesString(manifest),
      },
    ];

    mapping.forEach(({ file, target, replacement }) => {
      replaceInFile(file, target, replacement);
    });
  });
}

function getAuthorString(manifest) {
  const authorValue =
    getValueFromDictionary(manifest, "author") !== ""
      ? getValueFromDictionary(manifest, "author")
      : "No author provided";
  const authorUrlValue =
    getValueFromDictionary(manifest, "authorUrl") !== ""
      ? getValueFromDictionary(manifest, "authorUrl")
      : "";
  const authorString =
    authorUrlValue !== ""
      ? `<a href="${authorUrlValue}" target="_blank" rel="noopener noreferrer">${authorValue}</a>`
      : authorValue;

  return authorString;
}

function getFundingLinksString(manifest) {
  const { fundingUrl } = manifest;

  if (!fundingUrl) {
    return "";
  }

  if (typeof fundingUrl === "string") {
    return `- Support the author: <a href="${fundingUrl}" target="_blank" rel="noopener noreferrer">Donate</a>`;
  }

  if (typeof fundingUrl === "object") {
    return `- Support the author: ${Object.entries(fundingUrl)
      .sort(([key]) => key.toLowerCase())
      .map(
        ([key, value]) =>
          `<a href="${value}" target="_blank" rel="noopener noreferrer">${key}</a>`,
      )
      .join(" | ")}`;
  }

  return "";
}

function getExtrasString(manifest) {
  let extras = "";
  if (isDarkTheme(manifest.name)) {
    extras += `\n@use "dark";`;
  }
  if (isLightTheme(manifest.name)) {
    extras += `\n@use "light";`;
  }
  extras += `\n@use "extras";`;
  const themeExtras = getExtras(manifest.name);
  const fontExtras = getFonts(manifest.name);
  themeExtras.forEach((extra) => {
    extras += `\n@use "extras/${extra}.scss";`;
  });
  fontExtras.forEach((font) => {
    extras += `\n@use "extras/fonts/${font}.scss";`;
  });

  return extras;
}

function getFixesString(manifest) {
  let fixes = "";
  const themeFixes = getFixes(manifest.name);
  themeFixes.forEach((extra) => {
    fixes += `\n@use "extras/fix/${extra}.scss";`;
  });
}
