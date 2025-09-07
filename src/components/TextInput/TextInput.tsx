import { useRef } from "react";

import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from "react-native";

import { Box, BoxProps, PressableBox } from "../Box/Box";
import { Text } from "../Text/Text";
import { APP_FONT_FAMILY } from "src/assets/fonts";

import { colors } from "@theme";

export interface TextInputProps extends RNTextInputProps {
  label: string;
  RightComponent?: React.ReactNode;
  boxProps?: BoxProps;
}

export function TextInput({
  boxProps,
  label,
  RightComponent,
  ...props
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  const focusInput = () => inputRef.current?.focus();

  return (
    <PressableBox rowGap="xs" onPress={focusInput} {...boxProps}>
      <Box flexDirection="row">
        <Box flex={1} rowGap="xs">
          <Text
            preset="paragraphCaption"
            color="primaryTitle"
            fontWeight="medium"
          >
            {label}
          </Text>
          <RNTextInput
            {...props}
            ref={inputRef}
            style={$textInputStyle}
            placeholderTextColor={colors.palette.lightGray}
          />
        </Box>
        <Box justifyContent="center" alignItems="center" width={"10%"}>
          {RightComponent}
        </Box>
      </Box>
      <Box borderBottomWidth={1} borderColor="lightGray" />
    </PressableBox>
  );
}

export const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  height: 20,
  color: colors.lightTheme.primaryText,
  fontFamily: APP_FONT_FAMILY.poppinsRegular,
};
