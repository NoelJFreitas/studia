import { Box } from "@/components/Box/Box";
import { Tag } from "@/components/Tag/Tag";
import { Tag as TagType } from "@/domain/tag";
import { FlatList } from "react-native";

interface Props {
  tags: TagType[];
}

export default function TagList({ tags }: Props) {
  return (
    <Box flexDirection="row">
      <FlatList
        data={tags}
        horizontal
        scrollEnabled={false}
        ItemSeparatorComponent={() => <Box width={10} />}
        renderItem={({ item }) => <Tag color={item.color} text={item.title} />}
        keyExtractor={(item, index) => item.title + index}
      />
    </Box>
  );
}
