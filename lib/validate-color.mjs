// adapted from: https://github.com/dreamyguy/validate-color/blob/master/src/validate-color/index.js
// retrieved: November 3, 2025
/*
The MIT License (MIT)

Copyright (c) 2018 Wallace Sidhrée

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Good article on HTML Colors:
// https://dev.to/alvaromontoro/the-ultimate-guide-to-css-colors-2020-edition-1bh1#hsl

const debugRegex = false;

// Check if parameter is defined and a string
const isString = (color) => color && typeof color === "string";
// All existing HTML color names
const htmlColorNames = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenrod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "Goldenrod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenrodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquamarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenrod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];
// These 3 values are valid, usable color names, which are special in their own way
const htmlColorNamesSpecial = ["currentColor", "inherit", "transparent"];

// * Validate HTML color name (red, yellow, etc)
export const validateHTMLColorName = (color) => {
  let status = false;
  if (isString(color)) {
    htmlColorNames.map((c) => {
      if (color.toLowerCase() === c.toLowerCase()) {
        status = true;
      }
      return null;
    });
  }
  return status;
};

// * Validate HTML color special name (currentColor, inherit, etc)
export const validateHTMLColorSpecialName = (color) => {
  let status = false;
  if (isString(color)) {
    htmlColorNamesSpecial.map((c) => {
      if (color.toLowerCase() === c.toLowerCase()) {
        status = true;
      }
      return null;
    });
  }
  return status;
};

// * Validate HTML color 'hex'
export const validateHTMLColorHex = (color) => {
  if (isString(color)) {
    const regex = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i;
    debugRegex && console.log("regex (hex)", regex);
    return color && regex.test(color);
  }
  return false;
};

const spaceNoneOrMore = `([\\s]{0,5})`;
const spaceOneOrMore = `([\\s]{1,5})`;
const digitNoneOrMore = `([\\d]{0,5})`;
const digitOneOrMore = `([\\d]{1,5})`;
const optionalCommaOrRequiredSpace = `((${spaceNoneOrMore},${spaceNoneOrMore})|(${spaceOneOrMore}))`;
const optionalDecimals = `((\\.${digitOneOrMore})?)`;
const anyNumber = `(${digitNoneOrMore}${optionalDecimals})`;
const anyNumberWithinHundred = `(([0-9]|[1-9][0-9])?${optionalDecimals}|100)`;
const anyNumberWithinThreeHundredSixty = `(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])${optionalDecimals}|360)`;
const anyPercentage = `(${anyNumber}%)`;
const anyPercentageWithinHundred = `(${anyNumberWithinHundred}(%)?)`;
const hundredPercent = `(([0-9]|[1-9][0-9]|100)%)`;
const alphaPercentage = `(((${hundredPercent}))|(0?${optionalDecimals})|1))?`;
const alphaPercentageRequired = `(${hundredPercent}|(0?${optionalDecimals})|1)`;
const endingWithAlphaPercentage = `${spaceNoneOrMore}\\)?)(${spaceNoneOrMore}(\\/?)${spaceOneOrMore}${alphaPercentage}${spaceNoneOrMore}\\)`;
const degRegex = `(-?${anyNumberWithinThreeHundredSixty}(deg)?)`;

// * Validate HTML color 'rgb'
// -- legacy notation
// color: rgb(255, 255, 255);
// color: rgba(255, 255, 255, 1);
// -- new notation
// color: rgb(255 255 255);
// color: rgb(255 255 255 / 1);
// Note that 'rgba()' is now merged into 'rgb()'
export const validateHTMLColorRgb = (color) => {
  if (isString(color)) {
    const letter = `${spaceNoneOrMore}${digitOneOrMore}%?${spaceNoneOrMore},?`;
    const gap = `((${spaceNoneOrMore},?${spaceNoneOrMore})|(${spaceOneOrMore}))`;
    const R = `${letter}${gap}`;
    const G = `${letter}${gap}`;
    const B = `${letter}${gap}`;
    const A = `(\\/?${spaceNoneOrMore}(0?\\.?${digitOneOrMore}%?${spaceNoneOrMore})?|1|0)`;
    const regexLogic = `^(rgb)a?\\(${R}${G}${B}(${A})?\\)$`;
    const regex = new RegExp(regexLogic);
    debugRegex && console.log("regex (rgb)", regex);
    return color && regex.test(color);
  }
  return false;
};

// * Validate HTML color 'hsl'
// -- These units are valid for the first parameter
// 'deg': degrees | full circle = 360
// 'grad': gradians | full circle = 400
// 'radians': radians | full circle = 2π (approx. 6.28)
// 'turn': turns | full circle = 1
export const validateHTMLColorHsl = (color) => {
  if (isString(color)) {
    // Validate each possible unit value separately, as their values differ
    const gradRegex = `(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-9][0-9]|400)grad)`;
    const radRegex = `((([0-5])?\\.${digitOneOrMore}|6\\.([0-9]|1[0-9]|2[0-8])|[0-6])rad)`;
    const turnRegex = `((0?${optionalDecimals}|1)turn)`;
    const regexLogic = `^(hsl)a?\\((${spaceNoneOrMore}(${degRegex}|${gradRegex}|${radRegex}|${turnRegex})${optionalCommaOrRequiredSpace})(${spaceNoneOrMore}(0|${hundredPercent})${optionalCommaOrRequiredSpace})(${spaceNoneOrMore}(0|${hundredPercent})${spaceNoneOrMore}\\)?)(${spaceNoneOrMore}(\\/?|,?)${spaceNoneOrMore}(((${hundredPercent}))|(0?${optionalDecimals})|1))?\\)$`;
    const regex = new RegExp(regexLogic);
    debugRegex && console.log("regex (hsl)", regex);
    return color && regex.test(color);
  }
  return false;
};

// * Validate HTML color 'hwb'
// -- 'hwb' accepts 'deg' as unit in its 1st property, which stands for 'hue'
// 'deg': degrees | full circle = 360
export const validateHTMLColorHwb = (color) => {
  if (isString(color)) {
    const regexLogic = `^(hwb\\(${spaceNoneOrMore}${degRegex}${spaceOneOrMore})((0|${hundredPercent})${spaceOneOrMore})((0|${hundredPercent})${endingWithAlphaPercentage}$`;
    const regex = new RegExp(regexLogic);
    debugRegex && console.log("regex (hwb)", regex);
    return color && regex.test(color);
  }
  return false;
};

// * Validate HTML color 'lab'
// -- 'lab' 2nd & 3rd parameters are any number between -160 & 160
export const validateHTMLColorLab = (color) => {
  if (isString(color)) {
    const labParam = `(-?(([0-9]|[1-9][0-9]|1[0-5][0-9])${optionalDecimals}?|160))`;
    const regexLogic = `^(lab\\(${spaceNoneOrMore}${anyPercentage}${spaceOneOrMore}${labParam}${spaceOneOrMore}${labParam}${endingWithAlphaPercentage}$`;
    const regex = new RegExp(regexLogic);
    debugRegex && console.log("regex (lab)", regex);
    return color && regex.test(color);
  }
  return false;
};

// * Validate HTML color 'lwc'
// -- See https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch
// -- See https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/
// -- lch(L C H [/ A])
// <lch()> =
//   lch(
//     [ <percentage> | <number> | none ]
//     [ <percentage> | <number> | none ]
//     [ <hue> | none ]
//     [ / [ <alpha-value> | none ] ]?
//   )
//
// <hue> = <number> | <angle>
// <alpha-value> = <number> | <percentage>
export const validateHTMLColorLch = (color) => {
  const debug = false;
  if (isString(color)) {
    const L = `${anyPercentageWithinHundred}`;
    const C = `${anyNumber}`;
    const H = `((${degRegex})|(0|${alphaPercentageRequired})|${anyNumberWithinThreeHundredSixty})`;
    const A = `(\\/${spaceNoneOrMore}${alphaPercentageRequired})`;
    const allProps = `(${spaceNoneOrMore}${L}${spaceOneOrMore}${C}${spaceOneOrMore}${H}${spaceNoneOrMore}(${A})?)`;
    const regexLogic = `^lch\\(${allProps}\\)$`;
    debug && console.log("[validateHTMLColorLch] L", L);
    debug && console.log("[validateHTMLColorLch] C", C);
    debug && console.log("[validateHTMLColorLch] H", H);
    debug && console.log("[validateHTMLColorLch] A", A);
    const regex = new RegExp(regexLogic);
    debugRegex && console.log("regex (lch)", regex);
    return color && regex.test(color);
  }
  return false;
};

// * Validate only HTML colors (`hex`, `rgb`, `rgba`, `hsl`, `hsla`, `hwb`, `lab`, `lch`), without `name` og `special name`**
export const validateHTMLColor = (color) => {
  if (
    (color && validateHTMLColorHex(color)) ||
    validateHTMLColorRgb(color) ||
    validateHTMLColorHsl(color) ||
    validateHTMLColorHwb(color) ||
    validateHTMLColorLab(color) ||
    validateHTMLColorLch(color)
  ) {
    return true;
  }
  return false;
};

const validateColor = (color) => {
  // Former validation - source: https://www.regextester.com/103656
  // if (isString(color)) {
  //   const regex = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1|0)?\)$/i;
  //   return color && regex.test(color);
  // }
  // New validation
  if (
    (color && validateHTMLColorHex(color)) ||
    validateHTMLColorName(color) ||
    validateHTMLColorSpecialName(color) ||
    validateHTMLColorRgb(color) ||
    validateHTMLColorHsl(color) ||
    validateHTMLColorHwb(color) ||
    validateHTMLColorLab(color) ||
    validateHTMLColorLch(color)
  ) {
    return true;
  }
  return false;
};

export default validateColor;
