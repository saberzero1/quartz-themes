import { readFileSync, writeFileSync, readdirSync } from "fs";

/*

if both dark.json and light.json are present, combine them into a single object
combine the two objects into a single object with the same keys
if the values are the same, use that value
if the values are different, combine them using the light-dark CSS function
if only one is present, use that one

 */

const file = "./runner/results/80s-neon/dark.json";
const data = JSON.parse(readFileSync(file, "utf8"));
//console.log(data);
const scssFile = "./templates/_index.scss";
const scssData = readFileSync(scssFile, "utf8");
//console.log(scssData);
let resultScss = "";
for (const [key, value] of Object.entries(data)) {
  const values = Object.entries(value)
    .map(([k, v]) => `${k}: ${v};`)
    .join("\n  ");
  resultScss += `
${key} {
  ${values}
}
`;
}
console.log(resultScss);
