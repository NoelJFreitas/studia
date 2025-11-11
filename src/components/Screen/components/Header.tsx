import { Box, PressableBox } from "@/components/Box/Box";
import { Icon } from "@/components/Icon/Icon";
import { Text } from "@/components/Text/Text";
import { PressableProps } from "react-native";

interface HeaderProps extends PressableProps {
  title?: string;
}

export function Header({ title, ...props }: HeaderProps) {
  return (
    <Box
      paddingVertical="md"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <PressableBox
        padding="sm"
        backgroundColor="coolGray"
        borderRadius="xl"
        {...props}
      >
        <Icon name="arrowLeft" size={24} color="pureWhite" />
      </PressableBox>
      <Text preset="headingMedium2" fontWeight="medium" color="jetBlack">
        {title}
      </Text>
    </Box>
  );
}
