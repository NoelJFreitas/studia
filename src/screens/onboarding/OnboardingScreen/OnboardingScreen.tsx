import { Screen, Button } from "@/components";

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { pages } from "./onboardingData";
import { ViewStyle } from "react-native";
import { OnboardingImage } from "./components/OnboardImage";
import { Pagination } from "./components/Pagination";
import { OnboardingText } from "./components/OnboardingText";
import { useRef, useState } from "react";
import { OnboardingScreenProps } from "@/routes";

export function OnboardingScreen({
  navigation,
}: OnboardingScreenProps<"OnboardingScreen">) {
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
      textListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    } else {
      navigation.replace("Auth", { screen: "Login" });
    }
  }

  return (
    <Screen justifyContent="center" noPaddingHorizontal alignItems="center">
      <Animated.FlatList
        data={pages}
        style={$list}
        ref={imageListRef}
        onScroll={scrollHandler}
        pagingEnabled
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <OnboardingImage image={item.image} />}
      />
      <Pagination
        pages={pages.length}
        currentIndex={currentIndex}
        alignSelf="center"
        marginTop="xxxl"
        marginBottom="xl"
      />
      <Animated.FlatList
        ref={textListRef}
        style={$list}
        data={pages}
        scrollEnabled={false}
        pagingEnabled
        horizontal
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <OnboardingText title={item.title} description={item.description} />
        )}
      />
      <Button
        marginTop="xl"
        title={pages[currentIndex].buttonTitle}
        onPress={goToNextPage}
      />
    </Screen>
  );
}

const $list: ViewStyle = {
  flexGrow: 0,
};
