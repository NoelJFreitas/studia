import { images } from "@/assets";
import { Box, Text } from "@/components";
import { useAppTheme } from "@/hooks";
import { Image } from "expo-image";
import { ImageProps } from "react-native";

type SocialItemsName = "google" | "facebook";

interface SocialItem {
  name: string;
  logo: ImageProps["source"];
}
const socialItems: Record<SocialItemsName, SocialItem> = {
  facebook: {
    name: "Facebook",
    logo: images.facebookLogo,
  },
  google: {
    name: "Google",
    logo: images.googleLogo,
  },
};

interface Props {
  type: SocialItemsName;
}

export function SocialLogin({ type }: Props) {
  const { spacing } = useAppTheme();
  return (
    <Box
      gap="sm"
      backgroundColor="lightSilver"
      width={140}
      height={40}
      justifyContent="center"
      alignItems="center"
      borderRadius="xs"
      flexDirection="row"
    >
      <Image
        source={socialItems[type].logo}
        style={{ height: spacing.md, width: spacing.md }}
      />
      <Text color="charcoalGray">{socialItems[type].name}</Text>
    </Box>
  );
}
