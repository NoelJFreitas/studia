import { Pressable } from "react-native";
import { Icon } from "../Icon/Icon";
import { TextInput, TextInputProps } from "../TextInput/TextInput";
import { useState } from "react";

export function PasswordInput({ ...props }: TextInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  return (
    <TextInput
      {...props}
      secureTextEntry={isSecureTextEntry}
      RightComponent={
        <Pressable onPress={() => setIsSecureTextEntry((prev) => !prev)}>
          <Icon name={isSecureTextEntry ? "eyeOn" : "eyeOff"} />
        </Pressable>
      }
    />
  );
}
