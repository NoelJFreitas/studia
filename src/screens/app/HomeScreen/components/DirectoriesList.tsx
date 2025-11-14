import { LegendList } from "@legendapp/list";
import { Box, Text, WorkspaceCard, WorkspaceCardSkeleton } from "@/components";
import { useAppTheme } from "@/hooks";
import { ViewStyle } from "react-native";
import { useGetDirectories } from "@/domain/directory";
import Animated, { LinearTransition } from "react-native-reanimated";

const AnimatedBox = Animated.createAnimatedComponent(Box);

export function DirectoriesList() {
  const { spacing } = useAppTheme();
  const { data, isLoading } = useGetDirectories();

  const $content: ViewStyle = {
    gap: spacing.sm,
  };

  const $style: ViewStyle = {
    overflow: "visible",
  };

  return (
    <AnimatedBox rowGap="lg" layout={LinearTransition}>
      <Text preset="headingSmall" fontWeight="bold">
        Meus diretórios
      </Text>
      {isLoading && <WorkspaceCardSkeleton />}
      {!isLoading && (
        <LegendList
          data={data}
          style={$style}
          numColumns={2}
          ListEmptyComponent={() => (
            <Text textAlign="center" color="coolGray">
              Você ainda não possui diretórios, ao criar aparecerão aqui
            </Text>
          )}
          contentContainerStyle={$content}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Box width={10} />}
          renderItem={({ item }) => <WorkspaceCard directory={item} />}
        />
      )}
    </AnimatedBox>
  );
}
