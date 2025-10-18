import { Tag } from "../tag";

export interface TopicApiResponse {
  created_at: number;
  title: string;
  content: object;
  tags: Tag[][];
}

export interface Topic {
  createdAt: string;
  title: string;
  content: object;
  tags: Tag[];
}
