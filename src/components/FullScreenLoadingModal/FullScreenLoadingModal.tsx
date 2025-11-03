import { lottieAnimations } from "@/assets";
import { Text } from "../Text/Text";
import { $shadowProps } from "@/theme";
import LottieView from "lottie-react-native";
import React, { useRef, useEffect, useState } from "react";
import { Animated, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.3)`;
}

function parseRGB(rgba: string) {
  const nums = rgba.match(/\d+/g);
  if (!nums) return [0, 0, 0];
  return [Number(nums[0]), Number(nums[1]), Number(nums[2])];
}

export function FullScreenLoadingModal() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const [locations, setLocations] = useState<[number, number, number]>([
    0, 0.5, 1,
  ]);

  const [startPoint, setStartPoint] = useState({ x: 1, y: 0 });
  const [endPoint, setEndPoint] = useState({ x: 0, y: 1 });

  const [colors, setColors] = useState<string[]>([
    randomColor(),
    randomColor(),
    randomColor(),
  ]);

  useEffect(() => {
    const moveAnim = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: false,
        }),
      ]),
    );

    moveAnim.start();

    const id = animatedValue.addListener(({ value }) => {
      const center = 0.3 + value * 0.4;
      setLocations([0, center, 1]);

      const startX = 1 - value;
      const startY = value;
      const endX = value;
      const endY = 1 - value;
      setStartPoint({ x: startX, y: startY });
      setEndPoint({ x: endX, y: endY });
    });

    let colorCycleActive = true;

    const doColorTransition = async () => {
      while (colorCycleActive) {
        const nextColors = [randomColor(), randomColor(), randomColor()];
        const steps = 30;
        const intervalMs = 100;
        const startColors = colors;

        const startRGBs = startColors.map((c) => parseRGB(c));
        const endRGBs = nextColors.map((c) => parseRGB(c));

        for (let step = 1; step <= steps; step++) {
          if (!colorCycleActive) return;

          const t = step / steps;
          const blended = startRGBs.map((startRgb, i) => {
            const endRgb = endRGBs[i];
            const r = Math.round(startRgb[0] + (endRgb[0] - startRgb[0]) * t);
            const g = Math.round(startRgb[1] + (endRgb[1] - startRgb[1]) * t);
            const b = Math.round(startRgb[2] + (endRgb[2] - startRgb[2]) * t);
            return `rgba(${r}, ${g}, ${b}, 0.3)`;
          });

          setColors(blended);

          await new Promise((res) => setTimeout(res, intervalMs));
        }

        setColors(nextColors);

        await new Promise((res) => setTimeout(res, 500));
      }
    };

    doColorTransition();

    return () => {
      colorCycleActive = false;
      moveAnim.stop();
      animatedValue.removeListener(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal>
      <LinearGradient
        colors={colors}
        locations={locations}
        start={startPoint}
        end={endPoint}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          rowGap: 16,
        }}
      >
        <LottieView
          source={lottieAnimations.wave}
          style={[{ height: 200, width: 200 }, $shadowProps]}
          autoPlay
          loop
        />

        <Text fontWeight="medium" style={$shadowProps}>
          Gerando nota, aguarde...
        </Text>
      </LinearGradient>
    </Modal>
  );
}
