import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen, SplashScreen } from "@screens";

export type OnboardingStackParamList = {
  SplashScreen: undefined;
  OnboardingScreen: undefined;
};

const { Navigator, Screen } =
  createNativeStackNavigator<OnboardingStackParamList>();

export function OnboardingStack() {
  return (
    <Navigator
      initialRouteName="SplashScreen"
      id={undefined}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="SplashScreen" component={SplashScreen} />
      <Screen name="OnboardingScreen" component={OnboardingScreen} />
    </Navigator>
  );
}
