import { useQuery } from "@tanstack/react-query";

import { topicService } from "../topicService";

import { DefaultMutationOptions } from "@/types/mutation";
import { Note } from "../types";
import { useEffect } from "react";

interface GetNoteParamsQuery extends Partial<DefaultMutationOptions<Note>> {
  id: number;
}

export function useGetNoteById(params: GetNoteParamsQuery) {
  const result = useQuery({
    queryFn: () => topicService.getNoteById(params.id),
    queryKey: ["getNote", params.id],
  });

  useEffect(() => {
    if (result.isError) params?.onError?.();
    if (result.isSuccess) params?.onSuccess?.();
  }, [params, result.isError, result.isSuccess]);

  return result;
}
