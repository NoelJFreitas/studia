import { Box, PressableBox } from "@/components/Box/Box";
import { Icon } from "@/components/Icon/Icon";
import { Text } from "@/components/Text/Text";

export interface BottomSheetContentProps {
  title?: string;
  children: React.ReactElement;
  handleOnClose: () => void;
}

export function BottomSheetContent({
  title,
  children,
  handleOnClose,
}: BottomSheetContentProps) {
  return (
    <Box padding="md">
      <Box
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Text preset="headingSmall" fontWeight="medium">
          {title}
        </Text>
        <PressableBox
          padding="xs"
          borderRadius="lg"
          backgroundColor="coolGray"
          onPress={handleOnClose}
        >
          <Icon name="close" color="pureWhite" />
        </PressableBox>
      </Box>
      {children}
    </Box>
  );
}
