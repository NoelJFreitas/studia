import { HomeScreen, NoteEditorScreen, WorkspaceScreen } from "@/screens";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Home: undefined;
  Editor: { id: number };
  Workspace: { id: number; name: string };
  Loading: undefined;
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
      <Screen name="Editor" component={NoteEditorScreen} />
      <Screen name="Workspace" component={WorkspaceScreen} />
    </Navigator>
  );
}
