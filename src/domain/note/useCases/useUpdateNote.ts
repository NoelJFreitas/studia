import { useMutation, useQueryClient } from "@tanstack/react-query";

import { topicService } from "../noteService";
import { CreateNoteApiResponse, NoteListItemApiUpdate } from "../types";
import { DefaultMutationOptions } from "@/types/mutation";

export function useUpdateNote(
  options?: DefaultMutationOptions<CreateNoteApiResponse>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["update-note"],
    mutationFn: (params: NoteListItemApiUpdate) =>
      topicService.updateNoteById(params),
    onError: options?.onError,
    onSuccess: (_, params) => {
      options?.onSuccess?.();
      queryClient.invalidateQueries({
        queryKey: ["note-by-directory"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getNote", params.notes_id],
      });
    },
  });
}
