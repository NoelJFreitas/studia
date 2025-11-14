import { useAppTheme } from "@/hooks";
import { MotiView } from "node_modules/moti/build/components";
import { Skeleton as MotiSkeleton } from "moti/skeleton";

interface Props extends React.ComponentProps<typeof MotiView> {
  children: React.ReactNode;
}

type SkeletonProps = React.ComponentProps<typeof MotiSkeleton>;

export function Skeleton({ ...props }: SkeletonProps) {
  const { colors } = useAppTheme();
  return (
    <MotiSkeleton
      {...props}
      colorMode="light"
      colors={[colors.lightSilver, colors.mediumGray]}
    />
  );
}

export function SkeletonView({ style, children, ...props }: Props) {
  const { colors } = useAppTheme();

  return (
    <MotiView
      transition={{
        type: "timing",
      }}
      style={style}
      animate={{ backgroundColor: colors.lightGray }}
      {...props}
    >
      {children}
    </MotiView>
  );
}
