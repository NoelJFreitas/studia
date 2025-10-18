import { Modal, ViewStyle } from "react-native";
import ColorPicker, {
  Panel1,
  Preview,
  HueSlider,
} from "reanimated-color-picker";
import { Box } from "../Box/Box";
import { $shadowProps } from "@/theme";
import { Button } from "../Button/Button";
import { useState } from "react";
import { runOnJS } from "react-native-worklets";
import { useAppTheme } from "@/hooks";

interface Props {
  visible: boolean;
  onSelectColor: (color: string) => void;
}

export function ColorPickerModal({ visible, onSelectColor }: Props) {
  const { colors } = useAppTheme();
  const [color, setColor] = useState(colors["primary"]);

  function onComplete({ hex }) {
    "worklet";
    runOnJS(setColor)(hex);
  }

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <Box
        flex={1}
        rowGap="md"
        style={{ backgroundColor: "#0000006f" }}
        justifyContent="center"
        alignItems="center"
      >
        <ColorPicker
          value={color}
          onComplete={onComplete}
          style={[$content, $shadowProps]}
        >
          <Preview />
          <Panel1 />
          <HueSlider />
        </ColorPicker>
        <Button
          title="Selecionar"
          style={$shadowProps}
          onPress={() => onSelectColor(color)}
        />
      </Box>
    </Modal>
  );
}

const $content: ViewStyle = {
  width: "70%",
  gap: 14,
  backgroundColor: "white",
  padding: 20,
  borderRadius: 15,
};
