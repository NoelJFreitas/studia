import React, { useEffect } from "react";
import * as SplashScreenExpo from "expo-splash-screen";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { APP_FONTS } from "src/assets/fonts";

import { NavigationContainer } from "@react-navigation/native";
import { theme } from "@/theme";
import { AuthenticationProvider } from "@/services";
import { Router } from "@/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BottomSheet,
  DropdownMenu,
  FullScreenLoadingModal,
  Toast,
} from "@/components";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  const [fontsLoaded, error] = useFonts(APP_FONTS);
  const queryClient = new QueryClient({});

  useEffect(() => {
    if (fontsLoaded || error) SplashScreenExpo.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <AuthenticationProvider>
                <NavigationContainer>
                  <Toast />
                  <DropdownMenu />
                  <BottomSheet />
                  <FullScreenLoadingModal />
                  <Router />
                </NavigationContainer>
              </AuthenticationProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
