import { Tag, TagApiParams, TagApiResponse } from "./types";

function getRandomHexColor(): string {
  const randomInt = Math.floor(Math.random() * 0xffffff);
  const hexColor = `#${randomInt.toString(16).padStart(6, "0").toUpperCase()}`;
  return hexColor;
}

function toTag(raw: TagApiResponse[]): Tag[] {
  return raw.map((item) => ({
    color: item.color,
    title: item.title,
    id: item.id,
  }));
}

function toTagApi(raw: TagApiParams): Omit<Tag, "id"> {
  return {
    color: raw?.color ? raw.color : getRandomHexColor(),
    title: raw.title,
  };
}

export const tagAdapter = { toTag, toTagApi };
