import { images } from "@/assets";
import { Box } from "@/components";
import { Image, ImageStyle } from "expo-image";

interface Props {
  source?: string;
}

export function Avatar({ source }: Props) {
  return (
    <Box width={51} height={51} borderRadius="xl" overflow="hidden">
      <Image
        source={source ?? images.defaultProfileAvatar}
        style={$imageStyle}
        contentFit="cover"
        contentPosition="center"
      />
    </Box>
  );
}

const $imageStyle: ImageStyle = {
  flex: 1,
  backgroundColor: "red",
};
