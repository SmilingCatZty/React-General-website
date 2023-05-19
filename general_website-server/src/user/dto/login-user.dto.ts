import { IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  account_name: string; // 账号名称

  @IsString()
  account_password: string; // 账号密码
}
