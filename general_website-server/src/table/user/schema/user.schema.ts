/**
 * @用户基本信息表结构
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  versionKey: false,
})
export class User {
  @Prop()
  account_id: number; // 账号id

  @Prop()
  account_name: string; // 账号名称

  @Prop()
  account_password: string; // 账号密码

  @Prop()
  account_avatar: string; // 账号头像

  @Prop()
  account_login_time: number; // 账号登陆时间

  @Prop()
  account_login_status: boolean; // 账号登录状态

  @Prop()
  account_location: string; // 账号位置信息

  @Prop()
  haveAuth: boolean; // 是否有权限
}

export const UserSchema = SchemaFactory.createForClass(User);
