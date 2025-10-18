import { generateRandomHexColor } from "@/utils";
import { Directory, DirectoryApiParams, DirectoryApiResponse } from "./types";

function toDirectory(raw: DirectoryApiResponse[]): Directory[] {
  return raw.map((item) => ({
    icon: item.icon,
    iconColor: item.icon_color,
    id: item.id,
    name: item.name,
    notesCount: item._notes_of_directory,
  }));
}

function toDirectoryApi(raw: DirectoryApiParams): DirectoryApiParams {
  return {
    ...raw,
    color: raw?.color ? raw.color : generateRandomHexColor(),
  };
}

export const directoryAdapter = { toDirectory, toDirectoryApi };
