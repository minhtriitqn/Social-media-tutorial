import { Entity, ObjectIdColumn, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Collection {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  saved: string;

  @Column()
  posts: string[];

  @Column()
  markets: string[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
