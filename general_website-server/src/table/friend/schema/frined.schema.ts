import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FriendDocument = HydratedDocument<Friend>;

@Schema({
  _id: false,
  versionKey: false,
})
export class Friend {
  @Prop()
  sender_id: number; // 用户id

  @Prop()
  reciever_id: number; // 好友id

  @Prop()
  friend_signal: string; // 好友标识

  @Prop()
  status: number; // 状态
}

export const FriendSchema = SchemaFactory.createForClass(Friend);
