import { Box, Text } from "@/components";

interface Props {
  font: string;
  question: string;
}

export function QuestionHeader({ font, question }: Props) {
  return (
    <Box backgroundColor="lightGray" padding="sm" borderRadius="sm">
      <Text>
        <Text fontWeight="bold">{font}</Text> - {question}
      </Text>
    </Box>
  );
}
