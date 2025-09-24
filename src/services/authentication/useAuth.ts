import { useContext } from "react";
import { AuthenticationService, UseAuthCredentials } from "./types";
import { AuthenticationContext } from "./provider/AuthenticationProvider";

export function useAuthCredentialsService(): Omit<
  AuthenticationService,
  "authCredentials" | "user" | "isAuthenticated"
> {
  const { removeCredentials, saveCredentials, updateUser } = useContext(
    AuthenticationContext,
  );
  return { removeCredentials, saveCredentials, updateUser };
}

export function useAuthCredentials(): UseAuthCredentials {
  const { authCredentials, isAuthenticated } = useContext(
    AuthenticationContext,
  );
  return { isAuthenticated, authCredentials };
}

export function useAuthenticatedUser(): Pick<AuthenticationService, "user"> {
  const { user } = useContext(AuthenticationContext);
  return { user };
}
