import { SimpleLogo } from "@brand";
import {
  Box,
  Button,
  PasswordInput,
  Screen,
  Text,
  TextInput,
} from "@components";
import { SocialLogin } from "./components/SocialLogin";

export function LoginScreen() {
  return (
    <Screen justifyContent="center">
      <SimpleLogo alignSelf="center" />
      <Text
        preset="headingLarge"
        fontWeight="bold"
        marginVertical="xl"
        textAlign="center"
      >
        Entrar
      </Text>
      <TextInput
        label="Email"
        placeholder="Digite o seu e-mail"
        boxProps={{ mb: "xl" }}
      />
      <PasswordInput label="Senha" placeholder="digete a senha" />
      <Text textAlign="right" color="charcoalGray" mt="sm">
        Esqueceu sua senha?
      </Text>
      <Button alignSelf="center" title="Entrar" marginTop="xl" />
      <Text marginVertical="xl" textAlign="center" color="charcoalGray">
        Ou entre com:
      </Text>
      <Box flexDirection="row" justifyContent="center" gap="md" mb="xl">
        <SocialLogin type="google" />
        <SocialLogin type="facebook" />
      </Box>
      <Text textAlign="center" fontWeight="medium" color="charcoalGray">
        Não tem uma conta?{" "}
        <Text fontWeight="medium" color="primary">
          Criar agora
        </Text>
      </Text>
    </Screen>
  );
}
