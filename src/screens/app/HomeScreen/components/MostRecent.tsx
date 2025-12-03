import { Box, Text, TopicCard, TopicCardSkeleton } from "@/components";
import { useGetRecentTopic } from "@/domain/note";
import { LegendList } from "@legendapp/list";
import { ViewStyle } from "react-native";

export function MostRecent() {
  const { data, isLoading } = useGetRecentTopic();

  return (
    <Box rowGap="xl">
      <Text preset="headingSmall" fontWeight="bold">
        Mais Recentes
      </Text>
      {isLoading && <TopicCardSkeleton />}
      {!isLoading && (
        <LegendList
          data={data}
          horizontal
          ListEmptyComponent={() => (
            <Text textAlign="center" color="coolGray" width="100%">
              Os cards recentes aparecerão aqui
            </Text>
          )}
          keyExtractor={(item) => item.id.toString()}
          style={$listStyle}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Box mr="sm" />}
          renderItem={({ item }) => <TopicCard topic={item} />}
        />
      )}
    </Box>
  );
}

const $listStyle: ViewStyle = {
  overflow: "visible",
};
