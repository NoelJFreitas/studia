import { FloatingButton, Screen, SearchInput } from "@/components";
import { HomeHeader } from "./components/HomeHeader";
import { MostRecent } from "./components/MostRecent";

import { useDropdownMenuService } from "@/services/dropdownMenu";

import { MENU } from "./constants";
import { DirectoriesList } from "./components/DirectoriesList";

export function HomeScreen() {
  const { showDropdownMenu } = useDropdownMenuService();

  function handleOnPressFloatingButton() {
    showDropdownMenu(MENU);
  }

  return (
    <Screen
      backgroundColor="offWhite"
      rowGap="lg"
      scrollable
      BottomComponent={<FloatingButton onPress={handleOnPressFloatingButton} />}
    >
      <HomeHeader />
      <SearchInput placeholder="Buscar" />
      <MostRecent />
      <DirectoriesList />
    </Screen>
  );
}
