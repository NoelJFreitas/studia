import { PersistentAuthenticationStore } from "./types";
import { storage } from "../storage/storage";

const AUTH_KEY = "auth-credentials";

async function set(ac: PersistentAuthenticationStore) {
  await storage.setItem(AUTH_KEY, ac);
}

async function get() {
  const credentials =
    await storage.getItem<PersistentAuthenticationStore>(AUTH_KEY);
  return credentials;
}

async function remove() {
  await storage.removeItem(AUTH_KEY);
}

const AuthenticationStorage = { set, get, remove };

export default AuthenticationStorage;
