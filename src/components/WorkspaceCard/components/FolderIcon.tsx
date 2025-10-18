import { Box } from "@/components/Box/Box";
import { Icon, IconName } from "@/components/Icon/Icon";

import { ViewStyle } from "react-native";

interface Props {
  icon: string;
  color: string;
}

export function FolderIcon({ icon, color }: Props) {
  const $style: ViewStyle = {
    backgroundColor: `${color}10`,
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
      <Icon name={icon as IconName} size={23} hexadecimalColor={color} />
    </Box>
  );
}
