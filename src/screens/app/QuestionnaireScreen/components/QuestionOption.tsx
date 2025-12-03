import { Box, PressableBox, Text } from "@/components";
import { Alternative } from "@/domain/questions";
import { useAppTheme } from "@/hooks";

interface Props {
  alternative: Alternative;
  selected?: boolean;
  showAnswer?: boolean;
  onSelect?: () => void;
}

export function QuestionOption({
  alternative,
  selected = false,
  showAnswer = false,
  onSelect,
}: Props) {
  const { colors } = useAppTheme();

  const getColor = () => {
    // Regra: não selecionada, mas correta e showAnswer → verde
    if (!selected && showAnswer && alternative.correta) {
      return colors.forestGreen;
    }

    // Se não selecionada e não é a correta → sem cor
    if (!selected) return undefined;

    // Se está selecionada e showAnswer → verde ou vermelho
    if (showAnswer) {
      return alternative.correta ? colors.forestGreen : colors.red;
    }

    // Se está selecionada mas showAnswer = false → cor primária
    return colors.primary;
  };

  const color = getColor();

  return (
    <PressableBox flexDirection="row" columnGap="sm" onPress={onSelect}>
      <Box
        height={18}
        width={18}
        borderRadius="huge"
        justifyContent="center"
        alignItems="center"
        style={{ borderColor: color }}
        borderWidth={1}
      >
        {selected && (
          <Box
            height={10}
            width={10}
            borderRadius="huge"
            style={{ backgroundColor: color }}
          />
        )}
      </Box>

      <Text style={{ color }}>{alternative.texto}</Text>
    </PressableBox>
  );
}
