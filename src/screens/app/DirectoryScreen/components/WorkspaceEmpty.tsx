import { Box, BoxProps, Text } from "@/components";

interface Props extends BoxProps {
  description: string;
}
export function WorkspaceEmpty({ description, ...props }: Props) {
  return (
    <Box {...props}>
      <Text preset="headingSmall" color="coolGray" textAlign="center">
        {description}
      </Text>
    </Box>
  );
}
