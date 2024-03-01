import { Entity, ObjectIdColumn, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Group {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  coverImage: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column()
  admins: string[];

  @Column()
  isPrivate: boolean;

  @Column()
  members: string[];

  @Column()
  membersReq: string[];

  @Column()
  allFiles: string[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
