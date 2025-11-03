interface ProcessingModal {
  title?: string;
}

export interface ProcessingModalService {
  processingModal: ProcessingModal | null;
  showProcessingModal: (processingModal: ProcessingModal) => void;
  hideProcessingModal: () => void;
}
