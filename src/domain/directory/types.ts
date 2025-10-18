import { IconName } from "@/components";

export interface DirectoryApiResponse {
  id: number;
  created_at: number;
  name: string;
  icon: IconName;
  icon_color: string;
  _notes_of_directory: number;
}

export interface Directory {
  id: number;
  name: string;
  icon: IconName;
  iconColor: string;
  notesCount: number;
}

export type DirectoryApiParams = Omit<Directory, "id" | "notesCount"> & {
  color?: string;
};
