export interface TagApiResponse {
  id: number;
  title: string;
  color: string;
}

export type TagApiParams = Pick<TagApiResponse, "color" | "title">;

export interface Tag {
  title: string;
  color: string;
  id: string;
}
