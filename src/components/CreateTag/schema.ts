import { z } from "zod";

export const createTagSchema = z.object({
  title: z.string().min(3, "Mínimo 3 caracteres"),
});

export type CreateTagSchema = z.infer<typeof createTagSchema>;
