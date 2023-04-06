/**
 * @service文件
 * 用于对数据库的操作：如'增','删','改','查'等
 */
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Example, ExampleDocument } from './schema/example.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  constructor(
    // 使用@InjectModel()装饰器来把Example注入到UsersService中。
    @InjectModel('Example')
    private ExampleModel: Model<ExampleDocument>,
  ) {}

  async create(id: string, auth: boolean): Promise<Example> {
    const createNotice = new this.ExampleModel({
      id,
      auth,
    });
    return createNotice.save();
  }

  async findAll(page: number, size: number): Promise<Example[]> {
    return this.ExampleModel.find()
      .sort({ createdAt: -1 })
      .skip(size * (page - 1))
      .limit(size)
      .exec();
  }
}