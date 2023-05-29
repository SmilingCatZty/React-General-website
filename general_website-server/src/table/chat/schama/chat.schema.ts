/**
 * @聊天记录表
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema({
  // _id: false,
  versionKey: false,
})
export class Chat {
  @Prop()
  sender_id: number; // 发送者id

  @Prop()
  reciever_id: number; // 接收者id

  @Prop()
  message: string; // 聊天记录

  @Prop()
  status: number; // 已读状态

  @Prop()
  send_time: number; // 发送时间
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
