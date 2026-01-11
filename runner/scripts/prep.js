import {
  readdirSync,
  statSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from "fs";
import { join } from "path";
import { createHash } from "crypto";
import postcss from "postcss";
import calc from "postcss-calc";
import w3colorToRgb from "../../lib/w3color.mjs";
import {
  default as validateColor,
  validateHTMLColorHex,
} from "../../lib/validate-color.mjs";

const HASH_CACHE_FILE = "./runner/results/.prep-hashes.json";
const FORCE_PREP = process.env.FORCE_PREP === "true";

function loadHashCache() {
  if (existsSync(HASH_CACHE_FILE)) {
    try {
      return JSON.parse(readFileSync(HASH_CACHE_FILE, "utf-8"));
    } catch {
      return {};
    }
  }
  return {};
}

function saveHashCache(cache) {
  const sortedCache = {};
  for (const key of Object.keys(cache).sort()) {
    sortedCache[key] = cache[key];
  }
  writeFileSync(HASH_CACHE_FILE, JSON.stringify(sortedCache, null, 2));
}

function getFileHash(content) {
  return createHash("md5").update(content).digest("hex");
}

// from: https://github.com/Kyza/color-regex/
// const colorRegex = /(#)(?:([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?|([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?)|(rgb|rgba)\((?:\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*,\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*,\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*|\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)\)|(hsl|hsla)\((?:\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*)\)|(hwb)\(\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)?\)|(lab|oklab)\(\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?)\s+(-?(?:0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|(?:0|1(?:[0-1][0-9]?|2[0-4]?|[3-9])?|[2-9][0-9]?)(?:\.[0-9]+)?|125(?:\.0+)?))\s+(-?(?:0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|(?:0|1(?:[0-1][0-9]?|2[0-4]?|[3-9])?|[2-9][0-9]?)(?:\.[0-9]+)?|125(?:\.0+)?))\s*(?:(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)?\)|(lch|oklch)\(\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|(?:0|1(?:[0-4][0-9]?|[5-9])?|[2-9][0-9]?)(?:\.[0-9]+)?|150(?:\.0+)?)\s+(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s*(?:(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)?\)|(color)\((?:(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020)(?:\s+|\s*,\s*)(0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+|0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s+|\s*,\s*)(0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+|0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s+|\s*,\s*)(0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+|0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:(?:\s+\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)?|(xyz|xyz-d50|xyz-d65)(?:\s+|\s*,\s*)(-?[0-9]+(?:\.[0-9]+)?%?)(?:\s+|\s*,\s*)(-?[0-9]+(?:\.[0-9]+)?%?)(?:\s+|\s*,\s*)(-?[0-9]+(?:\.[0-9]+)?%?)(?:(?:\s+\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)?)\)|(yellowgreen|yellow|whitesmoke|white|wheat|VisitedText|violet|turquoise|transparent|tomato|thistle|teal|tan|steelblue|springgreen|snow|slategrey|slategray|slateblue|skyblue|silver|sienna|SelectedItemText|SelectedItem|seashell|seagreen|sandybrown|salmon|saddlebrown|royalblue|rosybrown|red|rebeccapurple|purple|powderblue|plum|pink|peru|peachpuff|papayawhip|palevioletred|paleturquoise|palegreen|palegoldenrod|orchid|orangered|orange|olivedrab|olive|oldlace|navy|navajowhite|moccasin|mistyrose|mintcream|midnightblue|mediumvioletred|mediumturquoise|mediumspringgreen|mediumslateblue|mediumseagreen|mediumpurple|mediumorchid|mediumblue|mediumaquamarine|maroon|MarkText|Mark|magenta|LinkText|linen|limegreen|lime|lightyellow|lightsteelblue|lightslategrey|lightslategray|lightskyblue|lightseagreen|lightsalmon|lightpink|lightgrey|lightgreen|lightgray|lightgoldenrodyellow|lightcyan|lightcoral|lightblue|lemonchiffon|lawngreen|lavenderblush|lavender|khaki|ivory|indigo|indianred|hotpink|honeydew|HighlightText|Highlight|grey|greenyellow|green|GrayText|gray|goldenrod|gold|ghostwhite|gainsboro|fuchsia|forestgreen|floralwhite|firebrick|FieldText|Field|dodgerblue|dimgrey|dimgray|deepskyblue|deeppink|darkviolet|darkturquoise|darkslategrey|darkslategray|darkslateblue|darkseagreen|darksalmon|darkred|darkorchid|darkorange|darkolivegreen|darkmagenta|darkkhaki|darkgrey|darkgreen|darkgray|darkgoldenrod|darkcyan|darkblue|cyan|currentColor|crimson|cornsilk|cornflowerblue|coral|chocolate|chartreuse|CanvasText|Canvas|cadetblue|ButtonText|ButtonFace|ButtonBorder|burlywood|brown|blueviolet|blue|blanchedalmond|black|bisque|beige|azure|aquamarine|aqua|antiquewhite|aliceblue|ActiveText|AccentColorText|AccentColor)/gi;
const colorRegex =
  /(#)(?:([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?|([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?)|(rgb|rgba)\((?:\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*,\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*,\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*|\s*(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)\s+(0*(?:0|1[0-9]{0,2}|2(?:[0-4][0-9]?|5[0-4]?|[6-9])?|[3-9][0-9]?)(?:\.[0-9]+)?|255(?:\.0+)?|\.[0-9]+)(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)\)|(hsl|hsla)\((?:\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*)\)|(hwb)\(\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)?\)|(lab|oklab)\(\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?)\s+(-?(?:0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|(?:0|1(?:[0-1][0-9]?|2[0-4]?|[3-9])?|[2-9][0-9]?)(?:\.[0-9]+)?|125(?:\.0+)?))\s+(-?(?:0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|(?:0|1(?:[0-1][0-9]?|2[0-4]?|[3-9])?|[2-9][0-9]?)(?:\.[0-9]+)?|125(?:\.0+)?))\s*(?:(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)?\)|(lch|oklch)\(\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|(?:0|1(?:[0-4][0-9]?|[5-9])?|[2-9][0-9]?)(?:\.[0-9]+)?|150(?:\.0+)?)\s+(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s*(?:(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)?\)|(color)\((?:(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020)(?:\s+|\s*,\s*)(0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+|0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s+|\s*,\s*)(0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+|0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s+|\s*,\s*)(0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+|0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:(?:\s+\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)?|(xyz|xyz-d50|xyz-d65)(?:\s+|\s*,\s*)(-?[0-9]+(?:\.[0-9]+)?%?)(?:\s+|\s*,\s*)(-?[0-9]+(?:\.[0-9]+)?%?)(?:\s+|\s*,\s*)(-?[0-9]+(?:\.[0-9]+)?%?)(?:(?:\s+\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*)?)\)/gi;
const hslColorRegex =
  /(hsl|hsla)\((?:\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*(?:\/)\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)(?:\s*,\s*(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%|0*0*(?:\.[0-9]+)?|1(?:\.0+)?|\.[0-9]+))?\s*|\s*(-?[0-9]+(?:\.[0-9]+)?(?:deg|rad|grad|turn)?)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s+(0*(?:(?:0|[1-9][0-9]?)(?:\.[0-9]+)?|100(?:\.0+)?|\.[0-9]+)%)\s*)\)/gi;
const vendorPrefixes = [
  "ah",
  "apple",
  "atsc",
  "epub",
  "hp",
  "khtml",
  "moz",
  "ms",
  "o",
  "rim",
  "ro",
  "tc",
  "wap",
  "webkit",
  "xv",
];

const files = getFilesUnderDirectory("./runner/results/").filter(
  (f) =>
    (f.endsWith("dark.json") || f.endsWith("light.json")) &&
    !f.includes("-variables.json") &&
    !f.includes("-responsive.json") &&
    !f.includes("-diff.json"),
);

const hashCache = loadHashCache();
let processedCount = 0;
let skippedCount = 0;

files.forEach((file) => {
  const content = readFileSync(file, "utf-8");
  const inputHash = getFileHash(content);

  if (!FORCE_PREP && hashCache[file] === inputHash) {
    skippedCount++;
    return;
  }

  console.log(`Reading file: ${file}`);
  const themeName = file
    .replace("runner/results/", "")
    .replace("/dark.json", "")
    .replace("/light.json", "");
  let processedContent = content;
  let contentCompare = null;
  let iteration = 0;
  console.log(`Processing file: ${file}`);
  while (contentCompare !== processedContent && iteration < 1000) {
    contentCompare = processedContent;
    const result = {};
    Object.entries(JSON.parse(processedContent)).forEach(([key, value]) => {
      result[key] = {};
      Object.entries(value).forEach(([cssVariable, cssValue]) => {
        cssVariable = removeVendorPrefix(cssVariable);
        cssValue = removeVendorPrefix(cssValue);
        cssValue = resolveCalcExpressions(cssValue);
        cssValue = stringToRgb(cssValue);
        result[key][cssVariable.trim()] = cssValue.trim();
      });
    });
    processedContent = JSON.stringify(result);
    iteration++;
  }
  console.log(`(${iteration} iterations) Prepped theme: ${themeName}`);
  writeFileSync(file, processedContent, "utf-8");

  hashCache[file] = inputHash;
  saveHashCache(hashCache);

  processedCount++;
  console.log(`Prepped entries for file: ${file}`);
});

console.log(
  `Prep complete. Processed: ${processedCount}, Skipped: ${skippedCount}`,
);

function resolveCalcExpressions(cssValue) {
  const result = postcss()
    .use(calc({ preserve: false }))
    .process(`:root { --temp: ${cssValue}; }`, { from: undefined });

  return result.root.nodes[0].nodes[0].value
    .replace("--temp: ", "")
    .replace(";", "")
    .trim();
}

function removeVendorPrefix(cssProperty) {
  if (cssProperty.startsWith("-")) {
    for (const prefix of vendorPrefixes) {
      if (cssProperty.startsWith(`-${prefix}-`)) {
        return cssProperty.replace(`-${prefix}-`, "");
      }
    }
  }
  return cssProperty;
}

function stringToRgb(cssValue) {
  // replace all colors in the string with their rgb() equivalent
  // unless they are already in hex format (w3colors does not support hexa)
  const matches = cssValue.match(colorRegex);
  for (const match of matches || []) {
    // fix all hsl colors with float percentages
    if (hslColorRegex.test(match)) {
      match.replace(/(\d+\.\d+)%/g, (_, p1) => {
        const rounded = Math.round(parseFloat(p1));
        cssValue = cssValue.replace(`${p1}%`, `${rounded}%`);
        return _;
      });
    }
    if (validateColor(match) && !validateHTMLColorHex(match)) {
      const rgb = w3colorToRgb(match);
      if (rgb) {
        cssValue = cssValue.replace(match, rgb);
      }
    }
  }
  return cssValue;
}

function getFilesUnderDirectory(dirPath) {
  try {
    // Read the directory contents
    const items = readdirSync(dirPath);

    // Initialize an array to hold the file paths
    const files = [];
    // Iterate over each item in the directory
    items.forEach((item) => {
      const itemPath = join(dirPath, item);
      const stats = statSync(itemPath);

      // Check if the item is a file
      if (stats.isFile()) {
        // Add the file path to the array
        files.push(itemPath);
      } else if (stats.isDirectory()) {
        // If it's a directory, recursively get files from it
        const subFiles = getFilesUnderDirectory(itemPath);
        files.push(...subFiles);
      }
    });

    return files;
  } catch (error) {
    throw new Error(`Error reading directory: ${error.message}`);
  }
}
