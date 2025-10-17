import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "../Box/Box";
import { Icon } from "../Icon/Icon";
import { Pressable, PressableProps, ViewStyle } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface Props extends PressableProps {
  onPress: () => void;
}

export function FloatingButton({ onPress, ...props }: Props) {
  const { bottom } = useSafeAreaInsets();
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${rotation.value}deg`,
      },
    ],
  }));

  const handlePress = () => {
    onPress();
    rotation.value = withTiming(rotation.value === 0 ? 90 : 0, {
      duration: 200,
    });
  };

  return (
    <Pressable {...props} onPress={handlePress}>
      <Box
        height={56}
        width={56}
        backgroundColor="jetBlack"
        borderRadius="xl"
        justifyContent="center"
        alignItems="center"
        style={$purpleShadowProps}
        overflow="visible"
        position="absolute"
        bottom={bottom + 10}
        right={18}
      >
        <Animated.View style={animatedStyle}>
          <Icon name="plus" color="pureWhite" />
        </Animated.View>
      </Box>
    </Pressable>
  );
}

export const $purpleShadowProps: ViewStyle = {
  shadowColor: "#9747FF",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10,
};
