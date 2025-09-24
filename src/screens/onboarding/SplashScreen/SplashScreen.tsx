import { useEffect } from "react";
import { SimpleLogo } from "@/brand";
import { Screen } from "@/components";

import { OnboardingScreenProps } from "@/routes";

export function SplashScreen({
  navigation,
}: OnboardingScreenProps<"SplashScreen">) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("OnboardingScreen");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Screen justifyContent="center" alignItems="center">
      <SimpleLogo />
    </Screen>
  );
}
