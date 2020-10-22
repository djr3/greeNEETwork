module.exports = {
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],

  // moduleDirectories: ["<rootDir>/src"],
  // moduleFileExtensions: ["test.tsx", "test.ts", "test.jsx", "test.js", "json"],
  moduleNameMapper: {
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    //   "<rootDir>/test/mocks.ts",
    "^.+\\.(css|less|scss|html)$": "babel-jest",
  },
  modulePaths: ["<rootDir>/src/"],

  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.{spec,test}.{j,t}{s,sx}"],
};
