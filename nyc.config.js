module.exports = {
  "extends": "@istanbuljs/nyc-config-typescript",
  "include": [
    "src/api/services",
    "src/api/controllers",
  ],
  "reporter": [
    "text",
    "html",
    "lcov",
    "text-summary",
    "json-summary"
  ],
  "all": true,
};
