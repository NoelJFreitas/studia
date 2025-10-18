import { HomeScreen, TextEditor, WorkspaceScreen } from "@/screens";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Home: undefined;
  Editor: undefined;
  Workspace: { id: number; name: string };
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
      <Screen name="Workspace" component={WorkspaceScreen} />
    </Navigator>
  );
}
