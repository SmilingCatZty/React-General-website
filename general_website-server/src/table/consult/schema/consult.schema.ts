/**
 * @同文件news
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ConsultDocument = HydratedDocument<Consult>;

@Schema()
export class Consult {
  @Prop()
  title: string;

  @Prop()
  background: string;
}

export const ConsultSchema = SchemaFactory.createForClass(Consult);
