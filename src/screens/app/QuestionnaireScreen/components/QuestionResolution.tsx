import { Box, Text } from "@/components";

interface Props {
  resolution: string;
}
export function QuestionResolution({ resolution }: Props) {
  return (
    <Box
      rowGap="md"
      backgroundColor="forestGreenLight"
      borderRadius="md"
      padding="sm"
    >
      <Text fontWeight="bold">Explicação</Text>
      <Text>{resolution}</Text>
    </Box>
  );
}
