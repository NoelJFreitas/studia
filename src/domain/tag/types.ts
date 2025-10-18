export interface TagApiResponse {
  id: number;
  title: string;
  color: string;
}

export type TagApiParams = Pick<TagApiResponse, "title"> & {
  color?: string;
};

export interface Tag {
  title: string;
  color: string;
  id: string;
}
