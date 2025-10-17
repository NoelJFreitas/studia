import React, { useEffect, useRef } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

import { ViewStyle } from "react-native";
import { BottomSheetContent } from "./components/BottomSheetContent";
import { useBottomSheet, useBottomSheetService } from "@/services/bottomSheet";
import { Text } from "../Text/Text";
import { CreateWorkspace } from "../CreateWorkspace/CreateWorkspace";

export function BottomSheet() {
  const bottomSheetContent = useBottomSheet();
  const { hideBottomSheet } = useBottomSheetService();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  function handleCloseBottomSheet() {
    bottomSheetModalRef.current?.dismiss();
    hideBottomSheet();
  }

  useEffect(() => {
    bottomSheetModalRef.current?.present();
    if (bottomSheetContent) {
      bottomSheetModalRef.current?.present();
    }
  }, [bottomSheetContent, bottomSheetModalRef]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        // index={1}
        // snapPoints={["80%"]}
        enableDynamicSizing
        ref={bottomSheetModalRef}
        containerStyle={$containerStyle}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.1}
            pressBehavior="close"
            disappearsOnIndex={-1}
          />
        )}
      >
        <BottomSheetView>
          <BottomSheetContent
            title={bottomSheetContent?.title}
            handleOnClose={handleCloseBottomSheet}
          >
            {/* {bottomSheetContent?.element && bottomSheetContent.element} */}
            <CreateWorkspace />
          </BottomSheetContent>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const $containerStyle: ViewStyle = {
  backgroundColor: "#00000061",
};
