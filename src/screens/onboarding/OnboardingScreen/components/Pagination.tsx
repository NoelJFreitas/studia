import { Box, BoxProps } from "@/components";
import { PaginationDot } from "./PaginationDot";

interface Props extends BoxProps {
  currentIndex: number;
  pages: number;
}

export function Pagination({ pages, currentIndex, ...props }: Props) {
  const fakeData = Array.from({ length: pages }, (_, i) => ({
    id: i.toString(),
  }));

  return (
    <Box flexDirection="row" {...props}>
      {fakeData.map((_, index) => {
        const isCurrent = index === currentIndex;
        return <PaginationDot isActive={isCurrent} key={index} />;
      })}
    </Box>
  );
}
