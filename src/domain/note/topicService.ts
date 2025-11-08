import { topicAdapter } from "./topicAdapter";
import { topicApi } from "./topicApi";
import { CreateNoteByUrlParams, CreateNoteApiResponse, Note } from "./types";

async function getRecent(): Promise<Note[]> {
  try {
    const response = await topicApi.getRecent();
    return topicAdapter.toTopics(response);
  } catch {
    throw new Error("Falha ao buscar notas recente");
  }
}

async function createByUrl(
  params: CreateNoteByUrlParams,
): Promise<CreateNoteApiResponse> {
  try {
    return await topicApi.createByUrl(params);
  } catch {
    throw new Error("Falha ao criar nota");
  }
}

async function getNoteById(id: number): Promise<Note> {
  try {
    const response = await topicApi.getNoteById(id);
    return topicAdapter.toTopic(response);
  } catch {
    throw new Error("Falha ao buscar nota");
  }
}

export const topicService = {
  getRecent,
  createByUrl,
  getNoteById,
};
