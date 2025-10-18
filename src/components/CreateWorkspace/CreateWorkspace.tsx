import { Box } from "@/components/Box/Box";
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
import { ColorPickerInput } from "../ColorPickerInput/ColorPickerInput";
import { ColorPickerModal } from "../ColorPickerModal/ColorPickerModal";
import { useCreateDirectory } from "@/domain/directory";

export function CreateWorkspace() {
  const [showModal, setShowModal] = useState(false);
  const [iconColor, setColor] = useState<string>();
  const [icon, setIcon] = useState<IconName>();

  const { mutate } = useCreateDirectory();

  const { control, formState, handleSubmit } = useForm<CreateWorkspaceSchema>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues,
    mode: "onChange",
  });

  function onCloseColorModal(iconColor: string) {
    setColor(iconColor);
    setShowModal(false);
  }

  function onSubmitForm({ name }: CreateWorkspaceSchema) {
    mutate({ name, icon: icon ?? "papers", iconColor });
  }

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
      <ColorPickerInput
        label="Selecione a cor"
        colorSelected={iconColor}
        onPress={() => setShowModal(true)}
      />
      <ColorPickerModal visible={showModal} onSelectColor={onCloseColorModal} />
      <IconSelector selected={icon} onSelect={setIcon} color={iconColor} />
      <Button
        title={"salvar"}
        alignSelf="center"
        onPress={handleSubmit(onSubmitForm)}
        disabled={!formState.isValid}
      />
    </Box>
  );
}
