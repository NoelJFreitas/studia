import { $shadowProps } from "@theme";
import { PressableBox, PressableBoxProps } from "../Box/Box";
import { Text } from "../Text/Text";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { ActivityIndicator } from "react-native";

interface Props extends PressableBoxProps {
  title: string;
  disabled?: boolean;
  loading?: boolean;
}

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedLoading = Animated.createAnimatedComponent(ActivityIndicator);

export function Button({ title, disabled, loading, ...props }: Props) {
  return (
    <PressableBox
      backgroundColor={disabled ? "coolGray" : "buttonPrimary"}
      height={56}
      width={"73%"}
      disabled={disabled}
      justifyContent="center"
      alignItems="center"
      borderRadius="xl"
      style={$shadowProps}
      {...props}
    >
      {loading && (
        <AnimatedLoading entering={FadeIn} exiting={FadeOut} color="white" />
      )}
      {!loading && (
        <AnimatedText
          key={title}
          preset="headingSmall"
          color="buttonTextPrimary"
          entering={FadeIn}
          exiting={FadeOut}
        >
          {title}
        </AnimatedText>
      )}
    </PressableBox>
  );
}
