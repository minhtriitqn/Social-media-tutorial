export type PostType = {
  id?: string;
  listFile?: FileType[];
  content?: string;
  typePost?: 'video' | 'content';
  videoSrc?: string;
};

export type FileType = {
  id: string;
  file: string;
};
