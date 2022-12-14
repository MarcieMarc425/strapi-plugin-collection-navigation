module.exports = {
  // Files to check for version
  packageFiles: [
    {
      filename: "package.json",
      type: "json",
    },
  ],
  types: [
    {
      type: "feat",
      section: "Features ๐ฏ",
    },
    {
      type: "fix",
      section: "Bug Fixes ๐",
    },
    {
      type: "chore",
      section: "Chores ๐งน",
    },
    {
      type: "docs",
      section: "Documentation ๐",
    },
    {
      type: "style",
      section: "Styles ๐",
    },
    {
      type: "refactor",
      section: "Refactor ๐",
    },
    {
      type: "perf",
      section: "Performance ๐",
    },
    {
      type: "test",
      section: "Tests ๐งช",
    },
    {
      type: "build",
      section: "Build System ๐ ",
    },
    {
      type: "ci",
      section: "Continuous Integration ๐",
    },
    {
      type: "revert",
      section: "Reverts โช",
    },
  ],
};
