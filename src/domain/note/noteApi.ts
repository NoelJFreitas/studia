import { api } from "@/api/apiConfig";
import {
  CreateNoteByUrlParams,
  CreateNoteApiResponse,
  NoteApiResponse,
  GetNotListApiParams,
  NoteListItemApiResponse,
  NoteListItemApiUpdate,
} from "./types";

async function getRecent(): Promise<NoteApiResponse[]> {
  const response = await api.app.get<NoteApiResponse[]>("recents/notes");
  return response.data;
}

async function createByUrl(
  params: CreateNoteByUrlParams,
): Promise<CreateNoteApiResponse> {
  const response = await api.app.post<CreateNoteApiResponse>(
    "notes/url",
    params,
  );
  return response.data;
}

async function getNoteById(id: number): Promise<NoteApiResponse> {
  const response = await api.app.get<NoteApiResponse>(`notes/${id}`);
  return response.data;
}

async function getNoteByDirectoryId(
  params: GetNotListApiParams,
): Promise<NoteListItemApiResponse[]> {
  const response = await api.app.get<NoteListItemApiResponse[]>(`notes`, {
    params,
  });
  return response.data;
}

async function updateNoteById(params: NoteListItemApiUpdate): Promise<void> {
  await api.app.patch<NoteListItemApiResponse[]>(
    `notes/${params.notes_id}`,
    params,
  );
}

export const noteApi = {
  getRecent,
  createByUrl,
  getNoteById,
  getNoteByDirectoryId,
  updateNoteById,
};
