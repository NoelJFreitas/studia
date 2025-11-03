import { create } from "zustand";
import { ProcessingModalService } from "./types";

export const processingModalStore = create<ProcessingModalService>((set) => ({
  processingModal: null,
  showProcessingModal: (processingModal) => set({ processingModal }),
  hideProcessingModal: () => set({ processingModal: null }),
}));

export function useProcessingModal(): ProcessingModalService["processingModal"] {
  return processingModalStore((state) => state.processingModal);
}

export function useProcessingModalService(): Pick<
  ProcessingModalService,
  "hideProcessingModal" | "showProcessingModal"
> {
  const hideProcessingModal = processingModalStore(
    (state) => state.hideProcessingModal,
  );
  const showProcessingModal = processingModalStore(
    (state) => state.showProcessingModal,
  );

  return {
    hideProcessingModal,
    showProcessingModal,
  };
}
