import { TextStyle, ViewStyle } from "react-native";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

interface Props {
  color: string;
  text: string;
}

export function Tag({ color, text }: Props) {
  const backgroundStyle: ViewStyle = {
    backgroundColor: `${color}10`,
    borderColor: `${color}`,
    borderWidth: 1,
  };

  console.log(color);
  const textStyle: TextStyle = {
    color,
  };

  return (
    <Box
      style={backgroundStyle}
      paddingHorizontal="sm"
      paddingVertical="xs"
      borderRadius="md"
    >
      <Text style={textStyle}>{text}</Text>
    </Box>
  );
}
