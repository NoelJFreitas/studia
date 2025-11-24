import axios from "axios";

export const auth = axios.create({
  baseURL: process.env.EXPO_PUBLIC_AUTH_API_URL,
});

export const app = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export const n8n = axios.create({
  baseURL: process.env.EXPO_PUBLIC_N8N_API,
});

export const api = {
  auth,
  app,
  n8n,
};
