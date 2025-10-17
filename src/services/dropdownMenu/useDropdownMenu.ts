import { create } from "zustand";
import { DropdownMenuService } from "./types";

const useDropdownMenuStore = create<DropdownMenuService>((set) => ({
  dropdownMenuOptions: null,
  showDropdownMenu: (menu) => set({ dropdownMenuOptions: menu }),
  hideDropdownMenu: () => set({ dropdownMenuOptions: null }),
}));

export function useDropdownMenu(): DropdownMenuService["dropdownMenuOptions"] {
  return useDropdownMenuStore((state) => state.dropdownMenuOptions);
}

export function useDropdownMenuService(): Pick<
  DropdownMenuService,
  "hideDropdownMenu" | "showDropdownMenu"
> {
  const hideDropdownMenu = useDropdownMenuStore(
    (state) => state.hideDropdownMenu,
  );
  const showDropdownMenu = useDropdownMenuStore(
    (state) => state.showDropdownMenu,
  );

  return {
    hideDropdownMenu,
    showDropdownMenu,
  };
}
