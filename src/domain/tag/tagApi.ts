import { api } from "@/api/apiConfig";
import { TagApiParams, TagApiResponse } from "./types";

async function getTags(): Promise<TagApiResponse[]> {
  const response = await api.app.get<TagApiResponse[]>("tags");
  return response.data;
}

async function createTag(params: TagApiParams): Promise<void> {
  await api.app.post("tags", params);
}

export const tagApi = {
  getTags,
  createTag,
};
