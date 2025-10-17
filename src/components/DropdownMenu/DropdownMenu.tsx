import { Modal, TouchableWithoutFeedback } from "react-native";
import { Box } from "../Box/Box";
import { MenuItens } from "./components/MenuItens";

import {
  useDropdownMenu,
  useDropdownMenuService,
} from "@/services/dropdownMenu";

export function DropdownMenu() {
  const menuOptions = useDropdownMenu();
  const { hideDropdownMenu } = useDropdownMenuService();

  function handleOnCloseMenu() {
    hideDropdownMenu();
  }

  return (
    <Modal transparent animationType="slide" visible={!!menuOptions}>
      <TouchableWithoutFeedback onPress={handleOnCloseMenu}>
        <Box flex={1} style={$overlay}>
          <Box position="absolute" bottom={130} right={18} rowGap="lg">
            {menuOptions?.map((option, i) => (
              <MenuItens
                key={option.title}
                option={option}
                duration={600 + i * 100}
              />
            ))}
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const $overlay = {
  backgroundColor: "#0000002d",
};
