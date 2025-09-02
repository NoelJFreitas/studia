import { Box, BoxProps } from "@components";

import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
}

export function Screen({ children, style, ...props }: ScreenProps) {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <Box
      paddingHorizontal="md"
      style={[{ paddingTop: top, paddingBottom: bottom }, style]}
      {...props}
    >
      {children}
    </Box>
  );
}
