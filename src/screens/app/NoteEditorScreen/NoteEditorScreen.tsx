import { AwesomeIcon, Screen } from "@/components";
import { AppScreenProps } from "@/routes";
import { useRef } from "react";
import {
  EnrichedTextInput,
  EnrichedTextInputInstance,
  HtmlStyle,
} from "react-native-enriched";
import { Text } from "react-native";
import { APP_FONT_FAMILY } from "@/assets/fonts";

export function NoteEditorScreen({
  route,
  navigation,
}: AppScreenProps<"Editor">) {
  const ref = useRef<EnrichedTextInputInstance>(null);

  const glyph = String.fromCharCode(61595);

  return (
    <Screen flex={1}>
      {/* <EnrichedTextInput style={{ flex: 1, top: 50 }} ref={ref} /> */}
      <AwesomeIcon name="amazon" />
    </Screen>
  );
}
