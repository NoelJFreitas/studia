import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Screen } from "@components";
import { theme } from "@theme";
import { ThemeProvider } from "@shopify/restyle";

LogBox.ignoreLogs(["Require cycle:"]);

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Screen>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </Screen>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
