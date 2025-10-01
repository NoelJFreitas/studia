import { Box, Text } from "@/components";
import { useAuthenticatedUser } from "@/services";
import { Avatar } from "./Avatar";

export function HomeHeader() {
  const { user } = useAuthenticatedUser();

  const nameParts = user.name.split(" ");
  const firstAndLastName =
    nameParts.length > 1
      ? `${nameParts[0]} ${nameParts[nameParts.length - 1]}`
      : nameParts[0];

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box rowGap="xs">
        <Text color="lightPurple">Boas-Vinda!</Text>
        <Text fontWeight="medium" preset="headingMedium">
          {firstAndLastName}
        </Text>
      </Box>
      <Avatar source={user.avatar} />
    </Box>
  );
}
