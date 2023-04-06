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

  async create(title: string, type: string, content: string): Promise<Notice> {
    const createNotice = new this.NoticeModel({
      title,
      type,
      content,
    });
    return createNotice.save();
  }

  async findAll({ size, page }, params): Promise<Notice[]> {
    return this.NoticeModel.find({
      type: new RegExp(params.type),
      title: new RegExp(params.title),
    })
      .sort({ createdAt: -1 })
      .skip(size * (page - 1))
      .limit(size)
      .exec();
  }

  async total(params): Promise<Notice[]> {
    return this.NoticeModel.find({
      type: new RegExp(params.type),
      title: new RegExp(params.title),
    });
  }

  async update(params): Promise<Notice[]> {
    return this.NoticeModel.findByIdAndUpdate(params._id, params);
  }
}
