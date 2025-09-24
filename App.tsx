import React, { useEffect } from "react";
import * as SplashScreenExpo from "expo-splash-screen";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { theme } from "@theme";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { APP_FONTS } from "src/assets/fonts";

import { NavigationContainer } from "@react-navigation/native";
import { Router } from "@routes";
import { AuthenticationProvider } from "@services";

export default function App() {
  const [fontsLoaded, error] = useFonts(APP_FONTS);

  useEffect(() => {
    if (fontsLoaded || error) SplashScreenExpo.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </AuthenticationProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
