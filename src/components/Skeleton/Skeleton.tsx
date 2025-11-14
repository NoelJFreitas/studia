import { useAppTheme } from "@/hooks";
import { MotiView } from "node_modules/moti/build/components";
import { ViewStyle } from "react-native";

interface Props {
  style?: ViewStyle | ViewStyle[];
  children: React.ReactNode;
}

export function SkeletonView({ style, children }: Props) {
  const { colors } = useAppTheme();

  return (
    <MotiView
      transition={{
        type: "timing",
      }}
      style={style}
      animate={{ backgroundColor: colors.lightGray }}
    >
      {children}
    </MotiView>
  );
}
