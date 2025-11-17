import { useMutation, useQueryClient } from "@tanstack/react-query";

import { topicService } from "../noteService";
import { CreateNoteApiResponse, CreateNoteByUrlParams } from "../types";
import { DefaultMutationOptions } from "@/types/mutation";

export function useCreateNote(
  options?: DefaultMutationOptions<CreateNoteApiResponse>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-note"],
    mutationFn: (params: CreateNoteByUrlParams) =>
      topicService.createByUrl(params),
    onError: options?.onError,
    onSuccess: (data, params) => {
      options?.onSuccess?.(data);
      queryClient.invalidateQueries({
        queryKey: ["note-by-directory", params.directoryId],
      });
      queryClient.invalidateQueries({
        queryKey: ["recent-topic"],
      });
    },
  });
}
