module.exports = [
  {
    name: "@storybook/preset-typescript",
    options: {
      transpileManager: true,
      tsLoaderOptions: {
        compilerOptions: {
          jsx: "react",
          noEmit: false,
          sourceMap: true,
        },
      },
    },
  },
  // "@storybook/preset-scss"
];
