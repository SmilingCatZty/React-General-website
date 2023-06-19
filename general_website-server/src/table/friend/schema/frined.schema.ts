import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FriendDocument = HydratedDocument<Friend>;

@Schema({
  _id: true,
  versionKey: false,
})
export class Friend {
  @Prop()
  person_id: number; // 用户id

  @Prop()
  friend_list: number[]; // 好友列表

  @Prop()
  friend_apply_list: number[]; // 好友申请列表

  @Prop()
  friend_accept_list: number[]; // 接受成为好友列表

  @Prop()
  friend_reject_list: number[]; // 拒绝成为好友列表
}

export const FriendSchema = SchemaFactory.createForClass(Friend);
