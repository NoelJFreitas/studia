import { Dimensions, ViewStyle } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { useEffect } from "react";
import { Text } from "../Text/Text";
import { Icon, IconProps } from "../Icon/Icon";
import { $shadowProps, theme } from "@/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ToastType, useToast, useToastService } from "@/services/toast";

const WIDTH = Dimensions.get("screen").width;
const DURATION = 500;
const DISPLAY_TIME = 2500;

const ToastIcon: Record<ToastType, IconProps> = {
  error: {
    name: "info",
    color: "red",
  },
  success: {
    name: "success",
    color: "forestGreen",
  },
};

const BorderColor: Record<ToastType, ViewStyle> = {
  error: { borderColor: theme.colors.error },
  success: { borderColor: theme.colors.forestGreen },
};

export function Toast() {
  const { top } = useSafeAreaInsets();
  const toast = useToast();
  const { hideToast } = useToastService();

  const topPosition = top + 30;

  const animatedTop = useSharedValue(0);
  const animatedOpacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: animatedTop.value,
      opacity: animatedOpacity.value,
    };
  });

  useEffect(() => {
    if (!toast) return;

    animatedTop.value = withTiming(topPosition, { duration: DURATION });
    animatedOpacity.value = withTiming(1, { duration: DURATION });

    const timer = setTimeout(() => {
      animatedTop.value = withTiming(0, { duration: DURATION });
      animatedOpacity.value = withTiming(
        0,
        { duration: DURATION },
        (finished) => {
          if (finished) {
            runOnJS(hideToast)();
          }
        },
      );
    }, DISPLAY_TIME);

    return () => clearTimeout(timer);
  }, [animatedOpacity, animatedTop, hideToast, toast, topPosition]);

  if (!toast) return null;

  return (
    <Animated.View
      style={[
        $viewStyle,
        $shadowProps,
        animatedStyle,
        {
          ...BorderColor[toast.type ?? "success"],
        },
      ]}
    >
      <Icon {...ToastIcon[toast.type ?? "success"]} />
      <Text>{toast.message}</Text>
    </Animated.View>
  );
}

const $viewStyle: ViewStyle = {
  position: "absolute",
  flexDirection: "row",
  alignSelf: "center",
  backgroundColor: "white",
  alignItems: "center",
  width: WIDTH * 0.9,
  zIndex: 10,
  columnGap: 10,
  borderRadius: 12,
  padding: 16,

  borderWidth: 1,
};
