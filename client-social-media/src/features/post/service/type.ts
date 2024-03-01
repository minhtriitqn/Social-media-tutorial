export type PostType = {
  idAuthor: string;
  topic: string;
  content: string;
  image?: string[];
  video?: string[];
  isGhim?: boolean;
  userLiked?: string[];
  authorsPostShared?: string[];
  statusPostToGroup?: boolean;
  verified?: boolean;
  idGroup?: string;
  createAt?: Date;
  updateAt?: Date;
};

export type PostInput = Pick<
  PostType,
  'idAuthor' | 'topic' | 'content' | 'image' | 'video' | 'createAt'
>;

export type ResPaginationPostData = {
  page: number;
  limit: number;
  data: PostType[];
};

export type QueryPostOption = {
  page: number;
  limit: number;
  creator: string;
};
