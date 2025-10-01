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
    console.log(authCredentialsAPI);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    console.log(error);
    throw new Error("email ou senha inválido");
  }
}

export const authService = {
  signIn,
};
