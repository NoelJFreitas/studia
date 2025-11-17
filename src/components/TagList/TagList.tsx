import { Box, PressableBox, Tag, Text } from "@/components";
import { Tag as TagType } from "@/domain/tag";
import { useBottomSheetService } from "@/services";
import Animated, {
  FadeInLeft,
  LinearTransition,
} from "react-native-reanimated";
import { SelectTag } from "./components/SelectTag";
import { useState } from "react";

interface Props {
  tags: TagType[];
  onSelectTags: (tags: TagType[]) => void;
}

export function TagList({ tags }: Props) {
  const [teste, setTest] = useState(tags);
  const { showBottomSheet } = useBottomSheetService();

  function onPressEditTag() {
    showBottomSheet({
      element: <SelectTag currentTags={tags} onPress={setTest} />,
      title: "Editar Tags",
    });
  }

  return (
    <Box marginBottom="md" flexDirection="row" columnGap="sm">
      <PressableBox
        onPress={onPressEditTag}
        paddingHorizontal="md"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="mediumGray">Editar Tags</Text>
      </PressableBox>
      <Animated.FlatList
        data={teste}
        horizontal
        showsHorizontalScrollIndicator={false}
        layout={LinearTransition}
        entering={FadeInLeft}
        contentContainerStyle={{ columnGap: 5 }}
        renderItem={({ item }) => <Tag text={item.title} color={item.color} />}
      />
    </Box>
  );
}
