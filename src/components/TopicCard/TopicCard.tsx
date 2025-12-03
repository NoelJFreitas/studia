import { Dimensions, ViewStyle } from "react-native";
import { PressableBox } from "../Box/Box";
import { Text } from "../Text/Text";
import { $shadowProps } from "@/theme";
import { TopicTitleContainer } from "./components/TopicTitleContainer";
import TagList from "./components/TagList";
import { Note } from "@/domain/note";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const WIDTH = Dimensions.get("screen").width;

interface Props {
  topic: Note;
}

const AnimatedBox = Animated.createAnimatedComponent(PressableBox);

export const MostRecentItemSizes = {
  width: WIDTH * 0.7,
  height: WIDTH * 0.4,
};

export * from "./components/TopicCardSkeleton";

export function TopicCard({ topic }: Props) {
  const { navigate } = useNavigation();
  return (
    <AnimatedBox
      onPress={() =>
        navigate("App", { screen: "Editor", params: { id: topic.id } })
      }
      style={[$boxStyle, $shadowProps]}
      backgroundColor="pureWhite"
      borderRadius="md"
      padding="sm"
      rowGap="sm"
      entering={FadeInUp.duration(600)}
    >
      <TagList tags={topic.tags} />
      <TopicTitleContainer title={topic.title} />
      <Text numberOfLines={4}>{topic.shortDescription}</Text>
    </AnimatedBox>
  );
}

const $boxStyle: ViewStyle = {
  width: MostRecentItemSizes.width,
  height: MostRecentItemSizes.height,
};
