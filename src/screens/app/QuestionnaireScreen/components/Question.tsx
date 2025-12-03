import { Box } from "@/components";
import { QuestionOption } from "./QuestionOption";
import { Question as QuestionType } from "@/domain/questions";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import { QuestionHeader } from "./questionHeder";
import { ViewStyle } from "react-native";
import { QuestionResolution } from "./QuestionResolution";

interface Props {
  showAnswer?: boolean;
  question: QuestionType;
}

export function Question({ showAnswer, question }: Props) {
  const [selected, setSelected] = useState<number>();

  if (!question) return;

  return (
    <Box
      rowGap="md"
      backgroundColor="lightSilver"
      padding="sm"
      borderRadius="sm"
    >
      <QuestionHeader font={question.fonte} question={question.question} />
      <FlatList
        data={question.alternatives}
        scrollEnabled={false}
        contentContainerStyle={$list}
        renderItem={({ item, index }) => (
          <QuestionOption
            showAnswer={showAnswer}
            alternative={item}
            selected={selected === index}
            onSelect={() => setSelected(index)}
          />
        )}
      />
      {showAnswer && selected !== undefined && (
        <QuestionResolution resolution={question.commentResolution} />
      )}
    </Box>
  );
}

const $list: ViewStyle = {
  rowGap: 15,
};
