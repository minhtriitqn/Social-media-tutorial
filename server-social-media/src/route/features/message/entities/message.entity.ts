import { EnumTypeMessage } from 'src/ts/enum';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Message {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  room: string;

  @Column()
  author: string;

  @Column()
  content: string;

  @Column()
  typeMessage: EnumTypeMessage;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
