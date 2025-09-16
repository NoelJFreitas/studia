import React from "react";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { TextInput, TextInputProps } from "../TextInput/TextInput";

export function FormTextInput<FormType extends FieldValues>({
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
        <TextInput
          {...textInputProps}
          value={field.value}
          errorMessage={errorMessage || fieldState.error?.message}
          onChangeText={field.onChange}
        />
      )}
    />
  );
}
