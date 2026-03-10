import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pale", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-error: #9e5245;
  --background-primary: #323232;
  --bases-cards-background: #323232;
  --bases-table-border-color: #8c8c8cc7;
  --bases-table-cell-background-active: #323232;
  --bases-table-header-background: #323232;
  --bases-table-summary-background: #323232;
  --blur-background: color-mix(in srgb, #484848 65%, transparent) linear-gradient(#484848, color-mix(in srgb, #484848 65%, transparent));
  --canvas-background: #323232;
  --checkbox-marker-color: #323232;
  --checkbox-radius: 5px;
  --checkbox-size: 20px;
  --code-background: #232323;
  --code-function: #dcbb59;
  --code-keyword: #ff6347;
  --code-normal: #c4c4c4;
  --code-operator: #b89cdd;
  --code-property: #d29a8c;
  --code-string: #05a3a3;
  --code-value: #e3b750;
  --dropdown-background: #484848;
  --file-header-background: #323232;
  --file-header-background-focused: #323232;
  --flair-background: #484848;
  --h1-color: #d9d8d8;
  --h2-color: #d4d4d4;
  --h3-color: #b4b4b4;
  --h4-color: #a6a6a6;
  --h5-color: #9a9a9a;
  --h6-color: #929292;
  --hr-color: #8c8c8c3c;
  --icon-color: #dddddd;
  --icon-l: 20px;
  --icon-stroke: 2.2px;
  --icon-xs: 15px;
  --inline-title-color: #d9d8d8;
  --interactive-normal: #484848;
  --light: var(--background-primary);
  --modal-background: #323232;
  --nav-item-color: #ffffff;
  --nav-item-color-active: #ffffffbb;
  --nav-item-color-hover: #dedede6e;
  --nav-item-size: 12px;
  --pdf-background: #323232;
  --pdf-page-background: #323232;
  --pdf-sidebar-background: #323232;
  --prompt-background: #323232;
  --raised-background: color-mix(in srgb, #484848 65%, transparent) linear-gradient(#484848, color-mix(in srgb, #484848 65%, transparent));
  --ribbon-background-collapsed: #323232;
  --ribbon-width: 51px;
  --search-result-background: #323232;
  --setting-bg: #2a2a2a98;
  --shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.278);
  --suggestion-background: #323232;
  --tab-background-active: #4d4c4cf3;
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-font-size: 12px;
  --tab-outline-color: transparent;
  --table-border-color: #8c8c8cc7;
  --table-header-border-color: #8c8c8cc7;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(50, 50, 50);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(50, 50, 50);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(50, 50, 50);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(128, 128, 128);
}

body div#quartz-root {
  background-color: rgb(50, 50, 50);
}`,
    lists: `body ol.overflow {
  background-color: rgb(50, 50, 50);
}

body ul.overflow {
  background-color: rgb(50, 50, 50);
}`,
    tables: `body .spacer {
  background-color: rgb(50, 50, 50);
}

body td {
  border-bottom-color: rgba(140, 140, 140, 0.78);
  border-left-color: rgba(140, 140, 140, 0.78);
  border-right-color: rgba(140, 140, 140, 0.78);
  border-top-color: rgba(140, 140, 140, 0.78);
}

body th {
  border-bottom-color: rgba(140, 140, 140, 0.78);
  border-left-color: rgba(140, 140, 140, 0.78);
  border-right-color: rgba(140, 140, 140, 0.78);
  border-top-color: rgba(140, 140, 140, 0.78);
}`,
    code: `body code {
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(196, 196, 196);
  border-right-color: rgb(196, 196, 196);
  border-top-color: rgb(196, 196, 196);
  color: rgb(196, 196, 196);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 35, 35);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 35, 35);
}

body pre > code > [data-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 187, 89);
  border-left-color: rgb(220, 187, 89);
  border-right-color: rgb(220, 187, 89);
  border-top-color: rgb(220, 187, 89);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 35, 35);
}

body pre:has(> code) {
  background-color: rgb(35, 35, 35);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: 0px;
  margin-right: 6.66667px;
  width: 20px;
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
}

body h1 {
  color: rgb(217, 216, 216);
}

body h2 {
  color: rgb(212, 212, 212);
}

body h2.page-title, h2.page-title a {
  color: rgb(217, 216, 216);
}

body h3 {
  color: rgb(180, 180, 180);
}

body h4 {
  color: rgb(166, 166, 166);
}

body h5 {
  color: rgb(154, 154, 154);
}

body h6 {
  color: rgb(146, 146, 146);
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}

body ::-webkit-scrollbar-corner {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}

body ::-webkit-scrollbar-track {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(255, 255, 255, 0.733);
  border-left-color: rgba(255, 255, 255, 0.733);
  border-right-color: rgba(255, 255, 255, 0.733);
  border-top-color: rgba(255, 255, 255, 0.733);
  color: rgba(255, 255, 255, 0.733);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body ul.section-ul {
  background-color: rgb(50, 50, 50);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    darkmode: `body .darkmode {
  cursor: pointer;
}`,
    misc: `body kbd {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(196, 196, 196);
  border-right-color: rgb(196, 196, 196);
  border-top-color: rgb(196, 196, 196);
  color: rgb(196, 196, 196);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-error: #9e5245;
  --background-primary: #efdcbc;
  --background-secondary: rgba(255, 255, 255, 0.062);
  --bases-cards-background: #efdcbc;
  --bases-table-border-color: #8c8c8cc7;
  --bases-table-cell-background-active: #efdcbc;
  --bases-table-header-background: #efdcbc;
  --bases-table-summary-background: #efdcbc;
  --blur-background: color-mix(in srgb, #efdcbc 65%, transparent) linear-gradient(#efdcbc, color-mix(in srgb, #efdcbc 65%, transparent));
  --canvas-background: #efdcbc;
  --checkbox-marker-color: #efdcbc;
  --checkbox-radius: 5px;
  --checkbox-size: 20px;
  --code-background: #292929;
  --code-function: #dcbb59;
  --code-keyword: #ff6347;
  --code-normal: #c4c4c4;
  --code-operator: #b89cdd;
  --code-property: #d29a8c;
  --code-string: #05a3a3;
  --code-value: #e3b750;
  --dropdown-background: #ecdfd2;
  --file-header-background: #efdcbc;
  --file-header-background-focused: #efdcbc;
  --flair-background: #ecdfd2;
  --h1-color: #242424c7;
  --h2-color: #242424c7;
  --h3-color: #2d2d2dc7;
  --h4-color: #363636c7;
  --h5-color: #3e3e3ec7;
  --h6-color: #616161c7;
  --hr-color: #8c8c8c46;
  --icon-color: #525252;
  --icon-l: 20px;
  --icon-stroke: 2.2px;
  --icon-xs: 15px;
  --inline-title-color: #242424c7;
  --interactive-normal: #ecdfd2;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --menu-background: rgba(255, 255, 255, 0.062);
  --modal-background: #efdcbc;
  --nav-item-color: #828282;
  --nav-item-color-active: #191919bb;
  --nav-item-color-hover: #3e3e3e9c;
  --nav-item-size: 12px;
  --pdf-background: #efdcbc;
  --pdf-page-background: #efdcbc;
  --pdf-sidebar-background: #efdcbc;
  --prompt-background: #efdcbc;
  --raised-background: color-mix(in srgb, #efdcbc 65%, transparent) linear-gradient(#efdcbc, color-mix(in srgb, #efdcbc 65%, transparent));
  --ribbon-background: rgba(255, 255, 255, 0.062);
  --ribbon-background-collapsed: #efdcbc;
  --ribbon-width: 51px;
  --search-result-background: #efdcbc;
  --setting-bg: #efdcbcb6;
  --shadow: 0 2px 9px 1px rgba(71, 71, 71, 0.212);
  --sidebar-forground-color: #b8b8b8bd;
  --status-bar-background: rgba(255, 255, 255, 0.062);
  --suggestion-background: #efdcbc;
  --tab-background-active: #efdcbc;
  --tab-container-background: rgba(255, 255, 255, 0.062);
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-font-size: 12px;
  --tab-outline-color: transparent;
  --tab-switcher-background: rgba(255, 255, 255, 0.062);
  --tab-switcher-menubar-background: linear-gradient(to top, rgba(255, 255, 255, 0.062), transparent);
  --tab-text-color: #242424c7;
  --table-border-color: #8c8c8cc7;
  --table-header-border-color: #8c8c8cc7;
  --titlebar-background: rgba(255, 255, 255, 0.062);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 220, 188);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(239, 220, 188);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 220, 188);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(255, 255, 255, 0.063);
  border-left-color: rgb(128, 128, 128);
}

body div#quartz-root {
  background-color: rgb(239, 220, 188);
}`,
    lists: `body ol.overflow {
  background-color: rgb(239, 220, 188);
}

body ul.overflow {
  background-color: rgb(239, 220, 188);
}`,
    tables: `body .spacer {
  background-color: rgb(239, 220, 188);
}

body td {
  border-bottom-color: rgba(140, 140, 140, 0.78);
  border-left-color: rgba(140, 140, 140, 0.78);
  border-right-color: rgba(140, 140, 140, 0.78);
  border-top-color: rgba(140, 140, 140, 0.78);
}

body th {
  border-bottom-color: rgba(140, 140, 140, 0.78);
  border-left-color: rgba(140, 140, 140, 0.78);
  border-right-color: rgba(140, 140, 140, 0.78);
  border-top-color: rgba(140, 140, 140, 0.78);
}`,
    code: `body code {
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(196, 196, 196);
  border-right-color: rgb(196, 196, 196);
  border-top-color: rgb(196, 196, 196);
  color: rgb(196, 196, 196);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 41, 41);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 41, 41);
}

body pre > code > [data-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 187, 89);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 187, 89);
  border-left-color: rgb(220, 187, 89);
  border-right-color: rgb(220, 187, 89);
  border-top-color: rgb(220, 187, 89);
}

body pre > code, pre:has(> code) {
  background-color: rgb(41, 41, 41);
}

body pre:has(> code) {
  background-color: rgb(41, 41, 41);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: 0px;
  margin-right: 6.66667px;
  width: 20px;
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
}

body h1 {
  color: rgba(36, 36, 36, 0.78);
}

body h2 {
  color: rgba(36, 36, 36, 0.78);
}

body h2.page-title, h2.page-title a {
  color: rgba(36, 36, 36, 0.78);
}

body h3 {
  color: rgba(45, 45, 45, 0.78);
}

body h4 {
  color: rgba(54, 54, 54, 0.78);
}

body h5 {
  color: rgba(62, 62, 62, 0.78);
}

body h6 {
  color: rgba(97, 97, 97, 0.78);
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}

body ::-webkit-scrollbar-corner {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}

body ::-webkit-scrollbar-track {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(25, 25, 25, 0.733);
  border-left-color: rgba(25, 25, 25, 0.733);
  border-right-color: rgba(25, 25, 25, 0.733);
  border-top-color: rgba(25, 25, 25, 0.733);
  color: rgba(25, 25, 25, 0.733);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(82, 82, 82);
  border-left-color: rgb(82, 82, 82);
  border-right-color: rgb(82, 82, 82);
  border-top-color: rgb(82, 82, 82);
  color: rgb(82, 82, 82);
}`,
    footer: `body footer {
  background-color: rgba(255, 255, 255, 0.063);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(130, 130, 130);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(130, 130, 130);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}

body ul.section-ul {
  background-color: rgb(239, 220, 188);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(237, 237, 237);
  stroke: rgb(237, 237, 237);
}`,
    misc: `body .navigation-progress {
  background-color: rgba(255, 255, 255, 0.063);
}

body kbd {
  background-color: rgb(41, 41, 41);
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(196, 196, 196);
  border-right-color: rgb(196, 196, 196);
  border-top-color: rgb(196, 196, 196);
  color: rgb(196, 196, 196);
}`,
  },
};
