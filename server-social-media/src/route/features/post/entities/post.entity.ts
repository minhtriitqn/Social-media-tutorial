import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  author: string;

  @Column()
  topic: string;

  @Column()
  content: string;

  @Column()
  images: string[];

  @Column()
  videos: string[];

  @Column()
  isGhim: boolean;

  @Column()
  usersLiked: string[];

  @Column()
  authorsPostShared: string[];

  @Column({ type: 'json' })
  isPostToGroup: {
    status: boolean;
    verified: boolean;
    idGroup: string;
  };

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
