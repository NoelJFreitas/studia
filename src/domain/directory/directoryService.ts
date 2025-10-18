import { directoryApi } from "./directoryApi";
import { directoryAdapter } from "./directoryAdapter";
import { Directory, DirectoryApiParams } from "./types";

async function getDirectories(): Promise<Directory[]> {
  try {
    const response = await directoryApi.getDirectories();
    return directoryAdapter.toDirectory(response);
  } catch {
    throw new Error("Falha ao buscar diretórios");
  }
}

async function createDirectory(params: DirectoryApiParams): Promise<void> {
  try {
    await directoryApi.createDirectory(directoryAdapter.toDirectoryApi(params));
  } catch {
    throw new Error("Falha ao criar diretório");
  }
}

export const directoryService = {
  getDirectories,
  createDirectory,
};
