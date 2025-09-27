import { useMutation } from "@tanstack/react-query";
import { authService } from "../authService";
import {
  AuthenticatedUserSession,
  AuthenticationWithPasswordParams,
} from "../types";
import { MutationOptions } from "@/infra/types";
import { useAuthCredentialsService } from "@/services";

export function useAuthSignIn(
  options?: MutationOptions<AuthenticatedUserSession>,
) {
  const { saveCredentials } = useAuthCredentialsService();

  const mutation = useMutation<
    AuthenticatedUserSession,
    Error,
    AuthenticationWithPasswordParams
  >({
    mutationFn: (params) => authService.signIn(params),
    onError: (error) => {
      if (options?.onError) options.onError(error.message);
    },
    onSuccess: (authCredentials) => {
      if (options?.onSuccess) options.onSuccess(authCredentials);
      saveCredentials(authCredentials);
    },
  });

  return {
    signIn: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isSuccess,
    isSuccess: mutation.isSuccess,
  };
}
