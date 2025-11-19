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
import { useGetNoteById, useUpdateNote } from "@/domain/note";
import { NoteEditorSkeleton } from "./components/NoteEditorSkeleton";
import { Tag } from "@/domain/tag";
import { useToastService } from "@/services/toast";

export type StylesState = OnChangeStateEvent;

export function NoteEditorScreen({ route }: AppScreenProps<"Editor">) {
  const [tags, setTags] = useState<Tag[]>();
  const [content, setContent] = useState<string>();

  const { showToast } = useToastService();

  const { data, isLoading } = useGetNoteById({
    id: route.params.id,
  });

  const { mutate, isPending } = useUpdateNote({
    onError: () =>
      showToast({ type: "error", message: "Falha ao salvar nota" }),
    onSuccess: () =>
      showToast({ type: "success", message: "Nota salva com sucesso!" }),
  });

  const ref = useRef<EnrichedTextInputInstance>(null);
  const [stylesState, setStylesState] = useState<StylesState>(DEFAULT_STYLE);

  const handleChangeState = (e: NativeSyntheticEvent<OnChangeStateEvent>) => {
    setStylesState(e.nativeEvent);
  };

  const handleOnPressSave = () => {
    mutate({
      content: content,
      notes_id: route.params.id,
      tags: tags.map(({ id }) => id),
    });
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
          onChangeHtml={(e) => setContent(e.nativeEvent.value)}
          htmlStyle={htmlStyle}
          onChangeState={handleChangeState}
        />
      </ScrollView>
      <Toolbar
        saveLoading={isPending}
        stylesState={stylesState}
        editorRef={ref}
        onPressSave={handleOnPressSave}
      />
    </Screen>
  );
}

const $richText: ViewStyle = {
  flex: 1,
};
