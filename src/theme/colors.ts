import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#028AE5",
  primaryBright: "#028AE5",
  primaryDark: "#028AE5",
  secondary: "#028AE5",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#028AE5",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F2F5FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#028AE5",
  textDisabled: "#BDC2C4",
  textSubtle: "#0A8EE6",
  borderColor: "#E9EAEB",
  card: "#fbfafa",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#028AE5",
  background: "#0B1018",
  backgroundDisabled: "#0B1018",
  contrast: "#FFFFFF",
  invertedContrast: "#0B1018",
  input: "#483f5a",
  primaryDark: "#028AE5",
  tertiary: "#353547",
  text: "#fff",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#191f2a",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
