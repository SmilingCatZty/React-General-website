import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserDocument, User } from './schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModule: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}
  // {
  //   account_id,
  //   account_name,
  //   account_password,
  //   account_avatar,
  //   account_login_time,
  //   account_location,
  //   haveAuth,
  // }
  async create(info: User) {
    const user = await this.userModule.create({ ...info });
    return user.save();
  }

  // 身份验证
  async validataUserInfo({ account_name, account_password }) {
    const user = await this.userModule.findOne({
      account_name,
      account_password,
    });
    if (user) {
      return user;
    }
  }

  // 登录
  async login({ account_name, account_password }) {
    const user = await this.userModule.findOne({ account_name }).lean().exec();
    switch (true) {
      case !user:
        throw new ForbiddenException('登录失败，请检查您的用户名和密码');
        break;
      case user.account_password !== account_password:
        throw new ForbiddenException('登录失败，请检查您的用户名和密码');
        break;
      default:
        const access_token = this.jwtService.sign({ user });
        return { user, access_token };
    }
  }

  // 查找当前最新用户
  async findLastUser(): Promise<User[]> {
    const user = await this.userModule.find().sort({ account_id: -1 }).limit(1);
    return user;
  }
  // 根据用户名查用户信息
  async findOneByUsername(account_name: string): Promise<User> {
    return this.userModule.findOne({ account_name }).exec();
  }

  async getList(): Promise<User[]> {
    const user = await this.userModule.find();
    return user;
  }
}
