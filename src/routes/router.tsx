import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  OnboardingStack,
  OnboardingStackParamList,
} from "./stacks/OnboardingStack";
import { AuthStack, AuthStackParamList } from "./stacks/AuthStack";

export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  Auth: NavigatorScreenParams<AuthStackParamList>;
};

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <Navigator
      id={undefined}
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboarding"
    >
      <Screen name="Onboarding" component={OnboardingStack} />
      <Screen name="Auth" component={AuthStack} />
    </Navigator>
  );
}
