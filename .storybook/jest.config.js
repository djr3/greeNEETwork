module.exports = {
  preset: "ts-jest",

  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],

  globals: {
    "ts-jest": {
      // TSConfig Compiler Options Override
      // we can either provide the path of a tsconfig or inline the config
      compiler: "typescript",
      // tsConfig: "tsconfig.jest.json",
      tsConfig: {
        noEmit: false,
        module: "commonjs",
        allowJs: true, // Needed for ts-jest preset to handle .js and .jsx files
        jsx: "react", // TypeScript will transform jsx in js
        lib: ["es5", "es6", "es7", "es2017", "dom"],
      },
      babelConfig: {
        presets: ["next/babel"],
        plugins: [],
      },
      diagnostics: false,
    },
  },

  moduleNameMapper: {
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    //   "<rootDir>/test/mocks.ts",
    "^.+\\.(css|less|scss|html)$": "babel-jest",
  },

  rootDir: "../",

  setupFilesAfterEnv: ["<rootDir>/enzyme.setup.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],

  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/.storybook/**/*.{spec,test}.{j,t}{s,sx}"],
  transform: {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
