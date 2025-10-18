import { FloatingButton, Screen } from "@/components";

import { AppScreenProps } from "@/routes";
import { WorkspaceList } from "./components/WorkspaceList";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function WorkspaceScreen({ route }: AppScreenProps<"Workspace">) {
  const { name } = route.params;

  return (
    <Screen showHeader headerTitle={name}>
      <WorkspaceList data={data} />
      <FloatingButton onPress={() => {}} />
    </Screen>
  );
}
