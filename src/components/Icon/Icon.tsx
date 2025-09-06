import React from "react";
import { Pressable } from "react-native";

import { useAppTheme } from "@hooks";
import { ThemeColors } from "@theme";

import { MicrophoneIcon } from "src/assets/icons/MicrophoneIcon";

export interface IconBase {
  size?: number;
  color?: string;
  fillColor?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({ name, color = "primary", size, onPress }: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: colors[color],
  };

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }

  return <SVGIcon {...iconProps} />;
}

const iconRegistry = {
  microphone: MicrophoneIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
