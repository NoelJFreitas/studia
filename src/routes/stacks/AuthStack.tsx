import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@screens";
import { View } from "react-native";

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
      <Screen name="CreateAccount" component={CreateAccount} />
    </Navigator>
  );
}

const CreateAccount = () => {
  return <View />;
};
