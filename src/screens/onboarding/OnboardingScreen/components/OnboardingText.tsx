import { Box, Text } from "@components";
import { OnboardingPageItem } from "../onboardingData";
import { Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  SharedValue,
} from "react-native-reanimated";

type Props = Pick<OnboardingPageItem, "title" | "description"> & {
  index: number;
  scrollX: SharedValue<number>;
};

const WIDTH = Dimensions.get("window").width;

const AnimatedBox = Animated.createAnimatedComponent(Box);

export function OnboardingText({ title, description, index, scrollX }: Props) {
  const animatedStyle = useAnimatedStyle(() => {
    const position = scrollX.value;

    const opacity = interpolate(
      position,
      [(index - 0.6) * WIDTH, index * WIDTH, (index + 0.6) * WIDTH],
      [0, 1, 0],
    );

    return {
      opacity,
    };
  });

  return (
    <AnimatedBox
      justifyContent="center"
      alignItems="center"
      rowGap="sm"
      width={WIDTH}
      paddingHorizontal="xl"
      style={animatedStyle}
    >
      <Text
        preset="headingMedium"
        fontWeight="bold"
        color="primaryTitle"
        textAlign="center"
      >
        {title}
      </Text>
      <Text fontWeight="light" textAlign="center">
        {description}
      </Text>
    </AnimatedBox>
  );
}
