import { HomeScreen } from "@/screens";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
}
