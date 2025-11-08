import { Note, NoteApiResponse } from "./types";

function formatRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diffMs = now - timestamp;
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffMinutes < 1) return "1 min";

  if (diffMinutes < 60) {
    return `${diffMinutes} min`;
  }

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return diffHours === 1 ? "1 hora" : `${diffHours} horas`;
  }

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays <= 10) {
    return diffDays === 1 ? "1 dia" : `${diffDays} dias`;
  }

  return "+10 dias";
}

function toTopics(raw: NoteApiResponse[]): Note[] {
  return raw.map((item) => ({
    content: item.content,
    createdAt: formatRelativeTime(item.created_at),
    tags: item.tags.map((item) => item[0]),
    title: item.title,
  }));
}

function toTopic(raw: NoteApiResponse): Note {
  return {
    content: raw.content,
    createdAt: formatRelativeTime(raw.created_at),
    tags: raw.tags.map((item) => item[0]),
    title: raw.title,
  };
}

export const topicAdapter = { toTopics, toTopic };
