import {
  CreateNoteByUrl,
  FloatingButton,
  Screen,
  ActivityIndicator,
} from "@/components";

import { AppScreenProps } from "@/routes";
import { WorkspaceList } from "./components/WorkspaceList";
import {
  DropdownMenuProps,
  useDropdownMenuService,
} from "@/services/dropdownMenu";
import { bottomSheetStore } from "@/services";
import { useGetByDirectory } from "@/domain/note/useCases/useGetByDirectory";
import {} from "react-native";
import { WorkspaceEmpty } from "./components/WorkspaceEmpty";

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function DirectoryScreen({
  route,
  navigation,
}: AppScreenProps<"Directory">) {
  const { name } = route.params;
  const { data, isLoading } = useGetByDirectory({
    directoryId: route.params.id,
  });

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
            element: <CreateNoteByUrl directoryId={route.params.id} />,
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
      {isLoading && (
        <ActivityIndicator
          flex={1}
          justifyContent="center"
          alignItems="center"
        />
      )}
      {data?.length > 0 && <WorkspaceList data={data} />}
      {data?.length === 0 && !isLoading && (
        <WorkspaceEmpty
          marginTop="xxxl"
          description="Ainda não há nada aqui! Clique no botão e adicione novas notas"
        />
      )}
    </Screen>
  );
}
