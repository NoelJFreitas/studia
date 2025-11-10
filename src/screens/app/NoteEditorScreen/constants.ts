import { HtmlStyle } from "react-native-enriched";
import { StylesState } from "./NoteEditorScreen";

export const DEFAULT_STYLE: StylesState = {
  isBold: false,
  isItalic: false,
  isUnderline: false,
  isStrikeThrough: false,
  isInlineCode: false,
  isH1: false,
  isH2: false,
  isH3: false,
  isBlockQuote: false,
  isCodeBlock: false,
  isOrderedList: false,
  isUnorderedList: false,
  isLink: false,
  isImage: false,
  isMention: false,
};

export const htmlStyle: HtmlStyle = {
  h1: {
    fontSize: 25,
    bold: true,
  },
  h2: {
    fontSize: 18,
    bold: true,
  },
  h3: {
    fontSize: 15,
    bold: true,
  },
};
