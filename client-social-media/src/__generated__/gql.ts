/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation Login($body: LoginUserDto!) {\n    login(body: $body) {\n      user {\n        fullname\n        avatar\n        dayOfBirth\n        description\n        gender\n        id\n        phone\n        email\n        role\n        createdAt\n        friends {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n        friendsReq {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n      }\n      access_token\n    }\n  }\n':
    types.LoginDocument,
  '\n  mutation Signup($body: SignUpUserDto!) {\n    signup(body: $body) {\n      username\n    }\n  }\n':
    types.SignupDocument,
  '\n  query GetInfoUser {\n    getInfoUser {\n      avatar\n      createdAt\n      dayOfBirth\n      description\n      email\n      friends {\n        fullname\n        avatar\n      }\n      friendsReq {\n        fullname\n        avatar\n      }\n      fullname\n      gender\n      id\n      phone\n      role\n      username\n    }\n  }\n':
    types.GetInfoUserDocument,
  '\n  mutation Update($body: UpdateUserDto!, $id: String!) {\n    update(body: $body, id: $id) {\n      message\n      status\n    }\n  }\n':
    types.UpdateDocument,
  '\n  mutation UploadSingleFiles($file: Upload!) {\n    uploadSingleFiles(file: $file) {\n      url\n    }\n  }\n':
    types.UploadSingleFilesDocument,
  '\n  mutation UploadMultipleFiles($file: [Upload!]!) {\n    uploadMultipleFiles(files: $file) {\n      url\n    }\n  }\n':
    types.UploadMultipleFilesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation Login($body: LoginUserDto!) {\n    login(body: $body) {\n      user {\n        fullname\n        avatar\n        dayOfBirth\n        description\n        gender\n        id\n        phone\n        email\n        role\n        createdAt\n        friends {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n        friendsReq {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n      }\n      access_token\n    }\n  }\n',
): (typeof documents)['\n  mutation Login($body: LoginUserDto!) {\n    login(body: $body) {\n      user {\n        fullname\n        avatar\n        dayOfBirth\n        description\n        gender\n        id\n        phone\n        email\n        role\n        createdAt\n        friends {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n        friendsReq {\n          fullname\n          avatar\n          dayOfBirth\n          description\n          gender\n          id\n          phone\n          email\n          role\n          createdAt\n        }\n      }\n      access_token\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation Signup($body: SignUpUserDto!) {\n    signup(body: $body) {\n      username\n    }\n  }\n',
): (typeof documents)['\n  mutation Signup($body: SignUpUserDto!) {\n    signup(body: $body) {\n      username\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetInfoUser {\n    getInfoUser {\n      avatar\n      createdAt\n      dayOfBirth\n      description\n      email\n      friends {\n        fullname\n        avatar\n      }\n      friendsReq {\n        fullname\n        avatar\n      }\n      fullname\n      gender\n      id\n      phone\n      role\n      username\n    }\n  }\n',
): (typeof documents)['\n  query GetInfoUser {\n    getInfoUser {\n      avatar\n      createdAt\n      dayOfBirth\n      description\n      email\n      friends {\n        fullname\n        avatar\n      }\n      friendsReq {\n        fullname\n        avatar\n      }\n      fullname\n      gender\n      id\n      phone\n      role\n      username\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation Update($body: UpdateUserDto!, $id: String!) {\n    update(body: $body, id: $id) {\n      message\n      status\n    }\n  }\n',
): (typeof documents)['\n  mutation Update($body: UpdateUserDto!, $id: String!) {\n    update(body: $body, id: $id) {\n      message\n      status\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation UploadSingleFiles($file: Upload!) {\n    uploadSingleFiles(file: $file) {\n      url\n    }\n  }\n',
): (typeof documents)['\n  mutation UploadSingleFiles($file: Upload!) {\n    uploadSingleFiles(file: $file) {\n      url\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation UploadMultipleFiles($file: [Upload!]!) {\n    uploadMultipleFiles(files: $file) {\n      url\n    }\n  }\n',
): (typeof documents)['\n  mutation UploadMultipleFiles($file: [Upload!]!) {\n    uploadMultipleFiles(files: $file) {\n      url\n    }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
