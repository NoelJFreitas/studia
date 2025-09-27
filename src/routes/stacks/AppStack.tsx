import { Text, Screen as ScreenComp } from "@/components";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

const Home = () => {
  return (
    <ScreenComp justifyContent="center" alignItems="center">
      <Text>Home Screen</Text>
    </ScreenComp>
  );
};
