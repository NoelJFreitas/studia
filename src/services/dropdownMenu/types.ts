import { IconName } from "@/components";

export interface DropdownMenuProps {
  title: string;
  icon: IconName;
  onPress: () => void;
}

export interface DropdownMenuService {
  dropdownMenuOptions: DropdownMenuProps[] | null;
  showDropdownMenu: (menu: DropdownMenuProps[]) => void;
  hideDropdownMenu: () => void;
}
