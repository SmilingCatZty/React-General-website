import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ConsultDocument, Consult } from './schema/consult.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ConsultService {
  constructor(
    @InjectModel('News')
    private newsModel: Model<ConsultDocument>,
  ) {}

  async create(title: string, background: string): Promise<Consult> {
    const createNews = new this.newsModel({
      title,
      background,
    });
    return createNews.save();
  }

  async list(): Promise<Consult[]> {
    const news = this.newsModel.find();
    return news;
  }
}
