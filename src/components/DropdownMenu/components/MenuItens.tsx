import { Box } from "@/components/Box/Box";
import { Icon } from "@/components/Icon/Icon";
import { Text } from "@/components/Text/Text";
import { DropdownMenuProps } from "@/services/dropdownMenu";
import { $shadowProps } from "@/theme";
import Animated, { SlideInRight } from "react-native-reanimated";

const AnimatedBox = Animated.createAnimatedComponent(Box);

interface Props {
  option: DropdownMenuProps;
  duration: number;
}

export function MenuItens({ option, duration }: Props) {
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
      entering={SlideInRight.duration(duration)}
    >
      <Text preset="paragraphCaption">{option.title}</Text>
      <Icon name={option.icon} color="primary" size={18} />
    </AnimatedBox>
  );
}
