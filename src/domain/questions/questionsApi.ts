import { api } from "@/api/apiConfig";
import { Question, QuestionApi } from "./types";
import { questionAdapter } from "./questionsAdapter";

async function getQuestions(): Promise<Question[]> {
  const response = await api.questions.get<QuestionApi[]>(
    "questoes/area/Medicina",
  );
  return questionAdapter.toQuestion(response.data);
}

export const questionApi = {
  getQuestions,
};
