import { topicAdapter } from "./authAdapter";
import { topicApi } from "./topicApi";
import { Topic } from "./types";

async function getRecent(): Promise<Topic[]> {
  try {
    const response = await topicApi.getRecent();
    return topicAdapter.toTopics(response);
  } catch (error) {
    console.log(error);
    throw new Error("Falha ao buscar tópicos recente");
  }
}

export const topicService = {
  getRecent,
};
