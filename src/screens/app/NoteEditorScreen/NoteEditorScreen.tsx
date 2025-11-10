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
import { useProcessingModalService } from "@/services/processingModal";

export type StylesState = OnChangeStateEvent;

export function NoteEditorScreen({
  route,
  navigation,
}: AppScreenProps<"Editor">) {
  const { hideProcessingModal } = useProcessingModalService();

  const { data } = useGetNoteById({
    id: route.params.id,
    onSuccess: () => hideProcessingModal(),
    onError: () => navigation.goBack(),
  });

  const ref = useRef<EnrichedTextInputInstance>(null);
  const [stylesState, setStylesState] = useState<StylesState>(DEFAULT_STYLE);

  const handleChangeState = (e: NativeSyntheticEvent<OnChangeStateEvent>) => {
    setStylesState(e.nativeEvent);
  };

  useEffect(() => {
    if (!data) return;
    ref.current.setValue(data.content.trim());
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
