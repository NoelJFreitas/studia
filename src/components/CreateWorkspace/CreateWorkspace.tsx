import { Box } from "@/components/Box/Box";
import { Text } from "@/components/Text/Text";
import { FormTextInput } from "../FormTextInput/FormTextInput";
import { useForm } from "react-hook-form";
import {
  createWorkspaceSchema,
  CreateWorkspaceSchema,
  defaultValues,
} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { IconSelector } from "./components/IconSelector";
import { useState } from "react";
import { IconName } from "../Icon/Icon";

export function CreateWorkspace() {
  const [iconSelected, setSelectedIcon] = useState<IconName>();
  const { control, formState, handleSubmit } = useForm<CreateWorkspaceSchema>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues,
    mode: "onChange",
  });

  return (
    <Box paddingVertical="md" rowGap="lg">
      <FormTextInput
        control={control}
        name="name"
        label="Nome da pasta"
        autoCapitalize="none"
        placeholder="Digite o nome da pasta"
        showErrorMessage={false}
      />
      <IconSelector selected={iconSelected} onSelect={setSelectedIcon} />
      <Button title={"salvar"} alignSelf="center" />
    </Box>
  );
}
