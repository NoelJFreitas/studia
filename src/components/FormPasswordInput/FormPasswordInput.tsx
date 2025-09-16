import React from "react";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { TextInputProps } from "../TextInput/TextInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  onChangeText,
  onBlur: onBlurExternal,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState, ...props }) => (
        <PasswordInput
          {...textInputProps}
          value={field.value}
          errorMessage={errorMessage || fieldState.error?.message}
          onChangeText={field.onChange}
        />
      )}
    />
  );
}
