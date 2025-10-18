import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Directory, DirectoryApiParams } from "../types";
import { directoryService } from "../directoryService";
import { DefaultMutationOptions } from "@/types/mutation";

export function useCreateDirectory(
  options?: DefaultMutationOptions<Directory>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: DirectoryApiParams) =>
      directoryService.createDirectory(params),
    mutationKey: ["create-directory"],
    onSuccess: () => {
      options?.onSuccess?.();
      queryClient.invalidateQueries({ queryKey: ["directories"] });
    },
    onError: options?.onError,
  });
}
