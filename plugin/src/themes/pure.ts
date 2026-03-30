import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pure", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --collapse-icon-color: #b3b3b3 !important;
  --collapse-icon-color-collapsed: #b3b3b3 !important;
  --list-bullet-size: 4px !important;
  --list-marker-color: #b3b3b3 !important;
  --list-marker-color-hover: #666666 !important;
  --nav-collapse-icon-color: #b3b3b3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(172, 232, 255, 0.39);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}`,
    tables: `html[saved-theme="dark"] body table {
  margin-left: 218.391px;
  margin-right: 218.391px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  color: rgb(30, 30, 30);
  content: "✓";
}`,
  },
  light: {
    base: `:root:root {
  --collapse-icon-color: #5c5c5c !important;
  --collapse-icon-color-collapsed: #5c5c5c !important;
  --list-bullet-size: 4px !important;
  --list-marker-color: #5c5c5c !important;
  --list-marker-color-hover: #ababab !important;
  --nav-collapse-icon-color: #5c5c5c !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgba(172, 232, 255, 0.39);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}`,
    tables: `html[saved-theme="light"] body table {
  margin-left: 218.391px;
  margin-right: 218.391px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
  content: "✓";
}`,
  },
};
