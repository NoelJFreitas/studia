import { PressableBox } from "@/components/Box/Box";
import { Icon } from "@/components/Icon/Icon";
import { Text } from "@/components/Text/Text";
import { DropdownMenuProps } from "@/services/dropdownMenu";
import { $shadowProps } from "@/theme";
import Animated, { SlideInRight } from "react-native-reanimated";

const AnimatedBox = Animated.createAnimatedComponent(PressableBox);

interface Props {
  option: DropdownMenuProps;
  duration: number;
  handleClose: () => void;
}

export function MenuItens({ option, duration, handleClose }: Props) {
  function handleOnPress() {
    handleClose();
    option.onPress();
  }

  return (
    <AnimatedBox
      style={$shadowProps}
      padding="md"
      columnGap="xl"
      borderRadius="xl"
      flexDirection="row"
      alignItems="center"
      backgroundColor="pureWhite"
      justifyContent="space-between"
      onPress={handleOnPress}
      entering={SlideInRight.duration(duration)}
    >
      <Text preset="paragraphCaption">{option.title}</Text>
      <Icon name={option.icon} color="primary" size={18} />
    </AnimatedBox>
  );
}
