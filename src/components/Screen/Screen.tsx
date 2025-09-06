import { Box, BoxProps } from "@components";
import { KeyboardAvoidingView } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollViewContainer, ViewContainer } from "./components";

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

export function Screen({ children, style, scrollable, ...props }: ScreenProps) {
  const { top, bottom } = useSafeAreaInsets();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Container backgroundColor="background">
        <Box
          paddingHorizontal="md"
          flex={1}
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...props}
        >
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
