/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // https://kulshekhar.github.io/ts-jest/docs/getting-started/presets
  preset: "ts-jest/presets/js-with-ts-esm",
  extensionsToTreatAsEsm: [".ts"],
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: "tsconfig.spec.json",
    },
  },
  testMatch: ["**/*.spec.ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testEnvironment: "node",
  projects: ["./libs/*"],
  collectCoverageFrom: ["./libs/**/*.ts"],
};
