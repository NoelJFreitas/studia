import { api } from "@/api/apiConfig";
import { DirectoryApiParams, DirectoryApiResponse } from "./types";

async function getDirectories(): Promise<DirectoryApiResponse[]> {
  const response = await api.app.get<DirectoryApiResponse[]>("directory");
  return response.data;
}

async function createDirectory(params: DirectoryApiParams): Promise<void> {
  await api.app.post("directory", params);
}

export const directoryApi = {
  getDirectories,
  createDirectory,
};
