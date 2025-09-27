import React from "react";
import { Pressable } from "react-native";

import { useAppTheme } from "@/hooks";
import { ThemeColors } from "@/theme";

import { MicrophoneIcon } from "src/assets/icons/MicrophoneIcon";
import { InfoIcon } from "@/assets/icons/InfoIcon";
import { EyeOffIcon } from "src/assets/icons/EyeOffIcon";
import { EyeOnIcon } from "@/assets/icons/EyeOnIcon copy";
import { SuccessIcon } from "@/assets/icons/SuccessIcon";

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

export function Icon({ name, color = "jetBlack", size, onPress }: IconProps) {
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
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  info: InfoIcon,
  success: SuccessIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
