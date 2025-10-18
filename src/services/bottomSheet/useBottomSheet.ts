import { create } from "zustand";
import { BottomSheetService } from "./types";

export const bottomSheetStore = create<BottomSheetService>((set) => ({
  bottomSheet: null,
  showBottomSheet: (bottomSheet) => set({ bottomSheet }),
  hideBottomSheet: () => set({ bottomSheet: null }),
}));

export function useBottomSheet(): BottomSheetService["bottomSheet"] {
  return bottomSheetStore((state) => state.bottomSheet);
}

export function useBottomSheetService(): Pick<
  BottomSheetService,
  "hideBottomSheet" | "showBottomSheet"
> {
  const hideBottomSheet = bottomSheetStore((state) => state.hideBottomSheet);
  const showBottomSheet = bottomSheetStore((state) => state.showBottomSheet);

  return {
    showBottomSheet,
    hideBottomSheet,
  };
}
