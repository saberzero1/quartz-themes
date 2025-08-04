import { transform, Features } from "lightningcss";
import { format } from "../formatter.mjs";

export default function lightningcss(css, options) {
  let { code } = transform({
    filename: "style.css",
    code: Buffer.from(format(css, "css"), "utf8"),
    include: Features.Colors | Features.MediaQueries | Features.Selectors,
    minify: false,
    errorRecovery: false,
    transform: true,
    ...options,
  });

  return format(code.toString("utf8"), "css");
}
