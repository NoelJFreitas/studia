import { CreateNoteByUrl, FloatingButton, Screen } from "@/components";

import { AppScreenProps } from "@/routes";
import { WorkspaceList } from "./components/WorkspaceList";
import {
  DropdownMenuProps,
  useDropdownMenuService,
} from "@/services/dropdownMenu";
import { bottomSheetStore } from "@/services";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function WorkspaceScreen({
  route,
  navigation,
}: AppScreenProps<"Workspace">) {
  const { name } = route.params;

  const { showDropdownMenu } = useDropdownMenuService();

  function handleOnPressFloatingButton() {
    showDropdownMenu(MENU);
  }

  const MENU: DropdownMenuProps[] = [
    {
      icon: "camera",
      title: "Criar anotação a partir de foto",
      onPress: () => console.log("navega para camera"),
    },
    {
      icon: "url",
      title: "Criar anotação a partir de URL",
      onPress: () => {
        bottomSheetStore.setState({
          bottomSheet: {
            element: <CreateNoteByUrl />,
            title: "Criar a partir de link! 🔗",
          },
        });
      },
    },
  ];

  return (
    <Screen
      showHeader
      headerTitle={name}
      BottomComponent={<FloatingButton onPress={handleOnPressFloatingButton} />}
    >
      <WorkspaceList data={data} />
    </Screen>
  );
}
