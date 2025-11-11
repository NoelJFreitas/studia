import { lottieAnimations } from "@/assets";
import { Text } from "../Text/Text";
import { $purpleShadowProps, $shadowProps } from "@/theme";
import LottieView from "lottie-react-native";
import React from "react";
import { Modal } from "react-native";

import { useProcessingModal } from "@/services/processingModal";
import { Box } from "../Box/Box";

export function FullScreenLoadingModal() {
  const processingModal = useProcessingModal();

  if (!processingModal) return;

  return (
    <Modal visible={!!processingModal} transparent>
      <Box
        justifyContent="center"
        alignItems="center"
        flex={1}
        style={{ backgroundColor: "#000000ce" }}
      >
        <LottieView
          source={lottieAnimations.wave}
          style={[{ height: 200, width: 200 }, $shadowProps]}
          autoPlay
          loop
        />
        <Text fontWeight="medium" color="primary" style={$purpleShadowProps}>
          {processingModal?.title ?? "Loading..."}
        </Text>
      </Box>
    </Modal>
  );
}
