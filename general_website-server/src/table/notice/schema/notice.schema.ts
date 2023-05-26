import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

export type NoticeDocument = HydratedDocument<Notice>;

@Schema()
export class Notice {
  @Prop()
  title: string;

  @Prop()
  type: string;

  @Prop()
  img: string;

  @Prop()
  content: string;

  @Prop()
  createTime: number;

  @Prop()
  view: number; // 当前访问人数，用于统计热点话题
}

export const NoticeSchema = SchemaFactory.createForClass(Notice);
