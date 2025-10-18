import { IconBase } from "@/components/Icon/Icon";
import { Dimensions, StyleSheet } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

const width = Dimensions.get("screen").width;

export function FolderBackground({ color = "red" }: IconBase) {
  return (
    <Svg
      width={width * 0.456}
      height={width * 0.456}
      viewBox="0 0 171 172"
      style={StyleSheet.absoluteFillObject}
    >
      <Rect
        x="48"
        y="16.0676"
        width="100"
        height="100"
        rx="10"
        transform="rotate(-9.24615 48 16.0676)"
        fill={color}
        fillOpacity="0.05"
      />
      <Rect
        x="63"
        y="10"
        width="100"
        height="100"
        rx="10"
        fill={color}
        fillOpacity="0.05"
      />
      <Path
        d="M0 21C0 9.9543 8.9543 1 20 1H87.6689C94.1495 1 100.228 4.14008 103.979 9.42506L114.021 23.5749C117.772 28.8599 123.85 32 130.331 32H151C162.046 32 171 40.9543 171 52V152C171 163.046 162.046 172 151 172H20C8.9543 172 0 163.046 0 152V21Z"
        fill="white"
      />
    </Svg>
  );
}
