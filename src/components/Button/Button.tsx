import { $shadowProps } from "@theme";
import { PressableBox, PressableBoxProps } from "../Box/Box";
import { Text } from "../Text/Text";

interface Props extends PressableBoxProps {
  title: string;
}

export function Button({ title, ...props }: Props) {
  return (
    <PressableBox
      backgroundColor="buttonPrimary"
      height={56}
      width={"71%"}
      justifyContent="center"
      alignItems="center"
      borderRadius="xl"
      style={$shadowProps}
      {...props}
    >
      <Text preset="headingSmall" color="buttonTextPrimary">
        {title}
      </Text>
    </PressableBox>
  );
}
