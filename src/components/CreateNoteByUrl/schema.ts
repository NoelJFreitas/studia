import { z } from "zod";

export const urlSchema = z.object({
  url: z.url("Url invalida"),
});

export type UrlSchema = z.infer<typeof urlSchema>;
