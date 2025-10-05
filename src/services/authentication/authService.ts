import { api } from "@/api";

async function updateToken(token: string) {
  api.app.defaults.headers.common.Authorization = `Bearer ${token}`;
}

async function removeToken() {
  api.app.defaults.headers.common.Authorization = null;
}

export const authService = {
  updateToken,
  removeToken,
};
