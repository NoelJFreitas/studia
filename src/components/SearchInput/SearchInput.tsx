import { TextInput, ViewStyle } from "react-native";
import { Box, BoxProps } from "../Box/Box";
import { Icon } from "../Icon/Icon";

interface Props extends BoxProps {
  placeholder?: string;
}

export function SearchInput({ placeholder, ...props }: Props) {
  return (
    <Box
      height={36}
      backgroundColor="pureWhite"
      flexDirection="row"
      alignItems="center"
      paddingHorizontal="sm"
      borderRadius="sm"
      columnGap="sm"
      {...props}
    >
      <Icon name="search" color="mediumGray" size={15} />
      <TextInput placeholder={placeholder} style={$textInputStyle} />
    </Box>
  );
}

const $textInputStyle: ViewStyle = {
  flex: 1,
};
