const NAMED_COLORS = {
  black: [0, 0, 0],
  white: [255, 255, 255],
  red: [255, 0, 0],
  green: [0, 128, 0],
  blue: [0, 0, 255],
  yellow: [255, 255, 0],
  cyan: [0, 255, 255],
  magenta: [255, 0, 255],
  orange: [255, 165, 0],
  purple: [128, 0, 128],
  pink: [255, 192, 203],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  silver: [192, 192, 192],
  maroon: [128, 0, 0],
  olive: [128, 128, 0],
  lime: [0, 255, 0],
  teal: [0, 128, 128],
  navy: [0, 0, 128],
  aqua: [0, 255, 255],
  fuchsia: [255, 0, 255],
  transparent: null,
};

function isRgbTriplet(value) {
  return /^\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*$/.test(value);
}

function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3 || hex.length === 4) {
    hex = hex
      .slice(0, 3)
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (hex.length === 8) hex = hex.slice(0, 6);
  if (hex.length !== 6) return null;
  const n = parseInt(hex, 16);
  if (isNaN(n)) return null;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function parseRgbFunction(value) {
  const m = value.match(
    /^rgba?\(\s*(\d+(?:\.\d+)?)\s*[,\s]\s*(\d+(?:\.\d+)?)\s*[,\s]\s*(\d+(?:\.\d+)?)/,
  );
  if (!m) return null;
  return [Math.round(+m[1]), Math.round(+m[2]), Math.round(+m[3])];
}

function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(1, s));
  l = Math.max(0, Math.min(1, l));
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r, g, b;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return [
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
  ];
}

function parseHslFunction(value) {
  const m = value.match(
    /^hsla?\(\s*(\d+(?:\.\d+)?)\s*[,\s]\s*(\d+(?:\.\d+)?)%\s*[,\s]\s*(\d+(?:\.\d+)?)%/,
  );
  if (!m) return null;
  return hslToRgb(+m[1], +m[2] / 100, +m[3] / 100);
}

/**
 * Attempts to convert a CSS color value to an "R, G, B" triplet string.
 * Returns the triplet string if conversion succeeds, or null if the format
 * is unrecognized (oklch, relative color syntax, var() references, etc.).
 */
export default function normalizeColorToRgbTriplet(value) {
  if (!value || typeof value !== "string") return null;
  const v = value.trim();
  if (
    !v ||
    v === "transparent" ||
    v === "inherit" ||
    v === "initial" ||
    v === "unset"
  )
    return null;
  if (isRgbTriplet(v)) return v;
  if (v.startsWith("#")) {
    const rgb = hexToRgb(v);
    return rgb ? `${rgb[0]}, ${rgb[1]}, ${rgb[2]}` : null;
  }
  if (v.startsWith("rgb")) {
    const rgb = parseRgbFunction(v);
    return rgb ? `${rgb[0]}, ${rgb[1]}, ${rgb[2]}` : null;
  }
  if (v.startsWith("hsl")) {
    const rgb = parseHslFunction(v);
    return rgb ? `${rgb[0]}, ${rgb[1]}, ${rgb[2]}` : null;
  }
  const named = NAMED_COLORS[v.toLowerCase()];
  if (named) return `${named[0]}, ${named[1]}, ${named[2]}`;
  return null;
}
