import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { AuthenticationService } from "../types";

import AuthenticationStorage from "../authStorage";
import { Profile } from "@/domain/profile";
import {
  AuthenticatedUserSession,
  Authentication,
} from "@/domain/authentication";

export const AuthenticationContext = createContext<AuthenticationService>({
  authCredentials: null,
  user: null,
  isAuthenticated: false,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
  updateUser: async () => {},
});

export function AuthenticationProvider({
  children,
}: PropsWithChildren<object>) {
  const [user, setUser] = useState<Profile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authCredentials, setAuthCredentials] = useState<Authentication | null>(
    null,
  );

  async function startAuthCredentials() {
    const ac = await AuthenticationStorage.get();
    if (!ac) return;
    setUser(ac.user);
    setAuthCredentials(ac);
    setIsAuthenticated(true);
  }

  async function saveCredentials(ac: AuthenticatedUserSession) {
    AuthenticationStorage.set(ac);
    setAuthCredentials(ac);
    setUser(ac.user);
    setIsAuthenticated(true);
  }

  async function removeCredentials() {
    AuthenticationStorage.remove();
    setAuthCredentials(null);
    setUser(null);
    setIsAuthenticated(false);
  }

  async function updateUser(user: Profile) {
    setUser(user);
    AuthenticationStorage.set({ ...authCredentials, user });
  }

  useEffect(() => {
    startAuthCredentials();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        authCredentials,
        user,
        isAuthenticated,
        saveCredentials,
        removeCredentials,
        updateUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
