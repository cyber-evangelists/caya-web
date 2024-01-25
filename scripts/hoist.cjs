#!/usr/bin/env node
const path = require("node:path");
const fs = require("node:fs");
const readJSON = (path) => JSON.parse(fs.readFileSync(path, "utf-8"));
const rootPackageJsonPath = path.resolve("./package.json");

const packages = {
  ui: "ui",
};

const joinedScripts = Object.keys(packages)
  .map((name) => ({
    name,
    path: path.join("src", packages[name]),
  }))
  .reduce((acc, cur) => {
    console.log(cur);
    const { scripts } = readJSON(path.resolve(cur.path, "package.json"));

    const s = Object.keys(scripts || {}).reduce(
      (a, script) => ({
        ...a,
        [`${cur.name}:${script}`]: `pnpm -C ${cur.path} ${script}`,
      }),
      {}
    );

    return {
      ...acc,
      ...s,
    };
  }, {});

const rootPackage = readJSON(rootPackageJsonPath);
Object.assign(rootPackage.scripts, joinedScripts);
console.log({ rootPackage });
fs.writeFileSync(
  rootPackageJsonPath,
  JSON.stringify(rootPackage, null, 2) + "\n",
  "utf-8"
);
