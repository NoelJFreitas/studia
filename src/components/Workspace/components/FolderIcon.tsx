import { Box } from "@/components/Box/Box";
import { Icon } from "@/components/Icon/Icon";
import { useAppTheme } from "@/hooks";
import { ViewStyle } from "react-native";

export function FolderIcon() {
  const { colors } = useAppTheme();

  const $style: ViewStyle = {
    backgroundColor: `${colors.primary}10`,
    height: 52,
    width: 52,
  };

  return (
    <Box
      borderRadius="huge"
      padding="md"
      alignItems="center"
      justifyContent="center"
      alignSelf="flex-start"
      style={$style}
    >
      <Icon name="success" size={23} color="primary" />
    </Box>
  );
}
