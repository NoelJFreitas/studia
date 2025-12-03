import { HomeScreen, NoteEditorScreen, DirectoryScreen } from "@/screens";
import { QuestionnaireScreen } from "@/screens/app/QuestionnaireScreen/QuestionScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Home: undefined;
  Editor: { id: number };
  Directory: { id: number; name: string };
  Loading: undefined;
  Questionary: undefined;
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
      <Screen name="Directory" component={DirectoryScreen} />
      <Screen name="Questionary" component={QuestionnaireScreen} />
    </Navigator>
  );
}
