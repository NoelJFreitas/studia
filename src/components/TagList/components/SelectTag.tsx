import { Box, PressableBox } from "@/components/Box/Box";
import { Button } from "@/components/Button/Button";
import { Tag } from "@/components/Tag/Tag";
import { Text } from "@/components/Text/Text";
import { Tag as TagType, useGetTags } from "@/domain/tag";
import { useEffect, useState } from "react";
import Animated, {
  LinearTransition,
  SlideInRight,
  SlideOutRight,
} from "react-native-reanimated";

interface Props {
  currentTags: TagType[];
  onPress: (tags: TagType[]) => void;
}

const AnimatedPressableBox = Animated.createAnimatedComponent(PressableBox);
const AnimatedBox = Animated.createAnimatedComponent(Box);

export function SelectTag({ currentTags, onPress }: Props) {
  const { data } = useGetTags();

  const [docTags, setDocTags] = useState<TagType[]>(currentTags);
  const [availableTags, setAvailableTags] = useState<TagType[]>([]);

  useEffect(() => {
    if (!data) return;

    const currentIds = new Set(currentTags.map((t) => String(t.id)));

    setAvailableTags(data.filter((tag) => !currentIds.has(String(tag.id))));
  }, [data, currentTags]);

  function handleAddTag(tag: TagType) {
    setDocTags((prev) => [...prev, tag]);
    setAvailableTags((prev) => prev.filter((t) => t.id !== tag.id));
  }

  function handleRemoveTag(tag: TagType) {
    setAvailableTags((prev) => [...prev, tag]);
    setDocTags((prev) => prev.filter((t) => t.id !== tag.id));
  }

  return (
    <Box>
      <Text mb="md">Tags Selecionadas:</Text>
      <AnimatedBox
        layout={LinearTransition}
        flexDirection="row"
        flexWrap="wrap"
        gap="sm"
        mb="md"
      >
        {docTags.map((item, i) => (
          <AnimatedPressableBox
            entering={SlideInRight}
            exiting={SlideOutRight}
            layout={LinearTransition}
            key={item.id}
            onPress={() => handleRemoveTag(item)}
          >
            <Tag text={item.title} color={item.color} />
          </AnimatedPressableBox>
        ))}
      </AnimatedBox>

      <Text mb="sm">Suas Tags:</Text>

      <AnimatedBox
        layout={LinearTransition}
        flexDirection="row"
        flexWrap="wrap"
        gap="sm"
      >
        {availableTags.map((item, i) => (
          <AnimatedPressableBox
            entering={SlideInRight}
            exiting={SlideOutRight}
            layout={LinearTransition}
            key={item.id + "avalible"}
            onPress={() => handleAddTag(item)}
          >
            <Tag text={item.title} color={item.color} />
          </AnimatedPressableBox>
        ))}
      </AnimatedBox>
      <Button
        mt="lg"
        title="Salvar"
        alignSelf="center"
        onPress={() => onPress(docTags)}
      />
    </Box>
  );
}
