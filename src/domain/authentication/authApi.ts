import { api } from "@/api/apiConfig";
import {
  AuthenticationResponse,
  AuthenticationWithPasswordParams,
} from "./types";

async function signIn(
  params: AuthenticationWithPasswordParams,
): Promise<AuthenticationResponse> {
  const response = await api.auth.post<AuthenticationResponse>(
    "auth/login",
    params,
  );
  return response.data;
}

export const authApi = {
  signIn,
};
