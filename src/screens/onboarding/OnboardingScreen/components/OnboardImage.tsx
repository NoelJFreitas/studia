import { Box } from "@components";
import { Image, ImageStyle } from "expo-image";
import { Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  SharedValue,
} from "react-native-reanimated";
import { OnboardingPageItem } from "../onboardingData";

const WIDTH = Dimensions.get("screen").width;

type Props = Pick<OnboardingPageItem, "image"> & {
  index: number;
  scrollX: SharedValue<number>;
};

const AnimatedBox = Animated.createAnimatedComponent(Box);

export function OnboardingImage({ image, index, scrollX }: Props) {
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
      width={WIDTH}
      style={animatedStyle}
    >
      <Image source={image} style={$image} />
    </AnimatedBox>
  );
}

const $image: ImageStyle = {
  height: WIDTH * 0.76,
  width: WIDTH * 0.76,
};
