import { AuthenticatedUserSession, Authentication, Profile } from "@domain";

export interface AuthenticationService {
  user: Profile | null;
  authCredentials: Authentication | null;
  isAuthenticated: boolean;
  saveCredentials: (ac: AuthenticatedUserSession) => Promise<void>;
  removeCredentials: () => Promise<void>;
  updateUser: (user: Profile) => Promise<void>;
}

export interface UseAuthCredentials {
  isAuthenticated: boolean;
  authCredentials: Authentication | null;
}

export type PersistentAuthenticationStore = AuthenticatedUserSession;
