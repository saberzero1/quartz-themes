export default [
  {
    source:
      'a.internal-link[aria-label="callouts"][class="internal-link"][data-href="callouts"][data-tooltip-position="top"][href="callouts"][rel="noopener nofollow"][target="_blank"]',
    publish: ".markdown-rendered a.internal-link",
    quartz: "a.internal",
    values: ["color", "text-decoration", "text-emphasis-color"],
  },
  {
    source:
      'a.internal-link.is-unresolved[aria-label="https://example.com"][class="internal-link is-unresolved"][data-href="https://example.com"][data-tooltip-position="top"][href="https://example.com"][rel="noopener nofollow"][target="_blank"]',
    publish: ".markdown-rendered a.external-link",
    quartz: "a.external",
    values: ["color", "text-decoration", "text-emphasis-color"],
  },
];
