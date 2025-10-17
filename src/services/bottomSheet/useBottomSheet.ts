import { create } from "zustand";
import { BottomSheetService } from "./types";

const useBottomSheetStore = create<BottomSheetService>((set) => ({
  bottomSheet: null,
  showBottomSheet: (bottomSheet) => set({ bottomSheet }),
  hideBottomSheet: () => set({ bottomSheet: null }),
}));

export function useBottomSheet(): BottomSheetService["bottomSheet"] {
  return useBottomSheetStore((state) => state.bottomSheet);
}

export function useBottomSheetService(): Pick<
  BottomSheetService,
  "hideBottomSheet" | "showBottomSheet"
> {
  const hideBottomSheet = useBottomSheetStore((state) => state.hideBottomSheet);
  const showBottomSheet = useBottomSheetStore((state) => state.showBottomSheet);

  return {
    showBottomSheet,
    hideBottomSheet,
  };
}
