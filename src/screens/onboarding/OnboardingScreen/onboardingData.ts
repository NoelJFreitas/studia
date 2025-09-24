import { images } from "@/assets";
import { ImageProps } from "react-native";

export interface OnboardingPageItem {
  title: string;
  description: string;
  image: ImageProps["source"];
  buttonTitle: string;
}

export const pages: OnboardingPageItem[] = [
  {
    title: "Suas anotações na palma da mão!",
    description:
      "Anote suas ideias de forma rápida e simples. Registre tudo, em qualquer hora e lugar.",
    buttonTitle: "Próximo",
    image: images.onboarding1,
  },
  {
    title: "Organize seus estudos do seu jeito!",
    description:
      "Crie blocos personalizados para cada matéria, tarefa ou projeto. Tenha tudo estruturado e fácil de acessar quando precisar.",
    buttonTitle: "Começar",
    image: images.onboarding2,
  },
];
