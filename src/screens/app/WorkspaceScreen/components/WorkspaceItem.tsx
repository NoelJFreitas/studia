import { PressableBox, PressableBoxProps, Text } from "@/components";
import { Dimensions } from "react-native";

function generateRandomText(maxWords: number) {
  const words = [
    "the",
    "job",
    "hard",
    "for",
    "athletes",
    "high",
    "altitude",
    "produces",
    "two",
    "contradictory",
    "effects",
    "on",
    "performance",
    "training",
    "oxygen",
    "levels",
    "increase",
    "speed",
    "adaptation",
    "body",
    "muscles",
    "energy",
    "fatigue",
    "control",
    "focus",
    "strength",
  ];

  const count = Math.floor(Math.random() * maxWords) + 1;
  const text = Array.from(
    { length: count },
    () => words[Math.floor(Math.random() * words.length)],
  ).join(" ");

  return text.charAt(0).toUpperCase() + text + ".";
}
const WIDTH = Dimensions.get("screen").width;

interface Props extends PressableBoxProps {}

export function WorkspaceItem({ ...props }: Props) {
  const title = generateRandomText(5); // até 5 palavras
  const description = generateRandomText(100); // até 100 palavras
  const compWidth = (WIDTH - 16 * 3) / 2;

  return (
    <PressableBox
      {...props}
      padding="md"
      borderWidth={1}
      borderColor="lightGray"
      borderRadius="xl"
      rowGap="sm"
      width={compWidth}
    >
      <Text preset="headingSmall" fontWeight="bold">
        {title}
      </Text>
      <Text color="mediumGray" preset="paragraphCaption">
        {description}
      </Text>
    </PressableBox>
  );
}
