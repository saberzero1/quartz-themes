import * as cssTree from "css-tree";

export default function isColor(value) {
  const match = cssTree.lexer.matchProperty("color", value);

  return match.matched && !match.error;
}
