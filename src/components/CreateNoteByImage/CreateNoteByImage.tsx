import { useState } from "react";
import { AwesomeIcon } from "../AwesomeIcon/AwesomeIcon";
import { Box, PressableBox } from "../Box/Box";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { Image, ImageStyle } from "expo-image";
import { CreateNoteApiResponse, useCreateNoteByImage } from "@/domain/note";
import { ImagePickerAsset } from "expo-image-picker";
import { useProcessingModalService } from "@/services/processingModal";
import { useToastService } from "@/services/toast";
import { useBottomSheetService } from "@/services";
import { useNavigation } from "@react-navigation/native";

interface Props {
  directoryId: number;
}

export function CreateNoteByImage({ directoryId }: Props) {
  const [image, setImage] = useState<ImagePickerAsset | null>(null);

  const { navigate } = useNavigation();
  const { mutate, isPending } = useCreateNoteByImage({ onError, onSuccess });
  const { showToast } = useToastService();
  const { hideBottomSheet } = useBottomSheetService();
  const { showProcessingModal, hideProcessingModal } =
    useProcessingModalService();

  function onError() {
    hideProcessingModal();
    showToast({ message: "Falha ao criar anotação", type: "error" });
  }

  function onSuccess(params: CreateNoteApiResponse) {
    hideBottomSheet();
    hideProcessingModal();
    navigate("App", { screen: "Editor", params });
  }

  async function pickImage() {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required.",
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: false,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  }

  function onSubmit() {
    mutate({ directoryId, image });
    showProcessingModal({
      title: "Criando anotações, aguarde...",
    });
  }

  return (
    <Box>
      <Text color="mediumGray" mt="md">
        Clique e selecione uma imagem
      </Text>
      <PressableBox
        onPress={pickImage}
        height={100}
        backgroundColor="lightGray"
        justifyContent="center"
        alignItems="center"
        borderRadius="md"
        marginVertical="lg"
        rowGap="sm"
      >
        {!image && <AwesomeIcon name="camera" color="mediumGray" />}
        {image && <Image style={$image} source={image} />}
      </PressableBox>
      <Button
        alignSelf="center"
        title="enviar"
        loading={isPending}
        disabled={!image}
        onPress={onSubmit}
      />
    </Box>
  );
}

const $image: ImageStyle = {
  width: 80,
  height: 80,
};
