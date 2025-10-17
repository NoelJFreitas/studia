import { KeyboardAvoidingView } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollViewContainer, ViewContainer } from "./components";
import { Box, BoxProps } from "../Box/Box";
import { Header } from "./components/Header";
import { useNavigation } from "@react-navigation/native";

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  BottomComponent?: React.ReactNode;
  scrollable?: boolean;
  noPaddingHorizontal?: boolean;
  headerTitle?: string;
  showHeader?: boolean;
}

export function Screen({
  children,
  style,
  scrollable,
  headerTitle,
  noPaddingHorizontal,
  showHeader,
  BottomComponent,
  ...props
}: ScreenProps) {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  function handleOnPressGoBack() {
    if (navigation.canGoBack) navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Container backgroundColor="background">
        <Box
          paddingHorizontal={!noPaddingHorizontal ? "md" : undefined}
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          flex={1}
          {...props}
        >
          {showHeader && (
            <Header onPress={handleOnPressGoBack} title={headerTitle} />
          )}
          {children}
        </Box>
      </Container>
      {BottomComponent && BottomComponent}
    </KeyboardAvoidingView>
  );
}
