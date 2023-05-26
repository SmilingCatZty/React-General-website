/**
 * @首页地域分布背景图
 */
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HomeAreaDocument = HydratedDocument<HomeArea>;

@Schema()
export class HomeArea {
  @Prop()
  title: string; // 地域图片标题

  @Prop()
  img: string; // 地域图片
}

export const HomeAreaSchema = SchemaFactory.createForClass(HomeArea);
