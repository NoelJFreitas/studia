import { Box } from "@/components/Box/Box";
import { Text } from "@/components/Text/Text";

export function TopicTitleContainer() {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Text fontWeight="medium" color="jetBlack">
        Design Thinking
      </Text>
      <Text
        fontWeight="light"
        color="mediumGray"
        preset="paragraphCaptionExtraSmall"
      >
        1h atrás
      </Text>
    </Box>
  );
}
