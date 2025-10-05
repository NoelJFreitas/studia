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

export interface Tag {
  title: string;
  color: string;
}
