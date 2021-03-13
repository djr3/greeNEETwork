module.exports = {
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],

  moduleNameMapper: {
    "^.+\\.(css|less|scss|html)$": "babel-jest",
  },
  modulePaths: ["<rootDir>/src/"],

  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.{spec,test}.{j,t}{s,sx}"],
};
