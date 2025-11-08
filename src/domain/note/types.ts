import { Tag } from "../tag";

export interface NoteApiResponse {
  created_at: number;
  title: string;
  content: object;
  tags: Tag[][];
}

export interface Note {
  createdAt: string;
  title: string;
  content: object;
  tags: Tag[];
}

export interface CreateNoteApiResponse {
  id: number;
}

export interface CreateNoteByUrlParams {
  url: string;
  title: string;
  directoryId: number;
}
