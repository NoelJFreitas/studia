import { Screen, TagList, Toolbar } from "@/components";
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
import { NoteEditorSkeleton } from "./components/NoteEditorSkeleton";
import { Tag } from "@/domain/tag";

export type StylesState = OnChangeStateEvent;

export function NoteEditorScreen({ route }: AppScreenProps<"Editor">) {
  const [tags, setTags] = useState<Tag[]>();
  const { data, isLoading } = useGetNoteById({
    id: route.params.id,
  });

  const ref = useRef<EnrichedTextInputInstance>(null);
  const [stylesState, setStylesState] = useState<StylesState>(DEFAULT_STYLE);

  const handleChangeState = (e: NativeSyntheticEvent<OnChangeStateEvent>) => {
    setStylesState(e.nativeEvent);
  };

  useEffect(() => {
    if (!data || isLoading) return;
    ref.current.setValue(data.content);
    setTags(data.tags);
  }, [data, isLoading]);

  if (isLoading) return <NoteEditorSkeleton />;

  return (
    <Screen showHeader headerTitle={data?.title}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TagList tags={tags} onSelectTags={setTags} />
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
