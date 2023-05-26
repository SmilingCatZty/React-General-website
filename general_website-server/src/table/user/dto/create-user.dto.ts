import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @IsOptional()
  account_id: number; // 账号id

  @IsString()
  account_name: string; // 账号名称

  @IsString()
  account_password: string; // 账号密码

  @IsString()
  @IsOptional()
  account_avatar: string; // 账号头像

  @IsNumber()
  @IsOptional()
  account_login_time: number; // 账号登陆时间

  @IsString()
  @IsOptional()
  account_location: string; // 账号位置信息

  @IsBoolean()
  @IsOptional()
  haveAuth: boolean; // 是否有权限
}
