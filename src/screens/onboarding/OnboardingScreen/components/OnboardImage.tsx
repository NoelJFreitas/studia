import { Box } from "@/components";
import { Image, ImageStyle } from "expo-image";
import { Dimensions } from "react-native";

import { OnboardingPageItem } from "../onboardingData";

const WIDTH = Dimensions.get("screen").width;

type Props = Pick<OnboardingPageItem, "image">;

export function OnboardingImage({ image }: Props) {
  return (
    <Box justifyContent="center" alignItems="center" width={WIDTH}>
      <Image source={image} style={$image} />
    </Box>
  );
}

const $image: ImageStyle = {
  height: WIDTH * 0.76,
  width: WIDTH * 0.76,
};
