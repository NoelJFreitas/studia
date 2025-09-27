import { SimpleLogo } from "@/brand";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from "@/components";
import { SocialLogin } from "./components/SocialLogin";
import { AuthScreenProps } from "@/routes";
import { useForm } from "react-hook-form";
import { defaultValues, loginSchema, LoginSchema } from "./schema";
import { useAuthSignIn } from "@/domain/authentication";
import { useToastService } from "@/services/toast";

export function LoginScreen({ navigation }: AuthScreenProps<"Login">) {
  const { showToast } = useToastService();
  const { signIn, isLoading } = useAuthSignIn({
    onError: (message) => showToast({ message, type: "error" }),
  });

  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    mode: "onChange",
  });

  const handleNavigateToCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };

  const submitForm = (params: LoginSchema) => {
    signIn(params);
  };

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
      <FormTextInput
        control={control}
        name="email"
        label="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Digite o seu e-mail"
        showErrorMessage={false}
        boxProps={{ mb: "xl" }}
      />
      <FormPasswordInput
        showErrorMessage={false}
        control={control}
        name="password"
        label="Senha"
        placeholder="digete a senha"
      />
      <Text textAlign="right" color="charcoalGray" mt="sm">
        Esqueceu sua senha?
      </Text>
      <Button
        disabled={!formState.isValid}
        alignSelf="center"
        title="Entrar"
        loading={isLoading}
        onPress={handleSubmit(submitForm)}
        marginTop="xl"
      />
      <Text marginVertical="xl" textAlign="center" color="charcoalGray">
        Ou entre com:
      </Text>
      <Box flexDirection="row" justifyContent="center" gap="md" mb="xl">
        <SocialLogin type="google" />
        <SocialLogin type="facebook" />
      </Box>
      <Text
        textAlign="center"
        fontWeight="medium"
        color="charcoalGray"
        onPress={handleNavigateToCreateAccount}
      >
        Não tem uma conta?{" "}
        <Text fontWeight="medium" color="primary">
          Criar agora
        </Text>
      </Text>
    </Screen>
  );
}
