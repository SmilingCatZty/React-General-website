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
}

export const NoticeSchema = SchemaFactory.createForClass(Notice);