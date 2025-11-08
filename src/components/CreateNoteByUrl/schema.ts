import { z } from "zod";

export const urlSchema = z.object({
  title: z.string().min(3, "mínimo 3 caracteres"),
  url: z.url("Url invalida"),
});

export type UrlSchema = z.infer<typeof urlSchema>;
