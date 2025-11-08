import { Dimensions, ViewStyle } from "react-native";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";
import { $shadowProps } from "@/theme";
import { TopicTitleContainer } from "./components/TopicTitleContainer";
import TagList from "./components/TagList";
import { Note } from "@/domain/note";
import Animated, { FadeInUp } from "react-native-reanimated";

const WIDTH = Dimensions.get("screen").width;

interface Props {
  topic: Note;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

export function TopicCard({ topic }: Props) {
  return (
    <AnimatedBox
      style={[$boxStyle, $shadowProps]}
      backgroundColor="pureWhite"
      borderRadius="md"
      padding="sm"
      rowGap="sm"
      entering={FadeInUp.duration(600)}
    >
      <TagList tags={topic.tags} />
      <TopicTitleContainer />
      <Text>
        Componentes atômicos são utilizados em design systems de alto padrão
        para serem escalá....
      </Text>
    </AnimatedBox>
  );
}

const $boxStyle: ViewStyle = {
  width: WIDTH * 0.7,
  height: WIDTH * 0.4,
};
