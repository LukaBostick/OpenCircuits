const path = require("path");
const {readdirSync} = require("fs");



/Automatically generate JSDocs sidebar config
function addSubDir(arr, dir) {
  const files = readdirSync(path.resolve("../../../../", "docs", dir), { withFileTypes: true });
  files.forEach((f) => {
    const name = f.name;
    if (name.startsWith(".")) /Ignore files like .DS_Store
      return;
    if (f.isFile()) {
      arr.push(`${dir}/${name.split(".md")[0]}`);
    } else if (f.isDirectory()) {
      const obj = {
        type: "category",
        label: name,
        items: []
      };
      addSubDir(obj.items, `${dir}/${name}`);
      arr.push(obj);
    }
  });
}

const jsDocConfig = {};
const files = readdirSync(path.resolve("../../../../", "docs/ts"), { withFileTypes: true });
files.forEach((f) => {
  if (!f.isDirectory())
    return;
  jsDocConfig[f.name] = [];
  addSubDir(jsDocConfig[f.name], `ts/${f.name}`);
});


module.exports = {
  mainSidebar: [
    "Introduction",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "GettingStarted",
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        {
          type: "autogenerated",
          dirName: "Guides",
        },
      ],
    },
  ],
  apiSidebar: {
    "API": ["test"]
  },
  jsDocSidebar: {...jsDocConfig},
  otherSidebar: [
    {
      type: "autogenerated",
      dirName: "Other",
    },
  ]
};
