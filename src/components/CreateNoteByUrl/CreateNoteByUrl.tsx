import { useForm } from "react-hook-form";
import { urlSchema, UrlSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "../Box/Box";
import { FormTextInput } from "../FormTextInput/FormTextInput";
import { Button } from "../Button/Button";
import { useProcessingModalService } from "@/services/processingModal";

export function CreateNoteByUrl() {
  const { showProcessingModal } = useProcessingModalService();
  const { control, formState, handleSubmit } = useForm<UrlSchema>({
    resolver: zodResolver(urlSchema),
    mode: "onChange",
  });

  function onSubmit(data: UrlSchema) {
    console.log(data);
    showProcessingModal({});
  }

  return (
    <Box paddingVertical="md" rowGap="lg">
      <FormTextInput
        control={control}
        name="url"
        placeholder="url"
        label="Insira o link"
      />
      <Button
        title="Criar nota"
        alignSelf="center"
        disabled={!formState.isValid}
        onPress={handleSubmit(onSubmit)}
      />
    </Box>
  );
}
