import { CreateTag, CreateWorkspace } from "@/components";
import { bottomSheetStore } from "@/services/bottomSheet";
import { DropdownMenuProps } from "@/services/dropdownMenu";

export const MENU: DropdownMenuProps[] = [
  {
    icon: "directory",
    title: "Criar diretório",
    onPress: () => {
      bottomSheetStore.setState({
        bottomSheet: {
          element: <CreateWorkspace />,
          title: "Vamos criar seu diretório! ✍️",
        },
      });
    },
  },
  {
    icon: "label",
    title: "Criar tag",
    onPress: () => {
      bottomSheetStore.setState({
        bottomSheet: {
          element: <CreateTag />,
          title: "Vamos criar sua nova tag! 🔖",
        },
      });
    },
  },
];
