import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, BoxProps } from "../Box/Box";
import { Pressable, PressableProps, ViewStyle } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeIn,
  LinearTransition,
} from "react-native-reanimated";
import { AwesomeIcon, AwesomeIconName } from "../AwesomeIcon/AwesomeIcon";

interface Props extends PressableProps {
  boxProps?: BoxProps;
  icon?: AwesomeIconName;
  onPress: () => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function FloatingButton({
  onPress,
  boxProps,
  icon = "plus",
  ...props
}: Props) {
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
    <AnimatedPressable
      entering={FadeIn}
      layout={LinearTransition}
      {...props}
      onPress={handlePress}
    >
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
        {...boxProps}
      >
        <Animated.View style={animatedStyle}>
          <AwesomeIcon name={icon} size={20} color="pureWhite" />
        </Animated.View>
      </Box>
    </AnimatedPressable>
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
