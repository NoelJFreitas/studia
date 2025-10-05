import { useQuery } from "@tanstack/react-query";

import { topicService } from "../topicService";

export function useGetRecentTopic() {
  return useQuery({
    queryFn: () => topicService.getRecent(),
    queryKey: ["recent-topic"],
  });
}
