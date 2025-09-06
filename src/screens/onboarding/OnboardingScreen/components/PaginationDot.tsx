import { Box } from "@components";
import { useAppTheme } from "@hooks";
import { useEffect } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface DotProps {
  isActive: boolean;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

export function PaginationDot({ isActive }: DotProps) {
  const progress = useSharedValue(isActive ? 1 : 0);
  const { colors } = useAppTheme();

  useEffect(() => {
    progress.value = withTiming(isActive ? 1 : 0, { duration: 300 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.lightGray, colors.almostBlack],
    );

    return {
      backgroundColor,
    };
  });

  return (
    <AnimatedBox
      height={10}
      width={10}
      marginHorizontal="xs"
      borderRadius="sm"
      style={animatedStyle}
    />
  );
}
