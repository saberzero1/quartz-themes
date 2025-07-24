/**
 * A Set containing all CSS named colors for efficient lookup.
 */
const cssNamedColors = new Set([
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkgrey",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "greenyellow",
  "grey",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightgrey",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "transparent",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen",
]);

/**
 * A regular expression to find and capture CSS colors.
 * It captures:
 * 1. Hex codes: #rgb, #rgba, #rrggbb, #rrggbbaa
 * 2. Functional colors: rgb(), rgba(), hsl(), hsla()
 * 3. Named colors (case-insensitive)
 */
const colorRegex = new RegExp(
  `(#(?:[0-9a-f]{3,4}){1,2})|` +
    `(rgba?|hsla?)\\([^)]+\\)|` +
    `\\b(${Array.from(cssNamedColors).join("|")})\\b`,
  "gi",
);

/**
 * Combines light and dark CSS values using the light-dark() function for colors.
 *
 * @param lightValue The CSS value for the light color scheme.
 * @param darkValue The CSS value for the dark color scheme.
 * @returns A combined CSS value string, or the original lightValue if combining is not possible.
 */
export default function combineColors(lightValue, darkValue) {
  // 1. Tokenize strings by splitting them by our color regex.
  // The capturing groups in the regex ensure that the delimiters (the colors)
  // are included in the resulting array. We filter out empty strings.
  const lightTokens = lightValue.split(colorRegex).filter(Boolean);
  const darkTokens = darkValue.split(colorRegex).filter(Boolean);

  // 2. If the number of tokens is different, the structure of the values
  // is not the same, so we can't combine them.
  if (lightTokens.length !== darkTokens.length) {
    /*
    console.warn(
      "CSS values have different structures and cannot be combined.",
      { lightValue, darkValue },
    );
    */
    return lightValue; // Fallback to the light value
  }

  const resultTokens = [];

  // 3. Iterate over the tokens and compare them.
  for (let i = 0; i < lightTokens.length; i++) {
    const lightToken = lightTokens[i];
    const darkToken = darkTokens[i];

    // Create a fresh regex to test the token.
    const isColorRegex = new RegExp(`^${colorRegex.source}$`, "i");
    const isLightTokenColor = isColorRegex.test(lightToken);

    if (isLightTokenColor) {
      const isDarkTokenColor = isColorRegex.test(darkToken);
      // If one is a color but the other isn't at the same position,
      // the structures are different.
      if (!isDarkTokenColor) {
        /*
        console.warn(
          "Mismatch in token types (color vs. non-color). Cannot combine.",
          { lightToken, darkToken },
        );
        */
        return lightValue;
      }

      // If colors are identical, just use the color itself.
      if (lightToken.toLowerCase() === darkToken.toLowerCase()) {
        resultTokens.push(lightToken);
      } else {
        // Otherwise, combine them with light-dark().
        resultTokens.push(`light-dark(${lightToken}, ${darkToken})`);
      }
    } else {
      // If the non-color parts are different, we can't combine.
      if (lightToken !== darkToken) {
        /*
        console.warn("Non-color parts of the values differ. Cannot combine.", {
          lightToken,
          darkToken,
        });
        */
        return lightValue;
      }
      // Otherwise, just add the static part to our result.
      resultTokens.push(lightToken);
    }
  }

  // 4. Join the tokens back into a single string.
  return resultTokens.join("");
}
