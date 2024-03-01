import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Topic {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  rank: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
