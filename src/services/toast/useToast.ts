import { create } from "zustand";
import { ToastService } from "./types";

const useToastStore = create<ToastService>((set) => ({
  toast: null,
  showToast: (toast) => set({ toast }),
  hideToast: () => set({ toast: null }),
}));

export function useToast(): ToastService["toast"] {
  return useToastStore((state) => state.toast);
}

export function useToastService(): Pick<
  ToastService,
  "showToast" | "hideToast"
> {
  const showToast = useToastStore((state) => state.showToast);
  const hideToast = useToastStore((state) => state.hideToast);

  return {
    showToast,
    hideToast,
  };
}
