/**
 * @评论表结构
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({
  versionKey: false,
})
export class Comment {
  @Prop()
  comment_blog_id: string; // 评论博客id

  @Prop()
  comment_user_id: number; // 评论者id

  @Prop()
  comment_content: string; // 评论内容

  @Prop()
  comment_sender_id: number; // 被评论者id

  @Prop()
  comment_create_time: number; // 评论时间
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
