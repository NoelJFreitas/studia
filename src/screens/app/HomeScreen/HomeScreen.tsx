import {
  Box,
  FloatingButton,
  Screen,
  SearchInput,
  WorkspaceCard,
} from "@/components";
import { HomeHeader } from "./components/HomeHeader";
import { MostRecent } from "./components/MostRecent";
import { LegendList } from "@legendapp/list";
import { useAppTheme } from "@/hooks";
import { ViewStyle } from "react-native";
import {
  DropdownMenuProps,
  useDropdownMenuService,
} from "@/services/dropdownMenu";
import { useBottomSheetService } from "@/services";

const items = [
  { title: "Item 1", quantity: 3 },
  { title: "Item 2", quantity: 5 },
  { title: "Item 3", quantity: 2 },
  { title: "Item 4", quantity: 8 },
  { title: "Item 5", quantity: 1 },
];

const menu: DropdownMenuProps[] = [
  { icon: "info", title: "informacao", onPress: () => {} },
  { icon: "success", title: "sucesso", onPress: () => {} },
  { icon: "camera", title: "camera", onPress: () => {} },
];

export function HomeScreen() {
  const { spacing } = useAppTheme();
  const { showDropdownMenu } = useDropdownMenuService();
  const { showBottomSheet } = useBottomSheetService();

  const $content: ViewStyle = {
    gap: spacing.sm,
  };

  const $style: ViewStyle = {
    overflow: "visible",
  };

  function handleOnPressFloatingButton() {
    showDropdownMenu(menu);
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
      <LegendList
        data={items}
        style={$style}
        numColumns={2}
        contentContainerStyle={$content}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Box width={10} />}
        renderItem={() => <WorkspaceCard title="Pessoal" quantity={10} />}
      />
    </Screen>
  );
}
