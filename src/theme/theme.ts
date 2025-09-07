import { createTheme } from "@shopify/restyle";

import { colors } from "./colors";
import { ViewStyle } from "react-native";

export const theme = createTheme({
  colors: colors.lightTheme,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
    xxxl: 48,
    huge: 56,
  },
  borderRadii: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];

export const $shadowProps: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,
};
