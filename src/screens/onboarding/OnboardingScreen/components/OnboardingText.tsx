import { Box, Text } from "@/components";
import { OnboardingPageItem } from "../onboardingData";
import { Dimensions } from "react-native";

type Props = Pick<OnboardingPageItem, "title" | "description">;

const WIDTH = Dimensions.get("window").width;

export function OnboardingText({ title, description }: Props) {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      rowGap="sm"
      width={WIDTH}
      paddingHorizontal="xl"
    >
      <Text
        preset="headingMedium"
        fontWeight="bold"
        color="primaryTitle"
        textAlign="center"
      >
        {title}
      </Text>
      <Text fontWeight="light" textAlign="center">
        {description}
      </Text>
    </Box>
  );
}
