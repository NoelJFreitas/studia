import { Box } from "@/components/Box/Box";
import { Icon } from "@/components/Icon/Icon";
import { Text } from "@/components/Text/Text";
import { Pressable } from "react-native";

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
    <Box>
      <Box justifyContent="center" alignItems="center" flexDirection="row">
        <Text preset="headingSmall" fontWeight="medium">
          {title}
        </Text>
        <Pressable
          style={{ position: "absolute", right: 18 }}
          onPress={handleOnClose}
        >
          <Icon name="close" />
        </Pressable>
      </Box>
      {children}
    </Box>
  );
}
