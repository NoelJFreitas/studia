import { z } from "zod";

export const createTagSchema = z.object({
  title: z.string().min(3, "Mínimo 3 caracteres"),
  color: z
    .string()
    .min(6, "Mínimo 6 caracteres")
    .toUpperCase()
    .refine(
      (val) => /^[0-9A-Z]+$/.test(val),
      "A cor deve conter apenas letras e números.",
    ),
});

export type CreateTagSchema = z.infer<typeof createTagSchema>;
