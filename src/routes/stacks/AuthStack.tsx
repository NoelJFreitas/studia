import { LoginScreen } from "@/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CreateAccountScreen } from "src/screens/authentication/CreateAccountScreen/CreateAccountScreen";

export type AuthStackParamList = {
  Login: undefined;
  CreateAccount: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Navigator
      initialRouteName="Login"
      id={undefined}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Login" component={LoginScreen} />
      <Screen name="CreateAccount" component={CreateAccountScreen} />
    </Navigator>
  );
}
