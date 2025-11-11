import { PressableBox, PressableBoxProps, Text } from "@/components";
import { NoteListItem } from "@/domain/note";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;

interface Props extends PressableBoxProps {
  item: NoteListItem;
}

const maxLines = Math.floor(Math.random() * (12 - 5 + 1)) + 5;

export function WorkspaceItem({ item, ...props }: Props) {
  const compWidth = (WIDTH - 16 * 3) / 2;
  const { navigate } = useNavigation();

  const onPress = () => {
    navigate("App", { screen: "Editor", params: { id: item.id } });
  };

  return (
    <PressableBox
      {...props}
      onPress={onPress}
      padding="md"
      borderWidth={1}
      borderColor="lightGray"
      borderRadius="xl"
      rowGap="sm"
      width={compWidth}
    >
      <Text preset="headingSmall" fontWeight="bold" numberOfLines={5}>
        {item.title}
      </Text>
      <Text
        color="mediumGray"
        preset="paragraphCaption"
        numberOfLines={maxLines}
      >
        {item.shortDescription}
      </Text>
      <Text preset="paragraphCaption" fontWeight="medium" color="darkSlate">
        {item.createdAt}
      </Text>
    </PressableBox>
  );
}
