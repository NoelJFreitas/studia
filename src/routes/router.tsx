import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  OnboardingStack,
  OnboardingStackParamList,
} from "./stacks/OnboardingStack";
import { AuthStack, AuthStackParamList } from "./stacks/AuthStack";
import { AppStack, AppStackParamList } from "./stacks/AppStack";
import { useAuthCredentials } from "@/services";

export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<AppStackParamList>;
};

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  const { isAuthenticated } = useAuthCredentials();

  return (
    <Navigator
      id={undefined}
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboarding"
    >
      {!isAuthenticated && (
        <Screen name="Onboarding" component={OnboardingStack} />
      )}
      {!isAuthenticated && <Screen name="Auth" component={AuthStack} />}
      {isAuthenticated && <Screen name="App" component={AppStack} />}
    </Navigator>
  );
}
