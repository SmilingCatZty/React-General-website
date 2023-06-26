import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

export type NoticeDocument = HydratedDocument<Notice>;

@Schema({
  versionKey: false,
})
export class Notice {
  @Prop()
  title: string; // 通知标题

  @Prop()
  type: string; // 通知类型

  @Prop()
  img: string; // 图纸图片

  @Prop()
  content: string; // 通知内容

  @Prop()
  createTime: number; // 创建时间

  @Prop()
  view: number; // 当前访问人数，用于统计热点话题
}

export const NoticeSchema = SchemaFactory.createForClass(Notice);
