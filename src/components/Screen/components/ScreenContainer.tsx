import { ThemeColors } from "@/theme";
import React from "react";
import { Box, ScrollBox } from "src/components/Box/Box";

interface Props {
  children: React.ReactNode;
  backgroundColor: ThemeColors;
}
export function ScrollViewContainer({ children, backgroundColor }: Props) {
  return (
    <ScrollBox
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      backgroundColor={backgroundColor}
      style={{ flex: 1 }}
    >
      {children}
    </ScrollBox>
  );
}

export function ViewContainer({ children, backgroundColor }: Props) {
  return (
    <Box backgroundColor={backgroundColor} style={{ flex: 1 }}>
      {children}
    </Box>
  );
}
