import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response, response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    const params = { ...createUserDto };
    const user = await this.userService.create(params);
    return user;
  }

  // 注册用户
  @Post('regist')
  async add(@Body() createUserDto: CreateUserDto) {
    const params = { ...createUserDto };
    const lastUser = await this.userService.findLastUser();
    params.account_id = lastUser[0].account_id + 1;
    const user = await this.userService.create(params);
    return user;
  }

  @Post('login')
  async login(
    @Body() loginDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const { user, access_token } = await this.userService.login(loginDto);
      // 100年过期,但由于Unix时间超过32位int,最大时间为2038年
      // 未防止jwt被劫持,需要设置http only和same site
      res.cookie('authorization', user, {
        maxAge: 3153600000,
        httpOnly: true,
        sameSite: true,
      });
      const response = this.clearUserInfo(user);

      return {
        userInfo: {
          info: response,
          access_token,
        },
      };
    } catch (err) {
      throw err;
    }
  }

  clearUserInfo(user: CreateUserDto) {
    if (user) {
      const userObj = user;
      delete userObj.account_id;
      delete userObj.account_password;
      return userObj;
    }
    return null;
  }
}
