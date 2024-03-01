import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';

import {
  CREATE_POST,
  GET_POSTS,
  GET_POST_DETAIL,
  GET_POST_BY_GROUP,
} from '../graphql';
import { PostInput, PostType, ResPaginationPostData } from '../service/type';

export const useCreatePostMutation = () =>
  useMutation<
    { createPost: { status: string; data: PostInput } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_POST);

export const useGetPostsQuery = () =>
  useQuery<{ getPosts: ResPaginationPostData }, OperationVariables>(GET_POSTS);

export const useGetPostDetail = (id: string) =>
  useQuery<{ getPostById: PostType }, OperationVariables>(GET_POST_DETAIL, {
    variables: { id },
  });

export const useGetPostByGroup = () =>
  useQuery<{ getPostByGroup: PostType }, OperationVariables>(GET_POST_BY_GROUP);
