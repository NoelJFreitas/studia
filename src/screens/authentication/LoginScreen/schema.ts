import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("email inválido"),
  password: z.string().min(1, "senha obrigatória"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const defaultValues: LoginSchema = {
  email: "",
  password: "",
};
