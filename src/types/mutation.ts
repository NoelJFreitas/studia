export interface DefaultMutationOptions<T> {
  onSuccess?: (param?: T) => void;
  onError?: (error?: Error) => void;
}
