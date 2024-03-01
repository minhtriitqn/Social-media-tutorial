import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {
    getPosts(filter: $filter, page: $page, limit: $limit) {
      page
      total
      data {
        admins {
          fullname
          id
          avatar
        }
        author {
          fullname
          id
          avatar
        }
        avatar
        coverImage
        createdAt
        description
        id
        idPrivate
        members {
          avatar
          email
          fullname
          gender
          id
        }
        membersReq {
          avatar
          email
          fullname
          gender
          id
        }
      }
    }
  }
`;

export const GET_POST_DETAIL = gql`
  query GetPostById($id: String!) {
    getPostById(id: $id) {
      content
      createdAt
      id
      idAuthor
      images
      isGhim
      isPostToGroup {
        status
        idGroup
      }
      topic {
        name
      }
      updatedAt
      videos
      usersLiked {
        avatar
        createdAt
        dayOfBirth
        description
        email
        friends {
          fullname
          id
          avatar
        }
        friendsReq {
          fullname
          id
          avatar
        }
        fullname
        gender
        id
        phone
      }
      authorsPostShared {
        avatar
        createdAt
        dayOfBirth
        description
        email
        friends {
          fullname
          id
          avatar
        }
        friendsReq {
          fullname
          id
          avatar
        }
        fullname
        gender
        id
        phone
      }
    }
  }
`;

export const GET_POST_BY_GROUP = gql`
  query GetPostsByGroup($idGroup: String, $limit: Float, $page: Float) {
    getPostsByGroup(idGroup: $idGroup, limit: $limit, page: $page) {
      page
      total
      data {
        authorsPostShared {
          avatar
          fullname
          id
        }
        content
        createdAt
        id
        idAuthor
        images
        isGhim
        isPostToGroup {
          idGroup
          status
        }
        topic {
          id
          name
        }
        updatedAt
        usersLiked {
          id
          fullname
        }
        videos
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($body: CreatePostDto!) {
    createPost(body: $body) {
      authorsPostShared {
        avatar
        createdAt
        dayOfBirth
        description
        email
        friends {
          fullname
          avatar
          id
        }
        gender
        id
        phone
        fullname
      }
      content
      id
      idAuthor
      isGhim
      images
      isGhim
      isPostToGroup {
        status
      }
      topic {
        name
      }
      updatedAt
      usersLiked {
        avatar
        fullname
      }
      videos
    }
  }
`;
