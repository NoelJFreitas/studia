import { topicAdapter } from "./noteAdapter";
import { noteApi } from "./noteApi";
import {
  CreateNoteByUrlParams,
  CreateNoteApiResponse,
  Note,
  GetNotListApiParams,
  NoteListItem,
  NoteListItemApiUpdate,
  CreateNoteByImageParams,
} from "./types";

async function getRecent(): Promise<Note[]> {
  try {
    const response = await noteApi.getRecent();
    return topicAdapter.toTopics(response);
  } catch {
    throw new Error("Falha ao buscar notas recente");
  }
}

async function createByUrl(
  params: CreateNoteByUrlParams,
): Promise<CreateNoteApiResponse> {
  try {
    return await noteApi.createByUrl(params);
  } catch {
    throw new Error("Falha ao criar nota");
  }
}

async function createByImage(
  params: CreateNoteByImageParams,
): Promise<CreateNoteApiResponse> {
  // try {
  return await noteApi.createByImage(params);
  // } catch {
  // throw new Error("Falha ao criar nota");
  // }
}

async function getNoteById(id: number): Promise<Note> {
  try {
    const response = await noteApi.getNoteById(id);
    return topicAdapter.toTopic(response);
  } catch {
    throw new Error("Falha ao buscar nota");
  }
}

async function getNoteByDirectoryId(
  params: GetNotListApiParams,
): Promise<NoteListItem[]> {
  try {
    const response = await noteApi.getNoteByDirectoryId(params);
    return topicAdapter.toDirectoryList(response);
  } catch {
    throw new Error("Falha ao buscar notas");
  }
}

async function updateNoteById(note: NoteListItemApiUpdate): Promise<void> {
  try {
    await noteApi.updateNoteById(note);
  } catch {
    throw new Error("Falha ao atualizar nota");
  }
}

export const topicService = {
  getRecent,
  createByUrl,
  getNoteById,
  getNoteByDirectoryId,
  updateNoteById,
  createByImage,
};
