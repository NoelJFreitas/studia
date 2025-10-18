export interface DirectoryApiResponse {
  id: number;
  created_at: number;
  name: string;
  icon: string;
  icon_color: string;
  _notes_of_directory: number;
}

export interface Directory {
  id: number;
  name: string;
  icon: string;
  iconColor: string;
  notesCount: number;
}

export type DirectoryApiParams = Omit<Directory, "id" | "notesCount"> & {
  color?: string;
};
