import { useQuery } from "@tanstack/react-query";
import { questionService } from "../questionsService";

export function useGetQuestions() {
  return useQuery({
    queryFn: () => questionService.getQuestions(),
    queryKey: ["questions"],
  });
}
