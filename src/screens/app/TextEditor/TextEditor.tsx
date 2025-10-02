import { Screen } from "@/components";
import { RichText, useEditorBridge, Toolbar } from "@10play/tentap-editor";
import { KeyboardAvoidingView, Platform } from "react-native";

export function TextEditor() {
  const editor = useEditorBridge({
    initialContent: {
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "Introdução à Biologia" }],
        },
        {
          type: "paragraph",
          content: [
            { type: "text", text: "A célula é a unidade básica da vida. " },
            {
              type: "text",
              marks: [{ type: "bold" }],
              text: "Todas as funções vitais",
            },
            { type: "text", text: " ocorrem dentro dela." },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Membrana plasmática" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Citoplasma" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Núcleo" }],
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            { type: "text", marks: [{ type: "italic" }], text: "Dica:" },
            {
              type: "text",
              text: " revise os componentes celulares diariamente.",
            },
          ],
        },
      ],
    },
  });

  return (
    <Screen flex={1}>
      <RichText editor={editor} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
        }}
      >
        <Toolbar editor={editor} />
      </KeyboardAvoidingView>
    </Screen>
  );
}
