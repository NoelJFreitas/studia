import {
  Authentication,
  AuthenticationWithPasswordParams,
} from "@/domain/types/authentication/authentication";

export interface AuthenticationRepository {
  authenticateWithPassword(
    params: AuthenticationWithPasswordParams,
  ): Promise<Authentication>;
}
