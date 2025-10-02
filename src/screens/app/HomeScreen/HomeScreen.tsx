import { Screen, SearchInput } from "@/components";
import { HomeHeader } from "./components/HomeHeader";
import { MostRecent } from "./components/MostRecent";

export function HomeScreen() {
  return (
    <Screen backgroundColor="offWhite" rowGap="lg">
      <HomeHeader />
      <SearchInput placeholder="Buscar" />
      <MostRecent />
    </Screen>
  );
}
