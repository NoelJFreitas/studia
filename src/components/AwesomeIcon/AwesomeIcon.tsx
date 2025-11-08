import { memo } from "react";
import glyphMap from "./FontAwesome.json";
import { TextStyle, Text } from "react-native";
import { APP_FONT_FAMILY } from "@/assets/fonts";
import { ThemeColors } from "@/theme";
import { useAppTheme } from "@/hooks";

export type AwesomeIconName = keyof typeof glyphMap;

export interface AwesomeIconProps {
  name: AwesomeIconName;
  size?: number;
  color?: ThemeColors;
}

export function AwesomeIconBase({ name, size, color }: AwesomeIconProps) {
  const { colors } = useAppTheme();
  const glyphValue = glyphMap[name];
  const glyph = String.fromCharCode(glyphValue);

  const styleDefaults: TextStyle = {
    color: colors[color],
    fontFamily: APP_FONT_FAMILY.fontAwesome,
    fontSize: size,
    fontWeight: "normal",
    fontStyle: "normal",
  };

  return (
    <Text selectable={false} style={styleDefaults}>
      {glyph}
    </Text>
  );
}

export const AwesomeIcon = memo(AwesomeIconBase);
