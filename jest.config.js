module.exports = {
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.js"
};
