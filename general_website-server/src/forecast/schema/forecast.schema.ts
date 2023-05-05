/**
 * @新活动预告表结构
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ForecastDocument = HydratedDocument<Forecast>;

@Schema()
export class Forecast {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  startTime: number;

  @Prop()
  img: string;
}

export const ForecastSchema = SchemaFactory.createForClass(Forecast);
