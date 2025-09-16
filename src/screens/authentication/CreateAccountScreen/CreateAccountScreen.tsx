import { SimpleLogo } from "@brand";
import { Button, PasswordInput, Screen, Text, TextInput } from "@components";
import { AuthScreenProps } from "@routes";

export function CreateAccountScreen({
  navigation,
}: AuthScreenProps<"CreateAccount">) {
  return (
    <Screen justifyContent="center">
      <SimpleLogo alignSelf="center" />
      <Text
        preset="headingLarge"
        fontWeight="bold"
        marginVertical="xl"
        textAlign="center"
      >
        Criar uma conta
      </Text>
      <TextInput
        label="Email"
        placeholder="Digite o seu e-mail"
        boxProps={{ mb: "xl" }}
      />
      <TextInput
        label="Nome Completo"
        placeholder="Digite o seu nome completo"
        boxProps={{ mb: "xl" }}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite a senha"
        boxProps={{ mb: "xl" }}
      />
      <PasswordInput label="Confirmar senha" placeholder="Repita a senha" />
      <Button
        alignSelf="center"
        title="Criar minha conta"
        marginVertical="xl"
      />
      <Text
        textAlign="center"
        fontWeight="medium"
        color="charcoalGray"
        onPress={navigation.goBack}
      >
        Já tem uma conta?{" "}
        <Text fontWeight="medium" color="primary">
          Entrar
        </Text>
      </Text>
    </Screen>
  );
}
