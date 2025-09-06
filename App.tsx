import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon, Screen, Text } from "@components";
import { theme } from "@theme";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { APP_FONTS } from "src/assets/fonts";
import { SimpleLogo } from "@brand";

export default function App() {
  const [fontsLoaded, error] = useFonts(APP_FONTS);

  useEffect(() => {
    if (fontsLoaded || error) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Screen style={{ flex: 1, justifyContent: "center" }}>
          <Text fontWeight="light">
            Anote suas ideias de forma rápida e simples. Registre tudo, em
            qualquer hora e lugar.
          </Text>
          <Icon name="microphone" />
          <SimpleLogo />
          <StatusBar style="auto" />
        </Screen>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
