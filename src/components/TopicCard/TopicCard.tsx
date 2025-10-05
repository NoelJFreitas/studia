import { Dimensions, ViewStyle } from "react-native";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";
import { $shadowProps } from "@/theme";
import { TopicTitleContainer } from "./components/TopicTitleContainer";
import TagList from "./components/TagList";
import { Topic } from "@/domain/Topic";

const WIDTH = Dimensions.get("screen").width;

interface Props {
  topic: Topic;
}

export function TopicCard({ topic }: Props) {
  return (
    <Box
      style={[$boxStyle, $shadowProps]}
      backgroundColor="pureWhite"
      borderRadius="md"
      padding="sm"
      rowGap="sm"
    >
      <TagList tags={topic.tags} />
      <TopicTitleContainer />
      <Text>
        Componentes atômicos são utilizados em design systems de alto padrão
        para serem escalá....
      </Text>
    </Box>
  );
}

const $boxStyle: ViewStyle = {
  width: WIDTH * 0.7,
  height: WIDTH * 0.4,
};
