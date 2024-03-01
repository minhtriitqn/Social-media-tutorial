import { UserType } from '@/features/user';

export type LoginValues = {
  username: string;
  password: string;
};

export type ResponseLogin = {
  access_token: string;
  user: UserType;
  expiresIn: string;
};

export type RegisterInput = {
  fullname: string;
  phone: string;
  username: string;
  password: string;
  email: string;
  gender: number;
};
