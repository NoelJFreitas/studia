import { useMutation } from "@tanstack/react-query";
import { authService } from "../authService";
import {
  AuthenticatedUserSession,
  AuthenticationWithPasswordParams,
} from "../types";
import { MutationOptions } from "@/infra/types";
import { useAuthCredentialsService } from "@/services";

export function useSignIn(options?: MutationOptions<AuthenticatedUserSession>) {
  const { saveCredentials } = useAuthCredentialsService();

  return useMutation<
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
}
