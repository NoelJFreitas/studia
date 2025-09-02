import { createTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native/types";

import { colors } from "./colors";

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
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];
