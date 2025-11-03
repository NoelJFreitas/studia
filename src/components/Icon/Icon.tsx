import React from "react";
import { Pressable } from "react-native";

import { useAppTheme } from "@/hooks";
import { ThemeColors } from "@/theme";

import { MicrophoneIcon } from "src/assets/icons/MicrophoneIcon";
import { InfoIcon } from "@/assets/icons/InfoIcon";
import { EyeOffIcon } from "src/assets/icons/EyeOffIcon";
import { EyeOnIcon } from "@/assets/icons/EyeOnIcon copy";
import { SuccessIcon } from "@/assets/icons/SuccessIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { ArrowLeftIcon } from "@/assets/icons/ArrowLeft";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { CameraIcon } from "@/assets/icons/CameraIcon";
import { DirectoryIcon } from "@/assets/icons/DirectoryIcon";
import { PapersIcon } from "@/assets/icons/PapersIcon";
import { WorkIcon } from "@/assets/icons/WorkIcon";
import { LabelIcon } from "@/assets/icons/LabelIcon";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { UrlIcon } from "@/assets/icons/UrlIcon";

export interface IconBase {
  size?: number;
  color?: string;
  fillColor?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  hexadecimalColor?: string;
  size?: number;
  onPress?: () => void;
}

const iconRegistry = {
  microphone: MicrophoneIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  info: InfoIcon,
  success: SuccessIcon,
  search: SearchIcon,
  arrowLeft: ArrowLeftIcon,
  plus: PlusIcon,
  camera: CameraIcon,
  close: CloseIcon,
  papers: PapersIcon,
  work: WorkIcon,
  label: LabelIcon,
  directory: DirectoryIcon,
  url: UrlIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;

export const iconNames = Object.keys(iconRegistry) as IconName[];

export function Icon({
  name,
  color = "jetBlack",
  size,
  onPress,
  hexadecimalColor,
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: hexadecimalColor ? hexadecimalColor : colors[color],
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
