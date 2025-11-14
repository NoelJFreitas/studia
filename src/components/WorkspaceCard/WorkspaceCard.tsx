import { Dimensions, ViewProps, ViewStyle } from "react-native";

import { Text } from "../Text/Text";
import { FolderIcon } from "./components/FolderIcon";
import { Directory } from "@/domain/directory";
import { FolderBackground } from "./components/FolderBackground";
import { PressableBox } from "../Box/Box";
import Animated, { FadeIn } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

interface Props extends ViewProps {
  directory: Directory;
}

const width = Dimensions.get("screen").width;
const AnimatedBox = Animated.createAnimatedComponent(PressableBox);

export * from "./components/WorkspaceCardSkeleton";

export function WorkspaceCard({ directory, ...props }: Props) {
  const navigation = useNavigation();
  const $shadowProps: ViewStyle = {
    shadowColor: `${directory.iconColor}60`,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  };

  function handleNavigateToWorkspace() {
    navigation.navigate("App", {
      screen: "Directory",
      params: { id: directory.id, name: directory.name },
    });
  }

  return (
    <AnimatedBox
      {...props}
      onPress={handleNavigateToWorkspace}
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

export const workspaceCardSizes = {
  width: width * 0.456,
  height: width * 0.456,
};

const $containerStyle: ViewStyle = {
  width: workspaceCardSizes.width,
  height: workspaceCardSizes.width,
  justifyContent: "center",
  paddingHorizontal: 20,
  overflow: "visible",
};
