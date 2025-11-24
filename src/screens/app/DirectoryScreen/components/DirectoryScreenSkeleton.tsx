import React, { useState } from "react";
import { Skeleton } from "moti/skeleton";
import { Dimensions, LayoutChangeEvent, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, SkeletonView } from "@/components";

export function DirectoryScreenSkeleton() {
  const { top } = useSafeAreaInsets();

  const [lineCount, setLineCount] = useState(0);

  function handleOnLayout(e: LayoutChangeEvent) {
    setLineCount(Math.floor(e.nativeEvent.layout.height / 40));
  }

  return (
    <SkeletonView style={[$style, { paddingTop: top }]}>
      <Box flexDirection="row" justifyContent="space-between">
        <Skeleton colorMode={"light"} height={50} width={50} radius="round" />
        <Skeleton colorMode={"light"} height={40} width={150} radius="round" />
      </Box>
      <Box
        flexDirection="row"
        flexWrap="wrap"
        rowGap="md"
        marginTop="lg"
        flex={1}
        justifyContent="space-between"
        onLayout={handleOnLayout}
      >
        {Array.from({ length: lineCount }).map((_, i) => (
          <Skeleton
            colorMode={"light"}
            height={Dimensions.get("window").width * 0.5}
            width={Dimensions.get("window").width * 0.45}
            key={i}
          />
        ))}
      </Box>
    </SkeletonView>
  );
}

const $style: ViewStyle = {
  flex: 1,
  paddingHorizontal: 16,
};
