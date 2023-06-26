/**
 * @同文件news
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ConsultDocument = HydratedDocument<Consult>;

@Schema()
export class Consult {
  @Prop()
  title: string; // 标题

  @Prop()
  img: string; // 图片
}

export const ConsultSchema = SchemaFactory.createForClass(Consult);
