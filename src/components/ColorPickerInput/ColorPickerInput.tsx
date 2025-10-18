import { Box, PressableBox, PressableBoxProps } from "../Box/Box";
import { Text } from "../Text/Text";

export interface ColorPickerInputProps extends PressableBoxProps {
  colorSelected?: string;
  label: string;
}

export function ColorPickerInput({
  colorSelected,
  label,
  ...props
}: ColorPickerInputProps) {
  const text = colorSelected ? colorSelected : "Selecione uma cor";

  return (
    <PressableBox {...props}>
      <Box flexDirection="row">
        <Box flex={1} rowGap="xs">
          <Text
            preset="paragraphCaption"
            color="primaryTitle"
            fontWeight="medium"
          >
            {label}
          </Text>
          <Text style={{ color: colorSelected ? colorSelected : "#B8BBBE" }}>
            {text}
          </Text>
        </Box>
        <Box justifyContent="center" alignItems="center" width={"10%"}>
          <Box
            width={15}
            height={15}
            borderWidth={1}
            style={{ backgroundColor: colorSelected }}
          />
        </Box>
      </Box>
      <Box borderBottomWidth={1} mt="xs" borderColor="lightGray" />
    </PressableBox>
  );
}
