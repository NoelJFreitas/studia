import { useQuery } from "@tanstack/react-query";

import { topicService } from "../noteService";
import { GetNotListApiParams } from "../types";

export function useGetByDirectory(params: GetNotListApiParams) {
  return useQuery({
    queryFn: () => topicService.getNoteByDirectoryId(params),
    queryKey: ["note-by-directory", params.directoryId],
  });
}
