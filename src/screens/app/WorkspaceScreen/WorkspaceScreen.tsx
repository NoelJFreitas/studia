import { Box, Screen } from "@/components";
import { WorkspaceItem } from "./components/WorkspaceItem";
import { ScrollView } from "react-native";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function WorkspaceScreen() {
  const half = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, half);
  const secondHalf = data.slice(half);

  return (
    <Screen showHeader headerTitle="Trabalho">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          gap: 16,
        }}
      >
        <Box flex={1} rowGap="md">
          {firstHalf.map((item) => (
            <WorkspaceItem key={item} />
          ))}
        </Box>
        <Box flex={1} rowGap="md">
          {secondHalf.map((item) => (
            <WorkspaceItem key={item} />
          ))}
        </Box>
      </ScrollView>
    </Screen>
  );
}
