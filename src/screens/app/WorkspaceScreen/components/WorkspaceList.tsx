import { Box } from "@/components";
import { ScrollView } from "react-native";
import { WorkspaceItem } from "./WorkspaceItem";

interface WorkspaceListProps {
  data: number[]; // ou o tipo real do item (ex: Directory[])
}

export function WorkspaceList({ data }: WorkspaceListProps) {
  const half = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, half);
  const secondHalf = data.slice(half);

  return (
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
  );
}
