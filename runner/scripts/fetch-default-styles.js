function getDefaultStyles() {
  const defaultStylesByTagName = {};
  const rootElement = document;

  const noStyleTags = {
    BASE: true,
    HEAD: true,
    //HTML: true,
    LINE: true,
    META: true,
    NOFRAME: true,
    NOSCRIPT: true,
    PARAM: true,
    PATH: true,
    POLYLINE: true,
    RECT: true,
    SCRIPT: true,
    STYLE: true,
    TITLE: true,
  };

  // This list determines which css default values lookup tables are precomputed at load time
  // Lookup tables for other tag names will be automatically built at runtime if needed
  const tagNames = [
    "A",
    "ABBR",
    "ADDRESS",
    "AREA",
    "ARTICLE",
    "ASIDE",
    "AUDIO",
    "B",
    "BASE",
    "BDI",
    "BDO",
    "BLOCKQUOTE",
    "BODY",
    "BR",
    "BUTTON",
    "CANVAS",
    "CAPTION",
    "CENTER",
    "CITE",
    "CODE",
    "COL",
    "COLGROUP",
    "COMMAND",
    "DATALIST",
    "DD",
    "DEL",
    "DETAILS",
    "DFN",
    "DIV",
    "DL",
    "DT",
    "EM",
    "EMBED",
    "FIELDSET",
    "FIGCAPTION",
    "FIGURE",
    "FONT",
    "FOOTER",
    "FORM",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "HEAD",
    "HEADER",
    "HGROUP",
    "HR",
    "HTML",
    "I",
    "IFRAME",
    "IMG",
    "INPUT",
    "INS",
    "KBD",
    "KEYGEN",
    "LABEL",
    "LEGEND",
    "LI",
    "LINK",
    "MAP",
    "MARK",
    "MATH",
    "MENU",
    "META",
    "METER",
    "NAV",
    "NOBR",
    "NOSCRIPT",
    "OBJECT",
    "OL",
    "OPTION",
    "OPTGROUP",
    "OUTPUT",
    "P",
    "PARAM",
    "PRE",
    "PROGRESS",
    "Q",
    "RP",
    "RT",
    "RUBY",
    "S",
    "SAMP",
    "SCRIPT",
    "SECTION",
    "SELECT",
    "SMALL",
    "SOURCE",
    "SPAN",
    "STRONG",
    "STYLE",
    "SUB",
    "SUMMARY",
    "SUP",
    "SVG",
    "TABLE",
    "TBODY",
    "TD",
    "TEXTAREA",
    "TFOOT",
    "TH",
    "THEAD",
    "TIME",
    "TITLE",
    "TR",
    "TRACK",
    "U",
    "UL",
    "VAR",
    "VIDEO",
    "WBR",
  ];

  // Precompute the lookup tables.
  for (let i = 0; i < tagNames.length; i++) {
    if (!noStyleTags[tagNames[i]]) {
      defaultStylesByTagName[tagNames[i]] = computeDefaultStyleByTagName(
        tagNames[i],
      );
    }
  }

  function computeDefaultStyleByTagName(tagName) {
    tagName = tagName.toUpperCase();
    let defaultStyle = {};
    let element = rootElement.body.appendChild(
      rootElement.createElement(tagName),
    );
    //let computedStyle = getComputedStyle(element);
    let computedStyle = element.computedStyleMap();
    /*
    for (let i = 0; i < computedStyle.length; i++) {
      defaultStyle[computedStyle[i]] = computedStyle[computedStyle[i]];
    }
    */
    for (let [key, value] of computedStyle) {
      defaultStyle[key] = value.toString().trim();
    }
    rootElement.body.removeChild(element);
    return defaultStyle;
  }

  function getDefaultStyleByTagName(tagName) {
    tagName = tagName.toUpperCase();
    if (!defaultStylesByTagName[tagName]) {
      defaultStylesByTagName[tagName] = computeDefaultStyleByTagName(tagName);
    }
    return defaultStylesByTagName[tagName];
  }

  let result = {};

  tagNames.forEach((tagName) => {
    result[tagName] = getDefaultStyleByTagName(tagName);
  });

  return result;
}
