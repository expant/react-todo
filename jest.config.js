import { createDefaultPreset } from "ts-jest";

/** @type {import("jest").Config} **/
const tsJestConfig = createDefaultPreset();

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: tsJestConfig.transform,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
