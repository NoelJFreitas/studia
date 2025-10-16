import { IconBase } from "@/components";
import React from "react";

import { Svg, Path } from "react-native-svg";

export function PlusIcon({ size = 20, color = "black" }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M17.9998 11.3334H11.3332V18C11.3332 18.7334 10.7332 19.3334 9.99984 19.3334C9.2665 19.3334 8.6665 18.7334 8.6665 18V11.3334H1.99984C1.2665 11.3334 0.666504 10.7334 0.666504 10C0.666504 9.26669 1.2665 8.66669 1.99984 8.66669H8.6665V2.00002C8.6665 1.26669 9.2665 0.666687 9.99984 0.666687C10.7332 0.666687 11.3332 1.26669 11.3332 2.00002V8.66669H17.9998C18.7332 8.66669 19.3332 9.26669 19.3332 10C19.3332 10.7334 18.7332 11.3334 17.9998 11.3334Z"
        fill={color}
      />
    </Svg>
  );
}
