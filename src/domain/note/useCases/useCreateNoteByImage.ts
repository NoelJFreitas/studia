import { useMutation, useQueryClient } from "@tanstack/react-query";

import { topicService } from "../noteService";
import { CreateNoteApiResponse, CreateNoteByImageParams } from "../types";
import { DefaultMutationOptions } from "@/types/mutation";

export function useCreateNoteByImage(
  options?: DefaultMutationOptions<CreateNoteApiResponse>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-note-by-image"],

    mutationFn: (params: CreateNoteByImageParams) =>
      topicService.createByImage(params),
    onError: options?.onError,
    onSuccess: (data, params) => {
      options?.onSuccess?.(data);
      queryClient.invalidateQueries({
        queryKey: ["note-by-directory", params.directoryId],
      });
      queryClient.invalidateQueries({
        queryKey: ["recent-topic"],
      });
      queryClient.invalidateQueries({
        queryKey: ["directories"],
      });
    },
  });
}
