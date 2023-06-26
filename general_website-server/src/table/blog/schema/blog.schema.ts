/**
 * @博客表结构
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

export enum BlogStatus {
  PASS = 'pass',
  REJECT = 'reject',
  EMPTY = '',
}

@Schema({
  versionKey: false,
})
export class Blog {
  @Prop()
  blog_id: string; // 博客id

  @Prop()
  blog_user_id: number; // 作者id

  @Prop({ enum: BlogStatus })
  blog_status: string; // 博客状态

  @Prop()
  blog_title: string; // 博客标题

  @Prop()
  blog_content: string; // 博客内容

  @Prop()
  blog_img: string[]; // 博客图片

  @Prop()
  blog_like_list: number[]; // 博客点赞列表

  @Prop()
  blog_comment_list: number[]; // 博客评论列表

  @Prop()
  blog_create_time: number; // 创建时间

  // @Prop()
  // blog_like_count: number; // 点赞人数
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
