import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "adwaita",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cantarell"],
    styleSettingsId: "com-github-birneee-obsidian-adwaita",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --adwaita-accent-bg-color: #3584e4;
  --adwaita-accent-color: #78aeed;
  --adwaita-accent-fg-color: #ffffff;
  --adwaita-blue-1: #99c1f1;
  --adwaita-blue-2: #62a0ea;
  --adwaita-blue-3: #3584e4;
  --adwaita-blue-4: #1c71d8;
  --adwaita-blue-5: #1a5fb4;
  --adwaita-brown-1: #cdab8f;
  --adwaita-brown-2: #b5835a;
  --adwaita-brown-3: #986a44;
  --adwaita-brown-4: #865e3c;
  --adwaita-brown-5: #63452c;
  --adwaita-card-bg-color: rgba(255, 255, 255, 0.08);
  --adwaita-card-fg-color: #ffffff;
  --adwaita-card-shade-color: rgba(0, 0, 0, 0.36);
  --adwaita-dark-1: #77767b;
  --adwaita-dark-2: #5e5c64;
  --adwaita-dark-3: #3d3846;
  --adwaita-dark-4: #241f31;
  --adwaita-dark-5: #000000;
  --adwaita-destructive-bg-color: #c01c28;
  --adwaita-destructive-color: #ff7b63;
  --adwaita-destructive-fg-color: #ffffff;
  --adwaita-dialog-bg-color: #383838;
  --adwaita-dialog-fg-color: #ffffff;
  --adwaita-error-bg-color: #c01c28;
  --adwaita-error-color: #ff7b63;
  --adwaita-error-fg-color: #ffffff;
  --adwaita-green-1: #8ff0a4;
  --adwaita-green-2: #57e389;
  --adwaita-green-3: #33d17a;
  --adwaita-green-4: #2ec27e;
  --adwaita-green-5: #26a269;
  --adwaita-headerbar-backdrop-color: #242424;
  --adwaita-headerbar-bg-color: #303030;
  --adwaita-headerbar-border-color: #ffffff;
  --adwaita-headerbar-fg-color: #ffffff;
  --adwaita-headerbar-shade-color: rgba(0, 0, 0, 0.36);
  --adwaita-icon-folder-saved-search-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDYuNjA1NDY5IDAuMDU4NTkzOCBjIC0zLjU3ODEyNSAwIC02LjUgMi45MjE4NzUyIC02LjUgNi41MDAwMDAyIHMgMi45MjE4NzUgNi40OTYwOTQgNi41IDYuNDk2MDk0IGMgMS40Mjk2ODcgMCAyLjc1MzkwNiAtMC40NjQ4NDQgMy44MjgxMjUgLTEuMjUzOTA3IGwgMi45NzI2NTYgMi45NzI2NTcgYyAwLjk1NzAzMSAwLjk0MTQwNiAyLjM2MzI4MSAtMC40OTYwOTQgMS40MDYyNSAtMS40Mzc1IGwgLTIuOTU3MDMxIC0yLjk1NzAzMiBjIDAuNzgxMjUgLTEuMDc0MjE4IDEuMjUgLTIuMzk0NTMxIDEuMjUgLTMuODIwMzEyIGMgMCAtMy41NzgxMjUgLTIuOTI1NzgxIC02LjUwMDAwMDIgLTYuNSAtNi41MDAwMDAyIHogbSAwIDIuMDAwMDAwMiBjIDIuNDk2MDkzIDAgNC41IDIuMDAzOTA2IDQuNSA0LjUgcyAtMi4wMDM5MDcgNC40OTYwOTQgLTQuNSA0LjQ5NjA5NCBjIC0yLjUgMCAtNC41IC0yIC00LjUgLTQuNDk2MDk0IHMgMiAtNC41IDQuNSAtNC41IHogbSAwIDAiIGZpbGw9IiMyZTM0MzYiLz4KPC9zdmc+Cg==");
  --adwaita-icon-folder-visiting-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDMgMSBjIC0xLjY0NDUzMSAwIC0zIDEuMzU1NDY5IC0zIDMgdiA4IGMgMCAxLjY0NDUzMSAxLjM1NTQ2OSAzIDMgMyBoIDEwIGMgMS42NDQ1MzEgMCAzIC0xLjM1NTQ2OSAzIC0zIHYgLTYgYyAwIC0xLjY0NDUzMSAtMS4zNTU0NjkgLTMgLTMgLTMgaCAtMy41ODU5MzggbCAtMS43MDcwMzEgLTEuNzA3MDMxIGMgLTAuMTg3NSAtMC4xODc1IC0wLjQ0MTQwNiAtMC4yOTI5NjkgLTAuNzA3MDMxIC0wLjI5Mjk2OSB6IG0gMCAyIGggMy41ODU5MzggbCAxLjcwNzAzMSAxLjcwNzAzMSBjIDAuMTg3NSAwLjE4NzUgMC40NDE0MDYgMC4yOTI5NjkgMC43MDcwMzEgMC4yOTI5NjkgaCA0IGMgMC41NjI1IDAgMSAwLjQzNzUgMSAxIHYgNiBjIDAgMC41NjY0MDYgLTAuNDM3NSAxIC0xIDEgaCAtMTAgYyAtMC41NjI1IDAgLTEgLTAuNDMzNTk0IC0xIC0xIHYgLTggYyAwIC0wLjU2MjUgMC40Mzc1IC0xIDEgLTEgeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-icon-go-down-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDEgNSBjIDAgLTAuMjY1NjI1IDAuMTA1NDY5IC0wLjUxOTUzMSAwLjI5Mjk2OSAtMC43MDcwMzEgYyAwLjM5MDYyNSAtMC4zOTA2MjUgMS4wMjM0MzcgLTAuMzkwNjI1IDEuNDE0MDYyIDAgbCA1LjI5Mjk2OSA1LjI5Mjk2OSBsIDUuMjkyOTY5IC01LjI5Mjk2OSBjIDAuMzkwNjI1IC0wLjM5MDYyNSAxLjAyMzQzNyAtMC4zOTA2MjUgMS40MTQwNjIgMCBjIDAuMTg3NSAwLjE4NzUgMC4yOTI5NjkgMC40NDE0MDYgMC4yOTI5NjkgMC43MDcwMzEgcyAtMC4xMDU0NjkgMC41MTk1MzEgLTAuMjkyOTY5IDAuNzA3MDMxIGwgLTYgNiBjIC0wLjM5MDYyNSAwLjM5MDYyNSAtMS4wMjM0MzcgMC4zOTA2MjUgLTEuNDE0MDYyIDAgbCAtNiAtNiBjIC0wLjE4NzUgLTAuMTg3NSAtMC4yOTI5NjkgLTAuNDQxNDA2IC0wLjI5Mjk2OSAtMC43MDcwMzEgeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-icon-sidebar-show-right-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDkuNSAxNCB2IC0xMiBoIDUgdiAxMiB6IG0gMCAwIiBmaWxsLW9wYWNpdHk9IjAuMzQ5MDIiLz4KICAgICAgICA8cGF0aCBkPSJtIDEzIDEgYyAxLjY0NDUzMSAwIDMgMS4zNTU0NjkgMyAzIHYgOCBjIDAgMS42NDQ1MzEgLTEuMzU1NDY5IDMgLTMgMyBoIC0xMCBjIC0xLjY0NDUzMSAwIC0zIC0xLjM1NTQ2OSAtMyAtMyB2IC04IGMgMCAtMS42NDQ1MzEgMS4zNTU0NjkgLTMgMyAtMyB6IG0gMCAyIGggLTEwIGMgLTAuNTcwMzEyIDAgLTEgMC40Mjk2ODggLTEgMSB2IDggYyAwIDAuNTcwMzEyIDAuNDI5Njg4IDEgMSAxIGggMTAgYyAwLjU3MDMxMiAwIDEgLTAuNDI5Njg4IDEgLTEgdiAtOCBjIDAgLTAuNTcwMzEyIC0wLjQyOTY4OCAtMSAtMSAtMSB6IG0gMCAwIi8+CiAgICAgICAgPHBhdGggZD0ibSAxMCAyIGggLTEgdiAxMiBoIDEgeiBtIDAgMCIvPgogICAgPC9nPgo8L3N2Zz4K");
  --adwaita-icon-sidebar-show-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDYuNSAxNCB2IC0xMiBoIC01IHYgMTIgeiBtIDAgMCIgZmlsbC1vcGFjaXR5PSIwLjM0OTAyIi8+CiAgICAgICAgPHBhdGggZD0ibSAzIDEgYyAtMS42NDQ1MzEgMCAtMyAxLjM1NTQ2OSAtMyAzIHYgOCBjIDAgMS42NDQ1MzEgMS4zNTU0NjkgMyAzIDMgaCAxMCBjIDEuNjQ0NTMxIDAgMyAtMS4zNTU0NjkgMyAtMyB2IC04IGMgMCAtMS42NDQ1MzEgLTEuMzU1NDY5IC0zIC0zIC0zIHogbSAwIDIgaCAxMCBjIDAuNTcwMzEyIDAgMSAwLjQyOTY4OCAxIDEgdiA4IGMgMCAwLjU3MDMxMiAtMC40Mjk2ODggMSAtMSAxIGggLTEwIGMgLTAuNTcwMzEyIDAgLTEgLTAuNDI5Njg4IC0xIC0xIHYgLTggYyAwIC0wLjU3MDMxMiAwLjQyOTY4OCAtMSAxIC0xIHogbSAwIDAiLz4KICAgICAgICA8cGF0aCBkPSJtIDYgMiBoIDEgdiAxMiBoIC0xIHogbSAwIDAiLz4KICAgIDwvZz4KPC9zdmc+Cg==");
  --adwaita-icon-tab-new-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDMgMCBjIC0xLjY0NDUzMSAwIC0zIDEuMzU1NDY5IC0zIDMgdiAxMCBjIDAgMS42NDQ1MzEgMS4zNTU0NjkgMyAzIDMgaCAxMCBjIDEuNjQ0NTMxIDAgMyAtMS4zNTU0NjkgMyAtMyB2IC0xMCBjIDAgLTEuNjQ0NTMxIC0xLjM1NTQ2OSAtMyAtMyAtMyB6IG0gMCAyIGggMTAgYyAwLjU3MDMxMiAwIDEgMC40Mjk2ODggMSAxIHYgMTAgYyAwIDAuNTcwMzEyIC0wLjQyOTY4OCAxIC0xIDEgaCAtMTAgYyAtMC41NzAzMTIgMCAtMSAtMC40Mjk2ODggLTEgLTEgdiAtMTAgYyAwIC0wLjU3MDMxMiAwLjQyOTY4OCAtMSAxIC0xIHogbSAwIDAiLz4KICAgICAgICA8cGF0aCBkPSJtIDQgNyBoIDggdiAyIGggLTggeiBtIDAgMCIvPgogICAgICAgIDxwYXRoIGQ9Im0gOSA0IHYgOCBoIC0yIHYgLTggeiBtIDAgMCIvPgogICAgPC9nPgo8L3N2Zz4K");
  --adwaita-icon-view-more-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDcuOTk2MDk0IDAgYyAtMS4xMDU0NjkgMCAtMiAwLjg5NDUzMSAtMiAyIHMgMC44OTQ1MzEgMiAyIDIgYyAxLjEwMTU2MiAwIDIgLTAuODk0NTMxIDIgLTIgcyAtMC44OTg0MzggLTIgLTIgLTIgeiBtIDAgNiBjIC0xLjEwNTQ2OSAwIC0yIDAuODk0NTMxIC0yIDIgcyAwLjg5NDUzMSAyIDIgMiBjIDEuMTAxNTYyIDAgMiAtMC44OTQ1MzEgMiAtMiBzIC0wLjg5ODQzOCAtMiAtMiAtMiB6IG0gMCA2IGMgLTEuMTA1NDY5IDAgLTIgMC44OTQ1MzEgLTIgMiBzIDAuODk0NTMxIDIgMiAyIGMgMS4xMDE1NjIgMCAyIC0wLjg5NDUzMSAyIC0yIHMgLTAuODk4NDM4IC0yIC0yIC0yIHogbSAwIDAiIGZpbGw9IiMyZTM0MzYiLz4KPC9zdmc+Cg==");
  --adwaita-icon-window-close-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDQgNCBoIDEgaCAwLjAzMTI1IGMgMC4yNTM5MDYgMC4wMTE3MTkgMC41MTE3MTkgMC4xMjg5MDYgMC42ODc1IDAuMzEyNSBsIDIuMjgxMjUgMi4yODEyNSBsIDIuMzEyNSAtMi4yODEyNSBjIDAuMjY1NjI1IC0wLjIzMDQ2OSAwLjQ0NTMxMiAtMC4zMDQ2ODggMC42ODc1IC0wLjMxMjUgaCAxIHYgMSBjIDAgMC4yODUxNTYgLTAuMDM1MTU2IDAuNTUwNzgxIC0wLjI1IDAuNzUgbCAtMi4yODEyNSAyLjI4MTI1IGwgMi4yNSAyLjI1IGMgMC4xODc1IDAuMTg3NSAwLjI4MTI1IDAuNDUzMTI1IDAuMjgxMjUgMC43MTg3NSB2IDEgaCAtMSBjIC0wLjI2NTYyNSAwIC0wLjUzMTI1IC0wLjA5Mzc1IC0wLjcxODc1IC0wLjI4MTI1IGwgLTIuMjgxMjUgLTIuMjgxMjUgbCAtMi4yODEyNSAyLjI4MTI1IGMgLTAuMTg3NSAwLjE4NzUgLTAuNDUzMTI1IDAuMjgxMjUgLTAuNzE4NzUgMC4yODEyNSBoIC0xIHYgLTEgYyAwIC0wLjI2NTYyNSAwLjA5Mzc1IC0wLjUzMTI1IDAuMjgxMjUgLTAuNzE4NzUgbCAyLjI4MTI1IC0yLjI1IGwgLTIuMjgxMjUgLTIuMjgxMjUgYyAtMC4yMTA5MzggLTAuMTk1MzEyIC0wLjMwNDY4OCAtMC40Njg3NSAtMC4yODEyNSAtMC43NSB6IG0gMCAwIiBmaWxsPSIjMmUzNDM2Ii8+Cjwvc3ZnPgo=");
  --adwaita-icon-window-maximize-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDMuOTg4MjgxIDMuOTkyMTg4IHYgOC4wMTE3MTggaCA4LjAxMTcxOSB2IC04LjAxMTcxOCB6IG0gMiAyIGggNC4wMTE3MTkgdiA0LjAxMTcxOCBoIC00LjAxMTcxOSB6IG0gMCAwIiBmaWxsPSIjMmUzNDM2Ii8+Cjwvc3ZnPgo=");
  --adwaita-icon-window-minimize-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDQgMTAuMDA3ODEyIGggOCB2IDEuOTg4MjgyIGggLTggeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-light-1: #ffffff;
  --adwaita-light-2: #f6f5f4;
  --adwaita-light-3: #deddda;
  --adwaita-light-4: #c0bfbc;
  --adwaita-light-5: #9a9996;
  --adwaita-mod-background: #2e2e2e;
  --adwaita-mod-background-active: #6e6e6e;
  --adwaita-mod-background-focus: #444444;
  --adwaita-mod-background-hover: #4f4f4f;
  --adwaita-mod-foreground: #929292;
  --adwaita-mod-foreground-focus: var(--adwaita-headerbar-fg-color, #ffffff);
  --adwaita-mod-right-margin: 8px;
  --adwaita-mod-scale: 1;
  --adwaita-orange-1: #ffbe6f;
  --adwaita-orange-2: #ffa348;
  --adwaita-orange-3: #ff7800;
  --adwaita-orange-4: #e66100;
  --adwaita-orange-5: #c64600;
  --adwaita-popover-bg-color: #383838;
  --adwaita-popover-fg-color: #ffffff;
  --adwaita-popover-shader-color: rgba(0, 0, 0, 0.36);
  --adwaita-purple-1: #dc8add;
  --adwaita-purple-2: #c061cb;
  --adwaita-purple-3: #9141ac;
  --adwaita-purple-4: #813d9c;
  --adwaita-purple-5: #613583;
  --adwaita-red-1: #f66151;
  --adwaita-red-2: #ed333b;
  --adwaita-red-3: #e01b24;
  --adwaita-red-4: #c01c28;
  --adwaita-red-5: #a51d2d;
  --adwaita-scrollbar-outline-color: rgba(0, 0, 0, 0.5);
  --adwaita-shade-color: rgba(0, 0, 0, 0.36);
  --adwaita-success-bg-color: #26a269;
  --adwaita-success-color: #8ff0a4;
  --adwaita-success-fg-color: #ffffff;
  --adwaita-view-bg-color: #1e1e1e;
  --adwaita-view-fg-color: #ffffff;
  --adwaita-warning-bg-color: #cd9309;
  --adwaita-warning-color: #f8e45c;
  --adwaita-warning-fg-color: rgba(0, 0, 0, 0.8);
  --adwaita-window-bg-color: #242424;
  --adwaita-window-fg-color: #ffffff;
  --adwaita-yellow-1: #f9f06b;
  --adwaita-yellow-2: #f8e45c;
  --adwaita-yellow-3: #f6d32d;
  --adwaita-yellow-4: #f5c211;
  --adwaita-yellow-5: #e5a50a;
  --bases-table-header-background-hover: var(--background-modifier-hover, #323232);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #323232);
  --caret-color: var(--text-normal, #ffffff);
  --code-bracket-background: var(--background-modifier-hover, #323232);
  --code-normal: var(--text-normal, #ffffff);
  --dark: var(--text-normal, var(--adwaita-view-fg-color, #ffffff));
  --darkgray: var(--text-normal, var(--adwaita-view-fg-color, #ffffff));
  --file-header-font: var(--font-interface, Cantarell, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 15px);
  --flair-color: var(--text-normal, #ffffff);
  --font-interface-theme: Cantarell;
  --font-ui-small: 15px;
  --footnote-input-background-active: var(--metadata-input-background-active, #323232);
  --frame-right-space: calc(var(--adwaita-mod-scale)*120px);
  --graph-text: var(--text-normal, #ffffff);
  --gray: var(--text-normal, var(--adwaita-view-fg-color, #ffffff));
  --h1-weight: 900;
  --header-height: 46px;
  --icon-color: var(--adwaita-headerbar-fg-color, #929292);
  --icon-color-focused: var(--adwaita-headerbar-fg-color, #929292);
  --icon-color-hover: var(--adwaita-headerbar-fg-color, #929292);
  --inline-title-weight: var(--h1-weight, 900);
  --metadata-input-background-active: var(--background-modifier-hover, #323232);
  --metadata-input-font: var(--font-interface, Cantarell, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #ffffff);
  --metadata-label-background-active: var(--background-modifier-hover, #323232);
  --metadata-label-font: var(--font-interface, Cantarell, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-property-background-active: var(--background-modifier-hover, #323232);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 15px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 15px);
  --nav-heading-color: var(--text-normal, #ffffff);
  --nav-heading-color-hover: var(--text-normal, #ffffff);
  --nav-item-background-active: var(--background-modifier-hover, #323232);
  --nav-item-background-hover: var(--background-modifier-hover, #323232);
  --nav-item-color-active: var(--text-normal, #ffffff);
  --nav-item-color-hover: var(--text-normal, #ffffff);
  --nav-item-color-selected: var(--text-normal, #ffffff);
  --nav-item-size: var(--font-ui-small, 15px);
  --pill-color-hover: var(--text-normal, #ffffff);
  --setting-group-heading-color: var(--text-normal, #ffffff);
  --tab-background-active: var(--background-primary, #464646);
  --tab-font-size: var(--font-ui-small, 15px);
  --tab-max-width: none;
  --tab-radius-active: 4px;
  --tab-stacked-font-size: var(--font-ui-small, 15px);
  --tab-stacked-header-width: var(--header-height, 46px);
  --tab-text-color: var(--text-faint, #929292);
  --tab-text-color-focused: var(--adwaita-headerbar-fg-color, #8a8a8a);
  --tab-text-color-focused-active-current: var(--adwaita-headerbar-fg-color, #8a8a8a);
  --tab-width: 10000px;
  --table-header-color: var(--text-normal, #ffffff);
  --text-normal: var(--adwaita-view-fg-color, #ffffff);
  --titlebar-background: var(--adwaita-headerbar-backdrop-color, #242424);
  --titlebar-background-focused: var(--adwaita-headerbar-bg-color, #303030);
  --titlebar-height: 45px;
  --titlebar-text-color: var(--text-muted, #919191);
  --titlebar-text-color-focused: var(--adwaita-headerbar-fg-color, #ffffff);
  --traffic-lights-offset-x: var(--header-height, 46px);
  --traffic-lights-offset-y: var(--header-height, 46px);
  --vault-profile-color: var(--text-normal, #ffffff);
  --vault-profile-color-hover: var(--vault-profile-color, #ffffff);
  --vault-profile-font-size: var(--font-ui-small, 15px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body html {
  --adwaita-icon-folder-saved-search-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDYuNjA1NDY5IDAuMDU4NTkzOCBjIC0zLjU3ODEyNSAwIC02LjUgMi45MjE4NzUyIC02LjUgNi41MDAwMDAyIHMgMi45MjE4NzUgNi40OTYwOTQgNi41IDYuNDk2MDk0IGMgMS40Mjk2ODcgMCAyLjc1MzkwNiAtMC40NjQ4NDQgMy44MjgxMjUgLTEuMjUzOTA3IGwgMi45NzI2NTYgMi45NzI2NTcgYyAwLjk1NzAzMSAwLjk0MTQwNiAyLjM2MzI4MSAtMC40OTYwOTQgMS40MDYyNSAtMS40Mzc1IGwgLTIuOTU3MDMxIC0yLjk1NzAzMiBjIDAuNzgxMjUgLTEuMDc0MjE4IDEuMjUgLTIuMzk0NTMxIDEuMjUgLTMuODIwMzEyIGMgMCAtMy41NzgxMjUgLTIuOTI1NzgxIC02LjUwMDAwMDIgLTYuNSAtNi41MDAwMDAyIHogbSAwIDIuMDAwMDAwMiBjIDIuNDk2MDkzIDAgNC41IDIuMDAzOTA2IDQuNSA0LjUgcyAtMi4wMDM5MDcgNC40OTYwOTQgLTQuNSA0LjQ5NjA5NCBjIC0yLjUgMCAtNC41IC0yIC00LjUgLTQuNDk2MDk0IHMgMiAtNC41IDQuNSAtNC41IHogbSAwIDAiIGZpbGw9IiMyZTM0MzYiLz4KPC9zdmc+Cg==");
  --adwaita-icon-folder-visiting-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDMgMSBjIC0xLjY0NDUzMSAwIC0zIDEuMzU1NDY5IC0zIDMgdiA4IGMgMCAxLjY0NDUzMSAxLjM1NTQ2OSAzIDMgMyBoIDEwIGMgMS42NDQ1MzEgMCAzIC0xLjM1NTQ2OSAzIC0zIHYgLTYgYyAwIC0xLjY0NDUzMSAtMS4zNTU0NjkgLTMgLTMgLTMgaCAtMy41ODU5MzggbCAtMS43MDcwMzEgLTEuNzA3MDMxIGMgLTAuMTg3NSAtMC4xODc1IC0wLjQ0MTQwNiAtMC4yOTI5NjkgLTAuNzA3MDMxIC0wLjI5Mjk2OSB6IG0gMCAyIGggMy41ODU5MzggbCAxLjcwNzAzMSAxLjcwNzAzMSBjIDAuMTg3NSAwLjE4NzUgMC40NDE0MDYgMC4yOTI5NjkgMC43MDcwMzEgMC4yOTI5NjkgaCA0IGMgMC41NjI1IDAgMSAwLjQzNzUgMSAxIHYgNiBjIDAgMC41NjY0MDYgLTAuNDM3NSAxIC0xIDEgaCAtMTAgYyAtMC41NjI1IDAgLTEgLTAuNDMzNTk0IC0xIC0xIHYgLTggYyAwIC0wLjU2MjUgMC40Mzc1IC0xIDEgLTEgeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-icon-go-down-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDEgNSBjIDAgLTAuMjY1NjI1IDAuMTA1NDY5IC0wLjUxOTUzMSAwLjI5Mjk2OSAtMC43MDcwMzEgYyAwLjM5MDYyNSAtMC4zOTA2MjUgMS4wMjM0MzcgLTAuMzkwNjI1IDEuNDE0MDYyIDAgbCA1LjI5Mjk2OSA1LjI5Mjk2OSBsIDUuMjkyOTY5IC01LjI5Mjk2OSBjIDAuMzkwNjI1IC0wLjM5MDYyNSAxLjAyMzQzNyAtMC4zOTA2MjUgMS40MTQwNjIgMCBjIDAuMTg3NSAwLjE4NzUgMC4yOTI5NjkgMC40NDE0MDYgMC4yOTI5NjkgMC43MDcwMzEgcyAtMC4xMDU0NjkgMC41MTk1MzEgLTAuMjkyOTY5IDAuNzA3MDMxIGwgLTYgNiBjIC0wLjM5MDYyNSAwLjM5MDYyNSAtMS4wMjM0MzcgMC4zOTA2MjUgLTEuNDE0MDYyIDAgbCAtNiAtNiBjIC0wLjE4NzUgLTAuMTg3NSAtMC4yOTI5NjkgLTAuNDQxNDA2IC0wLjI5Mjk2OSAtMC43MDcwMzEgeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-icon-sidebar-show-right-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDkuNSAxNCB2IC0xMiBoIDUgdiAxMiB6IG0gMCAwIiBmaWxsLW9wYWNpdHk9IjAuMzQ5MDIiLz4KICAgICAgICA8cGF0aCBkPSJtIDEzIDEgYyAxLjY0NDUzMSAwIDMgMS4zNTU0NjkgMyAzIHYgOCBjIDAgMS42NDQ1MzEgLTEuMzU1NDY5IDMgLTMgMyBoIC0xMCBjIC0xLjY0NDUzMSAwIC0zIC0xLjM1NTQ2OSAtMyAtMyB2IC04IGMgMCAtMS42NDQ1MzEgMS4zNTU0NjkgLTMgMyAtMyB6IG0gMCAyIGggLTEwIGMgLTAuNTcwMzEyIDAgLTEgMC40Mjk2ODggLTEgMSB2IDggYyAwIDAuNTcwMzEyIDAuNDI5Njg4IDEgMSAxIGggMTAgYyAwLjU3MDMxMiAwIDEgLTAuNDI5Njg4IDEgLTEgdiAtOCBjIDAgLTAuNTcwMzEyIC0wLjQyOTY4OCAtMSAtMSAtMSB6IG0gMCAwIi8+CiAgICAgICAgPHBhdGggZD0ibSAxMCAyIGggLTEgdiAxMiBoIDEgeiBtIDAgMCIvPgogICAgPC9nPgo8L3N2Zz4K");
  --adwaita-icon-sidebar-show-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDYuNSAxNCB2IC0xMiBoIC01IHYgMTIgeiBtIDAgMCIgZmlsbC1vcGFjaXR5PSIwLjM0OTAyIi8+CiAgICAgICAgPHBhdGggZD0ibSAzIDEgYyAtMS42NDQ1MzEgMCAtMyAxLjM1NTQ2OSAtMyAzIHYgOCBjIDAgMS42NDQ1MzEgMS4zNTU0NjkgMyAzIDMgaCAxMCBjIDEuNjQ0NTMxIDAgMyAtMS4zNTU0NjkgMyAtMyB2IC04IGMgMCAtMS42NDQ1MzEgLTEuMzU1NDY5IC0zIC0zIC0zIHogbSAwIDIgaCAxMCBjIDAuNTcwMzEyIDAgMSAwLjQyOTY4OCAxIDEgdiA4IGMgMCAwLjU3MDMxMiAtMC40Mjk2ODggMSAtMSAxIGggLTEwIGMgLTAuNTcwMzEyIDAgLTEgLTAuNDI5Njg4IC0xIC0xIHYgLTggYyAwIC0wLjU3MDMxMiAwLjQyOTY4OCAtMSAxIC0xIHogbSAwIDAiLz4KICAgICAgICA8cGF0aCBkPSJtIDYgMiBoIDEgdiAxMiBoIC0xIHogbSAwIDAiLz4KICAgIDwvZz4KPC9zdmc+Cg==");
  --adwaita-icon-tab-new-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDMgMCBjIC0xLjY0NDUzMSAwIC0zIDEuMzU1NDY5IC0zIDMgdiAxMCBjIDAgMS42NDQ1MzEgMS4zNTU0NjkgMyAzIDMgaCAxMCBjIDEuNjQ0NTMxIDAgMyAtMS4zNTU0NjkgMyAtMyB2IC0xMCBjIDAgLTEuNjQ0NTMxIC0xLjM1NTQ2OSAtMyAtMyAtMyB6IG0gMCAyIGggMTAgYyAwLjU3MDMxMiAwIDEgMC40Mjk2ODggMSAxIHYgMTAgYyAwIDAuNTcwMzEyIC0wLjQyOTY4OCAxIC0xIDEgaCAtMTAgYyAtMC41NzAzMTIgMCAtMSAtMC40Mjk2ODggLTEgLTEgdiAtMTAgYyAwIC0wLjU3MDMxMiAwLjQyOTY4OCAtMSAxIC0xIHogbSAwIDAiLz4KICAgICAgICA8cGF0aCBkPSJtIDQgNyBoIDggdiAyIGggLTggeiBtIDAgMCIvPgogICAgICAgIDxwYXRoIGQ9Im0gOSA0IHYgOCBoIC0yIHYgLTggeiBtIDAgMCIvPgogICAgPC9nPgo8L3N2Zz4K");
  --adwaita-icon-view-more-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDcuOTk2MDk0IDAgYyAtMS4xMDU0NjkgMCAtMiAwLjg5NDUzMSAtMiAyIHMgMC44OTQ1MzEgMiAyIDIgYyAxLjEwMTU2MiAwIDIgLTAuODk0NTMxIDIgLTIgcyAtMC44OTg0MzggLTIgLTIgLTIgeiBtIDAgNiBjIC0xLjEwNTQ2OSAwIC0yIDAuODk0NTMxIC0yIDIgcyAwLjg5NDUzMSAyIDIgMiBjIDEuMTAxNTYyIDAgMiAtMC44OTQ1MzEgMiAtMiBzIC0wLjg5ODQzOCAtMiAtMiAtMiB6IG0gMCA2IGMgLTEuMTA1NDY5IDAgLTIgMC44OTQ1MzEgLTIgMiBzIDAuODk0NTMxIDIgMiAyIGMgMS4xMDE1NjIgMCAyIC0wLjg5NDUzMSAyIC0yIHMgLTAuODk4NDM4IC0yIC0yIC0yIHogbSAwIDAiIGZpbGw9IiMyZTM0MzYiLz4KPC9zdmc+Cg==");
  --adwaita-icon-window-close-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDQgNCBoIDEgaCAwLjAzMTI1IGMgMC4yNTM5MDYgMC4wMTE3MTkgMC41MTE3MTkgMC4xMjg5MDYgMC42ODc1IDAuMzEyNSBsIDIuMjgxMjUgMi4yODEyNSBsIDIuMzEyNSAtMi4yODEyNSBjIDAuMjY1NjI1IC0wLjIzMDQ2OSAwLjQ0NTMxMiAtMC4zMDQ2ODggMC42ODc1IC0wLjMxMjUgaCAxIHYgMSBjIDAgMC4yODUxNTYgLTAuMDM1MTU2IDAuNTUwNzgxIC0wLjI1IDAuNzUgbCAtMi4yODEyNSAyLjI4MTI1IGwgMi4yNSAyLjI1IGMgMC4xODc1IDAuMTg3NSAwLjI4MTI1IDAuNDUzMTI1IDAuMjgxMjUgMC43MTg3NSB2IDEgaCAtMSBjIC0wLjI2NTYyNSAwIC0wLjUzMTI1IC0wLjA5Mzc1IC0wLjcxODc1IC0wLjI4MTI1IGwgLTIuMjgxMjUgLTIuMjgxMjUgbCAtMi4yODEyNSAyLjI4MTI1IGMgLTAuMTg3NSAwLjE4NzUgLTAuNDUzMTI1IDAuMjgxMjUgLTAuNzE4NzUgMC4yODEyNSBoIC0xIHYgLTEgYyAwIC0wLjI2NTYyNSAwLjA5Mzc1IC0wLjUzMTI1IDAuMjgxMjUgLTAuNzE4NzUgbCAyLjI4MTI1IC0yLjI1IGwgLTIuMjgxMjUgLTIuMjgxMjUgYyAtMC4yMTA5MzggLTAuMTk1MzEyIC0wLjMwNDY4OCAtMC40Njg3NSAtMC4yODEyNSAtMC43NSB6IG0gMCAwIiBmaWxsPSIjMmUzNDM2Ii8+Cjwvc3ZnPgo=");
  --adwaita-icon-window-maximize-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDMuOTg4MjgxIDMuOTkyMTg4IHYgOC4wMTE3MTggaCA4LjAxMTcxOSB2IC04LjAxMTcxOCB6IG0gMiAyIGggNC4wMTE3MTkgdiA0LjAxMTcxOCBoIC00LjAxMTcxOSB6IG0gMCAwIiBmaWxsPSIjMmUzNDM2Ii8+Cjwvc3ZnPgo=");
  --adwaita-icon-window-minimize-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDQgMTAuMDA3ODEyIGggOCB2IDEuOTg4MjgyIGggLTggeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-mod-right-margin: 8px;
  --adwaita-mod-scale: 1;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(255, 255, 255));
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(255, 255, 255));
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(255, 255, 255));
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(255, 255, 255));
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-normal, rgb(255, 255, 255));
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(255, 255, 255));
  font-size: 15px;
}

html[saved-theme="dark"] body p {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body dt {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body td {
  color: var(--table-text-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body th {
  color: var(--table-header-color, rgb(255, 255, 255));
}`,
    code: `html[saved-theme="dark"] body code {
  color: var(--code-normal, rgb(255, 255, 255));
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  color: var(--text-normal, rgb(255, 255, 255));
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(50, 50, 50));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(50, 50, 50));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(50, 50, 50));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 900);
  color: var(--h1-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(255, 255, 255));
  font-weight: var(--inline-title-weight, 900);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(255, 255, 255));
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(146, 146, 146);
  border-left-color: rgb(146, 146, 146);
  border-right-color: rgb(146, 146, 146);
  border-top-color: rgb(146, 146, 146);
  color: var(--icon-color, rgb(146, 146, 146));
}`,
    footer: `html[saved-theme="dark"] body footer {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--icon-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  border-color: rgb(255, 255, 255);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  color: var(--table-header-color, rgb(255, 255, 255));
}`,
    properties: `html[saved-theme="dark"] body div#quartz-root {
  color: var(--tab-text-color-focused, rgb(255, 255, 255));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .stacked-page-header {
  --icon-color: var(--adwaita-headerbar-fg-color, #ffffff);
  --icon-color-focused: var(--adwaita-headerbar-fg-color, #ffffff);
  --icon-color-hover: var(--adwaita-headerbar-fg-color, #ffffff);
  --tab-text-color-focused: var(--adwaita-headerbar-fg-color, #ffffff);
  --tab-text-color-focused-active-current: var(--adwaita-headerbar-fg-color, #ffffff);
  background-color: var(--tab-container-background, rgb(48, 48, 48));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(255, 255, 255);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(255, 255, 255));
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--code-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --adwaita-accent-bg-color: #3584e4;
  --adwaita-accent-color: #1c71d8;
  --adwaita-accent-fg-color: #ffffff;
  --adwaita-blue-1: #99c1f1;
  --adwaita-blue-2: #62a0ea;
  --adwaita-blue-3: #3584e4;
  --adwaita-blue-4: #1c71d8;
  --adwaita-blue-5: #1a5fb4;
  --adwaita-brown-1: #cdab8f;
  --adwaita-brown-2: #b5835a;
  --adwaita-brown-3: #986a44;
  --adwaita-brown-4: #865e3c;
  --adwaita-brown-5: #63452c;
  --adwaita-card-bg-color: #ffffff;
  --adwaita-card-fg-color: rgba(0, 0, 0, 0.8);
  --adwaita-card-shade-color: rgba(0, 0, 0, 0.07);
  --adwaita-dark-1: #77767b;
  --adwaita-dark-2: #5e5c64;
  --adwaita-dark-3: #3d3846;
  --adwaita-dark-4: #241f31;
  --adwaita-dark-5: #000000;
  --adwaita-destructive-bg-color: #e01b24;
  --adwaita-destructive-color: #c01c28;
  --adwaita-destructive-fg-color: #ffffff;
  --adwaita-dialog-bg-color: #ffffff;
  --adwaita-dialog-fg-color: rgba(0, 0, 0, 0.8);
  --adwaita-error-bg-color: #e01b24;
  --adwaita-error-color: #c01c28;
  --adwaita-error-fg-color: #ffffff;
  --adwaita-green-1: #8ff0a4;
  --adwaita-green-2: #57e389;
  --adwaita-green-3: #33d17a;
  --adwaita-green-4: #2ec27e;
  --adwaita-green-5: #26a269;
  --adwaita-headerbar-backdrop-color: #fafafa;
  --adwaita-headerbar-bg-color: #ffffff;
  --adwaita-headerbar-border-color: rgba(0, 0, 0, 0.8);
  --adwaita-headerbar-fg-color: rgba(0, 0, 0, 0.8);
  --adwaita-headerbar-shade-color: rgba(0, 0, 0, 0.12);
  --adwaita-icon-folder-saved-search-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDYuNjA1NDY5IDAuMDU4NTkzOCBjIC0zLjU3ODEyNSAwIC02LjUgMi45MjE4NzUyIC02LjUgNi41MDAwMDAyIHMgMi45MjE4NzUgNi40OTYwOTQgNi41IDYuNDk2MDk0IGMgMS40Mjk2ODcgMCAyLjc1MzkwNiAtMC40NjQ4NDQgMy44MjgxMjUgLTEuMjUzOTA3IGwgMi45NzI2NTYgMi45NzI2NTcgYyAwLjk1NzAzMSAwLjk0MTQwNiAyLjM2MzI4MSAtMC40OTYwOTQgMS40MDYyNSAtMS40Mzc1IGwgLTIuOTU3MDMxIC0yLjk1NzAzMiBjIDAuNzgxMjUgLTEuMDc0MjE4IDEuMjUgLTIuMzk0NTMxIDEuMjUgLTMuODIwMzEyIGMgMCAtMy41NzgxMjUgLTIuOTI1NzgxIC02LjUwMDAwMDIgLTYuNSAtNi41MDAwMDAyIHogbSAwIDIuMDAwMDAwMiBjIDIuNDk2MDkzIDAgNC41IDIuMDAzOTA2IDQuNSA0LjUgcyAtMi4wMDM5MDcgNC40OTYwOTQgLTQuNSA0LjQ5NjA5NCBjIC0yLjUgMCAtNC41IC0yIC00LjUgLTQuNDk2MDk0IHMgMiAtNC41IDQuNSAtNC41IHogbSAwIDAiIGZpbGw9IiMyZTM0MzYiLz4KPC9zdmc+Cg==");
  --adwaita-icon-folder-visiting-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDMgMSBjIC0xLjY0NDUzMSAwIC0zIDEuMzU1NDY5IC0zIDMgdiA4IGMgMCAxLjY0NDUzMSAxLjM1NTQ2OSAzIDMgMyBoIDEwIGMgMS42NDQ1MzEgMCAzIC0xLjM1NTQ2OSAzIC0zIHYgLTYgYyAwIC0xLjY0NDUzMSAtMS4zNTU0NjkgLTMgLTMgLTMgaCAtMy41ODU5MzggbCAtMS43MDcwMzEgLTEuNzA3MDMxIGMgLTAuMTg3NSAtMC4xODc1IC0wLjQ0MTQwNiAtMC4yOTI5NjkgLTAuNzA3MDMxIC0wLjI5Mjk2OSB6IG0gMCAyIGggMy41ODU5MzggbCAxLjcwNzAzMSAxLjcwNzAzMSBjIDAuMTg3NSAwLjE4NzUgMC40NDE0MDYgMC4yOTI5NjkgMC43MDcwMzEgMC4yOTI5NjkgaCA0IGMgMC41NjI1IDAgMSAwLjQzNzUgMSAxIHYgNiBjIDAgMC41NjY0MDYgLTAuNDM3NSAxIC0xIDEgaCAtMTAgYyAtMC41NjI1IDAgLTEgLTAuNDMzNTk0IC0xIC0xIHYgLTggYyAwIC0wLjU2MjUgMC40Mzc1IC0xIDEgLTEgeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-icon-go-down-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDEgNSBjIDAgLTAuMjY1NjI1IDAuMTA1NDY5IC0wLjUxOTUzMSAwLjI5Mjk2OSAtMC43MDcwMzEgYyAwLjM5MDYyNSAtMC4zOTA2MjUgMS4wMjM0MzcgLTAuMzkwNjI1IDEuNDE0MDYyIDAgbCA1LjI5Mjk2OSA1LjI5Mjk2OSBsIDUuMjkyOTY5IC01LjI5Mjk2OSBjIDAuMzkwNjI1IC0wLjM5MDYyNSAxLjAyMzQzNyAtMC4zOTA2MjUgMS40MTQwNjIgMCBjIDAuMTg3NSAwLjE4NzUgMC4yOTI5NjkgMC40NDE0MDYgMC4yOTI5NjkgMC43MDcwMzEgcyAtMC4xMDU0NjkgMC41MTk1MzEgLTAuMjkyOTY5IDAuNzA3MDMxIGwgLTYgNiBjIC0wLjM5MDYyNSAwLjM5MDYyNSAtMS4wMjM0MzcgMC4zOTA2MjUgLTEuNDE0MDYyIDAgbCAtNiAtNiBjIC0wLjE4NzUgLTAuMTg3NSAtMC4yOTI5NjkgLTAuNDQxNDA2IC0wLjI5Mjk2OSAtMC43MDcwMzEgeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-icon-sidebar-show-right-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDkuNSAxNCB2IC0xMiBoIDUgdiAxMiB6IG0gMCAwIiBmaWxsLW9wYWNpdHk9IjAuMzQ5MDIiLz4KICAgICAgICA8cGF0aCBkPSJtIDEzIDEgYyAxLjY0NDUzMSAwIDMgMS4zNTU0NjkgMyAzIHYgOCBjIDAgMS42NDQ1MzEgLTEuMzU1NDY5IDMgLTMgMyBoIC0xMCBjIC0xLjY0NDUzMSAwIC0zIC0xLjM1NTQ2OSAtMyAtMyB2IC04IGMgMCAtMS42NDQ1MzEgMS4zNTU0NjkgLTMgMyAtMyB6IG0gMCAyIGggLTEwIGMgLTAuNTcwMzEyIDAgLTEgMC40Mjk2ODggLTEgMSB2IDggYyAwIDAuNTcwMzEyIDAuNDI5Njg4IDEgMSAxIGggMTAgYyAwLjU3MDMxMiAwIDEgLTAuNDI5Njg4IDEgLTEgdiAtOCBjIDAgLTAuNTcwMzEyIC0wLjQyOTY4OCAtMSAtMSAtMSB6IG0gMCAwIi8+CiAgICAgICAgPHBhdGggZD0ibSAxMCAyIGggLTEgdiAxMiBoIDEgeiBtIDAgMCIvPgogICAgPC9nPgo8L3N2Zz4K");
  --adwaita-icon-sidebar-show-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDYuNSAxNCB2IC0xMiBoIC01IHYgMTIgeiBtIDAgMCIgZmlsbC1vcGFjaXR5PSIwLjM0OTAyIi8+CiAgICAgICAgPHBhdGggZD0ibSAzIDEgYyAtMS42NDQ1MzEgMCAtMyAxLjM1NTQ2OSAtMyAzIHYgOCBjIDAgMS42NDQ1MzEgMS4zNTU0NjkgMyAzIDMgaCAxMCBjIDEuNjQ0NTMxIDAgMyAtMS4zNTU0NjkgMyAtMyB2IC04IGMgMCAtMS42NDQ1MzEgLTEuMzU1NDY5IC0zIC0zIC0zIHogbSAwIDIgaCAxMCBjIDAuNTcwMzEyIDAgMSAwLjQyOTY4OCAxIDEgdiA4IGMgMCAwLjU3MDMxMiAtMC40Mjk2ODggMSAtMSAxIGggLTEwIGMgLTAuNTcwMzEyIDAgLTEgLTAuNDI5Njg4IC0xIC0xIHYgLTggYyAwIC0wLjU3MDMxMiAwLjQyOTY4OCAtMSAxIC0xIHogbSAwIDAiLz4KICAgICAgICA8cGF0aCBkPSJtIDYgMiBoIDEgdiAxMiBoIC0xIHogbSAwIDAiLz4KICAgIDwvZz4KPC9zdmc+Cg==");
  --adwaita-icon-tab-new-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDMgMCBjIC0xLjY0NDUzMSAwIC0zIDEuMzU1NDY5IC0zIDMgdiAxMCBjIDAgMS42NDQ1MzEgMS4zNTU0NjkgMyAzIDMgaCAxMCBjIDEuNjQ0NTMxIDAgMyAtMS4zNTU0NjkgMyAtMyB2IC0xMCBjIDAgLTEuNjQ0NTMxIC0xLjM1NTQ2OSAtMyAtMyAtMyB6IG0gMCAyIGggMTAgYyAwLjU3MDMxMiAwIDEgMC40Mjk2ODggMSAxIHYgMTAgYyAwIDAuNTcwMzEyIC0wLjQyOTY4OCAxIC0xIDEgaCAtMTAgYyAtMC41NzAzMTIgMCAtMSAtMC40Mjk2ODggLTEgLTEgdiAtMTAgYyAwIC0wLjU3MDMxMiAwLjQyOTY4OCAtMSAxIC0xIHogbSAwIDAiLz4KICAgICAgICA8cGF0aCBkPSJtIDQgNyBoIDggdiAyIGggLTggeiBtIDAgMCIvPgogICAgICAgIDxwYXRoIGQ9Im0gOSA0IHYgOCBoIC0yIHYgLTggeiBtIDAgMCIvPgogICAgPC9nPgo8L3N2Zz4K");
  --adwaita-icon-view-more-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDcuOTk2MDk0IDAgYyAtMS4xMDU0NjkgMCAtMiAwLjg5NDUzMSAtMiAyIHMgMC44OTQ1MzEgMiAyIDIgYyAxLjEwMTU2MiAwIDIgLTAuODk0NTMxIDIgLTIgcyAtMC44OTg0MzggLTIgLTIgLTIgeiBtIDAgNiBjIC0xLjEwNTQ2OSAwIC0yIDAuODk0NTMxIC0yIDIgcyAwLjg5NDUzMSAyIDIgMiBjIDEuMTAxNTYyIDAgMiAtMC44OTQ1MzEgMiAtMiBzIC0wLjg5ODQzOCAtMiAtMiAtMiB6IG0gMCA2IGMgLTEuMTA1NDY5IDAgLTIgMC44OTQ1MzEgLTIgMiBzIDAuODk0NTMxIDIgMiAyIGMgMS4xMDE1NjIgMCAyIC0wLjg5NDUzMSAyIC0yIHMgLTAuODk4NDM4IC0yIC0yIC0yIHogbSAwIDAiIGZpbGw9IiMyZTM0MzYiLz4KPC9zdmc+Cg==");
  --adwaita-icon-window-close-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDQgNCBoIDEgaCAwLjAzMTI1IGMgMC4yNTM5MDYgMC4wMTE3MTkgMC41MTE3MTkgMC4xMjg5MDYgMC42ODc1IDAuMzEyNSBsIDIuMjgxMjUgMi4yODEyNSBsIDIuMzEyNSAtMi4yODEyNSBjIDAuMjY1NjI1IC0wLjIzMDQ2OSAwLjQ0NTMxMiAtMC4zMDQ2ODggMC42ODc1IC0wLjMxMjUgaCAxIHYgMSBjIDAgMC4yODUxNTYgLTAuMDM1MTU2IDAuNTUwNzgxIC0wLjI1IDAuNzUgbCAtMi4yODEyNSAyLjI4MTI1IGwgMi4yNSAyLjI1IGMgMC4xODc1IDAuMTg3NSAwLjI4MTI1IDAuNDUzMTI1IDAuMjgxMjUgMC43MTg3NSB2IDEgaCAtMSBjIC0wLjI2NTYyNSAwIC0wLjUzMTI1IC0wLjA5Mzc1IC0wLjcxODc1IC0wLjI4MTI1IGwgLTIuMjgxMjUgLTIuMjgxMjUgbCAtMi4yODEyNSAyLjI4MTI1IGMgLTAuMTg3NSAwLjE4NzUgLTAuNDUzMTI1IDAuMjgxMjUgLTAuNzE4NzUgMC4yODEyNSBoIC0xIHYgLTEgYyAwIC0wLjI2NTYyNSAwLjA5Mzc1IC0wLjUzMTI1IDAuMjgxMjUgLTAuNzE4NzUgbCAyLjI4MTI1IC0yLjI1IGwgLTIuMjgxMjUgLTIuMjgxMjUgYyAtMC4yMTA5MzggLTAuMTk1MzEyIC0wLjMwNDY4OCAtMC40Njg3NSAtMC4yODEyNSAtMC43NSB6IG0gMCAwIiBmaWxsPSIjMmUzNDM2Ii8+Cjwvc3ZnPgo=");
  --adwaita-icon-window-maximize-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDMuOTg4MjgxIDMuOTkyMTg4IHYgOC4wMTE3MTggaCA4LjAxMTcxOSB2IC04LjAxMTcxOCB6IG0gMiAyIGggNC4wMTE3MTkgdiA0LjAxMTcxOCBoIC00LjAxMTcxOSB6IG0gMCAwIiBmaWxsPSIjMmUzNDM2Ii8+Cjwvc3ZnPgo=");
  --adwaita-icon-window-minimize-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDQgMTAuMDA3ODEyIGggOCB2IDEuOTg4MjgyIGggLTggeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-light-1: #ffffff;
  --adwaita-light-2: #f6f5f4;
  --adwaita-light-3: #deddda;
  --adwaita-light-4: #c0bfbc;
  --adwaita-light-5: #9a9996;
  --adwaita-mod-background: #efefef;
  --adwaita-mod-background-active: #b3b3b3;
  --adwaita-mod-background-focus: #d8d8d8;
  --adwaita-mod-background-hover: #cfcfcf;
  --adwaita-mod-foreground: #949494;
  --adwaita-mod-foreground-focus: var(--adwaita-headerbar-fg-color, rgba(0, 0, 0, 0.8));
  --adwaita-mod-right-margin: 8px;
  --adwaita-mod-scale: 1;
  --adwaita-orange-1: #ffbe6f;
  --adwaita-orange-2: #ffa348;
  --adwaita-orange-3: #ff7800;
  --adwaita-orange-4: #e66100;
  --adwaita-orange-5: #c64600;
  --adwaita-popover-bg-color: #fafafa;
  --adwaita-popover-fg-color: rgba(0, 0, 0, 0.8);
  --adwaita-popover-shader-color: rgba(0, 0, 0, 0.07);
  --adwaita-purple-1: #dc8add;
  --adwaita-purple-2: #c061cb;
  --adwaita-purple-3: #9141ac;
  --adwaita-purple-4: #813d9c;
  --adwaita-purple-5: #613583;
  --adwaita-red-1: #f66151;
  --adwaita-red-2: #ed333b;
  --adwaita-red-3: #e01b24;
  --adwaita-red-4: #c01c28;
  --adwaita-red-5: #a51d2d;
  --adwaita-scrollbar-outline-color: #ffffff;
  --adwaita-shade-color: rgba(0, 0, 0, 0.07);
  --adwaita-success-bg-color: #2ec27e;
  --adwaita-success-color: #1b8553;
  --adwaita-success-fg-color: #ffffff;
  --adwaita-view-bg-color: #ffffff;
  --adwaita-view-fg-color: rgba(0, 0, 0, 0.8);
  --adwaita-warning-bg-color: #e5a50a;
  --adwaita-warning-color: #9c6e03;
  --adwaita-warning-fg-color: rgba(0, 0, 0, 0.8);
  --adwaita-window-bg-color: #fafafa;
  --adwaita-window-fg-color: rgba(0, 0, 0, 0.8);
  --adwaita-yellow-1: #f9f06b;
  --adwaita-yellow-2: #f8e45c;
  --adwaita-yellow-3: #f6d32d;
  --adwaita-yellow-4: #f5c211;
  --adwaita-yellow-5: #e5a50a;
  --bases-table-header-background-hover: var(--background-modifier-hover, #f0f0f0);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #f0f0f0);
  --caret-color: var(--text-normal, rgba(0, 0, 0, 0.8));
  --code-bracket-background: var(--background-modifier-hover, #f0f0f0);
  --code-normal: var(--text-normal, rgba(0, 0, 0, 0.8));
  --dark: var(--text-normal, var(--adwaita-view-fg-color, rgba(0, 0, 0, 0.8)));
  --darkgray: var(--text-normal, var(--adwaita-view-fg-color, rgba(0, 0, 0, 0.8)));
  --file-header-font: var(--font-interface, Cantarell, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 15px);
  --flair-color: var(--text-normal, rgba(0, 0, 0, 0.8));
  --font-interface-theme: Cantarell;
  --font-ui-small: 15px;
  --footnote-input-background-active: var(--metadata-input-background-active, #f0f0f0);
  --frame-right-space: calc(var(--adwaita-mod-scale)*120px);
  --graph-text: var(--text-normal, rgba(0, 0, 0, 0.8));
  --gray: var(--text-normal, var(--adwaita-view-fg-color, rgba(0, 0, 0, 0.8)));
  --h1-weight: 900;
  --header-height: 46px;
  --icon-color: var(--adwaita-headerbar-fg-color, #939393);
  --icon-color-focused: var(--adwaita-headerbar-fg-color, #939393);
  --icon-color-hover: var(--adwaita-headerbar-fg-color, #939393);
  --inline-title-weight: var(--h1-weight, 900);
  --metadata-input-background-active: var(--background-modifier-hover, #f0f0f0);
  --metadata-input-font: var(--font-interface, Cantarell, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, rgba(0, 0, 0, 0.8));
  --metadata-label-background-active: var(--background-modifier-hover, #f0f0f0);
  --metadata-label-font: var(--font-interface, Cantarell, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-property-background-active: var(--background-modifier-hover, #f0f0f0);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 15px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 15px);
  --nav-heading-color: var(--text-normal, rgba(0, 0, 0, 0.8));
  --nav-heading-color-hover: var(--text-normal, rgba(0, 0, 0, 0.8));
  --nav-item-background-active: var(--background-modifier-hover, #f0f0f0);
  --nav-item-background-hover: var(--background-modifier-hover, #f0f0f0);
  --nav-item-color-active: var(--text-normal, rgba(0, 0, 0, 0.8));
  --nav-item-color-hover: var(--text-normal, rgba(0, 0, 0, 0.8));
  --nav-item-color-selected: var(--text-normal, rgba(0, 0, 0, 0.8));
  --nav-item-size: var(--font-ui-small, 15px);
  --pill-color-hover: var(--text-normal, rgba(0, 0, 0, 0.8));
  --setting-group-heading-color: var(--text-normal, rgba(0, 0, 0, 0.8));
  --tab-background-active: var(--background-primary, #d8d8d8);
  --tab-font-size: var(--font-ui-small, 15px);
  --tab-max-width: none;
  --tab-radius-active: 4px;
  --tab-stacked-font-size: var(--font-ui-small, 15px);
  --tab-stacked-header-width: var(--header-height, 46px);
  --tab-text-color: var(--text-faint, #939393);
  --tab-text-color-focused: var(--adwaita-headerbar-fg-color, #939393);
  --tab-text-color-focused-active-current: var(--adwaita-headerbar-fg-color, #939393);
  --tab-width: 10000px;
  --table-header-color: var(--text-normal, rgba(0, 0, 0, 0.8));
  --text-normal: var(--adwaita-view-fg-color, rgba(0, 0, 0, 0.8));
  --titlebar-background: var(--adwaita-headerbar-backdrop-color, #fafafa);
  --titlebar-background-focused: var(--adwaita-headerbar-bg-color, #ffffff);
  --titlebar-height: 45px;
  --titlebar-text-color: var(--text-muted, #8c8c8c);
  --titlebar-text-color-focused: var(--adwaita-headerbar-fg-color, rgba(0, 0, 0, 0.8));
  --traffic-lights-offset-x: var(--header-height, 46px);
  --traffic-lights-offset-y: var(--header-height, 46px);
  --vault-profile-color: var(--text-normal, rgba(0, 0, 0, 0.8));
  --vault-profile-color-hover: var(--vault-profile-color, rgba(0, 0, 0, 0.8));
  --vault-profile-font-size: var(--font-ui-small, 15px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body html {
  --adwaita-icon-folder-saved-search-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDYuNjA1NDY5IDAuMDU4NTkzOCBjIC0zLjU3ODEyNSAwIC02LjUgMi45MjE4NzUyIC02LjUgNi41MDAwMDAyIHMgMi45MjE4NzUgNi40OTYwOTQgNi41IDYuNDk2MDk0IGMgMS40Mjk2ODcgMCAyLjc1MzkwNiAtMC40NjQ4NDQgMy44MjgxMjUgLTEuMjUzOTA3IGwgMi45NzI2NTYgMi45NzI2NTcgYyAwLjk1NzAzMSAwLjk0MTQwNiAyLjM2MzI4MSAtMC40OTYwOTQgMS40MDYyNSAtMS40Mzc1IGwgLTIuOTU3MDMxIC0yLjk1NzAzMiBjIDAuNzgxMjUgLTEuMDc0MjE4IDEuMjUgLTIuMzk0NTMxIDEuMjUgLTMuODIwMzEyIGMgMCAtMy41NzgxMjUgLTIuOTI1NzgxIC02LjUwMDAwMDIgLTYuNSAtNi41MDAwMDAyIHogbSAwIDIuMDAwMDAwMiBjIDIuNDk2MDkzIDAgNC41IDIuMDAzOTA2IDQuNSA0LjUgcyAtMi4wMDM5MDcgNC40OTYwOTQgLTQuNSA0LjQ5NjA5NCBjIC0yLjUgMCAtNC41IC0yIC00LjUgLTQuNDk2MDk0IHMgMiAtNC41IDQuNSAtNC41IHogbSAwIDAiIGZpbGw9IiMyZTM0MzYiLz4KPC9zdmc+Cg==");
  --adwaita-icon-folder-visiting-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDMgMSBjIC0xLjY0NDUzMSAwIC0zIDEuMzU1NDY5IC0zIDMgdiA4IGMgMCAxLjY0NDUzMSAxLjM1NTQ2OSAzIDMgMyBoIDEwIGMgMS42NDQ1MzEgMCAzIC0xLjM1NTQ2OSAzIC0zIHYgLTYgYyAwIC0xLjY0NDUzMSAtMS4zNTU0NjkgLTMgLTMgLTMgaCAtMy41ODU5MzggbCAtMS43MDcwMzEgLTEuNzA3MDMxIGMgLTAuMTg3NSAtMC4xODc1IC0wLjQ0MTQwNiAtMC4yOTI5NjkgLTAuNzA3MDMxIC0wLjI5Mjk2OSB6IG0gMCAyIGggMy41ODU5MzggbCAxLjcwNzAzMSAxLjcwNzAzMSBjIDAuMTg3NSAwLjE4NzUgMC40NDE0MDYgMC4yOTI5NjkgMC43MDcwMzEgMC4yOTI5NjkgaCA0IGMgMC41NjI1IDAgMSAwLjQzNzUgMSAxIHYgNiBjIDAgMC41NjY0MDYgLTAuNDM3NSAxIC0xIDEgaCAtMTAgYyAtMC41NjI1IDAgLTEgLTAuNDMzNTk0IC0xIC0xIHYgLTggYyAwIC0wLjU2MjUgMC40Mzc1IC0xIDEgLTEgeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-icon-go-down-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDEgNSBjIDAgLTAuMjY1NjI1IDAuMTA1NDY5IC0wLjUxOTUzMSAwLjI5Mjk2OSAtMC43MDcwMzEgYyAwLjM5MDYyNSAtMC4zOTA2MjUgMS4wMjM0MzcgLTAuMzkwNjI1IDEuNDE0MDYyIDAgbCA1LjI5Mjk2OSA1LjI5Mjk2OSBsIDUuMjkyOTY5IC01LjI5Mjk2OSBjIDAuMzkwNjI1IC0wLjM5MDYyNSAxLjAyMzQzNyAtMC4zOTA2MjUgMS40MTQwNjIgMCBjIDAuMTg3NSAwLjE4NzUgMC4yOTI5NjkgMC40NDE0MDYgMC4yOTI5NjkgMC43MDcwMzEgcyAtMC4xMDU0NjkgMC41MTk1MzEgLTAuMjkyOTY5IDAuNzA3MDMxIGwgLTYgNiBjIC0wLjM5MDYyNSAwLjM5MDYyNSAtMS4wMjM0MzcgMC4zOTA2MjUgLTEuNDE0MDYyIDAgbCAtNiAtNiBjIC0wLjE4NzUgLTAuMTg3NSAtMC4yOTI5NjkgLTAuNDQxNDA2IC0wLjI5Mjk2OSAtMC43MDcwMzEgeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-icon-sidebar-show-right-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDkuNSAxNCB2IC0xMiBoIDUgdiAxMiB6IG0gMCAwIiBmaWxsLW9wYWNpdHk9IjAuMzQ5MDIiLz4KICAgICAgICA8cGF0aCBkPSJtIDEzIDEgYyAxLjY0NDUzMSAwIDMgMS4zNTU0NjkgMyAzIHYgOCBjIDAgMS42NDQ1MzEgLTEuMzU1NDY5IDMgLTMgMyBoIC0xMCBjIC0xLjY0NDUzMSAwIC0zIC0xLjM1NTQ2OSAtMyAtMyB2IC04IGMgMCAtMS42NDQ1MzEgMS4zNTU0NjkgLTMgMyAtMyB6IG0gMCAyIGggLTEwIGMgLTAuNTcwMzEyIDAgLTEgMC40Mjk2ODggLTEgMSB2IDggYyAwIDAuNTcwMzEyIDAuNDI5Njg4IDEgMSAxIGggMTAgYyAwLjU3MDMxMiAwIDEgLTAuNDI5Njg4IDEgLTEgdiAtOCBjIDAgLTAuNTcwMzEyIC0wLjQyOTY4OCAtMSAtMSAtMSB6IG0gMCAwIi8+CiAgICAgICAgPHBhdGggZD0ibSAxMCAyIGggLTEgdiAxMiBoIDEgeiBtIDAgMCIvPgogICAgPC9nPgo8L3N2Zz4K");
  --adwaita-icon-sidebar-show-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDYuNSAxNCB2IC0xMiBoIC01IHYgMTIgeiBtIDAgMCIgZmlsbC1vcGFjaXR5PSIwLjM0OTAyIi8+CiAgICAgICAgPHBhdGggZD0ibSAzIDEgYyAtMS42NDQ1MzEgMCAtMyAxLjM1NTQ2OSAtMyAzIHYgOCBjIDAgMS42NDQ1MzEgMS4zNTU0NjkgMyAzIDMgaCAxMCBjIDEuNjQ0NTMxIDAgMyAtMS4zNTU0NjkgMyAtMyB2IC04IGMgMCAtMS42NDQ1MzEgLTEuMzU1NDY5IC0zIC0zIC0zIHogbSAwIDIgaCAxMCBjIDAuNTcwMzEyIDAgMSAwLjQyOTY4OCAxIDEgdiA4IGMgMCAwLjU3MDMxMiAtMC40Mjk2ODggMSAtMSAxIGggLTEwIGMgLTAuNTcwMzEyIDAgLTEgLTAuNDI5Njg4IC0xIC0xIHYgLTggYyAwIC0wLjU3MDMxMiAwLjQyOTY4OCAtMSAxIC0xIHogbSAwIDAiLz4KICAgICAgICA8cGF0aCBkPSJtIDYgMiBoIDEgdiAxMiBoIC0xIHogbSAwIDAiLz4KICAgIDwvZz4KPC9zdmc+Cg==");
  --adwaita-icon-tab-new-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMmUzNDM2Ij4KICAgICAgICA8cGF0aCBkPSJtIDMgMCBjIC0xLjY0NDUzMSAwIC0zIDEuMzU1NDY5IC0zIDMgdiAxMCBjIDAgMS42NDQ1MzEgMS4zNTU0NjkgMyAzIDMgaCAxMCBjIDEuNjQ0NTMxIDAgMyAtMS4zNTU0NjkgMyAtMyB2IC0xMCBjIDAgLTEuNjQ0NTMxIC0xLjM1NTQ2OSAtMyAtMyAtMyB6IG0gMCAyIGggMTAgYyAwLjU3MDMxMiAwIDEgMC40Mjk2ODggMSAxIHYgMTAgYyAwIDAuNTcwMzEyIC0wLjQyOTY4OCAxIC0xIDEgaCAtMTAgYyAtMC41NzAzMTIgMCAtMSAtMC40Mjk2ODggLTEgLTEgdiAtMTAgYyAwIC0wLjU3MDMxMiAwLjQyOTY4OCAtMSAxIC0xIHogbSAwIDAiLz4KICAgICAgICA8cGF0aCBkPSJtIDQgNyBoIDggdiAyIGggLTggeiBtIDAgMCIvPgogICAgICAgIDxwYXRoIGQ9Im0gOSA0IHYgOCBoIC0yIHYgLTggeiBtIDAgMCIvPgogICAgPC9nPgo8L3N2Zz4K");
  --adwaita-icon-view-more-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDcuOTk2MDk0IDAgYyAtMS4xMDU0NjkgMCAtMiAwLjg5NDUzMSAtMiAyIHMgMC44OTQ1MzEgMiAyIDIgYyAxLjEwMTU2MiAwIDIgLTAuODk0NTMxIDIgLTIgcyAtMC44OTg0MzggLTIgLTIgLTIgeiBtIDAgNiBjIC0xLjEwNTQ2OSAwIC0yIDAuODk0NTMxIC0yIDIgcyAwLjg5NDUzMSAyIDIgMiBjIDEuMTAxNTYyIDAgMiAtMC44OTQ1MzEgMiAtMiBzIC0wLjg5ODQzOCAtMiAtMiAtMiB6IG0gMCA2IGMgLTEuMTA1NDY5IDAgLTIgMC44OTQ1MzEgLTIgMiBzIDAuODk0NTMxIDIgMiAyIGMgMS4xMDE1NjIgMCAyIC0wLjg5NDUzMSAyIC0yIHMgLTAuODk4NDM4IC0yIC0yIC0yIHogbSAwIDAiIGZpbGw9IiMyZTM0MzYiLz4KPC9zdmc+Cg==");
  --adwaita-icon-window-close-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDQgNCBoIDEgaCAwLjAzMTI1IGMgMC4yNTM5MDYgMC4wMTE3MTkgMC41MTE3MTkgMC4xMjg5MDYgMC42ODc1IDAuMzEyNSBsIDIuMjgxMjUgMi4yODEyNSBsIDIuMzEyNSAtMi4yODEyNSBjIDAuMjY1NjI1IC0wLjIzMDQ2OSAwLjQ0NTMxMiAtMC4zMDQ2ODggMC42ODc1IC0wLjMxMjUgaCAxIHYgMSBjIDAgMC4yODUxNTYgLTAuMDM1MTU2IDAuNTUwNzgxIC0wLjI1IDAuNzUgbCAtMi4yODEyNSAyLjI4MTI1IGwgMi4yNSAyLjI1IGMgMC4xODc1IDAuMTg3NSAwLjI4MTI1IDAuNDUzMTI1IDAuMjgxMjUgMC43MTg3NSB2IDEgaCAtMSBjIC0wLjI2NTYyNSAwIC0wLjUzMTI1IC0wLjA5Mzc1IC0wLjcxODc1IC0wLjI4MTI1IGwgLTIuMjgxMjUgLTIuMjgxMjUgbCAtMi4yODEyNSAyLjI4MTI1IGMgLTAuMTg3NSAwLjE4NzUgLTAuNDUzMTI1IDAuMjgxMjUgLTAuNzE4NzUgMC4yODEyNSBoIC0xIHYgLTEgYyAwIC0wLjI2NTYyNSAwLjA5Mzc1IC0wLjUzMTI1IDAuMjgxMjUgLTAuNzE4NzUgbCAyLjI4MTI1IC0yLjI1IGwgLTIuMjgxMjUgLTIuMjgxMjUgYyAtMC4yMTA5MzggLTAuMTk1MzEyIC0wLjMwNDY4OCAtMC40Njg3NSAtMC4yODEyNSAtMC43NSB6IG0gMCAwIiBmaWxsPSIjMmUzNDM2Ii8+Cjwvc3ZnPgo=");
  --adwaita-icon-window-maximize-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDMuOTg4MjgxIDMuOTkyMTg4IHYgOC4wMTE3MTggaCA4LjAxMTcxOSB2IC04LjAxMTcxOCB6IG0gMiAyIGggNC4wMTE3MTkgdiA0LjAxMTcxOCBoIC00LjAxMTcxOSB6IG0gMCAwIiBmaWxsPSIjMmUzNDM2Ii8+Cjwvc3ZnPgo=");
  --adwaita-icon-window-minimize-symbolic: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtIDQgMTAuMDA3ODEyIGggOCB2IDEuOTg4MjgyIGggLTggeiBtIDAgMCIgZmlsbD0iIzJlMzQzNiIvPgo8L3N2Zz4K");
  --adwaita-mod-right-margin: 8px;
  --adwaita-mod-scale: 1;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgba(0, 0, 0, 0.8));
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgba(0, 0, 0, 0.8));
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgba(0, 0, 0, 0.8));
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgba(0, 0, 0, 0.8));
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-normal, rgba(0, 0, 0, 0.8));
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body del {
  color: rgba(0, 0, 0, 0.8);
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgba(0, 0, 0, 0.8));
  font-size: 15px;
}

html[saved-theme="light"] body p {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body dt {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body ol > li {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body ul > li {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body table {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body td {
  color: var(--table-text-color, rgba(0, 0, 0, 0.8));
}

html[saved-theme="light"] body th {
  color: var(--table-header-color, rgba(0, 0, 0, 0.8));
}`,
    code: `html[saved-theme="light"] body code {
  color: var(--code-normal, rgba(0, 0, 0, 0.8));
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body figcaption {
  color: rgba(0, 0, 0, 0.8);
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  color: var(--text-normal, rgba(0, 0, 0, 0.8));
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgba(0, 0, 0, 0.8);
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(240, 240, 240));
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(240, 240, 240));
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(240, 240, 240));
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 900);
  color: var(--h1-color, rgba(0, 0, 0, 0.8));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgba(0, 0, 0, 0.8));
  font-weight: var(--inline-title-weight, 900);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgba(0, 0, 0, 0.8));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgba(0, 0, 0, 0.8));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgba(0, 0, 0, 0.8));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgba(0, 0, 0, 0.8));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgba(0, 0, 0, 0.8));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgba(0, 0, 0, 0.8));
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgba(0, 0, 0, 0.8);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(147, 147, 147);
  border-left-color: rgb(147, 147, 147);
  border-right-color: rgb(147, 147, 147);
  border-top-color: rgb(147, 147, 147);
  color: var(--icon-color, rgb(147, 147, 147));
}`,
    footer: `html[saved-theme="light"] body footer {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgba(0, 0, 0, 0.8);
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: var(--icon-color, rgba(0, 0, 0, 0.8));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgba(0, 0, 0, 0.8);
  stroke: rgba(0, 0, 0, 0.8);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgba(0, 0, 0, 0.8));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgba(0, 0, 0, 0.8);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  color: var(--table-header-color, rgba(0, 0, 0, 0.8));
}`,
    properties: `html[saved-theme="light"] body div#quartz-root {
  color: var(--tab-text-color-focused, rgba(0, 0, 0, 0.8));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  border-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .stacked-page-header {
  --icon-color: var(--adwaita-headerbar-fg-color, rgba(0, 0, 0, 0.8));
  --icon-color-focused: var(--adwaita-headerbar-fg-color, rgba(0, 0, 0, 0.8));
  --icon-color-hover: var(--adwaita-headerbar-fg-color, rgba(0, 0, 0, 0.8));
  --tab-text-color-focused: var(--adwaita-headerbar-fg-color, rgba(0, 0, 0, 0.8));
  --tab-text-color-focused-active-current: var(--adwaita-headerbar-fg-color, rgba(0, 0, 0, 0.8));
  background-color: var(--tab-container-background, rgb(255, 255, 255));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgba(0, 0, 0, 0.8);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgba(0, 0, 0, 0.8));
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body input[type=text] {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: var(--code-normal, rgba(0, 0, 0, 0.8));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body sub {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body summary {
  color: rgba(0, 0, 0, 0.8);
}

html[saved-theme="light"] body sup {
  color: rgba(0, 0, 0, 0.8);
}`,
  },
  classSettings: {
    "adwaita-mod-always": {
      general: `body.adwaita-mod-always {
--frame-right-space: calc(var(--adwaita-mod-scale) * 120px);
--adwaita-mod-foreground-focus: var(--adwaita-headerbar-fg-color);
}

body.adwaita-window-button-minimize-hide .titlebar-button-container.mod-right .titlebar-button.mod-minimize {
display: none;
}

body.adwaita-window-button-maximize-hide .titlebar-button-container.mod-right .titlebar-button.mod-maximize {
display: none;
}

body.adwaita-window-button-close-hide .titlebar-button-container.mod-right .titlebar-button.mod-close {
display: none;
}

body.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide), body.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide.adwaita-window-button-minimize-hide), body.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide) {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px));
}

body.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide), body.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide), body.adwaita-window-button-close-hide.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide) {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px - 38px));
}

body.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px - 38px - 38px));
}

body.adwaita-mod-always .titlebar-button-container.mod-right {
transform: scale(var(--adwaita-mod-scale));
margin-right: var(--adwaita-mod-right-margin);
transform-origin: right;
}

body.adwaita-mod-always .titlebar-button-container.mod-right .titlebar-button {
height: 24px;
width: 24px;
border-radius: 12px;
padding: 0;
margin: auto 0 auto 14px;
background: var(--adwaita-mod-background);
color: var(--adwaita-mod-foreground);
}

body.adwaita-mod-always .titlebar-button-container.mod-right .titlebar-button.mod-minimize svg, body.adwaita-mod-always .titlebar-button-container.mod-right .titlebar-button.mod-maximize svg, body.adwaita-mod-always .titlebar-button-container.mod-right .titlebar-button.mod-close svg {
display: none;
}

body.adwaita-mod-always .titlebar-button-container.mod-right .titlebar-button::after {
content: '';
background-color: currentColor;
width: 16px;
height: 16px;
margin: auto;
}

body.adwaita-mod-always .titlebar-button-container.mod-right .titlebar-button.mod-minimize::after {
-webkit-mask-image: var(--adwaita-icon-window-minimize-symbolic);
mask-image: var(--adwaita-icon-window-minimize-symbolic);
}

body.adwaita-mod-always .titlebar-button-container.mod-right .titlebar-button.mod-maximize::after {
-webkit-mask-image: var(--adwaita-icon-window-maximize-symbolic);
mask-image: var(--adwaita-icon-window-maximize-symbolic);
}

body.adwaita-mod-always .titlebar-button-container.mod-right .titlebar-button.mod-close::after {
-webkit-mask-image: var(--adwaita-icon-window-close-symbolic);
mask-image: var(--adwaita-icon-window-close-symbolic);
}

body.adwaita-mod-always .titlebar-button-container.mod-right .titlebar-button:hover {
background: var(--adwaita-mod-background) !important;
}

body.adwaita-mod-always .titlebar-button-container.mod-right .titlebar-button svg {
width: 12px;
height: 12px;
margin: auto;
}

body.is-focused .titlebar-button-container.mod-right .titlebar-button, body.is-focused .modal-close-button {
background: var(--adwaita-mod-background-focus);
color: var(--adwaita-mod-foreground-focus);
}

body.is-focused .titlebar-button-container.mod-right .titlebar-button:hover, body.is-focused .modal-close-button:hover {
background: var(--adwaita-mod-background-hover) !important;
}

body.is-focused .titlebar-button-container.mod-right .titlebar-button:active, body.is-focused .modal-close-button:active {
background: var(--adwaita-mod-background-active) !important;
}

body.adwaita-mod-always .modal-close-button {
height: 24px;
width: 24px;
border-radius: 12px;
color: var(--adwaita-mod-foreground);
background: var(--adwaita-mod-background);
transform: scale(var(--adwaita-mod-scale));
transform-origin: right;
}

body.adwaita-mod-always .modal-close-button:before {
content: '';
display: block;
width: 16px;
height: 16px;
margin: auto;
top: 50%;
position: absolute;
transform: translateY(-50%);
-webkit-mask-image: var(--adwaita-icon-window-close-symbolic);
mask-image: var(--adwaita-icon-window-close-symbolic);
background-color: currentColor;
}`,
      dark: `body.theme-dark {
--adwaita-mod-background: #2e2e2e;
--adwaita-mod-background-focus: #444444;
--adwaita-mod-background-hover: #4f4f4f;
--adwaita-mod-background-active: #6e6e6e;
--adwaita-mod-foreground: #929292;
}`,
      light: `body.theme-light {
--adwaita-mod-background: #efefef;
--adwaita-mod-background-focus: #d8d8d8;
--adwaita-mod-background-hover: #cfcfcf;
--adwaita-mod-background-active: #b3b3b3;
--adwaita-mod-foreground: #949494;
}`,
    },
    "adwaita-mod-linux-only": {
      general: `body.mod-linux {
--frame-right-space: calc(var(--adwaita-mod-scale) * 120px);
--adwaita-mod-foreground-focus: var(--adwaita-headerbar-fg-color);
}

body.mod-linux.adwaita-window-button-minimize-hide .titlebar-button-container.mod-right .titlebar-button.mod-minimize {
display: none;
}

body.mod-linux.adwaita-window-button-maximize-hide .titlebar-button-container.mod-right .titlebar-button.mod-maximize {
display: none;
}

body.mod-linux.adwaita-window-button-close-hide .titlebar-button-container.mod-right .titlebar-button.mod-close {
display: none;
}

body.mod-linux.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide), body.mod-linux.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide.adwaita-window-button-minimize-hide), body.mod-linux.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide) {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px));
}

body.mod-linux.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide), body.mod-linux.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide), body.mod-linux.adwaita-window-button-close-hide.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide) {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px - 38px));
}

body.mod-linux.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px - 38px - 38px));
}

body.mod-linux .titlebar-button-container.mod-right {
transform: scale(var(--adwaita-mod-scale));
margin-right: var(--adwaita-mod-right-margin);
transform-origin: right;
}

body.mod-linux .titlebar-button-container.mod-right .titlebar-button {
height: 24px;
width: 24px;
border-radius: 12px;
padding: 0;
margin: auto 0 auto 14px;
background: var(--adwaita-mod-background);
color: var(--adwaita-mod-foreground);
}

body.mod-linux .titlebar-button-container.mod-right .titlebar-button.mod-minimize svg, body.mod-linux .titlebar-button-container.mod-right .titlebar-button.mod-maximize svg, body.mod-linux .titlebar-button-container.mod-right .titlebar-button.mod-close svg {
display: none;
}

body.mod-linux .titlebar-button-container.mod-right .titlebar-button::after {
content: '';
background-color: currentColor;
width: 16px;
height: 16px;
margin: auto;
}

body.mod-linux .titlebar-button-container.mod-right .titlebar-button.mod-minimize::after {
-webkit-mask-image: var(--adwaita-icon-window-minimize-symbolic);
mask-image: var(--adwaita-icon-window-minimize-symbolic);
}

body.mod-linux .titlebar-button-container.mod-right .titlebar-button.mod-maximize::after {
-webkit-mask-image: var(--adwaita-icon-window-maximize-symbolic);
mask-image: var(--adwaita-icon-window-maximize-symbolic);
}

body.mod-linux .titlebar-button-container.mod-right .titlebar-button.mod-close::after {
-webkit-mask-image: var(--adwaita-icon-window-close-symbolic);
mask-image: var(--adwaita-icon-window-close-symbolic);
}

body.mod-linux .titlebar-button-container.mod-right .titlebar-button:hover {
background: var(--adwaita-mod-background) !important;
}

body.mod-linux .titlebar-button-container.mod-right .titlebar-button svg {
width: 12px;
height: 12px;
margin: auto;
}

body.mod-linux.is-focused .titlebar-button-container.mod-right .titlebar-button, body.mod-linux.is-focused .modal-close-button {
background: var(--adwaita-mod-background-focus);
color: var(--adwaita-mod-foreground-focus);
}

body.mod-linux.is-focused .titlebar-button-container.mod-right .titlebar-button:hover, body.mod-linux.is-focused .modal-close-button:hover {
background: var(--adwaita-mod-background-hover) !important;
}

body.mod-linux.is-focused .titlebar-button-container.mod-right .titlebar-button:active, body.mod-linux.is-focused .modal-close-button:active {
background: var(--adwaita-mod-background-active) !important;
}

body.mod-linux .modal-close-button {
height: 24px;
width: 24px;
border-radius: 12px;
color: var(--adwaita-mod-foreground);
background: var(--adwaita-mod-background);
transform: scale(var(--adwaita-mod-scale));
transform-origin: right;
}

body.mod-linux .modal-close-button:before {
content: '';
display: block;
width: 16px;
height: 16px;
margin: auto;
top: 50%;
position: absolute;
transform: translateY(-50%);
-webkit-mask-image: var(--adwaita-icon-window-close-symbolic);
mask-image: var(--adwaita-icon-window-close-symbolic);
background-color: currentColor;
}`,
      dark: `body.mod-linux.theme-dark {
--adwaita-mod-background: #2e2e2e;
--adwaita-mod-background-focus: #444444;
--adwaita-mod-background-hover: #4f4f4f;
--adwaita-mod-background-active: #6e6e6e;
--adwaita-mod-foreground: #929292;
}`,
      light: `body.mod-linux.theme-light {
--adwaita-mod-background: #efefef;
--adwaita-mod-background-focus: #d8d8d8;
--adwaita-mod-background-hover: #cfcfcf;
--adwaita-mod-background-active: #b3b3b3;
--adwaita-mod-foreground: #949494;
}`,
    },
    "adwaita-window-button-minimize-hide": {
      general: `body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-minimize-hide .titlebar-button-container.mod-right .titlebar-button.mod-minimize, body.adwaita-mod-always.adwaita-window-button-minimize-hide .titlebar-button-container.mod-right .titlebar-button.mod-minimize, body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-minimize-hide .titlebar-button-container.mod-right .titlebar-button.mod-minimize {
display: none;
}

body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide), body.adwaita-mod-always.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide), body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide) {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px));
}

body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide), body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-close-hide.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide), body.adwaita-mod-always.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide), body.adwaita-mod-always.adwaita-window-button-close-hide.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide), body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide), body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-close-hide.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide) {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px - 38px));
}

body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide, body.adwaita-mod-always.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide, body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px - 38px - 38px));
}`,
    },
    "adwaita-window-button-maximize-hide": {
      general: `body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-maximize-hide .titlebar-button-container.mod-right .titlebar-button.mod-maximize, body.adwaita-mod-always.adwaita-window-button-maximize-hide .titlebar-button-container.mod-right .titlebar-button.mod-maximize, body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-maximize-hide .titlebar-button-container.mod-right .titlebar-button.mod-maximize {
display: none;
}

body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide.adwaita-window-button-minimize-hide), body.adwaita-mod-always.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide.adwaita-window-button-minimize-hide), body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide.adwaita-window-button-minimize-hide) {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px));
}

body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide), body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide), body.adwaita-mod-always.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide), body.adwaita-mod-always.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide), body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide:not(.adwaita-window-button-close-hide), body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide) {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px - 38px));
}

body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-minimize-hide.adwaita-window-button-close-hide, body.adwaita-mod-always.adwaita-window-button-minimize-hide.adwaita-window-button-close-hide, body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-minimize-hide.adwaita-window-button-close-hide {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px - 38px - 38px));
}`,
    },
    "adwaita-window-button-close-hide": {
      general: `body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-close-hide .titlebar-button-container.mod-right .titlebar-button.mod-close, body.adwaita-mod-always.adwaita-window-button-close-hide .titlebar-button-container.mod-right .titlebar-button.mod-close, body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-close-hide .titlebar-button-container.mod-right .titlebar-button.mod-close {
display: none;
}

body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide), body.adwaita-mod-always.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide), body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide) {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px));
}

body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide), body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide), body.adwaita-mod-always.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide), body.adwaita-mod-always.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide), body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide:not(.adwaita-window-button-minimize-hide), body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-minimize-hide:not(.adwaita-window-button-maximize-hide) {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px - 38px));
}

body:not(.adwaita-mod-always, .adwaita-mod-linux-only, .adwaita-mod-never).mod-linux.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide, body.adwaita-mod-always.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide, body.adwaita-mod-linux-only.mod-linux.adwaita-window-button-minimize-hide.adwaita-window-button-maximize-hide.adwaita-window-button-close-hide {
--frame-right-space: calc(var(--adwaita-mod-scale) * (120px - 38px - 38px - 38px));
}`,
    },
    "adwaita-tabs-always": {
      general: `body.adwaita-tabs-always {
--tab-radius-active: 4px;
}

body.adwaita-tabs-always:not(.adwaita-tabs-short) {
--tab-width: 10000px;
/* infinite width */
--tab-max-width: none;
}

body.adwaita-tabs-always .workspace-tab-header-container .workspace-tab-header-container-inner {
--tab-outline-width: 0;
}

body.adwaita-tabs-always .workspace-tab-header-container .workspace-tab-header-new-tab {
margin-right: var(--size-4-1);
}

body.adwaita-tabs-always .workspace-tab-header-new-tab {
order: 1;
}

body.adwaita-tabs-always .workspace-tab-header-tab-list, body.adwaita-tabs-always .sidebar-toggle-button.mod-right {
order: 2;
}

body.adwaita-tabs-always .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
padding: 0;
margin: 5px 3px 5px 2px;
}

body.adwaita-tabs-always .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active {
color: var(--tab-text-color-focused);
}

body.adwaita-tabs-always .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:before, body.adwaita-tabs-always .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:after {
content: none;
}

body.adwaita-tabs-always .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header .workspace-tab-header-inner::after {
right: -6px;
}

body.adwaita-tabs-always .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header .workspace-tab-header-inner-title {
padding-left: 20px;
text-align: center;
}

body.adwaita-tabs-always .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:last-child .workspace-tab-header-inner::after {
content: none;
}

body.adwaita-tabs-always .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header .workspace-tab-header-inner-close-button {
opacity: 0;
display: flex;
}

body.adwaita-tabs-always .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, body.adwaita-tabs-always .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header :hover .workspace-tab-header-inner-close-button {
opacity: 1;
}`,
      dark: `body.theme-dark {
--tab-background-active: #323232;
}

body.is-focused {
--tab-background-active: #464646;
}`,
      light: `body.theme-light {
--tab-background-active: #f0f0f0;
}

body.is-focused {
--tab-background-active: #d8d8d8;
}`,
    },
    "adwaita-tabs-linux-only": {
      general: `body.mod-linux {
--tab-radius-active: 4px;
}

body.mod-linux:not(.adwaita-tabs-short) {
--tab-width: 10000px;
/* infinite width */
--tab-max-width: none;
}

body.mod-linux .workspace-tab-header-container .workspace-tab-header-container-inner {
--tab-outline-width: 0;
}

body.mod-linux .workspace-tab-header-container .workspace-tab-header-new-tab {
margin-right: var(--size-4-1);
}

body.mod-linux .workspace-tab-header-new-tab {
order: 1;
}

body.mod-linux .workspace-tab-header-tab-list, body.mod-linux .sidebar-toggle-button.mod-right {
order: 2;
}

body.mod-linux .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
padding: 0;
margin: 5px 3px 5px 2px;
}

body.mod-linux .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active {
color: var(--tab-text-color-focused);
}

body.mod-linux .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:before, body.mod-linux .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:after {
content: none;
}

body.mod-linux .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header .workspace-tab-header-inner::after {
right: -6px;
}

body.mod-linux .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header .workspace-tab-header-inner-title {
padding-left: 20px;
text-align: center;
}

body.mod-linux .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:last-child .workspace-tab-header-inner::after {
content: none;
}

body.mod-linux .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header .workspace-tab-header-inner-close-button {
opacity: 0;
display: flex;
}

body.mod-linux .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, body.mod-linux .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header :hover .workspace-tab-header-inner-close-button {
opacity: 1;
}`,
      dark: `body.mod-linux.theme-dark {
--tab-background-active: #323232;
}

body.mod-linux.is-focused {
--tab-background-active: #464646;
}`,
      light: `body.mod-linux.theme-light {
--tab-background-active: #f0f0f0;
}

body.mod-linux.is-focused {
--tab-background-active: #d8d8d8;
}`,
    },
    "adwaita-colors-always": {
      general: `body.adwaita-colors-always {
--titlebar-background: var(--adwaita-headerbar-backdrop-color);
--titlebar-background-focused: var(--adwaita-headerbar-bg-color);
--titlebar-text-color-focused: var(--adwaita-headerbar-fg-color);
--text-normal: var(--adwaita-view-fg-color);
}

body.is-focused .workspace-tabs.mod-top .workspace-tab-header-container, body.is-focused .sidebar-toggle-button {
--icon-color: var(--adwaita-headerbar-fg-color);
--icon-color-hover: var(--adwaita-headerbar-fg-color);
--icon-color-focused: var(--adwaita-headerbar-fg-color);
--tab-text-color-focused: var(--adwaita-headerbar-fg-color);
--tab-text-color-focused-active-current: var(--adwaita-headerbar-fg-color);
}

body.adwaita-colors-always .titlebar-button.mod-logo:hover {
background-color: inherit;
}`,
      dark: `body.theme-dark {
--titlebar-text-color: #919191;
--icon-color: #929292;
--icon-color-hover: #929292;
--icon-color-focused: #929292;
--tab-text-color: #929292;
--tab-text-color-focused: #8a8a8a;
--tab-text-color-focused-active-current: #8a8a8a;
--background-modifier-hover: #323232;
}

body.is-focused .workspace-tabs.mod-top .workspace-tab-header-container, body.is-focused .sidebar-toggle-button {
--background-modifier-hover: #464646;
}`,
      light: `body.theme-light {
--titlebar-text-color: #8c8c8c;
--icon-color: #939393;
--icon-color-hover: #939393;
--icon-color-focused: #939393;
--tab-text-color: #939393;
--tab-text-color-focused: #939393;
--tab-text-color-focused-active-current: #939393;
--background-modifier-hover: #f0f0f0;
}

body.is-focused .workspace-tabs.mod-top .workspace-tab-header-container, body.is-focused .sidebar-toggle-button {
--background-modifier-hover: #d8d8d8;
}`,
    },
    "adwaita-colors-linux-only": {
      general: `body.mod-linux {
--titlebar-background: var(--adwaita-headerbar-backdrop-color);
--titlebar-background-focused: var(--adwaita-headerbar-bg-color);
--titlebar-text-color-focused: var(--adwaita-headerbar-fg-color);
--text-normal: var(--adwaita-view-fg-color);
}

body.mod-linux.is-focused .workspace-tabs.mod-top .workspace-tab-header-container, body.mod-linux.is-focused .sidebar-toggle-button {
--icon-color: var(--adwaita-headerbar-fg-color);
--icon-color-hover: var(--adwaita-headerbar-fg-color);
--icon-color-focused: var(--adwaita-headerbar-fg-color);
--tab-text-color-focused: var(--adwaita-headerbar-fg-color);
--tab-text-color-focused-active-current: var(--adwaita-headerbar-fg-color);
}

body.mod-linux .titlebar-button.mod-logo:hover {
background-color: inherit;
}`,
      dark: `body.mod-linux.theme-dark {
--titlebar-text-color: #919191;
--icon-color: #929292;
--icon-color-hover: #929292;
--icon-color-focused: #929292;
--tab-text-color: #929292;
--tab-text-color-focused: #8a8a8a;
--tab-text-color-focused-active-current: #8a8a8a;
--background-modifier-hover: #323232;
}

body.mod-linux.is-focused .workspace-tabs.mod-top .workspace-tab-header-container, body.mod-linux.is-focused .sidebar-toggle-button {
--background-modifier-hover: #464646;
}`,
      light: `body.mod-linux.theme-light {
--titlebar-text-color: #8c8c8c;
--icon-color: #939393;
--icon-color-hover: #939393;
--icon-color-focused: #939393;
--tab-text-color: #939393;
--tab-text-color-focused: #939393;
--tab-text-color-focused-active-current: #939393;
--background-modifier-hover: #f0f0f0;
}

body.mod-linux.is-focused .workspace-tabs.mod-top .workspace-tab-header-container, body.mod-linux.is-focused .sidebar-toggle-button {
--background-modifier-hover: #d8d8d8;
}`,
    },
    "adwaita-font-always": {
      general: `body.adwaita-font-always {
--titlebar-height: 45px;
--font-interface-theme: Cantarell;
--font-ui-small: 15px;
--h1-weight: 900;
}

body.adwaita-font-always .titlebar-text {
top: 10px;
height: auto;
}`,
    },
    "adwaita-font-linux-only": {
      general: `body.mod-linux {
--titlebar-height: 45px;
--font-interface-theme: Cantarell;
--font-ui-small: 15px;
--h1-weight: 900;
}

body.mod-linux .titlebar-text {
top: 10px;
height: auto;
}`,
    },
    "adwaita-icons-always": {
      general: `body.adwaita-icons-always {
--titlebar-height: 45px;
--header-height: 46px;
}

body.adwaita-icons-always svg.logo-wireframe {
stroke-width: 45;
}

body.is-frameless:not(.is-hidden-frameless) .app-container {
margin-top: -9px;
height: calc(100% + 9px);
}

body.adwaita-icons-always .sidebar-toggle-button, body.adwaita-icons-always .workspace-tab-header-new-tab, body.adwaita-icons-always .workspace-tab-header-tab-list, body.adwaita-icons-always .mod-left-split .workspace-tabs .workspace-tab-header-container-inner, body.adwaita-icons-always .mod-right-split .workspace-tabs .workspace-tab-header-container-inner {
margin-top: 0;
padding-top: 0;
padding-bottom: 0;
}

body.adwaita-icons-always .mod-left-split .workspace-tabs .workspace-tab-header, body.adwaita-icons-always .mod-right-split .workspace-tabs .workspace-tab-header, body.adwaita-icons-always .sidebar-toggle-button .clickable-icon, body.adwaita-icons-always .workspace-tabs.mod-top .workspace-tab-header-container .clickable-icon {
height: 34px;
min-width: 34px;
margin-top: auto;
margin-bottom: auto;
}

body.adwaita-icons-always .sidebar-toggle-button.mod-left .clickable-icon svg {
display: none;
}

body.adwaita-icons-always .sidebar-toggle-button.mod-left .clickable-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-sidebar-show-symbolic);
mask-image: var(--adwaita-icon-sidebar-show-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.adwaita-icons-always .sidebar-toggle-button.mod-right .clickable-icon svg {
display: none;
}

body.adwaita-icons-always .sidebar-toggle-button.mod-right .clickable-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-sidebar-show-right-symbolic);
mask-image: var(--adwaita-icon-sidebar-show-right-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.adwaita-icons-always .workspace-tab-header-new-tab .clickable-icon svg {
display: none;
}

body.adwaita-icons-always .workspace-tab-header-new-tab .clickable-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-tab-new-symbolic);
mask-image: var(--adwaita-icon-tab-new-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.adwaita-icons-always .workspace-tab-header-tab-list .clickable-icon svg {
display: none;
}

body.adwaita-icons-always .workspace-tab-header-tab-list .clickable-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-go-down-symbolic);
mask-image: var(--adwaita-icon-go-down-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.adwaita-icons-always .workspace-tab-header-inner-close-button svg {
display: none;
}

body.adwaita-icons-always .workspace-tab-header-inner-close-button::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-window-close-symbolic);
mask-image: var(--adwaita-icon-window-close-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.adwaita-icons-always .workspace-tab-header[data-type="file-explorer"] .workspace-tab-header-inner-icon svg {
display: none;
}

body.adwaita-icons-always .workspace-tab-header[data-type="file-explorer"] .workspace-tab-header-inner-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-folder-visiting-symbolic);
mask-image: var(--adwaita-icon-folder-visiting-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.adwaita-icons-always .workspace-tab-header[data-type="search"] .workspace-tab-header-inner-icon svg {
display: none;
}

body.adwaita-icons-always .workspace-tab-header[data-type="search"] .workspace-tab-header-inner-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-folder-saved-search-symbolic);
mask-image: var(--adwaita-icon-folder-saved-search-symbolic);
width: 16px;
height: 16px;
margin: auto;
}`,
    },
    "adwaita-icons-linux-only": {
      general: `body.mod-linux {
--titlebar-height: 45px;
--header-height: 46px;
}

body.mod-linux svg.logo-wireframe {
stroke-width: 45;
}

body.mod-linux.is-frameless:not(.is-hidden-frameless) .app-container {
margin-top: -9px;
height: calc(100% + 9px);
}

body.mod-linux .sidebar-toggle-button, body.mod-linux .workspace-tab-header-new-tab, body.mod-linux .workspace-tab-header-tab-list, body.mod-linux .mod-left-split .workspace-tabs .workspace-tab-header-container-inner, body.mod-linux .mod-right-split .workspace-tabs .workspace-tab-header-container-inner {
margin-top: 0;
padding-top: 0;
padding-bottom: 0;
}

body.mod-linux .mod-left-split .workspace-tabs .workspace-tab-header, body.mod-linux .mod-right-split .workspace-tabs .workspace-tab-header, body.mod-linux .sidebar-toggle-button .clickable-icon, body.mod-linux .workspace-tabs.mod-top .workspace-tab-header-container .clickable-icon {
height: 34px;
min-width: 34px;
margin-top: auto;
margin-bottom: auto;
}

body.mod-linux .sidebar-toggle-button.mod-left .clickable-icon svg {
display: none;
}

body.mod-linux .sidebar-toggle-button.mod-left .clickable-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-sidebar-show-symbolic);
mask-image: var(--adwaita-icon-sidebar-show-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.mod-linux .sidebar-toggle-button.mod-right .clickable-icon svg {
display: none;
}

body.mod-linux .sidebar-toggle-button.mod-right .clickable-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-sidebar-show-right-symbolic);
mask-image: var(--adwaita-icon-sidebar-show-right-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.mod-linux .workspace-tab-header-new-tab .clickable-icon svg {
display: none;
}

body.mod-linux .workspace-tab-header-new-tab .clickable-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-tab-new-symbolic);
mask-image: var(--adwaita-icon-tab-new-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.mod-linux .workspace-tab-header-tab-list .clickable-icon svg {
display: none;
}

body.mod-linux .workspace-tab-header-tab-list .clickable-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-go-down-symbolic);
mask-image: var(--adwaita-icon-go-down-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.mod-linux .workspace-tab-header-inner-close-button svg {
display: none;
}

body.mod-linux .workspace-tab-header-inner-close-button::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-window-close-symbolic);
mask-image: var(--adwaita-icon-window-close-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.mod-linux .workspace-tab-header[data-type="file-explorer"] .workspace-tab-header-inner-icon svg {
display: none;
}

body.mod-linux .workspace-tab-header[data-type="file-explorer"] .workspace-tab-header-inner-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-folder-visiting-symbolic);
mask-image: var(--adwaita-icon-folder-visiting-symbolic);
width: 16px;
height: 16px;
margin: auto;
}

body.mod-linux .workspace-tab-header[data-type="search"] .workspace-tab-header-inner-icon svg {
display: none;
}

body.mod-linux .workspace-tab-header[data-type="search"] .workspace-tab-header-inner-icon::after {
content: '';
background-color: currentColor !important;
-webkit-mask-image: var(--adwaita-icon-folder-saved-search-symbolic);
mask-image: var(--adwaita-icon-folder-saved-search-symbolic);
width: 16px;
height: 16px;
margin: auto;
}`,
    },
  },
};
