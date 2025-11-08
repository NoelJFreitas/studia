import { Box, Text, TopicCard } from "@/components";
import { useGetRecentTopic } from "@/domain/note";
import { LegendList } from "@legendapp/list";
import { ViewStyle } from "react-native";

export function MostRecent() {
  const { data } = useGetRecentTopic();

  return (
    <Box rowGap="xl">
      <Text preset="headingSmall" fontWeight="bold">
        Mais Recentes
      </Text>
      <LegendList
        data={data}
        horizontal
        style={$listStyle}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Box mr="sm" />}
        renderItem={({ item }) => <TopicCard topic={item} />}
      />
    </Box>
  );
}

const $listStyle: ViewStyle = {
  overflow: "visible",
};
