import { IconBase } from "@/components";
import React from "react";

import { Svg, Path, G } from "react-native-svg";

export function CloseIcon({ size = 20, color = "black" }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G id="Menu / Close_MD">
        <Path
          id="Vector"
          d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}
