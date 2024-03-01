import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';

import useAuthStore from './user-auth-store';
import { GET_INFOR_USER, LOGIN, SIGN_UP } from '../graphql';
import { RegisterInput, ResponseLogin } from '../services/type';
import { UserType } from '@/features/user';

export const useLoginMutation = () =>
  useMutation<
    { login: ResponseLogin },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(LOGIN);

export const useSignUpMutation = () =>
  useMutation<
    { signup: RegisterInput },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(SIGN_UP);

export const useLogoutMutation = () => {
  const logout = useAuthStore((state) => state.logout);
  return { logout };
};

export const useQueryInfoUser = () =>
  useQuery<{ getInfoUser: UserType }, OperationVariables>(GET_INFOR_USER);
