import { Screen } from "@components";

import Animated, {
  CurvedTransition,
  FadeInRight,
  FadingTransition,
  LinearTransition,
  SequencedTransition,
  useAnimatedScrollHandler,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { pages } from "./onboardingData";
import { Button, Dimensions, ViewStyle } from "react-native";
import { OnboardingImage } from "./components/OnboardImage";
import { Pagination } from "./components/Pagination";
import { OnboardingText } from "./components/OnboardingText";
import { useRef, useState } from "react";

const WIDTH = Dimensions.get("screen").width;
export function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const imageListRef = useRef<Animated.FlatList<any>>(null);
  const textListRef = useRef<Animated.FlatList<any>>(null);

  function goToNextPage() {
    if (currentIndex < pages.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);

      imageListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      textListRef.current?.scrollToIndex({ index: nextIndex, animated: false });
    }
  }

  return (
    <Screen justifyContent="center" noPaddingHorizontal>
      <Animated.FlatList
        pagingEnabled
        horizontal
        scrollEnabled={false}
        style={$list}
        showsHorizontalScrollIndicator={false}
        data={pages}
        entering={FadeInRight}
        ref={imageListRef}
        onScroll={scrollHandler}
        renderItem={({ item, index }) => (
          <OnboardingImage image={item.image} scrollX={scrollX} index={index} />
        )}
      />
      <Pagination
        pages={3}
        currentIndex={1}
        alignSelf="center"
        marginTop="xxxl"
        marginBottom="xl"
      />
      <Animated.FlatList
        pagingEnabled
        horizontal
        scrollEnabled={false}
        style={$list}
        showsHorizontalScrollIndicator={false}
        data={pages}
        onScroll={scrollHandler}
        ref={textListRef}
        itemLayoutAnimation={SequencedTransition}
        renderItem={({ item, index }) => (
          <OnboardingText
            title={item.title}
            description={item.description}
            scrollX={scrollX}
            index={index}
          />
        )}
      />
      <Button title="passar aqui" onPress={goToNextPage} />
    </Screen>
  );
}

const $list: ViewStyle = {
  flexGrow: 0,
};
