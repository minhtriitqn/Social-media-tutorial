import { gql } from '@apollo/client';

export const UPLOAD_SINGLE_FILE = gql`
  mutation UploadSingleFiles($file: Upload!) {
    uploadSingleFiles(file: $file) {
      url
    }
  }
`;

export const UPLOAD_MULTIPLE_FILE = gql`
  mutation UploadMultipleFiles($file: [Upload!]!) {
    uploadMultipleFiles(files: $file) {
      url
    }
  }
`;
