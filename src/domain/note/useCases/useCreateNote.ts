import { useMutation } from "@tanstack/react-query";

import { topicService } from "../topicService";
import { CreateNoteApiResponse, CreateNoteByUrlParams } from "../types";
import { DefaultMutationOptions } from "@/types/mutation";

export function useCreateNote(
  options?: DefaultMutationOptions<CreateNoteApiResponse>,
) {
  return useMutation({
    mutationKey: ["create-note"],
    mutationFn: (params: CreateNoteByUrlParams) =>
      topicService.createByUrl(params),
    onError: options?.onError,
    onSuccess: options?.onSuccess,
  });
}
