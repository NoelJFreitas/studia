import { Box } from "@/components";
import { ScrollView, ViewStyle } from "react-native";
import { WorkspaceItem } from "./WorkspaceItem";
import { NoteListItem } from "@/domain/note";

interface WorkspaceListProps {
  data: NoteListItem[]; // ou o tipo real do item (ex: Directory[])
}

export function WorkspaceList({ data }: WorkspaceListProps) {
  const half = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, half);
  const secondHalf = data.slice(half);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={$scrollListStyle}
    >
      <Box flex={1} rowGap="md">
        {firstHalf.map((item) => (
          <WorkspaceItem item={item} key={item.id} />
        ))}
      </Box>
      <Box flex={1} rowGap="md">
        {secondHalf.map((item) => (
          <WorkspaceItem item={item} key={item.id} />
        ))}
      </Box>
    </ScrollView>
  );
}

const $scrollListStyle: ViewStyle = {
  flexDirection: "row",
  gap: 16,
};
