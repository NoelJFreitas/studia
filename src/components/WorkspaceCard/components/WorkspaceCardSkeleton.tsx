import { Skeleton, SkeletonView } from "@/components/Skeleton/Skeleton";
import { workspaceCardSizes } from "../WorkspaceCard";
import { Box } from "@/components/Box/Box";

function WorkspaceCardSkeletonItem() {
  return (
    <SkeletonView>
      <Skeleton
        height={workspaceCardSizes.height}
        width={workspaceCardSizes.width}
      />
    </SkeletonView>
  );
}

export function WorkspaceCardSkeleton() {
  return (
    <Box
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-between"
      rowGap="sm"
    >
      <WorkspaceCardSkeletonItem />
      <WorkspaceCardSkeletonItem />
      <WorkspaceCardSkeletonItem />
      <WorkspaceCardSkeletonItem />
    </Box>
  );
}
