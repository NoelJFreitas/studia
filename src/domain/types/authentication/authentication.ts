import { Profile } from "./profile";

export interface AuthenticationResponse {
  authToken: string;
  user: {
    id: 1;
    created_at: number;
    name: string;
    email: string;
    password: number;
    course: string;
  };
}

export interface Authentication {
  token: string;
  expiresAt: Date;
  userId: string;
}

export interface AuthenticatedUserSession extends Authentication {
  user: Profile;
}

export interface AuthenticationWithPasswordParams {
  email: string;
  password: string;
}
