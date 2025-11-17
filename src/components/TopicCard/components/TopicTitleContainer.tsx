import { Box } from "@/components/Box/Box";
import { Text } from "@/components/Text/Text";

interface Props {
  title: string;
}

export function TopicTitleContainer({ title }: Props) {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Text
        fontWeight="medium"
        color="jetBlack"
        numberOfLines={1}
        flexShrink={1}
      >
        {title}
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
