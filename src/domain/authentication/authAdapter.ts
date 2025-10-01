import { AuthenticatedUserSession, AuthenticationResponse } from "./types";

function toAuthCredentials(
  raw: AuthenticationResponse,
): AuthenticatedUserSession {
  return {
    token: raw.authToken,
    expiresAt: new Date(),
    userId: raw.user.id,
    user: {
      ...raw.user,
      avatar: raw.user?.avatar.url,
    },
  };
}

export const authAdapter = { toAuthCredentials };
