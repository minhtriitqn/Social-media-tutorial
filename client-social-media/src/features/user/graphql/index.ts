import { gql } from '@apollo/client';

export const GET_USER_DETAIL = gql`
  query ($id: String!) {
    getUserById(id: $id) {
      address
      avatar
      company
      createdAt
      dayOfBirth
      description
      email
      files{}
      friends{
        name
        id
        avatar
      }
      friendsReq{
        name
        id
        avatar
      }
      fullname
      gender
      id
      phone
      relationship
      role
      university
      updatedAt
      username
    }
  }
`;
