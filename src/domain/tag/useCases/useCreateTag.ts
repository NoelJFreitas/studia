import { useMutation, useQueryClient } from "@tanstack/react-query";
import { tagService } from "../tagService";
import { TagApiParams } from "../types";

interface Options {
  onSuccess?: () => void;
  onErro?: () => void;
}

export function useCreateTag(options?: Options) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: TagApiParams) => tagService.createTag(params),
    mutationKey: ["create-tag"],
    onSuccess: () => {
      options?.onSuccess?.();
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
    onError: options?.onErro,
  });
}
