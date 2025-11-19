import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
} from "react-native";
import { ToolbarButton } from "./components/ToolBarButton";
import type {
  OnChangeStateEvent,
  EnrichedTextInputInstance,
} from "react-native-enriched";
import { Box, PressableBox } from "../Box/Box";
import { $shadowProps } from "@/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AwesomeIcon } from "../AwesomeIcon/AwesomeIcon";

const STYLE_ITEMS = [
  {
    name: "bold",
    icon: "bold",
  },
  {
    name: "italic",
    icon: "italic",
  },
  {
    name: "underline",
    icon: "underline",
  },
  {
    name: "strikethrough",
    icon: "strikethrough",
  },
  {
    name: "inline-code",
    icon: "code",
  },
  {
    name: "heading-1",
    text: "H1",
  },
  {
    name: "heading-2",
    text: "H2",
  },
  {
    name: "heading-3",
    text: "H3",
  },
  {
    name: "quote",
    icon: "quote-right",
  },
  {
    name: "code-block",
    icon: "file-code-o",
  },

  {
    name: "unordered-list",
    icon: "list-ul",
  },
  {
    name: "ordered-list",
    icon: "list-ol",
  },
] as const;

type Item = (typeof STYLE_ITEMS)[number];
type StylesState = OnChangeStateEvent;

export interface ToolbarProps {
  stylesState: StylesState;
  onPressSave: () => void;
  saveLoading: boolean;
  editorRef?: React.RefObject<EnrichedTextInputInstance | null>;
}

export function Toolbar({
  stylesState,
  editorRef,
  onPressSave,
  saveLoading,
}: ToolbarProps) {
  const { bottom } = useSafeAreaInsets();

  const $tollBarStyle: ViewStyle = {
    position: "absolute",
    bottom: bottom + 20,
    alignSelf: "center",
    marginHorizontal: 20,
  };

  const handlePress = (item: Item) => {
    const currentRef = editorRef?.current;
    if (!currentRef) return;

    switch (item.name) {
      case "bold":
        editorRef.current?.toggleBold();
        break;
      case "italic":
        editorRef.current?.toggleItalic();
        break;
      case "underline":
        editorRef.current?.toggleUnderline();
        break;
      case "strikethrough":
        editorRef.current?.toggleStrikeThrough();
        break;
      case "inline-code":
        editorRef?.current?.toggleInlineCode();
        break;
      case "heading-1":
        editorRef.current?.toggleH1();
        break;
      case "heading-2":
        editorRef.current?.toggleH2();
        break;
      case "heading-3":
        editorRef.current?.toggleH3();
        break;
      case "code-block":
        editorRef?.current?.toggleCodeBlock();
        break;
      case "quote":
        editorRef?.current?.toggleBlockQuote();
        break;
      case "unordered-list":
        editorRef.current?.toggleUnorderedList();
        break;
      case "ordered-list":
        editorRef.current?.toggleOrderedList();
        break;
    }
  };

  const isActive = (item: Item) => {
    switch (item.name) {
      case "bold":
        return stylesState.isBold;
      case "italic":
        return stylesState.isItalic;
      case "underline":
        return stylesState.isUnderline;
      case "strikethrough":
        return stylesState.isStrikeThrough;
      case "inline-code":
        return stylesState.isInlineCode;
      case "heading-1":
        return stylesState.isH1;
      case "heading-2":
        return stylesState.isH2;
      case "heading-3":
        return stylesState.isH3;
      case "code-block":
        return stylesState.isCodeBlock;
      case "quote":
        return stylesState.isBlockQuote;
      case "unordered-list":
        return stylesState.isUnorderedList;
      case "ordered-list":
        return stylesState.isOrderedList;
      default:
        return false;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={$tollBarStyle}
    >
      <Box
        style={[$shadowProps]}
        height={50}
        borderRadius="md"
        backgroundColor="mediumGray"
      >
        <Box flex={1} overflow="hidden" borderRadius="md" flexDirection="row">
          <PressableBox
            height={50}
            onPress={onPressSave}
            width={60}
            backgroundColor="jetBlack"
            justifyContent="center"
            alignItems="center"
          >
            {saveLoading ? (
              <ActivityIndicator size={"small"} />
            ) : (
              <AwesomeIcon name="save" color="pureWhite" size={20} />
            )}
          </PressableBox>
          <FlatList
            horizontal
            data={STYLE_ITEMS}
            renderItem={({ item }) => (
              <ToolbarButton
                {...item}
                isActive={isActive(item)}
                onPress={() => handlePress(item)}
              />
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: Item) => item.name}
          />
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
}
