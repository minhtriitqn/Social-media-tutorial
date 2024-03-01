import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Saved {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  author: string;

  @Column()
  posts: string[];

  @Column()
  markets: string[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
