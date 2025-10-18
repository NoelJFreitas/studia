import { tagAdapter } from "./tagAdapter";
import { tagApi } from "./tagApi";
import { Tag, TagApiParams } from "./types";

async function getTags(): Promise<Tag[]> {
  try {
    const response = await tagApi.getTags();
    return tagAdapter.toTag(response);
  } catch {
    throw new Error("Falha ao buscar tags");
  }
}

async function createTag(params: TagApiParams): Promise<void> {
  try {
    await tagApi.createTag(tagAdapter.toTagApi(params));
  } catch {
    throw new Error("Falha ao criar tag");
  }
}

export const tagService = {
  getTags,
  createTag,
};
