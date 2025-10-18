import { useQuery } from "@tanstack/react-query";
import { directoryService } from "../directoryService";

export function useGetDirectories() {
  return useQuery({
    queryFn: () => directoryService.getDirectories(),
    queryKey: ["directories"],
  });
}
