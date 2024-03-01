import { gql } from '@apollo/client';

export const UPDATE_PROFILE = gql`
  mutation Update($body: UpdateUserDto!, $id: String!) {
    update(body: $body, id: $id) {
      message
      status
    }
  }
`;
