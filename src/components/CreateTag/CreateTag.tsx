import { zodResolver } from "@hookform/resolvers/zod";
import { createTagSchema, CreateTagSchema } from "./schema";
import { useForm } from "react-hook-form";
import { Box } from "../Box/Box";
import { FormTextInput } from "../FormTextInput/FormTextInput";
import { Button } from "../Button/Button";
import { useCreateTag, useGetTags } from "@/domain/tag";
import { Tag } from "../Tag/Tag";
import { Text } from "../Text/Text";
import { useState } from "react";
import { useToastService } from "@/services/toast";
import { ColorPickerInput } from "../ColorPickerInput/ColorPickerInput";
import { ColorPickerModal } from "../ColorPickerModal/ColorPickerModal";

export function CreateTag() {
  const { data } = useGetTags();

  const [color, setColor] = useState(undefined);
  const [showModal, setShowModal] = useState(false);

  const { showToast } = useToastService();
  const { mutate, isPending } = useCreateTag({
    onErro: onErrorSubmit,
    onSuccess: onSuccessSubmit,
  });

  const { control, formState, handleSubmit, reset } = useForm<CreateTagSchema>({
    resolver: zodResolver(createTagSchema),
    mode: "onChange",
  });

  function submitForm({ title }: CreateTagSchema) {
    mutate({ title, color });
  }

  function onSuccessSubmit() {
    showToast({ type: "success", message: "Tag criada com sucesso!" });
    reset();
    setColor(undefined);
  }

  function onErrorSubmit() {
    showToast({ type: "error", message: "Falha ao criar a tag" });
  }

  function onCloseColorModal(color: string) {
    setColor(color);
    setShowModal(false);
  }

  return (
    <Box paddingVertical="md" rowGap="lg">
      <FormTextInput
        control={control}
        name="title"
        label="Nome da tag"
        autoCapitalize="none"
        placeholder="Digite o nome da tag"
      />
      <ColorPickerInput
        label="Selecione a cor"
        colorSelected={color}
        onPress={() => setShowModal(true)}
      />
      <ColorPickerModal visible={showModal} onSelectColor={onCloseColorModal} />
      <Text fontWeight="medium">Suas tags:</Text>
      <Box flexDirection="row" flexWrap="wrap" gap="sm">
        {data?.map((item) => (
          <Tag color={item.color} text={item.title} key={item.id} />
        ))}
      </Box>

      <Button
        title="salvar"
        alignSelf="center"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid || isPending}
        loading={isPending}
      />
    </Box>
  );
}
