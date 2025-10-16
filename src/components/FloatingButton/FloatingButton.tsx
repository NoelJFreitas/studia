import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "../Box/Box";
import { Icon } from "../Icon/Icon";
import { ViewStyle } from "react-native";

export function FloatingButton() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Box
      height={56}
      width={56}
      backgroundColor="jetBlack"
      borderRadius="xl"
      justifyContent="center"
      alignItems="center"
      style={$purpleShadowProps}
      overflow="visible"
      position="absolute"
      bottom={bottom + 10}
      right={18}
    >
      <Icon name="plus" color="pureWhite" />
    </Box>
  );
}

export const $purpleShadowProps: ViewStyle = {
  shadowColor: "#9747FF",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10,
};
