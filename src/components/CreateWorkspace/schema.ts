import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().min(3, "Mínimo 3 caracteres"),
});

export type CreateWorkspaceSchema = z.infer<typeof createWorkspaceSchema>;

export const defaultValues: CreateWorkspaceSchema = {
  name: "",
};
