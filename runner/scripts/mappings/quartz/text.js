export default [
  {
    source: "p",
    quartz: "p",
    publish: ".markdown-rendered p",
    values: ["color", "font-family", "overflow-wrap"],
  },
  {
    source: "strong",
    quartz: ".page article p > strong, strong",
    publish: "strong",
    values: ["color", "font-family", "overflow-wrap", "text-emphasis-color"],
  },
  {
    source: "strong",
    quartz: ".page article p > b, b",
    publish: "b",
    values: ["color", "font-family", "overflow-wrap", "text-emphasis-color"],
  },
];
