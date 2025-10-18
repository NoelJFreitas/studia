import { Box, PressableBox } from "@/components/Box/Box";
import { Icon, IconName, iconNames } from "@/components/Icon/Icon";
import { Text } from "@/components/Text/Text";
import { useAppTheme } from "@/hooks";

interface Props {
  selected?: IconName;
  onSelect: (icon: IconName) => void;
  color?: string;
}
export function IconSelector({ onSelect, selected, color }: Props) {
  const { colors } = useAppTheme();
  const iconColor = color ? color : colors["primary"];

  return (
    <Box rowGap="sm">
      <Text preset="paragraphCaption" color="primaryTitle" fontWeight="medium">
        Selecione um ícone
      </Text>

      <Box flexDirection="row" flexWrap="wrap" gap="sm">
        {iconNames.map((name) => (
          <PressableBox
            key={name}
            height={50}
            width={50}
            borderWidth={selected === name ? 2 : 1}
            style={{
              borderColor: selected === name ? iconColor : colors["mediumGray"],
            }}
            justifyContent="center"
            alignItems="center"
            borderRadius="sm"
            onPress={() => onSelect(name)}
          >
            <Icon
              name={name}
              hexadecimalColor={
                selected === name ? iconColor : colors["mediumGray"]
              }
              size={20}
            />
          </PressableBox>
        ))}
      </Box>
    </Box>
  );
}
