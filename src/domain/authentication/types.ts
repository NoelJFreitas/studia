import { Profile } from "../profile/types";

export interface AuthenticationResponse {
  authToken: string;
  user: {
    id: string;
    created_at: number;
    name: string;
    email: string;
    password: number;
    course: string;
    avatar?: {
      url;
    };
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
