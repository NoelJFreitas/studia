import { api } from "@/api/apiConfig";
import { TopicApiResponse } from "./types";

async function getRecent(): Promise<TopicApiResponse[]> {
  const response = await api.app.get<TopicApiResponse[]>("recents/notes");
  return response.data;
}

export const topicApi = {
  getRecent,
};
