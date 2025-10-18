import { zodResolver } from "@hookform/resolvers/zod";
import { createTagSchema, CreateTagSchema } from "./schema";
import { useForm } from "react-hook-form";
import { Box } from "../Box/Box";
import { FormTextInput } from "../FormTextInput/FormTextInput";
import { Button } from "../Button/Button";
import { useCreateTag, useGetTags } from "@/domain/tag";
import { Tag } from "../Tag/Tag";
import { Text } from "../Text/Text";
import { useEffect, useState } from "react";
import { useToastService } from "@/services/toast";

export function CreateTag() {
  const { data } = useGetTags();
  const [color, setColor] = useState(undefined);
  const { showToast } = useToastService();
  const { mutate, isPending } = useCreateTag({
    onErro: onErrorSubmit,
    onSuccess: onSuccessSubmit,
  });

  const { control, formState, handleSubmit, getValues, reset } =
    useForm<CreateTagSchema>({
      resolver: zodResolver(createTagSchema),
      mode: "onChange",
    });

  function submitForm(params: CreateTagSchema) {
    mutate(params);
  }

  function onSuccessSubmit() {
    showToast({ type: "success", message: "Tag criada com sucesso!" });
    reset();
    setColor(undefined);
  }

  function onErrorSubmit() {
    showToast({ type: "error", message: "Falha ao criar a tag" });
  }

  useEffect(() => {
    if (formState.validatingFields.color) {
      setColor(getValues("color"));
    }
  }, [formState.validatingFields.color, getValues]);

  return (
    <Box paddingVertical="md" rowGap="lg">
      <FormTextInput
        control={control}
        name="title"
        label="Nome da tag"
        autoCapitalize="none"
        placeholder="Digite o nome da tag"
      />
      <FormTextInput
        control={control}
        name="color"
        maxLength={6}
        label="Nome da tag"
        autoCorrect={false}
        autoCapitalize="characters"
        placeholder="Digite o Hexadecimal"
        RightComponent={
          <Box
            height={15}
            width={15}
            borderWidth={1}
            style={{ backgroundColor: `#${color}` }}
          />
        }
      />
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
