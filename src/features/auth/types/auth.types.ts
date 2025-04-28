type BaseAuthPayload = {
  email: string;
  password: string;
  callbackURL?: string;
};

export type SignUpPayload = BaseAuthPayload & {
  name: string;
  image?: string;
};

export type SignInPayload = BaseAuthPayload & {
  rememberMe?: boolean;
};
