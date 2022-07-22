/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  resolver: "jest-ts-webcompat-resolver",
  collectCoverageFrom: ["src/**/*.ts", "!src/ts/index.ts"],
};