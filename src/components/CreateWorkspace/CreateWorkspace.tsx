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
import { useToastService } from "@/services/toast";

export function CreateWorkspace() {
  const [showModal, setShowModal] = useState(false);
  const [iconColor, setColor] = useState<string>();
  const [icon, setIcon] = useState<IconName>();
  const { showToast } = useToastService();

  const { mutate, isPending } = useCreateDirectory({
    onSuccess: onSuccessSubmitForm,
    onError: () =>
      showToast({ message: "Falha ao criar diretório", type: "error" }),
  });

  const { control, formState, handleSubmit, reset } =
    useForm<CreateWorkspaceSchema>({
      resolver: zodResolver(createWorkspaceSchema),
      defaultValues,
      mode: "onChange",
    });

  function onCloseColorModal(iconColor: string) {
    setColor(iconColor);
    setShowModal(false);
  }

  function onSuccessSubmitForm() {
    showToast({ message: "Diretório criado com sucesso" });
    reset();
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
        loading={isPending}
        disabled={!formState.isValid || isPending}
      />
    </Box>
  );
}
