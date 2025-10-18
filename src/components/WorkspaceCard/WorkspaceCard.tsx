import { Dimensions, ViewProps, ViewStyle } from "react-native";

import { Text } from "../Text/Text";
import { FolderIcon } from "./components/FolderIcon";
import { Directory } from "@/domain/directory";
import { FolderBackground } from "./components/FolderBackground";
import { Box } from "../Box/Box";
import Animated, { FadeIn } from "react-native-reanimated";

interface Props extends ViewProps {
  directory: Directory;
}

const width = Dimensions.get("screen").width;
const AnimatedBox = Animated.createAnimatedComponent(Box);

export function WorkspaceCard({ directory, ...props }: Props) {
  const $shadowProps: ViewStyle = {
    shadowColor: `${directory.iconColor}60`,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  };

  return (
    <AnimatedBox
      {...props}
      entering={FadeIn}
      style={[$containerStyle, $shadowProps, props.style]}
    >
      <FolderBackground color={directory.iconColor} />
      <FolderIcon color={directory.iconColor} icon={directory.icon} />
      <Text preset="headingSmall" fontWeight="bold" mt="md" mb="sm">
        {directory.name}
      </Text>
      <Text color="coolGray" fontWeight="light">
        {`${directory.notesCount} anotações`}
      </Text>
    </AnimatedBox>
  );
}

const $containerStyle: ViewStyle = {
  width: width * 0.456,
  height: width * 0.456,
  justifyContent: "center",
  paddingHorizontal: 20,
};
