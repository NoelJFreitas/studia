import { HomeScreen } from "@/screens";
import { TextEditor } from "@/screens/app/TextEditor/TextEditor";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Home: undefined;
  Editor: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator
      id={undefined}
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Editor" component={TextEditor} />
    </Navigator>
  );
}
