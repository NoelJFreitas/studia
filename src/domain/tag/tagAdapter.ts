import { Tag, TagApiParams, TagApiResponse } from "./types";

function toTag(raw: TagApiResponse[]): Tag[] {
  return raw.map((item) => ({
    color: item.color,
    title: item.title,
    id: item.id.toString(),
  }));
}

function toTagApi(raw: TagApiParams): Omit<Tag, "id"> {
  return {
    color: `#${raw.color}`,
    title: raw.title,
  };
}

export const tagAdapter = { toTag, toTagApi };
