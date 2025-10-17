import { Box, PressableBox } from "@/components/Box/Box";
import { Icon, IconName, iconNames } from "@/components/Icon/Icon";
import { Text } from "@/components/Text/Text";

interface Props {
  selected?: IconName;
  onSelect: (icon: IconName) => void;
}
export function IconSelector({ onSelect, selected }: Props) {
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
            borderColor={selected === name ? "primary" : "mediumGray"}
            justifyContent="center"
            alignItems="center"
            borderRadius="sm"
            onPress={() => onSelect(name)}
          >
            <Icon
              name={name}
              color={selected === name ? "primary" : "mediumGray"}
              size={20}
            />
          </PressableBox>
        ))}
      </Box>
    </Box>
  );
}
