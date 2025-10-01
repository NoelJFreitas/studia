export const palette = {
  vibrantPurple: "#9747FF",
  charcoalGray: "#454545",
  almostBlack: "#333333",
  pureWhite: "#FFFFFF",
  forestGreen: "#1B965C",
  brightPink: "#E240E5",
  deepIndigo: "#292150",
  offWhite: "#FBFBFB",
  jetBlack: "#1E2124",
  coolGray: "#B8BBBE",
  darkSlate: "#282B2E",
  lightGray: "#E2E2E2",
  lightSilver: "#F5F5F5",
  base: "#fcfcfc",
  red: "#FF0000",
  lightPurple: "#B6B0D9",
};

const lightTheme = {
  ...palette,
  primary: palette.vibrantPurple,
  primaryContrast: palette.offWhite,

  background: palette.pureWhite,

  buttonPrimary: palette.almostBlack,
  buttonTextPrimary: palette.pureWhite,

  primaryTitle: palette.jetBlack,
  primaryText: palette.darkSlate,

  error: palette.red,
};

export const colors = { palette, lightTheme };
