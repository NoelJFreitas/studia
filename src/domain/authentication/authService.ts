import { authAdapter } from "./authAdapter";
import { authApi } from "./authApi";
import {
  AuthenticatedUserSession,
  AuthenticationWithPasswordParams,
} from "./types";

async function signIn(
  params: AuthenticationWithPasswordParams,
): Promise<AuthenticatedUserSession> {
  try {
    const authCredentialsAPI = await authApi.signIn(params);

    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch {
    throw new Error("email ou senha inválido");
  }
}

export const authService = {
  signIn,
};
