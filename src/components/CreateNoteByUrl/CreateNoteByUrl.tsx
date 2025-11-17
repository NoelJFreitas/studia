import { useForm } from "react-hook-form";
import { urlSchema, UrlSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "../Box/Box";
import { FormTextInput } from "../FormTextInput/FormTextInput";
import { Button } from "../Button/Button";
import { useProcessingModalService } from "@/services/processingModal";
import { CreateNoteApiResponse, useCreateNote } from "@/domain/note";
import { useToastService } from "@/services/toast";
import { useNavigation } from "@react-navigation/native";

import { useBottomSheetService } from "@/services";

interface Props {
  directoryId: number;
}

export function CreateNoteByUrl({ directoryId }: Props) {
  const { hideBottomSheet } = useBottomSheetService();

  const { navigate } = useNavigation();
  const { mutate, isPending } = useCreateNote({ onError, onSuccess });
  const { showToast } = useToastService();
  const { showProcessingModal, hideProcessingModal } =
    useProcessingModalService();

  const { control, formState, handleSubmit } = useForm<UrlSchema>({
    resolver: zodResolver(urlSchema),
    mode: "onChange",
  });

  function onError() {
    hideProcessingModal();
    showToast({ message: "Falha ao criar anotação", type: "error" });
  }

  function onSuccess(params: CreateNoteApiResponse) {
    hideBottomSheet();
    hideProcessingModal();
    navigate("App", { screen: "Editor", params });
  }

  function onSubmit(data: UrlSchema) {
    mutate({ ...data, directoryId });
    showProcessingModal({
      title: "Criando anotações, aguarde...",
    });
  }

  return (
    <Box paddingVertical="md" rowGap="lg">
      <FormTextInput
        control={control}
        name="url"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="url"
        placeholder="Insira o link"
        label="Insira o link"
      />
      <Button
        title="Criar nota"
        alignSelf="center"
        disabled={!formState.isValid}
        loading={isPending}
        onPress={handleSubmit(onSubmit)}
      />
    </Box>
  );
}
