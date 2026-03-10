import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "adwaita",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cantarell"],
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
  --adwaita-mod-foreground-focus: #ffffff;
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
  --background-modifier-hover: #323232;
  --bases-table-header-background-hover: #323232;
  --bases-table-summary-background-hover: #323232;
  --bodyFont: var(--font-interface);
  --caret-color: #ffffff;
  --code-bracket-background: #323232;
  --code-normal: #ffffff;
  --codeFont: var(--font-interface);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --file-header-font: '??', Cantarell, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 15px;
  --flair-color: #ffffff;
  --font-interface: '??', Cantarell, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Cantarell;
  --font-ui-small: 15px;
  --footnote-input-background-active: #323232;
  --frame-right-space: 120px;
  --graph-text: #ffffff;
  --gray: var(--text-normal);
  --h1-weight: 900;
  --header-height: 46px;
  --headerFont: var(--font-interface);
  --highlight: var(--background-modifier-hover);
  --icon-color: #929292;
  --icon-color-focused: #929292;
  --icon-color-hover: #929292;
  --inline-title-weight: 900;
  --metadata-input-background-active: #323232;
  --metadata-input-font: '??', Cantarell, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #ffffff;
  --metadata-label-background-active: #323232;
  --metadata-label-font: '??', Cantarell, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-property-background-active: #323232;
  --metadata-sidebar-input-font-size: 15px;
  --metadata-sidebar-label-font-size: 15px;
  --nav-heading-color: #ffffff;
  --nav-heading-color-hover: #ffffff;
  --nav-item-background-active: #323232;
  --nav-item-background-hover: #323232;
  --nav-item-color-active: #ffffff;
  --nav-item-color-hover: #ffffff;
  --nav-item-color-selected: #ffffff;
  --nav-item-size: 15px;
  --pill-color-hover: #ffffff;
  --setting-group-heading-color: #ffffff;
  --tab-background-active: #464646;
  --tab-font-size: 15px;
  --tab-max-width: none;
  --tab-radius-active: 4px;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 46px;
  --tab-text-color: #929292;
  --tab-text-color-focused: #8a8a8a;
  --tab-text-color-focused-active-current: #8a8a8a;
  --tab-width: 10000px;
  --table-header-color: #ffffff;
  --text-normal: #ffffff;
  --textHighlight: var(--background-modifier-hover);
  --titleFont: var(--font-interface);
  --titlebar-background: #242424;
  --titlebar-background-focused: #303030;
  --titlebar-height: 45px;
  --titlebar-text-color: #919191;
  --titlebar-text-color-focused: #ffffff;
  --traffic-lights-offset-x: 46px;
  --traffic-lights-offset-y: 46px;
  --vault-profile-color: #ffffff;
  --vault-profile-color-hover: #ffffff;
  --vault-profile-font-size: 15px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
}

body td {
  color: rgb(255, 255, 255);
}

body th {
  color: rgb(255, 255, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(255, 255, 255);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    search: `body .search > .search-button {
  color: rgb(255, 255, 255);
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(50, 50, 50);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > input {
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(50, 50, 50);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(50, 50, 50);
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  color: rgb(255, 255, 255);
}

body h2 {
  color: rgb(255, 255, 255);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
}

body h3 {
  color: rgb(255, 255, 255);
}

body h4 {
  color: rgb(255, 255, 255);
}

body h5 {
  color: rgb(255, 255, 255);
}

body h6 {
  color: rgb(255, 255, 255);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(50, 50, 50);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(146, 146, 146);
  border-left-color: rgb(146, 146, 146);
  border-right-color: rgb(146, 146, 146);
  border-top-color: rgb(146, 146, 146);
  color: rgb(146, 146, 146);
}`,
    footer: `body footer {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body input[type=text] {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
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
  --adwaita-mod-foreground-focus: rgba(0, 0, 0, 0.8);
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
  --background-modifier-hover: #f0f0f0;
  --bases-table-header-background-hover: #f0f0f0;
  --bases-table-summary-background-hover: #f0f0f0;
  --bodyFont: var(--font-interface);
  --caret-color: rgba(0, 0, 0, 0.8);
  --code-bracket-background: #f0f0f0;
  --code-normal: rgba(0, 0, 0, 0.8);
  --codeFont: var(--font-interface);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --file-header-font: '??', Cantarell, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 15px;
  --flair-color: rgba(0, 0, 0, 0.8);
  --font-interface: '??', Cantarell, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Cantarell;
  --font-ui-small: 15px;
  --footnote-input-background-active: #f0f0f0;
  --frame-right-space: 120px;
  --graph-text: rgba(0, 0, 0, 0.8);
  --gray: var(--text-normal);
  --h1-weight: 900;
  --header-height: 46px;
  --headerFont: var(--font-interface);
  --highlight: var(--background-modifier-hover);
  --icon-color: #939393;
  --icon-color-focused: #939393;
  --icon-color-hover: #939393;
  --inline-title-weight: 900;
  --metadata-input-background-active: #f0f0f0;
  --metadata-input-font: '??', Cantarell, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgba(0, 0, 0, 0.8);
  --metadata-label-background-active: #f0f0f0;
  --metadata-label-font: '??', Cantarell, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-property-background-active: #f0f0f0;
  --metadata-sidebar-input-font-size: 15px;
  --metadata-sidebar-label-font-size: 15px;
  --nav-heading-color: rgba(0, 0, 0, 0.8);
  --nav-heading-color-hover: rgba(0, 0, 0, 0.8);
  --nav-item-background-active: #f0f0f0;
  --nav-item-background-hover: #f0f0f0;
  --nav-item-color-active: rgba(0, 0, 0, 0.8);
  --nav-item-color-hover: rgba(0, 0, 0, 0.8);
  --nav-item-color-selected: rgba(0, 0, 0, 0.8);
  --nav-item-size: 15px;
  --pill-color-hover: rgba(0, 0, 0, 0.8);
  --setting-group-heading-color: rgba(0, 0, 0, 0.8);
  --tab-background-active: #d8d8d8;
  --tab-font-size: 15px;
  --tab-max-width: none;
  --tab-radius-active: 4px;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 46px;
  --tab-text-color: #939393;
  --tab-text-color-focused: #939393;
  --tab-text-color-focused-active-current: #939393;
  --tab-width: 10000px;
  --table-header-color: rgba(0, 0, 0, 0.8);
  --text-normal: rgba(0, 0, 0, 0.8);
  --textHighlight: var(--background-modifier-hover);
  --titleFont: var(--font-interface);
  --titlebar-background: #fafafa;
  --titlebar-background-focused: #ffffff;
  --titlebar-height: 45px;
  --titlebar-text-color: #8c8c8c;
  --titlebar-text-color-focused: rgba(0, 0, 0, 0.8);
  --traffic-lights-offset-x: 46px;
  --traffic-lights-offset-y: 46px;
  --vault-profile-color: rgba(0, 0, 0, 0.8);
  --vault-profile-color-hover: rgba(0, 0, 0, 0.8);
  --vault-profile-font-size: 15px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgba(0, 0, 0, 0.8);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgba(0, 0, 0, 0.8);
}

body .page > div#quartz-body div.sidebar {
  color: rgba(0, 0, 0, 0.8);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgba(0, 0, 0, 0.8);
}

body div#quartz-root {
  color: rgba(0, 0, 0, 0.8);
}`,
    typography: `body .page article p > b, b {
  color: rgba(0, 0, 0, 0.8);
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body .page article p > em, em {
  color: rgba(0, 0, 0, 0.8);
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body .page article p > i, i {
  color: rgba(0, 0, 0, 0.8);
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body .page article p > strong, strong {
  color: rgba(0, 0, 0, 0.8);
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body .text-highlight {
  color: rgba(0, 0, 0, 0.8);
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body del {
  color: rgba(0, 0, 0, 0.8);
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration: line-through rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body p {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body dd {
  color: rgba(0, 0, 0, 0.8);
}

body dt {
  color: rgba(0, 0, 0, 0.8);
}

body ol > li {
  color: rgba(0, 0, 0, 0.8);
}

body ol.overflow {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

body ul > li {
  color: rgba(0, 0, 0, 0.8);
}

body ul.overflow {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}`,
    tables: `body .table-container {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

body table {
  color: rgba(0, 0, 0, 0.8);
}

body td {
  color: rgba(0, 0, 0, 0.8);
}

body th {
  color: rgba(0, 0, 0, 0.8);
}`,
    code: `body code {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgba(0, 0, 0, 0.8);
}`,
    images: `body audio {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

body figcaption {
  color: rgba(0, 0, 0, 0.8);
}

body figure {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

body img {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

body video {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}`,
    embeds: `body .footnotes {
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}`,
    checkboxes: `body li.task-list-item[data-task='!'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='*'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='-'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='/'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='>'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='?'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='I'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='S'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='b'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='c'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='d'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='f'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='i'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='k'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='l'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='p'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='u'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body li.task-list-item[data-task='w'] {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}`,
    search: `body .search > .search-button {
  color: rgba(0, 0, 0, 0.8);
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > * {
  color: rgba(0, 0, 0, 0.8);
  outline: rgba(0, 0, 0, 0.8) none 0px;
  text-decoration: rgba(0, 0, 0, 0.8);
  text-decoration-color: rgba(0, 0, 0, 0.8);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(0, 0, 0, 0.8);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgba(0, 0, 0, 0.8);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(240, 240, 240);
  color: rgba(0, 0, 0, 0.8);
}

body .search > .search-container > .search-space > input {
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(240, 240, 240);
  color: rgba(0, 0, 0, 0.8);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  color: rgba(0, 0, 0, 0.8);
}

body h2 {
  color: rgba(0, 0, 0, 0.8);
}

body h2.page-title, h2.page-title a {
  color: rgba(0, 0, 0, 0.8);
}

body h3 {
  color: rgba(0, 0, 0, 0.8);
}

body h4 {
  color: rgba(0, 0, 0, 0.8);
}

body h5 {
  color: rgba(0, 0, 0, 0.8);
}

body h6 {
  color: rgba(0, 0, 0, 0.8);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(147, 147, 147);
  border-left-color: rgb(147, 147, 147);
  border-right-color: rgb(147, 147, 147);
  border-top-color: rgb(147, 147, 147);
  color: rgb(147, 147, 147);
}`,
    footer: `body footer {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgba(0, 0, 0, 0.8);
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

body li.section-li > .section .meta {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}

body .darkmode svg {
  color: rgba(0, 0, 0, 0.8);
  stroke: rgba(0, 0, 0, 0.8);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}

body .page-header h2.page-title {
  color: rgba(0, 0, 0, 0.8);
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: underline dotted rgba(0, 0, 0, 0.8);
}

body details {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

body input[type=text] {
  font-family: "??", Cantarell, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 0.8);
}

body progress {
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-left-color: rgba(0, 0, 0, 0.8);
  border-right-color: rgba(0, 0, 0, 0.8);
  border-top-color: rgba(0, 0, 0, 0.8);
}

body sub {
  color: rgba(0, 0, 0, 0.8);
}

body summary {
  color: rgba(0, 0, 0, 0.8);
}

body sup {
  color: rgba(0, 0, 0, 0.8);
}`,
  },
};
