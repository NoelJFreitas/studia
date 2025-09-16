import { $shadowProps } from "@theme";
import { PressableBox, PressableBoxProps } from "../Box/Box";
import { Text } from "../Text/Text";
import Animated, { FadeIn } from "react-native-reanimated";

interface Props extends PressableBoxProps {
  title: string;
}

const AnimatedText = Animated.createAnimatedComponent(Text);

export function Button({ title, ...props }: Props) {
  return (
    <PressableBox
      backgroundColor="buttonPrimary"
      height={56}
      width={"73%"}
      justifyContent="center"
      alignItems="center"
      borderRadius="xl"
      style={$shadowProps}
      {...props}
    >
      <AnimatedText
        key={title}
        preset="headingSmall"
        color="buttonTextPrimary"
        entering={FadeIn}
      >
        {title}
      </AnimatedText>
    </PressableBox>
  );
}
