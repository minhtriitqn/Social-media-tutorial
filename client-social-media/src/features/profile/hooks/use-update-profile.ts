import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
} from '@apollo/client';

import { UPDATE_PROFILE } from '../graphql';
import { UpdateInput } from '../service/type';

export const useUpdateProfile = () =>
  useMutation<
    { update: UpdateInput },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(UPDATE_PROFILE);
