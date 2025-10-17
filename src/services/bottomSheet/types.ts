interface BottomSheet {
  element: React.ReactElement;
  title?: string;
}

export interface BottomSheetService {
  bottomSheet: BottomSheet | null;
  showBottomSheet: (bottomSheet: BottomSheet) => void;
  hideBottomSheet: () => void;
}
