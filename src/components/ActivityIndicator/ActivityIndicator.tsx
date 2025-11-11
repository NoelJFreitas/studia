import { Box, BoxProps } from "../Box/Box";
import { ActivityIndicator as RNActivityIndicator } from "react-native";

type Props = BoxProps;

export function ActivityIndicator({ ...props }: Props) {
  return (
    <Box {...props}>
      <RNActivityIndicator />
    </Box>
  );
}
