import { Question } from "./types";
import { questionApi } from "./questionsApi";

async function getQuestions(): Promise<Question[]> {
  try {
    return questionApi.getQuestions();
  } catch (error) {
    console.error(error);
  }
}

export const questionService = {
  getQuestions,
};
