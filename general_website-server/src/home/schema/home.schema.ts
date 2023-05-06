/**
 * @首页信息表结构
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HomeDocument = HydratedDocument<Home>;

@Schema()
export class Home {
  @Prop()
  title: string; // 首页标题

  @Prop()
  background: string; // 首页背景

  @Prop()
  btnBackground: string; // 首页按钮背景图

  @Prop()
  qrCodeImg: string; // 二维码

  @Prop()
  pcImg: string; // pc码

  @Prop()
  boardTitle: string; // 看板标题

  @Prop()
  boardBackground: string; // 看板背景图
}

export const HomeSchema = SchemaFactory.createForClass(Home);
