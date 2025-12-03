import { Question, QuestionApi } from "./types";

export function toQuestion(raw: QuestionApi[]): Question[] {
  return raw.map((item) => ({
    id: item.id,
    question: item.enunciado,
    alternatives: item.alternativas,
    fonte: `${item.fonte.nome} - ${item.fonte.ano}`,
    commentResolution: item.comentarioResolucao,
  }));
}

export const questionAdapter = {
  toQuestion,
};
