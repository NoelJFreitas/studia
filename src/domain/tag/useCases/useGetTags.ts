import { useQuery } from "@tanstack/react-query";
import { tagService } from "../tagService";

export function useGetTags() {
  return useQuery({
    queryFn: () => tagService.getTags(),
    queryKey: ["tags"],
  });
}
