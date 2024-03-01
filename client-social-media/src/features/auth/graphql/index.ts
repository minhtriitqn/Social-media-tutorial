import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($body: LoginUserDto!) {
    login(body: $body) {
      user {
        fullname
        avatar
        dayOfBirth
        description
        gender
        id
        phone
        email
        role
        createdAt
        friends {
          fullname
          avatar
          dayOfBirth
          description
          gender
          id
          phone
          email
          role
          createdAt
        }
        friendsReq {
          fullname
          avatar
          dayOfBirth
          description
          gender
          id
          phone
          email
          role
          createdAt
        }
      }
      access_token
    }
  }
`;

export const SIGN_UP = gql`
  mutation Signup($body: SignUpUserDto!) {
    signup(body: $body) {
      username
    }
  }
`;

export const GET_INFOR_USER = gql`
  query GetInfoUser {
    getInfoUser {
      avatar
      createdAt
      dayOfBirth
      description
      email
      address
      description
      company
      university
      relationship
      friends {
        fullname
        avatar
      }
      friendsReq {
        fullname
        avatar
      }
      fullname
      gender
      id
      phone
    }
  }
`;
