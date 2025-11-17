import { Tag } from "../tag";

export interface NoteApiResponse {
  created_at: number;
  title: string;
  content: string;
  tags: Tag[][];
}

export interface Note {
  createdAt: string;
  title: string;
  content: string;
  tags: Tag[];
}

export interface CreateNoteApiResponse {
  id: number;
}

export interface CreateNoteByUrlParams {
  url: string;
  directoryId: number;
}

//note list

export interface GetNotListApiParams {
  directoryId: number;
}

export interface NoteListItemApiResponse {
  id: number;
  created_at: number;
  title: string;
  short_description: string;
}

export interface NoteListItem {
  id: number;
  createdAt: string;
  title: string;
  shortDescription: string;
}
