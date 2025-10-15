import { Dimensions, ViewProps, ViewStyle } from "react-native";

import { ImageBackground } from "expo-image";
import { Text } from "../Text/Text";
import { images } from "@/assets";
import { FolderIcon } from "./components/FolderIcon";

interface Props extends ViewProps {
  title: string;
  quantity: number;
}

const width = Dimensions.get("screen").width;

export function WorkspaceCard({ quantity, title, ...props }: Props) {
  return (
    <ImageBackground
      {...props}
      style={[$containerStyle, $shadowProps, props.style]}
      source={images.folderBackground}
      contentFit="cover"
    >
      <FolderIcon />
      <Text preset="headingSmall" fontWeight="bold" mt="md" mb="sm">
        {title}
      </Text>
      <Text color="coolGray" fontWeight="light">
        {`${quantity} anotações`}
      </Text>
    </ImageBackground>
  );
}

const $containerStyle: ViewStyle = {
  width: width * 0.456,
  height: width * 0.456,
  justifyContent: "center",
  paddingHorizontal: 20,
};

export const $shadowProps: ViewStyle = {
  shadowColor: "#9747FF60",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,
};
