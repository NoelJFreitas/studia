import { CompositeScreenProps } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";
import { AuthStackParamList } from "../stacks/AuthStack";
import { OnboardingStackParamList } from "../stacks/OnboardingStack";

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
    type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  }
}

declare module "@react-navigation/native" {
  export function useNavigation(): NativeStackNavigationProp<RootStackParamList>;
}

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthStackParamList, RouteName>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type OnboardingScreenProps<
  RouteName extends keyof OnboardingStackParamList,
> = CompositeScreenProps<
  NativeStackScreenProps<OnboardingStackParamList, RouteName>,
  NativeStackScreenProps<RootStackParamList>
>;
