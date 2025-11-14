import { SkeletonView, Skeleton } from "@/components/Skeleton/Skeleton";
import { MostRecentItemSizes } from "../TopicCard";

import { Box } from "@/components/Box/Box";

export function TopicCardSkeleton() {
  return (
    <Box flexDirection="row" columnGap="sm">
      <SkeletonView
        animate={{ backgroundColor: "transparent" }}
        style={{
          height: MostRecentItemSizes.height,
          width: MostRecentItemSizes.width,
        }}
      >
        <Skeleton height="100%" width="100%" />
      </SkeletonView>

      <SkeletonView
        animate={{ backgroundColor: "transparent" }}
        style={{
          height: MostRecentItemSizes.height,
          width: MostRecentItemSizes.width,
        }}
      >
        <Skeleton height="100%" width="100%" />
      </SkeletonView>
    </Box>
  );
}
