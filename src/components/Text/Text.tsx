import { createText } from "@shopify/restyle";
import { Theme } from "@theme";
import { TextStyle } from "react-native";
import { APP_FONT_FAMILY } from "src/assets/fonts";

const RSText = createText<Theme>();

type TextVariants =
  | "headingLarge"
  | "headingMedium"
  | "headingSmall"
  | "paragraphMedium"
  | "paragraphCaption";

type FontWeight = "bold" | "regular" | "light" | "medium" | "black";

interface TextProps extends React.ComponentProps<typeof RSText> {
  preset?: TextVariants;
  fontWeight?: FontWeight;
}

export function Text({
  fontWeight = "regular",
  preset = "paragraphMedium",
  children,
  color = "primaryText",
  style,
  ...props
}: TextProps) {
  return (
    <RSText
      {...props}
      color={color}
      style={[
        style,
        fontSizes[preset],
        { fontFamily: getFontFamily(fontWeight) },
      ]}
    >
      {children}
    </RSText>
  );
}

export const fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32 },
  headingMedium: { fontSize: 20 },
  headingSmall: { fontSize: 16 },

  paragraphMedium: { fontSize: 14 },
  paragraphCaption: { fontSize: 12 },
};

function getFontFamily(fontWeight?: FontWeight) {
  switch (fontWeight) {
    case "black":
      return APP_FONT_FAMILY.poppinsBlack;
    case "light":
      return APP_FONT_FAMILY.poppinsLight;
    case "bold":
      return APP_FONT_FAMILY.poppinsBold;
    case "medium":
      return APP_FONT_FAMILY.poppinsMedium;
    case "regular":
      return APP_FONT_FAMILY.poppinsRegular;
    default:
      return APP_FONT_FAMILY.poppinsRegular;
  }
}
