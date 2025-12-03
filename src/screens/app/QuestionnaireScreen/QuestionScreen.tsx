import { Screen, Button, Box, ActivityIndicator } from "@/components";
import { Question } from "./components/Question";
import { useEffect, useState } from "react";
import { useGetQuestions } from "@/domain/questions";
import { FlatList } from "react-native-gesture-handler";
import { useToastService } from "@/services/toast";

export function QuestionnaireScreen() {
  const [showAnswer, setShowAnswer] = useState(false);
  const { data, isLoading, isError } = useGetQuestions();
  const { showToast } = useToastService();

  useEffect(() => {
    if (isError) showToast({ message: "Falha ao obter questionário" });
  }, [isError, showToast]);

  return (
    <Screen showHeader>
      {isLoading && <ActivityIndicator />}
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ rowGap: 15 }}
        ItemSeparatorComponent={() => <Box height={16} />}
        renderItem={({ item }) => (
          <Question question={item} showAnswer={showAnswer} />
        )}
      />
      <Button
        title="Mostrar respostas"
        alignSelf="center"
        onPress={() => setShowAnswer(true)}
      />
    </Screen>
  );
}
