import {
  AwesomeIcon,
  type AwesomeIconName,
} from "@/components/AwesomeIcon/AwesomeIcon";
import { PressableBox } from "@/components/Box/Box";
import { Text } from "@/components/Text/Text";

interface ToolbarButtonIconProps {
  text?: never;
  icon: AwesomeIconName;
  isActive: boolean;
  onPress: () => void;
}

interface ToolbarButtonTextProps {
  text: string;
  icon?: never;
  isActive: boolean;
  onPress: () => void;
}

export type ToolbarButtonProps =
  | ToolbarButtonIconProps
  | ToolbarButtonTextProps;

export function ToolbarButton({
  icon,
  text,
  isActive,
  onPress,
}: ToolbarButtonProps) {
  return (
    <PressableBox
      justifyContent="center"
      alignItems="center"
      width={56}
      height="100%"
      backgroundColor={isActive ? "primary800" : "primary"}
      onPress={onPress}
    >
      {icon ? (
        <AwesomeIcon name={icon} size={20} color="pureWhite" />
      ) : (
        <Text color="pureWhite" fontSize={20}>
          {text}
        </Text>
      )}
    </PressableBox>
  );
}
