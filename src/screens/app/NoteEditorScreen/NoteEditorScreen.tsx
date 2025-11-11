import { Screen, Toolbar } from "@/components";
import { AppScreenProps } from "@/routes";
import { useEffect, useRef, useState } from "react";
import {
  EnrichedTextInput,
  EnrichedTextInputInstance,
  OnChangeStateEvent,
} from "react-native-enriched";
import { NativeSyntheticEvent, ScrollView, ViewStyle } from "react-native";
import { DEFAULT_STYLE, htmlStyle } from "./constants";
import { useGetNoteById } from "@/domain/note";

export type StylesState = OnChangeStateEvent;

export function NoteEditorScreen({
  route,
  navigation,
}: AppScreenProps<"Editor">) {
  const { data } = useGetNoteById({
    id: route.params.id,
  });

  const ref = useRef<EnrichedTextInputInstance>(null);
  const [stylesState, setStylesState] = useState<StylesState>(DEFAULT_STYLE);

  const handleChangeState = (e: NativeSyntheticEvent<OnChangeStateEvent>) => {
    setStylesState(e.nativeEvent);
  };

  useEffect(() => {
    if (!data) return;
    ref.current.setValue(data.content);
  }, [data]);

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <EnrichedTextInput
          style={$richText}
          ref={ref}
          htmlStyle={htmlStyle}
          onChangeState={handleChangeState}
        />
      </ScrollView>
      <Toolbar stylesState={stylesState} editorRef={ref} />
    </Screen>
  );
}

const $richText: ViewStyle = {
  flex: 1,
};
