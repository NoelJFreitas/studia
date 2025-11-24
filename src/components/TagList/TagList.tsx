import { Tag as TagType } from "@/domain/tag";
import { useBottomSheetService } from "@/services";
import Animated, {
  FadeInLeft,
  LinearTransition,
} from "react-native-reanimated";
import { SelectTag } from "./components/SelectTag";
import { PressableBox } from "../Box/Box";
import { Tag } from "../Tag/Tag";
import { Text } from "../Text/Text";

interface Props {
  tags: TagType[];
  onSelectTags: (tags: TagType[]) => void;
}

export function TagList({ tags, onSelectTags }: Props) {
  const { showBottomSheet } = useBottomSheetService();

  function onPressEditTag() {
    showBottomSheet({
      element: <SelectTag currentTags={tags} onPress={onSelectTags} />,
      title: "Editar Tags",
    });
  }

  return (
    <PressableBox
      marginBottom="md"
      flexDirection="row"
      columnGap="sm"
      onPress={onPressEditTag}
    >
      {tags?.length === 0 && <Text color="mediumGray">Adicionar Tag</Text>}
      <Animated.FlatList
        data={tags}
        horizontal
        showsHorizontalScrollIndicator={false}
        layout={LinearTransition}
        entering={FadeInLeft}
        contentContainerStyle={{ columnGap: 5 }}
        renderItem={({ item }) => <Tag text={item.title} color={item.color} />}
      />
    </PressableBox>
  );
}
