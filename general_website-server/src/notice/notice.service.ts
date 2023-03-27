import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notice, NoticeDocument } from './schema/notice.schema';

@Injectable()
export class NoticeService {
  constructor(
    @InjectModel('Notice')
    private NoticeModel: Model<NoticeDocument>,
  ) {}

  async create(title: string, type: string): Promise<Notice> {
    const createNotice = new this.NoticeModel({
      title,
      type,
    });
    return createNotice.save();
  }

  async findAll(size: number, page: number): Promise<Notice[]> {
    return this.NoticeModel.find()
      .sort({ createdAt: -1 })
      .skip(size * (page - 1))
      .limit(size)
      .exec();
  }
}
